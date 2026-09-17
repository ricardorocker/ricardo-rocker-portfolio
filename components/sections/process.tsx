"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

const steps = [
  {
    n: "01",
    title: "Brief",
    description:
      "You send scope. I reply within 24h with a fixed quote.",
  },
  {
    n: "02",
    title: "Discovery",
    description:
      "Async Loom call + shared Notion doc. I send a 1-page plan.",
  },
  {
    n: "03",
    title: "Build",
    description: "Daily Loom updates. PRs visible from day 1.",
  },
  {
    n: "04",
    title: "Ship",
    description:
      "Deployed to Vercel preview. You test, iterate, approve.",
  },
  {
    n: "05",
    title: "Iterate",
    description: "14 days of free revisions for scope-locked changes.",
  },
];

function ProcessStep({
  step,
  index,
  isLast,
}: {
  step: (typeof steps)[0];
  index: number;
  isLast: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-30px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative flex gap-6"
    >
      {/* Connector line */}
      {!isLast && (
        <div className="absolute left-[19px] top-10 h-full w-px bg-[var(--color-border)]" />
      )}

      {/* Number */}
      <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-background)]">
        <span
          className="text-xs font-bold text-[var(--color-accent)]"
          style={{ fontFamily: "var(--font-geist-mono)" }}
        >
          {step.n}
        </span>
      </div>

      {/* Content */}
      <div className="pb-8">
        <h3 className="mb-1 text-base font-semibold">{step.title}</h3>
        <p className="text-sm text-[var(--color-foreground-muted)]">
          {step.description}
        </p>
      </div>
    </motion.div>
  );
}

export function Process() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-3xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-[var(--color-accent)]">
            How it works
          </p>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            From brief to launch.
          </h2>
        </motion.div>

        <div className="space-y-0">
          {steps.map((step, i) => (
            <ProcessStep
              key={step.n}
              step={step}
              index={i}
              isLast={i === steps.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
