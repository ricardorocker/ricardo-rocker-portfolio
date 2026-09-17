"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

const signals = [
  {
    value: "30+",
    label: "Contracts shipped",
    sub: "across Upwork",
  },
  {
    value: "4.9",
    label: "Upwork rating",
    sub: "verified by Upwork",
  },
  {
    value: "24h",
    label: "Avg reply time",
    sub: "on weekday messages",
  },
  {
    value: "95+",
    label: "Lighthouse mobile score",
    sub: "on shipped builds",
  },
];

function TrustItem({
  signal,
  index,
}: {
  signal: (typeof signals)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-30px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="text-center"
    >
      <div
        className="text-5xl font-bold text-[var(--color-accent)] md:text-6xl"
        style={{ fontFamily: "var(--font-geist-mono)" }}
      >
        {signal.value}
      </div>
      <div className="mt-2 text-sm font-medium">{signal.label}</div>
      <div className="mt-1 text-xs text-[var(--color-foreground-muted)]">
        {signal.sub}
      </div>
    </motion.div>
  );
}

export function TrustSignals() {
  return (
    <section className="border-y border-[var(--color-border)] bg-[var(--color-surface)] py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {signals.map((signal, i) => (
            <TrustItem key={signal.label} signal={signal} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
