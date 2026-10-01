export const site = {
  name: 'Scalidor',
  tagline: 'Technology built to scale.',
  description: 'Scalidor builds scalable SaaS platforms, AI systems, automation solutions, and industry-specific software for modern businesses.',
  origin: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
};

export const services = [
  {
    slug: 'saas-development', name: 'SaaS Development', short: 'SaaS platforms', icon: 'layers',
    title: 'SaaS products designed for growth.',
    description: 'From early MVPs to multi-tenant platforms, we build cloud software around real business workflows and a clear path to growth.',
    intro: 'We help businesses design, build, and evolve cloud-based software products. Strong product foundations make it easier to introduce new capabilities, support more users, and respond to what customers need.',
    capabilities: ['Product discovery', 'Multi-tenant architecture', 'Authentication & permissions', 'Subscriptions & billing', 'Admin systems', 'APIs & integrations', 'Product analytics', 'Cloud infrastructure', 'Security & performance', 'Product evolution'],
    audience: 'Startups launching SaaS products, businesses digitizing workflows, and teams replacing fragmented internal systems with a scalable platform.',
    outcome: 'A focused software product built around your users, workflows, and business model.',
  },
  {
    slug: 'ai-automation', name: 'AI & Automation', short: 'Intelligent systems', icon: 'sparkles',
    title: 'Make software more intelligent.',
    description: 'Practical AI and automation that reduce repetitive work and turn business information into useful actions.',
    intro: 'We start with the workflow. We identify where intelligence creates measurable value, then integrate it into the product with appropriate human oversight. The result should make work easier and keep users in control.',
    capabilities: ['AI assistants', 'Workflow automation', 'Document intelligence', 'Intelligent search', 'CRM workflows', 'Customer support automation', 'Analytics assistants', 'Data extraction', 'Recommendations', 'Operational automation'],
    audience: 'Teams with repetitive processes, document-heavy operations, disconnected information, or an opportunity to make existing software more capable.',
    outcome: 'An intelligent workflow with clear inputs, useful outputs, and controls for the people who rely on it.',
  },
  {
    slug: 'custom-software', name: 'Custom Software', short: 'Industry software', icon: 'blocks',
    title: 'Software built around your operation.',
    description: 'When generic tools fall short, we build maintainable software around the way your business actually works.',
    intro: 'Custom software can become a competitive advantage when off-the-shelf products cannot support a business’s unique workflows. We translate operational requirements into reliable systems, with strong user experience and maintainable architecture.',
    capabilities: ['Business management systems', 'Internal platforms', 'Operations software', 'Workflow systems', 'Customer portals', 'Admin systems', 'Enterprise tools', 'Data platforms', 'Integration platforms'],
    audience: 'Organizations whose critical operations rely on spreadsheets, disconnected tools, or software that no longer fits.',
    outcome: 'A connected operational system that supports your business rather than forcing it to adapt to generic software.',
  },
  {
    slug: 'product-engineering', name: 'Product Engineering', short: 'Product engineering', icon: 'code',
    title: 'From architecture to production.',
    description: 'Product thinking, dependable engineering, and cloud infrastructure to move an idea toward production.',
    intro: 'We work as a product-engineering partner for companies building or improving software. We connect architecture, design, frontend, backend, and operations so the product can evolve as one coherent system.',
    capabilities: ['Frontend engineering', 'Backend engineering', 'API design', 'Database architecture', 'Cloud infrastructure', 'Authentication & authorization', 'Payments', 'Third-party integrations', 'Performance optimization', 'Security architecture', 'Technical modernization'],
    audience: 'Founders and product teams launching a platform, extending an existing product, or modernizing a technical foundation.',
    outcome: 'A well-engineered product with a practical architecture, clear ownership, and a path for continuous improvement.',
  },
  {
    slug: 'web-applications', name: 'Web Applications', short: 'Web applications', icon: 'globe',
    title: 'Modern web applications built for real users.',
    description: 'Responsive, accessible web applications for complex workflows and everyday use.',
    intro: 'We develop web applications that balance performance, usability, and maintainability. From business dashboards to customer-facing products, the interface and underlying architecture are designed together.',
    capabilities: ['SaaS dashboards', 'Customer portals', 'Marketplaces', 'Enterprise applications', 'Admin platforms', 'Data-heavy interfaces', 'Progressive web applications', 'Accessible interfaces'],
    audience: 'Businesses building browser-based products, replacing legacy interfaces, or improving a digital customer experience.',
    outcome: 'A fast, clear web experience that works across devices and supports real user goals.',
  },
  {
    slug: 'mobile-applications', name: 'Mobile Applications', short: 'Mobile applications', icon: 'phone',
    title: 'Product experiences that move with your users.',
    description: 'Mobile products connected to scalable platforms, with workflows designed for life beyond a desk.',
    intro: 'We build mobile applications with native or cross-platform development according to the product’s requirements. We plan the user experience, device capabilities, backend connections, and performance as a single product.',
    capabilities: ['Mobile user experience', 'Authentication', 'Offline workflows', 'Push notifications', 'Media handling', 'API integrations', 'Payments', 'Analytics', 'Performance'],
    audience: 'Products for field teams, mobile customers, or businesses whose work happens across locations and devices.',
    outcome: 'A mobile experience designed around the context, connectivity, and needs of its users.',
  },
  {
    slug: 'ui-ux-design', name: 'UI/UX & Product Design', short: 'Product design', icon: 'pen',
    title: 'Design around the workflow.',
    description: 'Clear interfaces shaped by user goals, information hierarchy, and business outcomes.',
    intro: 'Good design makes complex products easier to understand and use. We connect product discovery, information architecture, interface design, and development so the experience remains coherent from concept to release.',
    capabilities: ['Product discovery', 'User flows', 'Wireframes', 'Information architecture', 'Design systems', 'High-fidelity interfaces', 'Responsive design', 'Prototypes', 'SaaS dashboard design'],
    audience: 'Teams validating a new idea, redesigning a complex platform, or creating a consistent product experience.',
    outcome: 'A considered interface and reusable design system that support the product’s most important workflows.',
  },
] as const;

export const founders = ['Manirul Islam', 'Faysal Mridha', 'MD Sidur Rahaman Rupom', 'Syed Mohiuddin Meshal', 'Mohibbullah Khan'];
export const industries = ['Real Estate', 'Construction', 'Finance', 'Healthcare', 'Education', 'CRM', 'Retail', 'Logistics', 'Hospitality', 'Analytics', 'AI', 'Automation'];
export const principles = [
  ['Product first', 'Focus on the user, the problem, and the business model before adding features.'],
  ['Built for scale', 'Practical architecture for today, with a clear path toward tomorrow’s growth.'],
  ['Intelligent by design', 'Integrate AI and automation where they create useful operational value.'],
  ['Minimal complexity', 'Solve difficult problems without creating unnecessary complexity.'],
  ['Long-term thinking', 'Build technology that remains valuable as customers and businesses grow.'],
];
export const workProcess = [
  ['Discover', 'Understand the business, users, problem, and desired outcome.'],
  ['Define', 'Establish the scope, architecture, workflows, and priorities.'],
  ['Design', 'Turn requirements into clear experiences and product systems.'],
  ['Build', 'Develop with maintainable, scalable engineering.'],
  ['Launch', 'Deploy, monitor, validate, and resolve real-world issues.'],
  ['Evolve', 'Improve the product through usage, feedback, and growth.'],
];
