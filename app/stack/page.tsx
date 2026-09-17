import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ricardo } from "@/lib/ricardo";

export const metadata: Metadata = {
  title: `Stack — ${ricardo.name}`,
  description: `Technology stack: ${ricardo.stack.map(s => s.name).join(", ")}.`,
};

const levelColors: Record<string, string> = {
  expert: "bg-[var(--color-accent)]/20 text-[var(--color-accent)] border-[var(--color-accent)]/30",
  senior: "bg-[var(--color-accent-secondary)]/20 text-[var(--color-accent-secondary)] border-[var(--color-accent-secondary)]/30",
};

export default function StackPage() {
  return (
    <div className="min-h-screen pt-24 pb-24">
      <div className="mx-auto max-w-4xl px-6">
        <Link
          href="/"
          className="mb-12 inline-flex items-center gap-2 text-sm text-[var(--color-foreground-muted)] transition-colors hover:text-[var(--color-accent)]"
        >
          <ArrowLeft size={14} />
          Back
        </Link>

        <div className="mb-16">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-[var(--color-accent)]">
            Tools of the trade
          </p>
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
            My Stack
          </h1>
          <p className="mt-3 max-w-xl text-[var(--color-foreground-muted)]">
            Technologies I use daily. Sorted by depth of experience.
          </p>
        </div>

        {/* Skills */}
        <div className="mb-16 space-y-4">
          {ricardo.stack.map((skill) => (
            <div
              key={skill.name}
              className="flex items-center justify-between rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] px-6 py-4"
            >
              <div className="flex items-center gap-4">
                <span className="font-mono text-sm font-medium">{skill.name}</span>
                <span
                  className={`rounded-full border px-2 py-0.5 text-xs font-medium ${levelColors[skill.level] || ""}`}
                >
                  {skill.level}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex gap-1">
                  {Array.from({ length: 10 }).map((_, i) => (
                    <div
                      key={i}
                      className={`h-1.5 w-3 rounded-full transition-colors ${
                        i < skill.years
                          ? "bg-[var(--color-accent)]"
                          : "bg-[var(--color-border)]"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-xs text-[var(--color-foreground-muted)]">
                  {skill.years}yr
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Category breakdown */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Core",
              items: ["React", "TypeScript", "Next.js", "Node.js"],
            },
            {
              title: "Styling & UI",
              items: ["Tailwind CSS", "shadcn/ui", "Radix UI", "Motion / Framer Motion"],
            },
            {
              title: "Performance",
              items: ["Lighthouse", "Core Web Vitals", "Lenis", "GSAP"],
            },
            {
              title: "Backend & Data",
              items: ["PostgreSQL", "Python", "FastAPI", "REST / tRPC"],
            },
            {
              title: "Automations",
              items: ["n8n", "Zapier / Make.com", "OpenAI / Claude APIs", "Webhooks & REST", "Google Apps Script"],
            },
            {
              title: "Tools",
              items: ["Git & GitHub", "VS Code + Claude Code", "Vercel / Cloudflare", "Plausible / PostHog", "Notion / Linear"],
            },
          ].map((group) => (
            <div
              key={group.title}
              className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6"
            >
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-[var(--color-accent)]">
                {group.title}
              </h3>
              <ul className="space-y-2">
                {group.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm">
                    <span className="h-1 w-1 rounded-full bg-[var(--color-accent)]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
