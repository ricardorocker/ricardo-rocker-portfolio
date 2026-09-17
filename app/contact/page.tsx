"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Send, CheckCircle, ExternalLink } from "lucide-react";
import { ricardo } from "@/lib/ricardo";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    project: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    // TODO: Integrate with Formspree, Resend, or other email service
    // For now: simulate submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setStatus("success");
  };

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

        <div className="grid gap-16 md:grid-cols-2">
          {/* Left: info */}
          <div>
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-[var(--color-accent)]">
              Get in touch
            </p>
            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">
              Let's talk about your project.
            </h1>
            <p className="mb-8 text-[var(--color-foreground-muted)]">
              Tell me what you're building. I'll review the scope, give you a
              realistic timeline, and let you know if I'm a good fit.
            </p>

            {/* Quick links */}
            <div className="space-y-4">
              <a
                href={ricardo.links.upwork}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-4 transition-all hover:border-[var(--color-accent)]/50 hover:bg-[var(--color-surface-hover)]"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--color-accent)]/10">
                  <ExternalLink size={18} className="text-[var(--color-accent)]" />
                </div>
                <div>
                  <div className="text-sm font-medium">Upwork</div>
                  <div className="text-xs text-[var(--color-foreground-muted)]">
                    Start a contract directly
                  </div>
                </div>
              </a>

              <a
                href={`mailto:${ricardo.links.email}`}
                className="flex items-center gap-3 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-4 transition-all hover:border-[var(--color-accent)]/50 hover:bg-[var(--color-surface-hover)]"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--color-accent)]/10">
                  <Send size={18} className="text-[var(--color-accent)]" />
                </div>
                <div>
                  <div className="text-sm font-medium">Email</div>
                  <div className="text-xs text-[var(--color-foreground-muted)]">
                    {ricardo.links.email}
                  </div>
                </div>
              </a>
            </div>

            {/* Rate note */}
            <div className="mt-8 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-4">
              <p className="text-xs text-[var(--color-foreground-muted)]">
                <strong className="text-[var(--color-foreground)]">Rate on request.</strong>{" "}
                I work hourly or fixed-price — your choice. I give realistic timelines, not optimistic ones.
              </p>
            </div>
          </div>

          {/* Right: form */}
          <div>
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-12 text-center">
                <CheckCircle size={48} className="mb-4 text-[var(--color-accent)]" />
                <h2 className="mb-2 text-xl font-semibold">Message sent.</h2>
                <p className="text-sm text-[var(--color-foreground-muted)]">
                  I'll get back to you within 24 hours. For faster response,
                  reach out on Upwork.
                </p>
                <a
                  href={ricardo.links.upwork}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 rounded-md bg-[var(--color-accent)] px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-[var(--color-accent-hover)]"
                >
                  <ExternalLink size={14} />
                  Start on Upwork
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-[var(--color-foreground-muted)]">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 text-sm transition-colors focus:border-[var(--color-accent)] focus:outline-none"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-[var(--color-foreground-muted)]">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 text-sm transition-colors focus:border-[var(--color-accent)] focus:outline-none"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-[var(--color-foreground-muted)]">
                    Project type
                  </label>
                  <select
                    value={form.project}
                    onChange={(e) => setForm({ ...form, project: e.target.value })}
                    className="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 text-sm transition-colors focus:border-[var(--color-accent)] focus:outline-none"
                  >
                    <option value="">Select project type...</option>
                    <option value="landing-page">Landing page / Web app</option>
                    <option value="automation">Automation / Workflow</option>
                    <option value="ai-integration">AI integration / Chatbot</option>
                    <option value="dashboard">Dashboard / Analytics</option>
                    <option value="design-system">Design system / Component library</option>
                    <option value="bug-fix">Bug fix / Performance audit</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-[var(--color-foreground-muted)]">
                    Message
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full resize-none rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 text-sm transition-colors focus:border-[var(--color-accent)] focus:outline-none"
                    placeholder="Tell me about your project — what you're building, timeline, and any constraints."
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[var(--color-accent)] px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-[var(--color-accent-hover)] hover:shadow-[var(--shadow-accent)] disabled:opacity-50"
                >
                  {status === "sending" ? (
                    <>
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send message
                      <Send size={14} />
                    </>
                  )}
                </button>

                {status === "error" && (
                  <p className="text-center text-sm text-red-400">
                    Something went wrong. Try reaching out via Upwork directly.
                  </p>
                )}

                <p className="mt-4 text-center text-xs text-[var(--color-foreground-muted)]">
                  Prefer async? Send a brief to{" "}
                  <a
                    href={`mailto:${ricardo.links.email}`}
                    className="text-[var(--color-accent)] underline underline-offset-2 hover:no-underline"
                  >
                    {ricardo.links.email}
                  </a>{" "}
                  — I reply within 24h on weekdays.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
