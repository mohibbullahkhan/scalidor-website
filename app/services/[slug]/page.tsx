import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { Check } from 'lucide-react';
import { services, workProcess } from '@/lib/content';
import { Section, Label, CTA } from '@/components/shared';
import { ServiceIcon } from '@/components/icon';
export const dynamicParams = false;
export function generateStaticParams() { return services.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params; const service = services.find(s => s.slug === slug);
  if (!service) return { title: 'Service not found' };
  return { title: service.name, description: service.description, alternates: { canonical: `/services/${service.slug}` } };
}
export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const service = services.find(s => s.slug === slug); if (!service) notFound();
  return <><Section number="01" className="page-hero service-detail-hero"><div className="breadcrumb mono"><Link href="/">HOME</Link><span>/</span><Link href="/services">SERVICES</Link><span>/</span><span>{service.name.toUpperCase()}</span></div><Label>{service.name.toUpperCase()}</Label><h1>{service.title}</h1><p className="lede">{service.description}</p><div className="detail-icon"><ServiceIcon name={service.icon} size={50} /></div></Section>
    <Section number="02"><div className="two-column"><div><Label>THE APPROACH</Label><h2>Purpose first.<br />Engineering follows.</h2></div><div className="body-copy"><p>{service.intro}</p><Link href={`/contact?service=${service.slug}`} className="button" style={{ marginTop: 26 }}>Discuss your project</Link></div></div></Section>
    <Section number="03"><Label>WHAT WE CAN BUILD</Label><h2>Connected capabilities.</h2><ul className="capability-list">{service.capabilities.map(t => <li key={t}><Check size={17} />{t}</li>)}</ul></Section>
    <Section number="04"><div className="two-column"><div className="suitable-block bracket"><Label>SUITABLE FOR</Label><h3>Built around your context.</h3><p>{service.audience}</p></div><div className="suitable-block bracket"><Label>THE OUTCOME</Label><h3>A useful next step.</h3><p>{service.outcome}</p><Link href={`/contact?service=${service.slug}`} className="text-link">Start a project</Link></div></div></Section>
    <Section number="05" dark><div className="section-heading"><div><Label>HOW WE WORK</Label><h2>From discovery<br />to evolution.</h2></div></div><div className="process-grid">{workProcess.map(([name, text], i) => <div className="process-step" key={name}><span className="mono">0{i + 1} /</span><h3>{name}</h3><p>{text}</p></div>)}</div></Section><CTA number="06" /></>;
}
