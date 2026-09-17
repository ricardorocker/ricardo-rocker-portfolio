"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ricardo } from "@/lib/ricardo";

export function Cta() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-2xl border border-[var(--color-accent)]/30 bg-[var(--color-surface)] p-12 text-center"
        >
          {/* Background glow */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[200px] opacity-20 blur-[80px] rounded-full"
            style={{ background: "var(--color-accent)" }}
          />

          <div className="relative z-10">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-[var(--color-accent)]">
              Ready when you are
            </p>
            <h2 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">
              Got a project in mind?
            </h2>
            <p className="mx-auto mb-10 max-w-lg text-[var(--color-foreground-muted)]">
              Tell me about your project. I'll review the scope, flag any red flags,
              and give you a realistic timeline — no template proposal.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href={ricardo.links.upwork}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-[var(--color-accent)] px-8 py-3.5 text-sm font-semibold text-black transition-all hover:bg-[var(--color-accent-hover)] hover:shadow-[var(--shadow-accent-lg)]"
              >
                Hire on Upwork
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-md border border-[var(--color-border)] px-8 py-3.5 text-sm font-medium transition-all hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
              >
                Send a brief
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
