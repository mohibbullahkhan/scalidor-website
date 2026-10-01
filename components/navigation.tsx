'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import {
  ArrowRight,
  Boxes,
  Building2,
  ChevronDown,
  Cpu,
  FlaskConical,
  Globe,
  Layers3,
  Menu,
  PenTool,
  Smartphone,
  Sparkles,
  X,
} from 'lucide-react';

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
      <span>
        scalidor<span className="brand-period">.</span>
      </span>
    </Link>
  );
}

const productSubmenuItems = [
  {
    name: 'REAL ESTATE SAAS',
    href: '/products#real-estate',
    icon: Building2,
  },
  {
    name: 'COMMISSION PRO',
    href: '/products#commission-pro',
    icon: FlaskConical,
  },
  {
    name: 'INTELLIGENT SYSTEMS',
    href: '/products#intelligent-systems',
    icon: Sparkles,
  },
  {
    name: 'FUTURE PLATFORMS',
    href: '/products#future-industries',
    icon: Layers3,
  },
];

const serviceSubmenuItems = [
  {
    name: 'SAAS DEVELOPMENT',
    href: '/services/saas-development',
    icon: Layers3,
  },
  {
    name: 'AI & AUTOMATION',
    href: '/services/ai-automation',
    icon: Sparkles,
  },
  {
    name: 'CUSTOM SOFTWARE',
    href: '/services/custom-software',
    icon: Boxes,
  },
  {
    name: 'PRODUCT ENGINEERING',
    href: '/services/product-engineering',
    icon: Cpu,
  },
  {
    name: 'WEB APPLICATIONS',
    href: '/services/web-applications',
    icon: Globe,
  },
  {
    name: 'MOBILE APPLICATIONS',
    href: '/services/mobile-applications',
    icon: Smartphone,
  },
  {
    name: 'UI/UX DESIGN',
    href: '/services/ui-ux-design',
    icon: PenTool,
  },
  {
    name: 'ALL CAPABILITIES',
    href: '/services',
    icon: ArrowRight,
  },
];

export function Navigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const root = useRef<HTMLElement>(null);
  const mobileButton = useRef<HTMLButtonElement>(null);
  const productDetails = useRef<HTMLDetailsElement>(null);
  const serviceDetails = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    setOpen(false);
    if (productDetails.current) productDetails.current.open = false;
    if (serviceDetails.current) serviceDetails.current.open = false;
  }, [pathname]);

  useEffect(() => {
    const close = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (open) {
          setOpen(false);
          mobileButton.current?.focus();
        }
        if (productDetails.current?.open) {
          productDetails.current.open = false;
          productDetails.current.querySelector('summary')?.focus();
        }
        if (serviceDetails.current?.open) {
          serviceDetails.current.open = false;
          serviceDetails.current.querySelector('summary')?.focus();
        }
      }
    };
    const outside = (e: PointerEvent) => {
      if (root.current && !root.current.contains(e.target as Node)) {
        setOpen(false);
        if (productDetails.current) productDetails.current.open = false;
        if (serviceDetails.current) serviceDetails.current.open = false;
      }
    };
    document.addEventListener('keydown', close);
    document.addEventListener('pointerdown', outside);
    return () => {
      document.removeEventListener('keydown', close);
      document.removeEventListener('pointerdown', outside);
    };
  }, [open]);

  const handleProductToggle = () => {
    if (productDetails.current?.open && serviceDetails.current?.open) {
      serviceDetails.current.open = false;
    }
  };

  const handleServiceToggle = () => {
    if (serviceDetails.current?.open && productDetails.current?.open) {
      productDetails.current.open = false;
    }
  };

  const closeDropdowns = () => {
    if (productDetails.current) productDetails.current.open = false;
    if (serviceDetails.current) serviceDetails.current.open = false;
    setOpen(false);
  };

  return (
    <header className="site-header" ref={root}>
      <div className="header-gutter">
        <span className="mono">S/</span>
      </div>
      <div className="header-inner">
        <Brand />
        <nav
          className={`main-nav ${open ? 'is-open' : ''}`}
          id="main-navigation"
          aria-label="Main navigation"
        >
          <Link href="/" aria-current={pathname === '/' ? 'page' : undefined}>
            Home
          </Link>

          {/* Products Submenu */}
          <details
            className="nav-dropdown-menu products-menu"
            ref={productDetails}
            onToggle={handleProductToggle}
          >
            <summary className={pathname.startsWith('/products') ? 'active' : ''}>
              Products <ChevronDown size={12} aria-hidden="true" />
            </summary>
            <div className="nav-submenu-card">
              <div className="submenu-header">
                <span className="mono submenu-title">PRODUCTS OVERVIEW</span>
                <Link
                  href="/products"
                  className="submenu-view-all mono"
                  onClick={closeDropdowns}
                >
                  VIEW ALL →
                </Link>
              </div>
              <div className="submenu-grid">
                {productSubmenuItems.map(item => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="submenu-item"
                      onClick={closeDropdowns}
                    >
                      <span className="submenu-item-icon">
                        <Icon size={18} strokeWidth={1.75} />
                      </span>
                      <span className="submenu-item-text">{item.name}</span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </details>

          {/* Services Submenu */}
          <details
            className="nav-dropdown-menu services-menu"
            ref={serviceDetails}
            onToggle={handleServiceToggle}
          >
            <summary className={pathname.startsWith('/services') ? 'active' : ''}>
              Services <ChevronDown size={12} aria-hidden="true" />
            </summary>
            <div className="nav-submenu-card services-submenu-card">
              <div className="submenu-header">
                <span className="mono submenu-title">SOLUTIONS OVERVIEW</span>
                <Link
                  href="/services"
                  className="submenu-view-all mono"
                  onClick={closeDropdowns}
                >
                  VIEW ALL →
                </Link>
              </div>
              <div className="submenu-grid">
                {serviceSubmenuItems.map(item => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="submenu-item"
                      onClick={closeDropdowns}
                    >
                      <span className="submenu-item-icon">
                        <Icon size={18} strokeWidth={1.75} />
                      </span>
                      <span className="submenu-item-text">{item.name}</span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </details>

          <Link href="/about" aria-current={pathname === '/about' ? 'page' : undefined}>
            About
          </Link>
          <Link href="/contact" aria-current={pathname === '/contact' ? 'page' : undefined}>
            Contact
          </Link>
        </nav>

        <Link href="/products" className="button button-small header-cta">
          Explore SaaS
        </Link>
        <button
          ref={mobileButton}
          className="mobile-toggle"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="main-navigation"
          aria-label={open ? 'Close navigation' : 'Open navigation'}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      <div className="header-tail" />
    </header>
  );
}
