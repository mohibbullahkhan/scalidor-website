import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { z } from 'zod';
import { createHash } from 'node:crypto';
import { services } from '@/lib/content';

export const runtime = 'nodejs';
export const maxDuration = 20;
const interestValues = [...services.map(s => s.slug), 'partnership', 'product', 'other'];
const stages = ['Idea / Discovery', 'MVP', 'Existing Product', 'Scaling Product', 'Enterprise System', 'Not Sure'];
const cleanText = (max: number) => z.string().trim().max(max).refine(s => !/[\r\n\u0000]/.test(s));
const schema = z.object({
  name: cleanText(100).refine(s => s.length >= 2),
  email: z.email().max(254),
  company: cleanText(120).default(''),
  phone: cleanText(40).default(''),
  interest: z.string().refine(v => interestValues.includes(v)),
  stage: z.string().refine(v => stages.includes(v)),
  budget: cleanText(80).default(''),
  message: z.string().trim().min(20).max(5000).refine(s => !s.includes('\u0000')),
  consent: z.literal('yes'),
  website: z.string().max(200).default(''),
}).strict();

// Per-process abuse control. Add distributed limits at your ingress for multi-instance deployments.
const buckets = new Map<string, { count: number; reset: number }>();
function limited(key: string, maximum: number, windowMs: number) {
  const now = Date.now();
  if (buckets.size > 5000) for (const [k, b] of buckets) if (b.reset <= now) buckets.delete(k);
  if (buckets.size > 6000 && !buckets.has(key)) return true;
  const previous = buckets.get(key);
  const bucket = previous && previous.reset > now ? previous : { count: 0, reset: now + windowMs };
  bucket.count++; buckets.set(key, bucket); return bucket.count > maximum;
}
function reply(message: string, status: number) { return NextResponse.json({ message }, { status, headers: { 'Cache-Control': 'no-store', ...(status === 429 ? { 'Retry-After': '600' } : {}) } }); }
async function readLimitedBody(request: Request) {
  if (Number(request.headers.get('content-length') || 0) > 16000) throw new Error('body-too-large');
  const reader = request.body?.getReader(); if (!reader) throw new Error('empty-body');
  const chunks: Uint8Array[] = []; let total = 0;
  try { while (true) { const { value, done } = await reader.read(); if (done) break; total += value.byteLength; if (total > 16000) { await reader.cancel(); throw new Error('body-too-large'); } chunks.push(value); } }
  finally { reader.releaseLock(); }
  return JSON.parse(Buffer.concat(chunks).toString('utf8'));
}

export async function POST(request: Request) {
  const origin = request.headers.get('origin');
  const allowed = new Set<string>();
  try { allowed.add(new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000').origin); }
  catch { return reply('Inquiry delivery is temporarily unavailable.', 503); }
  if (!origin || !allowed.has(origin)) return reply('Please submit your inquiry through the contact form.', 403);
  if (!request.headers.get('content-type')?.startsWith('application/json')) return reply('Please use the contact form to send your inquiry.', 415);
  if (limited('all-requests', 120, 60000)) return reply('Please wait a few minutes before trying again.', 429);
  let raw: unknown;
  try { raw = await readLimitedBody(request); } catch (error) { return reply(error instanceof Error && error.message === 'body-too-large' ? 'Your inquiry is too long. Please shorten it.' : 'We couldn’t read your inquiry. Please check the form.', error instanceof Error && error.message === 'body-too-large' ? 413 : 400); }
  const result = schema.safeParse(raw);
  if (!result.success) return reply('Please check all required fields and include at least 20 characters about your project.', 400);
  const data = result.data;
  if (data.website) return reply('Please check the inquiry and try again.', 400);
  const key = createHash('sha256').update(data.email.toLowerCase()).digest('hex');
  if (limited(key, 3, 600000)) return reply('You’ve sent several inquiries. Please wait 10 minutes before trying again.', 429);
  const { SMTP_HOST, SMTP_USER, SMTP_PASS, EMAIL_FROM, CONTACT_TO } = process.env;
  const port = Number(process.env.SMTP_PORT || 587);
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS || !EMAIL_FROM || !CONTACT_TO || !Number.isInteger(port) || port < 1 || port > 65535) return reply('Inquiry delivery is temporarily unavailable. You can download a copy of your message and try again later.', 503);
  const serviceName = services.find(s => s.slug === data.interest)?.name || ({ partnership: 'Partnership', product: 'Scalidor Product', other: 'Other' } as Record<string, string>)[data.interest];
  const transporter = nodemailer.createTransport({ host: SMTP_HOST, port, secure: process.env.SMTP_SECURE === 'true', requireTLS: process.env.SMTP_SECURE !== 'true', auth: { user: SMTP_USER, pass: SMTP_PASS }, connectionTimeout: 7000, greetingTimeout: 7000, socketTimeout: 10000 });
  try {
    const sent = await transporter.sendMail({ from: EMAIL_FROM, to: CONTACT_TO, replyTo: { name: data.name, address: data.email }, subject: `Scalidor inquiry — ${serviceName}`, text: [
      `Name: ${data.name}`, `Email: ${data.email}`, `Company: ${data.company || 'Not provided'}`, `Phone: ${data.phone || 'Not provided'}`, `Interest: ${serviceName}`, `Stage: ${data.stage}`, `Budget: ${data.budget || 'Not provided'}`, '', 'PROJECT DETAILS', data.message, '', 'The sender consented to being contacted about this inquiry.',
    ].join('\n'), disableFileAccess: true, disableUrlAccess: true });
    if (!sent.accepted?.length) throw new Error('not-accepted');
    return reply('Your inquiry has been sent.', 200);
  } catch {
    // Do not log message contents, credentials, or contact details.
    console.error('Contact inquiry delivery failed');
    return reply('We couldn’t confirm delivery of your inquiry. Please download a copy or try again later.', 502);
  } finally { transporter.close(); }
}
