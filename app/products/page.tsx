import Link from 'next/link';
import type { Metadata } from 'next';
import {
  Bell,
  ChartNoAxesCombined,
  Cloud,
  CreditCard,
  Database,
  KeyRound,
  MessageSquare,
  RefreshCw,
  ShieldCheck,
  Sparkles,
  Zap,
} from 'lucide-react';
import { PageHero, Section, Label, CTA } from '@/components/shared';
import { ProductConcept } from '@/components/product-concept';
import { CommissionProConcept } from '@/components/commission-pro-concept';
import { industries } from '@/lib/content';

export const metadata: Metadata = {
  title: 'SaaS Products — Subscription Platforms',
  description:
    'Explore Scalidor’s flagship SaaS subscription platforms: Real Estate Technology and Commission Pro for the chemical industry, backed by intelligent cloud engineering.',
  alternates: { canonical: '/products' },
};

export default function Products() {
  return (
    <>
      <PageHero
        label="SCALIDOR SAAS PRODUCTS"
        title="Industry software."
        accent="Subscription scale."
        description="We build and operate industry-defining SaaS subscription platforms designed for long-term operational value. Our cloud software replaces disconnected tools, manual spreadsheets, and fragile workflows with unified systems."
      />

      {/* Section 02: Real Estate SaaS Platform */}
      <Section number="02" id="real-estate">
        <div className="product-detail">
          <div>
            <Label>FLAGSHIP SAAS / 01</Label>
            <div className="status-row">
              <span className="status mono">
                <span className="status-dot-pulse" aria-hidden="true" />
                IN DEVELOPMENT · EARLY ACCESS
              </span>
              <span className="subscription-badge mono">
                SAAS SUBSCRIPTION
              </span>
            </div>
            <h2>
              Real Estate
              <br />
              Technology.
            </h2>
            <p>
              Real-estate operations involve brokers, property managers, tenants, listing websites, and transaction records spread across too many disconnected tools.
            </p>
            <p>
              We are developing an integrated cloud SaaS platform around the real workflows of modern real estate: from lead acquisition and listing syndication to tenant portals, lease tracking, and automated property operations.
            </p>
            <div className="product-cta-group">
              <Link href="/contact?interest=real-estate-saas" className="button">
                Request early access & pricing
              </Link>
              <span className="sub-model-note mono">Per-seat & agency tiers</span>
            </div>
          </div>
          <ProductConcept />
        </div>
        <ul className="capability-list">
          {[
            'Property & portfolio operations',
            'Real-estate specialized CRM',
            'Dynamic listing websites',
            'Tenant & owner portals',
            'Automated lead management',
            'Team & agent collaboration',
            'Lease & transaction tracking',
            'Operational analytics & automation',
          ].map(t => (
            <li key={t}>
              <span className="mono" style={{ color: 'var(--blue)' }}>+</span>
              {t}
            </li>
          ))}
        </ul>
      </Section>

      {/* Section 03: Commission Pro (Chemical Industry SaaS) */}
      <Section number="03" id="commission-pro">
        <div className="product-detail">
          <div>
            <Label>CHEMICAL INDUSTRY SAAS / 02</Label>
            <div className="status-row">
              <span className="status status-chemical mono">
                <span className="status-dot-pulse" aria-hidden="true" />
                FLAGSHIP SAAS · CHEMICAL SECTOR
              </span>
              <span className="subscription-badge mono">
                PLANT CLOUD LICENSE
              </span>
            </div>
            <h2>
              Commission Pro.
              <br />
              <span className="product-subtitle" style={{ fontSize: '1.35rem', letterSpacing: '-0.01em', marginTop: '6px' }}>
                Chemical Plant Operations.
              </span>
            </h2>
            <p>
              Chemical manufacturing plants require rigorous commissioning stages, verifiable safety interlocks, and strict environmental compliance before going live.
            </p>
            <p>
              Commission Pro is our specialized cloud SaaS platform purpose-built for the chemical industry. It replaces scattered spreadsheets and manual sign-offs with digitized commissioning workflows, feedstock calibration, hydrostatic testing, and automated audit-ready safety reports.
            </p>
            <div className="product-cta-group">
              <Link href="/contact?interest=commission-pro" className="button">
                Request plant demo & subscription
              </Link>
              <span className="sub-model-note mono">Facility subscription · Enterprise SLA</span>
            </div>
          </div>
          <CommissionProConcept />
        </div>
        <ul className="capability-list">
          {[
            'Plant commissioning digital workflows',
            'Chemical process verification',
            'Automated safety interlock & ESD logs',
            'OSHA, EPA & ISO audit compliance',
            'Chemical feedstock & batch readiness',
            'Equipment & sensor calibration logs',
            'Multi-facility operations dashboard',
            'Instant regulatory audit export',
          ].map(t => (
            <li key={t}>
              <span className="mono" style={{ color: 'var(--blue)' }}>+</span>
              {t}
            </li>
          ))}
        </ul>
      </Section>

      {/* Section 04: SaaS Subscription Value Strip */}
      <Section number="04">
        <div className="section-heading">
          <div>
            <Label>THE SUBSCRIPTION MODEL</Label>
            <h2>
              Software built to grow
              <br />
              with your operation.
            </h2>
          </div>
          <p>
            Our SaaS subscription architecture guarantees zero infrastructure maintenance, continuous security updates, and predictable operational costs.
          </p>
        </div>

        <div className="subscription-feature-grid">
          <div className="subscription-feature-item">
            <RefreshCw size={24} />
            <h3>Continuous Updates</h3>
            <p>
              Seamless cloud deployment ensures your team always has the newest compliance rules, integrations, and performance improvements without costly migrations.
            </p>
          </div>
          <div className="subscription-feature-item">
            <Cloud size={24} />
            <h3>Multi-Tenant Cloud</h3>
            <p>
              Engineered with secure multi-tenant architecture, isolated workspace data, encrypted backups, and high-availability global infrastructure.
            </p>
          </div>
          <div className="subscription-feature-item">
            <CreditCard size={24} />
            <h3>Predictable ROI</h3>
            <p>
              Clear monthly and annual subscription plans scaled to your team or facility, eliminating unexpected hardware or maintenance overhead.
            </p>
          </div>
          <div className="subscription-feature-item">
            <Zap size={24} />
            <h3>Enterprise Onboarding</h3>
            <p>
              Comprehensive setup assistance, data migration tooling, custom integration support, and dedicated SLA uptime guarantees.
            </p>
          </div>
        </div>
      </Section>

      {/* Section 05: Intelligent Business Systems (R&D) */}
      <Section number="05" id="intelligent-systems" dark>
        <div className="product-detail">
          <div>
            <Label>INTELLIGENT SYSTEMS / 03</Label>
            <div className="status-row">
              <span className="status mono">
                RESEARCH & DEVELOPMENT
              </span>
            </div>
            <h2>
              Intelligent
              <br />
              Business Systems.
            </h2>
            <p>
              Business workflows become more useful when information can lead directly to action. We are researching software that connects business processes with AI and automation.
            </p>
            <p>
              Potential applications include document processing, intelligent search, AI assistants, customer-service automation, analytics, and operational recommendations.
            </p>
            <Link href="/contact?interest=product" className="button button-light">
              Talk about an opportunity
            </Link>
          </div>
          <div className="ai-capability-map">
            <div className="map-core">
              <Sparkles size={28} />
              <span>
                INTELLIGENCE
                <br />
                WITH PURPOSE
              </span>
            </div>
            <div className="map-grid">
              {[
                'Understand context',
                'Process documents',
                'Connect information',
                'Automate workflows',
                'Recommend actions',
                'Keep people in control',
              ].map(t => (
                <div key={t}>{t}</div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Section 06: Long-Term Direction */}
      <Section number="06" id="future-industries">
        <Label>LONG-TERM DIRECTION</Label>
        <div className="section-heading">
          <h2>
            One foundation.
            <br />
            Many industries.
          </h2>
          <p>
            We enter new markets when there is a strong problem, a meaningful opportunity, and a product that can create lasting value.
          </p>
        </div>
        <div className="industry-tags future-grid">
          {industries.map((t, i) => (
            <Link href="/contact?interest=product" key={t}>
              <span className="mono">{String(i + 1).padStart(2, '0')}</span>
              {t}
            </Link>
          ))}
        </div>
      </Section>

      {/* Section 07: Product Philosophy */}
      <Section number="07" dark>
        <Label>OUR PRODUCT PHILOSOPHY</Label>
        <h2>
          A meaningful problem
          <br />
          comes first.
        </h2>
        <div className="product-question-grid">
          {[
            'Is the problem meaningful?',
            'Do enough people experience it?',
            'Can technology solve it better?',
            'Will people pay for the solution?',
            'Can it create recurring value?',
            'Can it scale beyond a few customers?',
          ].map((q, i) => (
            <div key={q}>
              <span className="mono">0{i + 1} /</span>
              <h3>{q}</h3>
            </div>
          ))}
        </div>
      </Section>

      {/* Section 08: Shared Technology */}
      <Section number="08">
        <div className="section-heading">
          <div>
            <Label>SHARED TECHNOLOGY</Label>
            <h2>
              Products should
              <br />
              strengthen each other.
            </h2>
          </div>
          <p>
            Reusable capabilities help future products grow more efficiently, while leaving room for each industry’s requirements.
          </p>
        </div>
        <div className="shared-system-grid">
          {[
            [KeyRound, 'Identity'],
            [CreditCard, 'Billing & Subscriptions'],
            [Database, 'Data infrastructure'],
            [Bell, 'Notifications'],
            [ChartNoAxesCombined, 'Analytics'],
            [Sparkles, 'AI & automation'],
            [MessageSquare, 'Communications'],
            [ShieldCheck, 'Security & Compliance'],
          ].map(([Icon, title]) => {
            const I = Icon as typeof KeyRound;
            return (
              <div key={title as string} className="bracket">
                <I size={23} strokeWidth={1.5} />
                <span>{title as string}</span>
              </div>
            );
          })}
        </div>
      </Section>

      <CTA number="09" />
    </>
  );
}

