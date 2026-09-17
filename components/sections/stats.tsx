"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

const stats = [
  { value: "95+", suffix: "", label: "Lighthouse mobile", sub: "Typical deliverable" },
  { value: "<1s", suffix: "", label: "Page load time", sub: "Mobile, real conditions" },
  { value: "n8n", suffix: "", label: "Workflow builder", sub: "No-code + custom code" },
  { value: "Python", suffix: "", label: "ETL & scripts", sub: "Cron or on-demand" },
];

function StatCounter({ stat, index }: { stat: (typeof stats)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-8 text-center"
    >
      <div
        className="text-5xl font-bold text-[var(--color-accent)] md:text-6xl"
        style={{ fontFamily: "var(--font-geist-mono)" }}
      >
        {stat.value}
        {stat.suffix}
      </div>
      <div className="mt-2 text-sm font-medium">{stat.label}</div>
      <div className="mt-1 text-xs text-[var(--color-foreground-muted)]">{stat.sub}</div>
    </motion.div>
  );
}

export function Stats() {
  return (
    <section className="py-24 border-y border-[var(--color-border)] bg-[var(--color-surface)]">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-[var(--color-accent)]"
          >
            By the numbers
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold tracking-tight md:text-4xl"
          >
            Real metrics.
          </motion.h2>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map((stat, i) => (
            <StatCounter key={stat.label} stat={stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
