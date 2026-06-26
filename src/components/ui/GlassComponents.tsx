"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassPanelProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function GlassPanel({ children, className, delay = 0 }: GlassPanelProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay, ease: "easeOut" }}
      viewport={{ once: true, margin: "-70px" }}
      className={cn(
        "relative overflow-hidden rounded-[3rem] border-2 border-ink bg-white p-6 text-ink shadow-[7px_7px_0_#2c2e2a] transition duration-300 hover:-translate-y-1 hover:shadow-[10px_10px_0_#2c2e2a] sm:p-8",
        className
      )}
    >
      <div className="pointer-events-none absolute right-6 top-6 h-10 w-10 rounded-full border-2 border-ink/15" />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}

export function SectionHeader({ title, subtitle, eyebrow }: { title: string; subtitle?: string; eyebrow?: string }) {
  return (
    <div className="mb-12 max-w-5xl">
      {eyebrow && (
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          viewport={{ once: true }}
          className="mb-4 w-fit rounded-full border-2 border-ink bg-white px-4 py-2 text-sm font-black uppercase tracking-[0.12em] shadow-[3px_3px_0_#2c2e2a]"
        >
          {eyebrow}
        </motion.p>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-[clamp(3.8rem,9vw,9.5rem)] font-black leading-[0.82] tracking-[-0.1em] text-ink"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.08 }}
          viewport={{ once: true }}
          className="mt-7 max-w-4xl text-xl font-semibold leading-9 text-ink/75 sm:text-2xl"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
