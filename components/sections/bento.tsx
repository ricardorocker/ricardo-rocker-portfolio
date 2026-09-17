"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { ricardo } from "@/lib/ricardo";
import {
  Layers,
  Gauge,
  Accessibility,
  Palette,
  Zap as ZapIcon,
  Code2,
} from "lucide-react";

const areas = [
  // WEB
  {
    icon: Layers,
    title: "Landing Pages & Web Apps",
    description: "Next.js, TypeScript, Tailwind. Lighthouse 95+ on mobile — the baseline I hold every project to.",
  },
  {
    icon: Gauge,
    title: "Web Performance",
    description: "Core Web Vitals as a constraint, not an afterthought.",
  },
  {
    icon: Accessibility,
    title: "Design Systems",
    description: "Component libraries that scale. TypeScript-first, zero runtime magic.",
  },
  {
    icon: Palette,
    title: "Motion & Interaction",
    description: "Animation that serves UX. Motion + Lenis + GSAP.",
  },
  // AUTOMATION
  {
    icon: ZapIcon,
    title: "n8n Workflows",
    description: "Automate lead enrichment, CRM sync, Slack alerts, and content pipelines. Native nodes over custom code — avoids lock-in.",
  },
  {
    icon: Code2,
    title: "Python Scripts & ETL",
    description: "Data pipelines, scraping, data transformation. Scripts that run on schedule or on demand.",
  },
];

function BentoCell({
  area,
  index,
  large = false,
}: {
  area: (typeof areas)[0];
  index: number;
  large?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 transition-all hover:border-[var(--color-accent)]/50 hover:bg-[var(--color-surface-hover)] ${
        large ? "md:col-span-2 md:row-span-2" : ""
      }`}
    >
      {/* Icon */}
      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--color-accent)]/10">
        <area.icon size={20} className="text-[var(--color-accent)]" />
      </div>

      {/* Title */}
      <h3 className="mb-2 text-base font-semibold">{area.title}</h3>

      {/* Description */}
      <p className="text-sm leading-relaxed text-[var(--color-foreground-muted)]">
        {area.description}
      </p>

      {/* Hover accent line */}
      <div className="absolute bottom-0 left-0 h-px w-0 bg-[var(--color-accent)] transition-all duration-500 group-hover:w-full" />
    </motion.div>
  );
}

export function Bento() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        {/* Bento grid — asymmetric 4x2 */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:auto-rows-[200px]">
          {areas.map((area, i) => (
            <BentoCell
              key={`${area.title}-${i}`}
              area={area}
              index={i}
              large={i === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
