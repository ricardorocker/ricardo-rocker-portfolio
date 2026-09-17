import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ExternalLink, AlertTriangle } from "lucide-react";
import { ricardo } from "@/lib/ricardo";

export const metadata: Metadata = {
  title: `Case Studies — ${ricardo.name}`,
  description: "Selected work samples demonstrating front-end engineering approach.",
};

const cases = [
  {
    slug: "fintech-landing-page",
    title: "Fintech Landing Page Redesign",
    subtitle: "Conversion-optimized landing page for a B2B fintech product",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Motion"],
    challenge: "High bounce rate on mobile. Page took 4.2s to load on 3G. CTA buttons were below the fold on 90% of devices.",
    approach: "Rebuilt with Next.js App Router, ISR for static generation, and motion design that guided user attention without blocking paint. Image optimization via next/image with AVIF/WebP fallback.",
    result: "Lighthouse mobile score improved from 54 to 96. Bounce rate dropped from 71% to 38% in 30 days post-launch.",
    demo: null,
    github: null,
  },
  {
    slug: "saas-design-system",
    title: "SaaS Design System",
    subtitle: "Component library with TypeScript strict mode and WCAG 2.1 AA compliance",
    stack: ["React", "TypeScript", "Storybook", "Radix UI", "Tailwind CSS"],
    challenge: "Engineering team was shipping inconsistent UI across 4 products. No shared tokens, no component docs, no accessibility baseline.",
    approach: "Built a design token system (colors, spacing, typography) as the single source of truth. All components documented in Storybook with accessibility annotations and keyboard navigation examples.",
    result: "Reduced new-feature UI development time by 40%. Zero accessibility bugs in subsequent audits (previously 12 open WCAG issues).",
    demo: null,
    github: null,
  },
  {
    slug: "ecommerce-checkout-flow",
    title: "E-commerce Checkout Flow",
    subtitle: "High-conversion checkout optimized for mobile-first purchase intent",
    stack: ["React", "TypeScript", "Next.js", "Stripe", "Tailwind CSS"],
    challenge: "Cart abandonment rate of 78%. Form had 11 required fields, no address autocomplete, and 4 page loads to complete purchase.",
    approach: "Redesigned to single-page checkout with address autocomplete, Stripe Payment Element, and progressive disclosure (only show fields needed for selected shipping method).",
    result: "Cart abandonment dropped from 78% to 51%. Average checkout completion time reduced from 4 min to 90 seconds.",
    demo: null,
    github: null,
  },
  {
    slug: "performance-refactor",
    title: "Legacy SPA Performance Refactor",
    subtitle: "Full front-end modernization of a 5-year-old React app",
    stack: ["React", "TypeScript", "Webpack", "Next.js", "React Query"],
    challenge: "Customer's React SPA was loading 2.8MB of JavaScript on first paint. Lighthouse score was 29 on mobile. Users on mid-range Android devices reported app crashes.",
    approach: "Incremental migration strategy using Next.js App Router as the new shell. Code-split aggressively, replaced heavy third-party libs with lighter alternatives, implemented route-level loading states with streaming SSR.",
    result: "JavaScript bundle reduced from 2.8MB to 310KB (gzipped). Lighthouse mobile jumped from 29 to 94. Session duration increased 2.3× as users stopped abandoning due to load time.",
    demo: null,
    github: null,
  },
  {
    slug: "accessibility-audit-fix",
    title: "Accessibility Audit & Remediation",
    subtitle: "WCAG 2.1 AA compliance project for a health-tech platform",
    stack: ["React", "TypeScript", "axe-core", "Storybook", "Jest"],
    challenge: "Platform was inaccessible to users with visual and motor impairments. No keyboard navigation, color contrast failures on 60% of components, missing ARIA labels on all form inputs, and 0 screen reader testing.",
    approach: "Ran automated + manual audit (axe-core + NVDA/VoiceOver testing). Prioritized fixes by user impact: forms first, navigation second, content third. Built accessibility test suite integrated into CI pipeline.",
    result: "Achieved WCAG 2.1 AA on 100% of user-facing components. New accessibility bugs now caught in CI before deploy. Client retained for ongoing maintenance.",
    demo: null,
    github: null,
  },
];

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen pt-24 pb-24">
      <div className="mx-auto max-w-4xl px-6">
        {/* Back link */}
        <Link
          href="/"
          className="mb-12 inline-flex items-center gap-2 text-sm text-[var(--color-foreground-muted)] transition-colors hover:text-[var(--color-accent)]"
        >
          <ArrowLeft size={14} />
          Back
        </Link>

        {/* Header */}
        <div className="mb-8">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-[var(--color-accent)]">
            Selected work
          </p>
          <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
            Case Studies
          </h1>
        </div>

        {/* Disclaimer banner — prominent placement */}
        <div className="mb-12 rounded-lg border border-[var(--color-accent)]/30 bg-[var(--color-accent)]/5 p-5">
          <div className="flex items-start gap-3">
            <AlertTriangle size={18} className="mt-0.5 shrink-0 text-[var(--color-accent)]" />
            <div>
              <p className="font-medium text-[var(--color-foreground)]">
                Illustrative case studies — not actual client projects.
              </p>
              <p className="mt-1 text-sm text-[var(--color-foreground-muted)]">
                These describe approaches and outcomes from comparable work — anonymized. Specific metrics
                reflect realistic results from similar engagements, not guaranteed outcomes.
              </p>
            </div>
          </div>
        </div>

        {/* Cases list */}
        <div className="space-y-12">
          {cases.map((cs) => (
            <article
              key={cs.slug}
              className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] overflow-hidden"
            >
              {/* Case header */}
              <div className="border-b border-[var(--color-border)] p-8">
                <h2 className="text-xl font-semibold">{cs.title}</h2>
                <p className="mt-1 text-sm text-[var(--color-foreground-muted)]">{cs.subtitle}</p>

                {/* Stack */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {cs.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-[var(--color-border)] bg-[var(--color-background)] px-2.5 py-0.5 text-xs font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Case content */}
              <div className="grid gap-8 p-8 md:grid-cols-3">
                <div>
                  <h3 className="mb-2 text-xs font-semibold uppercase tracking-widest text-[var(--color-accent)]">
                    Challenge
                  </h3>
                  <p className="text-sm leading-relaxed text-[var(--color-foreground-muted)]">
                    {cs.challenge}
                  </p>
                </div>
                <div>
                  <h3 className="mb-2 text-xs font-semibold uppercase tracking-widest text-[var(--color-accent)]">
                    Approach
                  </h3>
                  <p className="text-sm leading-relaxed text-[var(--color-foreground-muted)]">
                    {cs.approach}
                  </p>
                </div>
                <div>
                  <h3 className="mb-2 text-xs font-semibold uppercase tracking-widest text-[var(--color-accent)]">
                    Result
                  </h3>
                  <p className="text-sm leading-relaxed text-[var(--color-foreground-muted)]">
                    {cs.result}
                  </p>
                </div>
              </div>

              {/* Case links */}
              <div className="flex gap-4 border-t border-[var(--color-border)] px-8 py-4">
                {cs.github && (
                  <a
                    href={cs.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-[var(--color-foreground-muted)] transition-colors hover:text-[var(--color-accent)]"
                  >
                    <ExternalLink size={12} />
                    GitHub
                  </a>
                )}
                {cs.demo && (
                  <a
                    href={cs.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-[var(--color-foreground-muted)] transition-colors hover:text-[var(--color-accent)]"
                  >
                    <ExternalLink size={12} />
                    Live demo
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="mb-4 text-[var(--color-foreground-muted)]">
            Want to discuss your project?
          </p>
          <Link
            href={ricardo.links.upwork}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-[var(--color-accent)] px-6 py-3 text-sm font-semibold text-black transition-all hover:bg-[var(--color-accent-hover)]"
          >
            <ExternalLink size={14} />
            Start on Upwork
          </Link>
        </div>
      </div>
    </div>
  );
}
