"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "motion/react";
import { ArrowRight, Zap } from "lucide-react";
import { ricardo } from "@/lib/ricardo";

const scrollPhrases = [
  "see selected work →",
  "trust signals below",
  "available this week",
  "reply within 24h",
];

function MagneticButton({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 150, damping: 15 });
  const springY = useSpring(y, { stiffness: 150, damping: 15 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) * 0.2);
    y.set((e.clientY - centerY) * 0.2);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <Link
        href={href}
        className="inline-flex items-center gap-2 rounded-md bg-[var(--color-accent)] px-6 py-3 text-sm font-semibold text-black transition-all hover:bg-[var(--color-accent-hover)] hover:shadow-[var(--shadow-accent-lg)]"
      >
        {children}
      </Link>
    </motion.div>
  );
}

function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);

  const springX = useSpring(cursorX, { stiffness: 500, damping: 40 });
  const springY = useSpring(cursorY, { stiffness: 500, damping: 40 });

  useEffect(() => {
    const isDesktop = window.matchMedia("(pointer: fine) and (min-width: 1024px)").matches;
    if (!isDesktop) return;

    const handleMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!visible) setVisible(true);
    };

    const handleHoverIn = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isClickable =
        target.closest("a") ||
        target.closest("button") ||
        target.closest("[role='button']");
      setHovered(!!isClickable);
    };

    const handleLeave = () => setVisible(false);
    const handleEnter = () => setVisible(true);

    window.addEventListener("mousemove", handleMove);
    document.addEventListener("mouseover", handleHoverIn);
    document.addEventListener("mouseleave", handleLeave);
    document.addEventListener("mouseenter", handleEnter);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseover", handleHoverIn);
      document.removeEventListener("mouseleave", handleLeave);
      document.removeEventListener("mouseenter", handleEnter);
    };
  }, [cursorX, cursorY, visible]);

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[9999] hidden h-6 w-6 rounded-full border-2 border-[var(--color-accent)] bg-transparent lg:block"
      style={{
        x: springX,
        y: springY,
        translateX: "-50%",
        translateY: "-50%",
        opacity: visible ? 1 : 0,
      }}
      animate={{ scale: hovered ? 1.8 : 1 }}
      transition={{ duration: 0.15 }}
    />
  );
}

export function Hero() {
  const [phraseIndex, setPhraseIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPhraseIndex((i) => (i + 1) % scrollPhrases.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const focusStr = ricardo.focusAreas
    .map((a, i) =>
      i === ricardo.focusAreas.length - 1 ? `and ${a}.` : a + ", "
    )
    .join("");

  return (
    <>
      <CustomCursor />

      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-16">
        {/* Background dot pattern */}
        <div className="absolute inset-0 bg-dot-pattern opacity-30" />

        {/* Accent glow */}
        <div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full opacity-20 blur-[100px]"
          style={{ background: "radial-gradient(ellipse, var(--color-accent) 0%, transparent 70%)" }}
        />

        <div className="relative z-10 mx-auto max-w-6xl px-6 py-24">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0 }}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-[var(--color-accent)]/30 bg-[var(--color-accent)]/10 px-4 py-1.5 text-xs font-medium text-[var(--color-accent)]">
              <Zap size={12} />
              Available for remote contracts
            </span>
          </motion.div>

          {/* Manifesto line */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="mb-6"
          >
            <span
              className="text-xs text-[var(--color-foreground-muted)] opacity-70"
              style={{ fontFamily: "var(--font-geist-mono)" }}
            >
              → Focused on: {focusStr}
            </span>
          </motion.div>

          {/* Name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-4"
          >
            <h1 className="text-sm font-medium uppercase tracking-[0.3em] text-[var(--color-foreground-muted)]">
              {ricardo.name}
            </h1>
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mb-6 text-5xl font-bold tracking-tight md:text-7xl lg:text-8xl"
            style={{ lineHeight: 1 }}
          >
            I ship production code
            <br />
            <span className="gradient-text">that ships on time.</span>
          </motion.h2>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-10 max-w-xl text-lg text-[var(--color-foreground-muted)] leading-relaxed"
          >
            {ricardo.bio.short}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap items-center gap-4"
          >
            <MagneticButton href={ricardo.links.upwork}>
              Hire me on Upwork
              <ArrowRight size={16} />
            </MagneticButton>
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 rounded-md border border-[var(--color-border)] px-6 py-3 text-sm font-medium transition-all hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
            >
              See my work
            </Link>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-20 grid grid-cols-2 gap-8 border-t border-[var(--color-border)] pt-8 md:grid-cols-4"
          >
            {[
              { value: "6+", label: "Years", sub: "building for US/EU" },
              { value: "30+", label: "Contracts", sub: "shipped" },
              { value: "$150K+", label: "Lifetime", sub: "billed (Upwork)" },
              { value: "24h", label: "Reply time", sub: "on weekday messages" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl font-bold text-[var(--color-accent)]" style={{ fontFamily: "var(--font-geist-mono)" }}>
                  {stat.value}
                </div>
                <div className="mt-1 text-sm font-medium">{stat.label}</div>
                <div className="mt-0.5 text-xs text-[var(--color-foreground-muted)]">{stat.sub}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Rotating scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2">
            <AnimatePresence mode="wait">
              <motion.span
                key={phraseIndex}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.4 }}
                className="text-xs text-[var(--color-foreground-muted)]"
                style={{ fontFamily: "var(--font-geist-mono)" }}
              >
                {scrollPhrases[phraseIndex]}
              </motion.span>
            </AnimatePresence>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              className="h-8 w-px bg-[var(--color-accent)]"
            />
          </div>
        </motion.div>
      </section>
    </>
  );
}
