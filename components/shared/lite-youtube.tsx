"use client";

import { useState } from "react";

type LiteYouTubeProps = {
  videoId: string;
  title: string;
  thumbnailUrl?: string;
  embedUrl?: string;
  className?: string;
};

/**
 * Lite YouTube embed: serves a static thumbnail by default, swaps to the
 * iframe only after the user clicks. Keeps LCP fast and avoids the 700KB+
 * iframe payload on initial load.
 */
export function LiteYouTube({
  videoId,
  title,
  thumbnailUrl,
  embedUrl,
  className,
}: LiteYouTubeProps) {
  const [active, setActive] = useState(false);

  const src =
    embedUrl ?? `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`;
  const poster =
    thumbnailUrl ?? `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`;

  if (active) {
    return (
      <div className={className}>
        <iframe
          src={src}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
          className="aspect-video w-full rounded-2xl border border-[var(--color-border)]"
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setActive(true)}
      aria-label={`Play video: ${title}`}
      className={
        "group relative aspect-video w-full overflow-hidden rounded-2xl border border-[var(--color-border)] bg-black text-left transition-all hover:border-[var(--color-accent)] " +
        (className ?? "")
      }
    >
      {/* Thumbnail */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={poster}
        alt={title}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover opacity-90 transition-opacity group-hover:opacity-75"
      />

      {/* Play button */}
      <span className="absolute inset-0 flex items-center justify-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[var(--color-accent)] text-black shadow-[var(--shadow-accent-lg)] transition-transform group-hover:scale-110 md:h-20 md:w-20">
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
            className="ml-1 h-7 w-7 md:h-8 md:w-8"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </span>
      </span>

      {/* Title overlay */}
      <span className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 md:p-6">
        <span className="block text-xs font-medium uppercase tracking-[0.2em] text-[var(--color-accent)]">
          Watch the intro
        </span>
        <span className="mt-1 block text-sm font-semibold text-white md:text-base">
          {title}
        </span>
      </span>
    </button>
  );
}
