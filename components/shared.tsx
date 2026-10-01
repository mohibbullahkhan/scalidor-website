import Link from 'next/link';
import type { ReactNode } from 'react';
import { Brand } from './navigation';
import { services } from '@/lib/content';

export function Section({ number, dark = false, className = '', children, id }: { number: string; dark?: boolean; className?: string; children: ReactNode; id?: string }) {
  return <section id={id} className={`rail-section ${dark ? 'dark' : ''} ${className}`}><div className="section-number mono" aria-hidden="true">{number}</div><div className="section-content">{children}</div><div className="section-tail" /></section>;
}
export function Label({ children }: { children: ReactNode }) { return <div className="eyebrow mono"><span />{children}</div>; }
export function CTA({ number = '09' }: { number?: string }) {
  return <Section number={number} className="final-cta"><div className="cta-layout"><div><Label>THE NEXT CHAPTER</Label><h2>Build what<br /><span className="mono-accent">comes next.</span></h2></div><div className="cta-copy"><p>Great software begins with a meaningful problem and the right system to solve it.</p><Link href="/contact" className="button">Start a project</Link><span className="mono cta-caption">LET’S BUILD SOMETHING DESIGNED TO SCALE.</span></div></div></Section>;
}
export function Footer() {
  return <footer className="site-footer dark"><div className="footer-top"><div><Brand inverse /><p>Technology built to scale.<br />Products. AI. Software. Automation.</p></div><div><h3 className="mono">COMPANY</h3><Link href="/about">About</Link><Link href="/products">Products</Link><Link href="/contact">Contact</Link></div><div><h3 className="mono">CAPABILITIES</h3>{services.slice(0, 4).map(s => <Link href={`/services/${s.slug}`} key={s.slug}>{s.name}</Link>)}</div><div><h3 className="mono">MORE</h3><Link href="/services">All services</Link><Link href="/privacy">Privacy policy</Link><Link href="/terms">Terms of use</Link><Link href="/cookies">Cookie policy</Link></div></div><div className="footer-bottom mono"><span>© {new Date().getFullYear()} SCALIDOR LLC</span><span>BUILT TO SCALE.</span><a href="#top">BACK TO TOP ↑</a></div></footer>;
}
export function PageHero({ label, title, accent, description, number = '01' }: { label: string; title: string; accent?: string; description: string; number?: string }) {
  return <Section number={number} className="page-hero"><Label>{label}</Label><h1>{title}{accent && <><br /><span className="mono-accent">{accent}</span></>}</h1><p className="lede">{description}</p></Section>;
}
