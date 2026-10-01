'use client';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { services } from '@/lib/content';

export function Brand({ inverse = false }: { inverse?: boolean }) {
  return (
    <Link href="/" className={`brand ${inverse ? 'inverse' : ''}`} aria-label="Scalidor home">
      <span className="brand-mark" aria-hidden="true">
        <Image
          src={inverse ? '/logo-white.png' : '/logo.png'}
          alt="Scalidor"
          width={28}
          height={28}
          className="brand-logo-img"
          priority
        />
      </span>
      <span>scalidor<span className="brand-period">.</span></span>
    </Link>
  );
}

export function Navigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const root = useRef<HTMLElement>(null);
  const mobileButton = useRef<HTMLButtonElement>(null);
  const details = useRef<HTMLDetailsElement>(null);
  useEffect(() => { setOpen(false); if (details.current) details.current.open = false; }, [pathname]);
  useEffect(() => {
    const close = (e: KeyboardEvent) => { if (e.key === 'Escape') { if (open) { setOpen(false); mobileButton.current?.focus(); } if (details.current?.open) { details.current.open = false; details.current.querySelector('summary')?.focus(); } } };
    const outside = (e: PointerEvent) => { if (root.current && !root.current.contains(e.target as Node)) { setOpen(false); if (details.current) details.current.open = false; } };
    document.addEventListener('keydown', close); document.addEventListener('pointerdown', outside);
    return () => { document.removeEventListener('keydown', close); document.removeEventListener('pointerdown', outside); };
  }, [open]);
  return <header className="site-header" ref={root}>
    <div className="header-gutter"><span className="mono">S/</span></div>
    <div className="header-inner"><Brand />
      <nav className={`main-nav ${open ? 'is-open' : ''}`} id="main-navigation" aria-label="Main navigation">
        <Link href="/" aria-current={pathname === '/' ? 'page' : undefined}>Home</Link>
        <Link href="/about" aria-current={pathname === '/about' ? 'page' : undefined}>About</Link>
        <details className="service-menu" ref={details}><summary className={pathname.startsWith('/services') ? 'active' : ''}>Services <ChevronDown size={12} aria-hidden="true" /></summary>
          <div className="service-dropdown"><span className="mono dropdown-label">BUILD WITH SCALIDOR</span><Link href="/services">All services</Link>{services.map(s => <Link key={s.slug} href={`/services/${s.slug}`}>{s.name}</Link>)}</div>
        </details>
        <Link href="/products" aria-current={pathname === '/products' ? 'page' : undefined}>Products</Link>
        <Link href="/contact" aria-current={pathname === '/contact' ? 'page' : undefined}>Contact</Link>
      </nav>
      <Link href="/contact" className="button button-small header-cta">Start a project</Link>
      <button ref={mobileButton} className="mobile-toggle" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="main-navigation" aria-label={open ? 'Close navigation' : 'Open navigation'}>{open ? <X /> : <Menu />}</button>
    </div><div className="header-tail" />
  </header>;
}
