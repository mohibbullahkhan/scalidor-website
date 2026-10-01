import Link from 'next/link';
import Image from 'next/image';
import { Check, Layers3, Sparkles } from 'lucide-react';
import { Section, Label, CTA } from '@/components/shared';
import { FlowDiagram } from '@/components/flow-diagram';
import { ProductConcept } from '@/components/product-concept';
import { CommissionProConcept } from '@/components/commission-pro-concept';
import { industries, services } from '@/lib/content';
import type { Metadata } from 'next';
import {
  ScrollProgressBar,
  HeroContent,
  Reveal,
  StaggerGroup,
  StaggerItem,
  AnimatedSystemDiagram,
  AnimatedServiceCard,
  AnimatedCodePanel,
  AnimatedCapabilityStrip,
  AnimatedPhilosophyStrip,
} from '@/components/home-animations';

export const metadata: Metadata = { alternates: { canonical: '/' } };

export default function Home() {
  return (
    <>
      <ScrollProgressBar />

      {/* Section 01: Top Banner */}
      <Section number="01" className="announcement">
        <span className="mono">SAAS PRODUCTS · CLOUD SUBSCRIPTION PLATFORMS · BESPOKE SERVICES</span>
        <span className="mono announcement-end">SPECIALIZED FOR REAL ESTATE & CHEMICAL SECTORS</span>
      </Section>

      {/* Section 02: Hero with Framer Motion Typography & Ambient Glow */}
      <Section number="02" className="home-hero">
        <div className="hero-corner" />
        <HeroContent />
      </Section>

      {/* Section 03: Interactive Product Flow Diagram */}
      <Section number="03" className="diagram-section">
        <Reveal duration={0.8} y={32}>
          <FlowDiagram />
        </Reveal>
      </Section>

      {/* Section 04: Capability Strip with Stagger Entrance */}
      <Section number="04" className="capability-strip">
        <AnimatedCapabilityStrip />
      </Section>

      {/* Section 05: Intro & Architecture Core with GSAP Pulse */}
      <Section number="05" dark className="intro-section">
        <Reveal>
          <Label>THE OPPORTUNITY</Label>
          <h2>
            Complex operations.
            <br />
            <span className="muted-heading">One stronger foundation.</span>
          </h2>
        </Reveal>

        <StaggerGroup className="problem-grid" stagger={0.09}>
          {[
            ['01', 'Fragmented tools', 'Disconnected systems make simple workflows harder.'],
            ['02', 'Repetitive work', 'Manual processes keep teams from higher-value work.'],
            ['03', 'Scattered information', 'Useful data gets lost between people and platforms.'],
            ['04', 'Limited growth', 'Yesterday’s software cannot always support tomorrow.'],
          ].map(([n, title, text]) => (
            <StaggerItem key={n} className="problem-item">
              <span className="problem-number mono">{n}</span>
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <div className="intro-bottom">
          <Reveal delay={0.1}>
            <div>
              <Label>WITH SCALIDOR</Label>
              <h3>
                Problem. Product.
                <br />
                Platform. <span>Scale.</span>
              </h3>
              <p>
                We connect product thinking, engineering, and intelligent automation to
                build technology with the potential to become something bigger.
              </p>
              <Link href="/about" className="button button-light">
                About Scalidor
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.2} className="system-diagram-reveal">
            <AnimatedSystemDiagram />
          </Reveal>
        </div>
      </Section>

      {/* Section 06: Featured SaaS Product Section */}
      <Section number="06" className="product-section" id="products">
        <div className="section-heading">
          <Reveal>
            <div>
              <Label>FLAGSHIP SAAS PRODUCTS</Label>
              <h2>
                Real industries.
                <br />
                <span className="mono-accent">Subscription scale.</span>
              </h2>
            </div>
          </Reveal>
          <p>
            Scalidor engineers and operates specialized cloud SaaS platforms designed to replace fragmented tools with unified, subscription-based industry operating systems.
          </p>
        </div>

        {/* Subscription value callout strip */}
        <div className="subscription-callout-strip mono" aria-label="SaaS subscription guarantees">
          <div className="subscription-callout-item">
            <Check size={14} /> CLOUD SAAS SUBSCRIPTIONS
          </div>
          <div className="subscription-callout-item">
            <Check size={14} /> MULTI-TENANT ARCHITECTURE
          </div>
          <div className="subscription-callout-item">
            <Check size={14} /> PREDICTABLE MONTHLY & ANNUAL PLANS
          </div>
          <div className="subscription-callout-item">
            <Check size={14} /> AUTOMATIC CONTINUOUS UPDATES
          </div>
        </div>

        {/* Product 01: Real Estate SaaS Platform */}
        <Reveal y={30} duration={0.8}>
          <div className="featured-product">
            <div className="featured-copy">
              <div className="status-row">
                <span className="status mono">
                  <span className="status-dot-pulse" aria-hidden="true" />
                  IN DEVELOPMENT · BETA 2026
                </span>
                <span className="subscription-badge mono">
                  SAAS SUBSCRIPTION
                </span>
              </div>
              <h3>
                Real Estate
                <br />
                Technology
              </h3>
              <p>
                Properties, customers, websites, teams, and operations. An integrated cloud platform for the workflows behind modern real estate brokerages and property operators.
              </p>
              <div className="product-tags mono">
                <span>PROPERTY OPERATIONS</span>
                <span>CRM</span>
                <span>AUTOMATION</span>
                <span>TENANT PORTALS</span>
              </div>
              <div className="product-cta-group">
                <Link href="/products#real-estate" className="button">
                  Explore the platform
                </Link>
                <span className="sub-model-note mono">Monthly & annual agency subscriptions</span>
              </div>
            </div>
            <ProductConcept />
          </div>
        </Reveal>

        {/* Product 02: Commission Pro (Chemical Industry SaaS) */}
        <Reveal y={30} duration={0.8}>
          <div className="featured-product featured-product-alt">
            <div className="featured-copy">
              <div className="status-row">
                <span className="status status-chemical mono">
                  <span className="status-dot-pulse" aria-hidden="true" />
                  FLAGSHIP SAAS · CHEMICAL SECTOR
                </span>
                <span className="subscription-badge mono">
                  PLANT CLOUD LICENSE
                </span>
              </div>
              <h3>
                Commission Pro
                <span className="product-subtitle">Chemical Industry SaaS</span>
              </h3>
              <p>
                Specialized cloud SaaS platform for chemical plant commissioning, process verification, safety interlocks, and batch readiness. Replaces scattered spreadsheets with verified real-time cloud workflows.
              </p>
              <div className="product-tags mono">
                <span>PLANT COMMISSIONING</span>
                <span>CHEMICAL PROCESSES</span>
                <span>SAFETY & COMPLIANCE</span>
                <span>BATCH AUDIT TRAILS</span>
              </div>
              <div className="product-cta-group">
                <Link href="/products#commission-pro" className="button">
                  Explore Commission Pro
                </Link>
                <span className="sub-model-note mono">Per-facility SaaS subscription · Enterprise SLA</span>
              </div>
            </div>
            <CommissionProConcept />
          </div>
        </Reveal>

        {/* Minis: Intelligent Business Systems & Future Industry Platforms */}
        <StaggerGroup className="product-minis" stagger={0.14}>
          <StaggerItem className="product-mini-col">
            <Link href="/products#intelligent-systems" className="product-mini-link">
              <Sparkles size={25} />
              <div>
                <span className="mono">RESEARCH & DEVELOPMENT</span>
                <h3>Intelligent Business Systems</h3>
                <p>Business workflows, enhanced by AI and automation.</p>
              </div>
              <span className="plus-sign">+</span>
            </Link>
          </StaggerItem>

          <StaggerItem className="product-mini-col">
            <Link href="/products#future-industries" className="product-mini-link">
              <Layers3 size={25} />
              <div>
                <span className="mono">LONG-TERM DIRECTION</span>
                <h3>Future Industry Platforms</h3>
                <p>One technology foundation. Many industry possibilities.</p>
              </div>
              <span className="plus-sign">+</span>
            </Link>
          </StaggerItem>
        </StaggerGroup>
      </Section>

      {/* Section 07: Services Grid with Spotlight Cards */}
      <Section number="07" className="services-section">
        <div className="section-heading">
          <Reveal>
            <div>
              <Label>OUR CAPABILITIES</Label>
              <h2>
                Bespoke engineering
                <br />
                for specialized systems.
              </h2>
            </div>
          </Reveal>
          <Link href="/services" className="text-link">
            Explore all services →
          </Link>
        </div>

        <StaggerGroup className="service-grid" stagger={0.12}>
          {services.slice(0, 4).map((s, i) => (
            <AnimatedServiceCard
              key={s.slug}
              href={`/services/${s.slug}`}
              number={`0${i + 1}`}
              name={s.name}
              description={s.description}
              iconName={s.icon}
            />
          ))}
        </StaggerGroup>
      </Section>

      {/* Section 08: Engineering Infrastructure */}
      <Section number="08" className="engineering-section">
        <Reveal className="engineering-image" y={24} duration={0.9}>
          <Image
            src="/images/engineering.webp"
            alt="Isometric illustration of modular server infrastructure with Scalidor blue indicators"
            width={1448}
            height={1086}
            sizes="(max-width: 760px) 100vw, 50vw"
            priority={false}
          />
        </Reveal>

        <div className="engineering-copy bracket">
          <Reveal>
            <Label>BUILT FOR THE LONG TERM</Label>
            <h2>
              Engineering for today.
              <br />
              Architecture for tomorrow.
            </h2>
            <p>
              Strong engineering means building what is needed now, while keeping a sensible path for growth.
            </p>
          </Reveal>

          <StaggerGroup stagger={0.08}>
            <ul>
              {[
                'Practical, maintainable architecture',
                'Security and user experience from the start',
                'AI where it creates operational value',
                'A foundation that evolves with your business',
              ].map(t => (
                <StaggerItem key={t}>
                  <li>
                    <Check size={17} />
                    {t}
                  </li>
                </StaggerItem>
              ))}
            </ul>
          </StaggerGroup>
        </div>
      </Section>

      {/* Section 09: AI Section with Interactive Code Panel */}
      <Section number="09" dark className="ai-section">
        <Reveal>
          <div>
            <Label>INTELLIGENCE WITH PURPOSE</Label>
            <h2>
              Less repetitive work.
              <br />
              <span className="mono-accent">More possibility.</span>
            </h2>
            <p>
              From document processing and intelligent search to customer support and analytics, we use AI to make software more capable while keeping people in control.
            </p>
            <Link href="/services/ai-automation" className="button button-light">
              Explore AI & automation
            </Link>
          </div>
        </Reveal>

        <AnimatedCodePanel />
      </Section>

      {/* Section 10: Philosophy Strip */}
      <Section number="10" className="philosophy-strip">
        <AnimatedPhilosophyStrip
          items={[
            ['01', 'Understand'],
            ['02', 'Build'],
            ['03', 'Learn'],
            ['04', 'Scale'],
          ]}
        />
      </Section>

      {/* Section 11: Industry Tags */}
      <Section number="11" className="industry-section">
        <Reveal>
          <Label>INDUSTRY SYSTEMS</Label>
          <div className="section-heading">
            <h2>
              Software that understands
              <br />
              the industry it serves.
            </h2>
            <p>
              Different industries have different users, workflows, and challenges. Our platforms begin with those differences.
            </p>
          </div>
        </Reveal>

        <StaggerGroup className="industry-tags" stagger={0.06}>
          {industries.map((t, i) => (
            <StaggerItem key={t}>
              <Link href="/products#future-industries" className="industry-tag-link">
                <span className="mono">{String(i + 1).padStart(2, '0')}</span>
                {t}
              </Link>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Section>

      <CTA number="12" />
    </>
  );
}
