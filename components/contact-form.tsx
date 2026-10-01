'use client';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import type { FormEvent } from 'react';
import { services } from '@/lib/content';

type Notice = { kind: 'success' | 'error'; text: string; downloadable?: boolean };
export function ContactForm() {
  const [interest, setInterest] = useState('');
  const [busy, setBusy] = useState(false);
  const [notice, setNotice] = useState<Notice | null>(null);
  const form = useRef<HTMLFormElement>(null);
  const noticeRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const service = params.get('service');
    const interestParam = params.get('interest');
    if (services.some(s => s.slug === service)) setInterest(service!);
    else if (interestParam === 'real-estate-saas' || interestParam === 'real-estate') setInterest('real-estate-saas');
    else if (interestParam === 'commission-pro') setInterest('commission-pro');
    else if (interestParam === 'saas-subscription' || interestParam === 'subscription') setInterest('saas-subscription');
    else if (interestParam === 'product') setInterest('product');
  }, []);
  useEffect(() => { if (notice) noticeRef.current?.focus(); }, [notice]);
  function downloadDraft() {
    if (!form.current) return;
    const fields = new FormData(form.current);
    const labels: Record<string, string> = { name: 'Name', email: 'Email', company: 'Company', phone: 'Phone', interest: 'Interest', stage: 'Project stage', budget: 'Budget', message: 'Message' };
    const text = ['SCALIDOR PROJECT INQUIRY', 'This is a local copy. It has not been delivered.', '', ...Object.entries(labels).map(([key, label]) => `${label}: ${fields.get(key) || 'Not provided'}`)].join('\n\n');
    const url = URL.createObjectURL(new Blob([text], { type: 'text/plain;charset=utf-8' }));
    const a = document.createElement('a'); a.href = url; a.download = 'scalidor-project-inquiry.txt'; a.click(); URL.revokeObjectURL(url);
  }
  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault(); if (busy) return; setBusy(true); setNotice(null);
    const fields = new FormData(e.currentTarget);
    const payload = Object.fromEntries(fields.entries());
    const abort = new AbortController(); const timeout = window.setTimeout(() => abort.abort(), 15000);
    try {
      const response = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload), signal: abort.signal });
      const data: { message?: string } = await response.json();
      if (!response.ok) { setNotice({ kind: 'error', text: data.message || 'Your inquiry couldn’t be delivered. Please try again.', downloadable: response.status >= 500 }); return; }
      form.current?.reset(); setInterest(''); setNotice({ kind: 'success', text: 'Thanks for reaching out. Your inquiry has been sent. We’ll review it and get back to you as soon as possible.' });
    } catch { setNotice({ kind: 'error', text: 'We couldn’t confirm delivery. Download a copy of your inquiry or try again later.', downloadable: true }); }
    finally { window.clearTimeout(timeout); setBusy(false); }
  }
  return <form ref={form} className="contact-form" onSubmit={submit}>
    <h2>Tell us what you’re working on.</h2>
    {notice && <div className={`form-message ${notice.kind}`} role={notice.kind === 'error' ? 'alert' : 'status'} ref={noticeRef} tabIndex={-1}>{notice.text}{notice.downloadable && <div style={{ marginTop: 10 }}><button type="button" className="text-link" onClick={downloadDraft} style={{ background: 'none', borderTop: 0, borderLeft: 0, borderRight: 0, color: 'inherit' }}>Download inquiry copy</button></div>}</div>}
    <div className="honeypot" aria-hidden="true"><label htmlFor="website">Leave this field empty</label><input type="text" id="website" name="website" tabIndex={-1} autoComplete="off" /></div>
    <div className="form-grid">
      <div className="field"><label htmlFor="name">Full name</label><input id="name" name="name" required maxLength={100} autoComplete="name" placeholder="Your full name" /></div>
      <div className="field"><label htmlFor="email">Work email</label><input id="email" name="email" type="email" required maxLength={254} autoComplete="email" placeholder="you@company.com" /></div>
      <div className="field"><label htmlFor="company">Company <span>(optional)</span></label><input id="company" name="company" maxLength={120} autoComplete="organization" placeholder="Company name" /></div>
      <div className="field"><label htmlFor="phone">Phone <span>(optional)</span></label><input id="phone" name="phone" type="tel" maxLength={40} autoComplete="tel" placeholder="Phone number" /></div>
      <div className="field full">
        <label htmlFor="interest">What are you interested in?</label>
        <select id="interest" name="interest" value={interest} onChange={e => setInterest(e.target.value)} required>
          <option value="" disabled>Select a product or service</option>
          <optgroup label="SaaS Products (Subscription)">
            <option value="real-estate-saas">Real Estate SaaS Platform</option>
            <option value="commission-pro">Commission Pro (Chemical Industry)</option>
            <option value="saas-subscription">General SaaS Subscription</option>
          </optgroup>
          <optgroup label="Engineering Services">
            {services.map(s => <option value={s.slug} key={s.slug}>{s.name}</option>)}
          </optgroup>
          <optgroup label="Other Inquiries">
            <option value="partnership">Partnership</option>
            <option value="product">Scalidor product inquiry</option>
            <option value="other">Other</option>
          </optgroup>
        </select>
      </div>
      <div className="field"><label htmlFor="stage">Project stage</label><select id="stage" name="stage" required defaultValue=""><option value="" disabled>Select a stage</option>{['Idea / Discovery', 'MVP', 'Existing Product', 'Scaling Product', 'Enterprise System', 'Not Sure'].map(t => <option key={t}>{t}</option>)}</select></div>
      <div className="field"><label htmlFor="budget">Estimated budget <span>(optional)</span></label><input id="budget" name="budget" maxLength={80} placeholder="Amount and currency, if known" /></div>
      <div className="field full"><label htmlFor="message">About your project</label><textarea id="message" name="message" required minLength={20} maxLength={5000} placeholder="Tell us about the problem, product, or opportunity. What would a good outcome look like?" /></div>
    </div>
    <label className="form-consent"><input type="checkbox" name="consent" value="yes" required /><span>I agree that Scalidor may use this information to respond to my inquiry, as described in the <Link href="/privacy">privacy policy</Link>.</span></label>
    <div className="form-submit"><button type="submit" className="button" disabled={busy}>{busy ? 'Sending inquiry…' : 'Send inquiry'}</button><span className="mono">A MEANINGFUL PROBLEM IS A GOOD START.</span></div>
  </form>;
}
