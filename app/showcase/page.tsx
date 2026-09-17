import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { ricardo } from "@/lib/ricardo";

export const metadata: Metadata = {
  title: `Showcase — ${ricardo.name}`,
  description: "Work samples: front-end engineering, automation, and AI integration.",
};

export default function ShowcasePage() {
  const projects = ricardo.showcaseProjects;

  return (
    <div className="min-h-screen pt-24 pb-24">
      <div className="mx-auto max-w-6xl px-6">
        <Link
          href="/"
          className="mb-12 inline-flex items-center gap-2 text-sm text-[var(--color-foreground-muted)] transition-colors hover:text-[var(--color-accent)]"
        >
          <ArrowLeft size={14} />
          Back
        </Link>

        <div className="mb-16">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-[var(--color-accent)]">
            Work samples
          </p>
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
            Selected work
          </h1>
          <p className="mt-3 max-w-xl text-[var(--color-foreground-muted)]">
            Front-end builds, automations, and AI tools shipped for real clients.
          </p>
        </div>

        {/* Front-end projects */}
        <div className="mb-8">
          <h2 className="mb-6 text-sm font-semibold uppercase tracking-widest text-[var(--color-foreground-muted)]">
            Front-End Engineering
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects
              .filter((p) => !p.isAutomation)
              .map((project, idx) => (
                <div
                  key={`${project.title}-${idx}`}
                  className="group overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] transition-all hover:border-[var(--color-accent)]/50"
                >
                  <div className="aspect-video overflow-hidden bg-[var(--color-background)]">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-semibold">{project.title}</h3>
                    <p className="mt-1 text-sm text-[var(--color-foreground-muted)]">
                      {project.description}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {project.tags.map((tag, tagIdx) => (
                        <span
                          key={`${project.title}-${idx}-tag-${tagIdx}`}
                          className="rounded-full border border-[var(--color-border)] bg-[var(--color-background)] px-2 py-0.5 text-xs font-mono text-[var(--color-foreground-muted)]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="mt-4 flex gap-4">
                      {project.url ? (
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs text-[var(--color-foreground-muted)] transition-colors hover:text-[var(--color-accent)]"
                        >
                          <ExternalLink size={12} />
                          Demo
                        </a>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 text-xs text-[var(--color-foreground-muted)]">
                          Demo on request
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* Automation projects */}
        <div>
          <h2 className="mb-6 text-sm font-semibold uppercase tracking-widest text-[var(--color-foreground-muted)]">
            Automation &amp; AI
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {projects
              .filter((p) => p.isAutomation)
              .map((project, idx) => (
                <div
                  key={`${project.title}-${idx}`}
                  className="group overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] transition-all hover:border-[var(--color-accent)]/50"
                >
                  <div className="aspect-video overflow-hidden bg-[var(--color-background)]">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-semibold">{project.title}</h3>
                    <p className="mt-1 text-sm text-[var(--color-foreground-muted)]">
                      {project.description}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {project.tags.map((tag, tagIdx) => (
                        <span
                          key={`${project.title}-${idx}-tag-${tagIdx}`}
                          className="rounded-full border border-[var(--color-border)] bg-[var(--color-background)] px-2 py-0.5 text-xs font-mono text-[var(--color-foreground-muted)]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
