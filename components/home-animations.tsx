'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import gsap from 'gsap';
import Image from 'next/image';
import Link from 'next/link';
import { Component, ArrowUpRight, Sparkles, Code2, Cpu, Layers3, Network } from 'lucide-react';
import { ServiceIcon } from '@/components/icon';

// Smooth cubic bezier easing
export const easeOutExpo = [0.16, 1, 0.3, 1] as const;

/* Top Scroll Progress Bar */
export function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="scroll-progress-bar"
      style={{ scaleX, transformOrigin: '0%' }}
      aria-hidden="true"
    />
  );
}

/* Scroll-triggered reveal container */
export function Reveal({
  children,
  delay = 0,
  y = 28,
  duration = 0.7,
  className = '',
}: {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  duration?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration, delay, ease: easeOutExpo }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* Stagger container for lists */
export function StaggerGroup({
  children,
  className = '',
  stagger = 0.08,
}: {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: stagger,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 22 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: easeOutExpo },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

/* Hero Section with Staggered Typography Reveal & Mouse Ambient Glow */
export function HeroContent() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setMousePos({ x, y });
    };

    const node = containerRef.current;
    if (node) {
      node.addEventListener('mousemove', handleMouseMove);
    }
    return () => {
      if (node) node.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="hero-motion-wrapper" ref={containerRef}>
      {/* Subtle interactive ambient glow */}
      <div
        className="hero-ambient-glow"
        style={{
          transform: `translate(${mousePos.x}px, ${mousePos.y}px)`,
        }}
        aria-hidden="true"
      />

      {/* Main headline with staggered word animation */}
      <h1 className="hero-heading">
        <motion.span
          className="hero-line"
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: easeOutExpo }}
        >
          Technology.
        </motion.span>
        <br />
        <motion.span
          className="hero-line"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.12, ease: easeOutExpo }}
        >
          Built to <span className="mono-accent">scale.</span>
          <motion.span
            className="blue-period"
            initial={{ scale: 0, rotate: -45 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.6, delay: 0.45, ease: easeOutExpo }}
          >
            ▪
          </motion.span>
        </motion.span>
      </h1>

      <motion.div
        className="hero-bottom"
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.28, ease: easeOutExpo }}
      >
        <p>
          We build SaaS platforms, intelligent systems, and industry software
          that turn complex problems into scalable products.
        </p>

        <div className="hero-actions">
          <motion.div
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            <Link href="/products" className="button hero-main-button">
              <Component size={18} /> Explore our products
            </Link>
          </motion.div>
          <motion.div
            whileHover={{ x: 4 }}
            transition={{ duration: 0.2 }}
          >
            <Link href="/contact" className="text-link">
              Start a project →
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

/* Animated Platform Core (System Architecture) with GSAP Continuous Pulse */
export function AnimatedSystemDiagram() {
  const coreRef = useRef<HTMLDivElement>(null);
  const pulseRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!coreRef.current || !pulseRef.current) return;

    // Continuous subtle floating pulse
    const ctx = gsap.context(() => {
      gsap.to(coreRef.current, {
        y: -4,
        duration: 2.8,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
      });

      gsap.to(pulseRef.current, {
        scale: 1.25,
        opacity: 0,
        duration: 2.2,
        repeat: -1,
        ease: 'power2.out',
      });
    });

    return () => ctx.revert();
  }, []);

  const modules = [
    { name: 'SaaS', icon: Layers3 },
    { name: 'AI', icon: Sparkles },
    { name: 'Automation', icon: Network },
    { name: 'Software', icon: Code2 },
  ];

  return (
    <div className="system-diagram" aria-label="Shared platform architecture">
      <div className="system-core" ref={coreRef}>
        <div className="system-core-mark-wrapper">
          <div className="system-core-pulse" ref={pulseRef} aria-hidden="true" />
          <div className="system-core-mark">
            <Image
              src="/logo-white.png"
              alt="Scalidor Foundation"
              width={40}
              height={40}
              className="system-core-logo"
              priority
            />
          </div>
        </div>
        <strong>SCALIDOR</strong>
        <span className="mono">SHARED FOUNDATION</span>
      </div>
      <div className="system-modules">
        {modules.map(({ name, icon: Icon }) => (
          <motion.div
            key={name}
            className="system-module-item"
            whileHover={{ y: -3, scale: 1.04 }}
            transition={{ duration: 0.2 }}
          >
            <Icon size={22} />
            <span className="mono">{name}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* Interactive Spotlight Service Card with cursor tracking spotlight */
export function AnimatedServiceCard({
  href,
  number,
  name,
  description,
  iconName,
}: {
  href: string;
  number: string;
  name: string;
  description: string;
  iconName: string;
}) {
  const cardRef = useRef<HTMLAnchorElement>(null);
  const [coords, setCoords] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: easeOutExpo },
        },
      }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className="service-card-wrapper"
    >
      <Link
        ref={cardRef}
        className="service-card bracket animated-card"
        href={href}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Spotlight overlay */}
        <div
          className="card-spotlight"
          style={{
            opacity: isHovered ? 1 : 0,
            background: `radial-gradient(400px circle at ${coords.x}px ${coords.y}px, rgba(15, 86, 241, 0.08), transparent 70%)`,
          }}
          aria-hidden="true"
        />

        <div className="card-top">
          <div className="card-icon-animated"><ServiceIcon name={iconName} /></div>
          <span className="mono">{number}</span>
        </div>
        <h3>{name}</h3>
        <p>{description}</p>
        <span className="mono card-link">
          EXPLORE SERVICE <ArrowUpRight size={14} className="card-link-icon" />
        </span>
      </Link>
    </motion.div>
  );
}

/* Interactive Code Panel for Section 09 (AI) */
export function AnimatedCodePanel() {
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!panelRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.code-glow-indicator',
        { opacity: 0.3, scale: 0.9 },
        {
          opacity: 0.9,
          scale: 1.15,
          duration: 1.8,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        }
      );
    }, panelRef);

    return () => ctx.revert();
  }, []);

  return (
    <motion.div
      ref={panelRef}
      className="code-panel"
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.8, ease: easeOutExpo }}
    >
      <div className="code-header mono">
        <span>
          <i className="code-glow-indicator" /> intelligent-workflow.ts
        </span>
        <span className="code-badge">
          <Sparkles size={11} /> TYPESCRIPT / ACTIVE
        </span>
      </div>
      <pre aria-label="Illustrative workflow pseudocode">
        <code>
          <span className="code-muted">{'// Intelligence, connected to real work\n'}</span>
          <span className="code-blue">{'const '}</span>
          {'workflow = {\n  input: '}
          <span className="code-string">{'"business problem"'}</span>
          {',\n  understand: '}
          <span className="code-string">{'"users + context"'}</span>
          {',\n  automate: '}
          <span className="code-string">{'"repetitive work"'}</span>
          {',\n  control: '}
          <span className="code-string">{'"human oversight"'}</span>
          {',\n  outcome: '}
          <span className="code-string">{'"useful action"'}</span>
          {'\n};'}
        </code>
      </pre>
      <div className="code-footer mono">
        <span className="status-ping" />
        <span>PEOPLE IN CONTROL. PURPOSE IN EVERY WORKFLOW.</span>
      </div>
    </motion.div>
  );
}

/* Capability Strip with direct span children */
export function AnimatedCapabilityStrip() {
  const items = [
    { icon: Layers3, text: 'SaaS platforms' },
    { icon: Cpu, text: 'Artificial intelligence' },
    { icon: Network, text: 'Automation' },
    { icon: Code2, text: 'Industry software' },
  ];
  return (
    <>
      {items.map(({ icon: Icon, text }, i) => (
        <motion.span
          key={text}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.08, ease: easeOutExpo }}
          whileHover={{ y: -2 }}
        >
          <Icon size={21} strokeWidth={1.6} />
          {text}
        </motion.span>
      ))}
    </>
  );
}

/* Philosophy Strip with direct div.bracket children */
export function AnimatedPhilosophyStrip({
  items,
}: {
  items: [string, string][];
}) {
  return (
    <>
      {items.map(([n, name], i) => (
        <motion.div
          className="bracket"
          key={n}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: i * 0.09, ease: easeOutExpo }}
          whileHover={{ backgroundColor: '#f5f8fc' }}
        >
          <span className="mono">{n} / PRODUCT PHILOSOPHY</span>
          <strong>
            {name}
            <span>.</span>
          </strong>
        </motion.div>
      ))}
    </>
  );
}
