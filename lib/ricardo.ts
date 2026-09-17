// lib/ricardo.ts
// Single source of truth for all personal data of Ricardo in the entire portfolio.
// Edit here and it replicates across the site.

export const ricardo = {
  name: "Ricardo Rocker",
  shortName: "Ricardo",
  role: "Full-Stack Engineer & Automation Specialist",
  tagline: "Next.js sites, n8n automations, Python scripts. Remote, async.",

  stats: {
    years: "6+",
    contracts: "30+",
    lifetimeBilled: "$150K+",
    replyTime: "24h",
    upworkRating: "4.9",
    lighthouseMobile: "95+",
  },

  bio: {
    short: "Senior front-end engineer and automation specialist. 6+ years building landing pages, dashboards, workflows, and AI tools for clients in the US and Europe. Remote contracts via Upwork.",
    long: `I'm a full-stack engineer based in Brazil, working remotely with clients
across the US and Europe. I build two types of things:

**Web:** High-performance landing pages, product UI, design systems — React,
TypeScript, Next.js. Lighthouse 95+ on mobile is a baseline, not a stretch goal.

**Automation:** n8n workflows, Python scripts, OpenAI agents. I automate the
repetitive work that burns your time — data pipelines, lead enrichment,
Slack notifications, CRM sync, content pipelines.

I've shipped production code for fintech, e-commerce, and B2B SaaS companies,
comfortable owning a feature end-to-end or collaborating with an existing team.

Currently open to remote contracts via Upwork.`,
  },

  focusAreas: [
    "workflow automation",
    "AI integration",
    "front-end performance audits",
  ],

  manifestoLine: "Currently focused on: workflow automation, AI integration, and front-end performance audits.",

  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "contact@ricardorocker.com",

  services: [
    {
      icon: "Code2",
      title: "Front-End Engineering",
      desc: "Landing pages, dashboards, design systems, mobile-first UI. Next.js, React, Angular, TypeScript.",
    },
    {
      icon: "Workflow",
      title: "Workflow Automation",
      desc: "n8n, Zapier, Make.com, custom scripts. Stripe → CRM, OpenAI pipelines, ETL, scheduled jobs.",
    },
    {
      icon: "Bot",
      title: "AI Integration",
      desc: "OpenAI API, Claude API, embeddings, RAG, chat UIs, prompt engineering, content generation pipelines.",
    },
    {
      icon: "Database",
      title: "Data & Backend",
      desc: "Python scripts, Node.js APIs, PostgreSQL, FastAPI, REST/tRPC, webhooks.",
    },
    {
      icon: "LineChart",
      title: "Analytics & Dashboards",
      desc: "Real-time dashboards, KPI panels, Recharts/Visx, CSV/Excel automation, Plausible self-host.",
    },
    {
      icon: "Layers",
      title: "Web Performance & A11y",
      desc: "Lighthouse 100, Core Web Vitals, WCAG 2.1 AA audits, refactor legacy SPA, accessibility remediation.",
    },
  ],

  process: [
    { n: "01", title: "Brief", desc: "You send scope. I reply within 24h with a fixed quote." },
    { n: "02", title: "Discovery", desc: "Async Loom call + shared Notion doc. I send a 1-page plan." },
    { n: "03", title: "Build", desc: "Daily Loom updates. PRs visible from day 1." },
    { n: "04", title: "Ship", desc: "Deployed to Vercel preview. You test, iterate, approve." },
    { n: "05", title: "Iterate", desc: "14 days of free revisions after launch." },
  ],

  trustLogos: ["stripe", "openai", "vercel", "notion", "linear", "figma", "github", "supabase"],
  // REGRA STEPHANIE NINA: Never cite employers by name. Use generics.
  experience: [
    { period: "2025–present", role: "Senior Front-End Engineer", context: "Fintech enterprise (React + TypeScript, micro-frontends)" },
    { period: "2024–2025", role: "Senior Front-End Engineer", context: "Enterprise consulting — financial sector (Angular 18)" },
    { period: "2024", role: "Front-End Engineer", context: "Banking sector (Angular, NDA client)" },
    { period: "2020–2024", role: "Front-End Engineer", context: "Brazilian SaaS companies (B2B dashboards, lead-gen)" },
  ],
  stack: [
    { name: "React", years: 8, level: "expert" },
    { name: "TypeScript", years: 7, level: "expert" },
    { name: "Next.js", years: 4, level: "expert" },
    { name: "Python", years: 4, level: "senior" },
    { name: "n8n", years: 2, level: "senior" },
    { name: "Node.js", years: 6, level: "senior" },
    { name: "Tailwind CSS", years: 4, level: "expert" },
    { name: "PostgreSQL", years: 5, level: "senior" },
  ],
  areas: [
    // Web
    "Landing Pages & Product UI",
    "Design Systems",
    "Web Performance (Core Web Vitals)",
    "Frontend Architecture",
    // Automation
    "n8n Workflow Automation",
    "Python ETL & Scripts",
    "Workflow Automation (Zapier / n8n / APIs)",
    "AI Integration (OpenAI API)",
  ],
  // Real profile URLs
  links: {
    upwork: process.env.NEXT_PUBLIC_UPWORK_URL ?? "https://www.upwork.com/freelancers/ricardorocker",
    linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL ?? "https://www.linkedin.com/in/ricardo-s-rocker/",
    github: process.env.NEXT_PUBLIC_GITHUB_URL ?? "https://github.com/ricardorocker",
    email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "contact@ricardorocker.com",
  },
  rateNote: "Rate on request. I work hourly or fixed-price — your choice.",

  // Media assets
  media: {
    profilePhoto: "/profile/photo.png",
    introVideo: {
      youtubeId: "QqaSh2sOyo4",
      // Embed URL with sensible defaults (modest branding, no related videos)
      embedUrl: "https://www.youtube-nocookie.com/embed/QqaSh2sOyo4?rel=0&modestbranding=1",
      // Thumbnail served by YouTube (maxresdefault is 1280x720; YouTube serves hqdefault as fallback if missing)
      thumbnailUrl: "https://i.ytimg.com/vi/QqaSh2sOyo4/maxresdefault.jpg",
      title: "2-minute intro — Ricardo Rocker",
    },
  },

  showcaseProjects: [
    // Front-end (6 existing)
    {
      title: "Modern SaaS Landing",
      description: "Bento-grid layout, dark theme, Safety Orange accent. GSAP scroll animations.",
      tags: ["Next.js 16", "Tailwind v4", "Motion 13", "GSAP"],
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
      url: "/",
    },
    {
      title: "Design System Components",
      description: "Atomic component library with Storybook documentation, design tokens, and accessibility annotations.",
      tags: ["React", "TypeScript", "Radix UI", "Storybook"],
      image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&q=80",
      url: "/",
    },
    {
      title: "Mobile-First Checkout",
      description: "Single-page checkout with progressive disclosure, address autocomplete, and Stripe integration.",
      tags: ["React", "TypeScript", "Stripe", "Tailwind"],
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80",
      url: "/",
    },
    {
      title: "Performance Audit Report",
      description: "Before/after breakdown of a landing page rebuild. Lighthouse 54 → 96 mobile.",
      tags: ["Lighthouse", "Core Web Vitals", "Next.js", "ISR"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      url: "/",
    },
    {
      title: "E-commerce Dashboard",
      description: "Analytics dashboard with real-time data, dark theme, and keyboard navigation.",
      tags: ["React", "TypeScript", "Recharts", "Tailwind"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      url: "/",
    },
    {
      title: "Landing Page — 3 Variants",
      description: "A/B test variants of a fintech landing page, tested with real traffic.",
      tags: ["Next.js", "A/B Testing", "Analytics", "Motion"],
      image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80",
      url: "/",
    },
    // Automation (2 new)
    {
      title: "n8n Workflow — Stripe → Airtable → Slack",
      description: "Payment event triggers CRM record creation and Slack notification. Handles refunds and upgrades automatically.",
      tags: ["n8n", "Stripe", "Airtable", "Slack"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      url: null,
      isAutomation: true,
    },
    {
      title: "OpenAI Content Pipeline",
      description: "Scheduled job generates SEO blog posts from keyword clusters. Stores in Postgres, sends Slack digest.",
      tags: ["Python", "OpenAI", "FastAPI", "Postgres"],
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
      url: null,
      isAutomation: true,
    },
  ],
};

export type StackItem = { name: string; years: number; level: string };
export type ExperienceItem = { period: string; role: string; context: string };
