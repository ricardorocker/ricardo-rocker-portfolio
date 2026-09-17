"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What's your typical rate?",
    a: "I work hourly or fixed-price depending on scope. Rate varies by project complexity and timeline — contact me with your requirements for a quote.",
  },
  {
    q: "How fast can you deliver?",
    a: "A landing page with clear scope ships in 7 days. Most n8n workflows take 3–5 days. Complex projects take longer — timeline depends on scope.",
  },
  {
    q: "What do you automate with n8n?",
    a: "CRM sync, lead enrichment, Slack notifications, email sequences, content pipelines, scheduled data exports, and more.",
  },
  {
    q: "Do you work with design files (Figma, Sketch)?",
    a: "Yes. I can implement from Figma, Sketch, or a written brief. If you have a design, I'll review it and flag any UX or performance concerns before I start.",
  },
  {
    q: "What happens after the project ships?",
    a: "2 weeks of bug fixes included, for scope-locked projects. After that, I offer a retainer for ongoing work.",
  },
  {
    q: "What's your stack?",
    a: "Web: React, TypeScript, Next.js, Tailwind CSS, Motion, Lenis. Automation: n8n for workflows, Python for scripts and ETL.",
  },
];

function FaqItem({ faq, index }: { faq: (typeof faqs)[0]; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-[var(--color-border)]">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-5 text-left transition-colors hover:text-[var(--color-accent)]"
      >
        <span className="text-sm font-medium md:text-base">{faq.q}</span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="ml-4 shrink-0 text-[var(--color-foreground-muted)]"
        >
          <ChevronDown size={16} />
        </motion.div>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-sm leading-relaxed text-[var(--color-foreground-muted)]">
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Faq() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-3xl px-6">
        <div className="mb-12">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-[var(--color-accent)]"
          >
            FAQ
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold tracking-tight md:text-4xl"
          >
            Common questions.
          </motion.h2>
        </div>

        <div>
          {faqs.map((faq, i) => (
            <FaqItem key={i} faq={faq} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
