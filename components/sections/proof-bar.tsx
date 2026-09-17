"use client";

import { motion } from "motion/react";

const tags = [
  "React",
  "Next.js",
  "TypeScript",
  "Angular",
  "Node.js",
  "Python",
  "n8n",
  "Zapier",
  "OpenAI API",
  "Stripe",
  "PostgreSQL",
  "Vercel",
  "Tailwind CSS",
  "shadcn/ui",
  "Motion",
  "GSAP",
  "WCAG 2.1",
  "Lighthouse",
];

export function ProofBar() {
  const doubled = [...tags, ...tags];

  return (
    <div className="relative overflow-hidden border-y border-[var(--color-border)] py-3">
      {/* Fade left */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-[var(--color-background)] to-transparent" />
      {/* Fade right */}
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-[var(--color-background)] to-transparent" />

      <div className="flex">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex shrink-0 gap-8"
        >
          {doubled.map((tag, i) => (
            <span
              key={i}
              className="shrink-0 text-xs font-medium uppercase tracking-widest text-[var(--color-foreground-muted)] opacity-50"
              style={{ fontFamily: "var(--font-geist-mono)" }}
            >
              {tag}
              {i < doubled.length - 1 && (
                <span className="ml-8 text-[var(--color-accent)] opacity-30">•</span>
              )}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
