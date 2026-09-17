"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import {
  Code2,
  Workflow,
  Bot,
  Database,
  LineChart,
  Layers,
} from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Front-End Engineering",
    description: "Landing pages, dashboards, design systems. Next.js, React, TypeScript.",
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    description: "n8n and Zapier automations. Stripe → CRM, OpenAI pipelines, ETL.",
  },
  {
    icon: Bot,
    title: "AI Integration",
    description: "OpenAI API, embeddings, RAG, chat UIs, content generation.",
  },
  {
    icon: Database,
    title: "Data & Backend",
    description: "Python scripts, Node.js APIs, PostgreSQL, FastAPI, webhooks.",
  },
  {
    icon: LineChart,
    title: "Analytics & Dashboards",
    description: "Real-time dashboards, KPI panels, Recharts, CSV automation.",
  },
  {
    icon: Layers,
    title: "Web Performance & A11y",
    description: "Lighthouse 95+, Core Web Vitals, WCAG 2.1 AA, accessibility audits.",
  },
];

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
      className="group relative overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 transition-all hover:border-[var(--color-accent)]/50 hover:bg-[var(--color-surface-hover)]"
    >
      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--color-accent)]/10">
        <service.icon size={20} className="text-[var(--color-accent)]" />
      </div>
      <h3 className="mb-2 text-base font-semibold">{service.title}</h3>
      <p className="text-sm leading-relaxed text-[var(--color-foreground-muted)]">
        {service.description}
      </p>
      <div className="absolute bottom-0 left-0 h-px w-0 bg-[var(--color-accent)] transition-all duration-500 group-hover:w-full" />
    </motion.div>
  );
}

export function Services() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 max-w-2xl">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-[var(--color-accent)]"
          >
            What I do
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold tracking-tight md:text-5xl"
          >
            Web builds.
            <br />
            Automation flows.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
