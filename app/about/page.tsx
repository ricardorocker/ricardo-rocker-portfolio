import type { Metadata } from "next";
import Link from "next/link";
import { ricardo } from "@/lib/ricardo";
import { ArrowLeft, MapPin, Calendar } from "lucide-react";

export const metadata: Metadata = {
  title: `About — ${ricardo.name}`,
  description: `Learn more about ${ricardo.name}, ${ricardo.role}.`,
};

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-24 pb-24">
      <div className="mx-auto max-w-4xl px-6">
        {/* Back link */}
        <Link
          href="/"
          className="mb-12 inline-flex items-center gap-2 text-sm text-[var(--color-foreground-muted)] transition-colors hover:text-[var(--color-accent)]"
        >
          <ArrowLeft size={14} />
          Back
        </Link>

        {/* Header */}
        <div className="mb-16">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-[var(--color-accent)]">
            About me
          </p>
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
            {ricardo.name}
          </h1>
          <p className="mt-2 text-lg text-[var(--color-foreground-muted)]">
            {ricardo.role}
          </p>

          <div className="mt-4 flex flex-wrap gap-4 text-sm text-[var(--color-foreground-muted)]">
            <span className="flex items-center gap-1.5">
              <MapPin size={14} />
              Brazil (UTC-3)
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar size={14} />
              10+ years experience
            </span>
          </div>
        </div>

        {/* Bio */}
        <div className="mb-16 space-y-6 leading-relaxed text-[var(--color-foreground-muted)]">
          {ricardo.bio.long.split("\n\n").map((paragraph, i) => (
            <p key={i}>{paragraph.trim()}</p>
          ))}
        </div>

        {/* Experience timeline */}
        <div className="mb-16">
          <h2 className="mb-8 text-xl font-semibold">Experience</h2>
          <div className="space-y-0">
            {ricardo.experience.map((exp, i) => (
              <div
                key={i}
                className="relative border-l border-[var(--color-border)] pl-6 pb-8 last:pb-0"
              >
                {/* Dot */}
                <div className="absolute -left-[5px] top-1 h-2.5 w-2.5 rounded-full bg-[var(--color-accent)]" />

                <div className="text-xs font-medium uppercase tracking-widest text-[var(--color-accent)]">
                  {exp.period}
                </div>
                <div className="mt-1 font-semibold">{exp.role}</div>
                <div className="mt-1 text-sm text-[var(--color-foreground-muted)]">
                  {exp.context}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Areas */}
        <div>
          <h2 className="mb-6 text-xl font-semibold">Areas of expertise</h2>
          <div className="flex flex-wrap gap-2">
            {ricardo.areas.map((area) => (
              <span
                key={area}
                className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-1.5 text-sm"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
