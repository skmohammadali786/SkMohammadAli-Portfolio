"use client";

import { motion } from "framer-motion";
import { GlassPanel } from "./GlassComponents";
import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  link: string;
  delay?: number;
}

export function ProjectCard({ title, description, tags, link, delay = 0 }: ProjectCardProps) {
  const gradientId = `tile-${title.replace(/\s+/g, "-").replace(/[^a-zA-Z0-9-_]/g, "")}`;

  return (
    <GlassPanel delay={delay} className="group h-full">
      <div className="relative mb-6 aspect-[4/3] overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#071014]">
        <svg viewBox="0 0 420 315" className="absolute inset-0 h-full w-full" aria-hidden="true">
          <defs>
            <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
              <stop stopColor="#00f2ff" stopOpacity="0.34" />
              <stop offset="1" stopColor="#8b5cf6" stopOpacity="0.24" />
            </linearGradient>
          </defs>
          <rect width="420" height="315" fill="#071014" />
          <circle cx="335" cy="55" r="105" fill={`url(#${gradientId})`} />
          <path d="M34 225 C92 130 158 260 218 156 S334 175 386 82" fill="none" stroke="#a7f8ff" strokeOpacity=".75" strokeWidth="4" strokeLinecap="round" />
          <g stroke="rgba(255,255,255,.18)">{[55,95,135,175,215,255].map((y) => <path key={y} d={`M28 ${y} H392`} />)}{[70,125,180,235,290,345].map((x) => <path key={x} d={`M${x} 28 V287`} />)}</g>
          <rect x="40" y="42" width="170" height="26" rx="13" fill="rgba(255,255,255,.12)" />
          <rect x="40" y="82" width="240" height="14" rx="7" fill="rgba(255,255,255,.08)" />
          <rect x="40" y="108" width="205" height="14" rx="7" fill="rgba(255,255,255,.06)" />
        </svg>
        <div className="absolute inset-0 flex items-end justify-between p-5">
          <span className="rounded-full border border-white/15 bg-black/30 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-cyan-100 backdrop-blur-xl">Case signal</span>
          <a href={link} className="rounded-full bg-cyan-100 p-3 text-[#071014] opacity-0 transition group-hover:opacity-100" aria-label={`View ${title}`}><ExternalLink size={18} /></a>
        </div>
      </div>
      <h3 className="mb-3 text-2xl font-black tracking-tight text-white">{title}</h3>
      <p className="mb-5 text-sm leading-7 text-slate-300">{description}</p>
      <div className="flex flex-wrap gap-2">{tags.map((tag) => <span key={tag} className="rounded-full border border-cyan-100/10 bg-cyan-100/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-cyan-100/80">{tag}</span>)}</div>
    </GlassPanel>
  );
}

export function SkillBadge({ name, icon: Icon, delay = 0 }: { name: string; icon: React.ComponentType<{ className?: string; size?: number | string }>; delay?: number }) {
  return (
    <motion.div initial={{ opacity: 0, scale: 0.86 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay, ease: "easeOut" }} viewport={{ once: true, margin: "-50px" }} className="group flex flex-col items-center gap-3">
      <div className="relative flex h-20 w-20 items-center justify-center rounded-[1.6rem] border border-white/10 bg-white/10 backdrop-blur-xl transition group-hover:-translate-y-1 group-hover:border-cyan-200/40">
        <svg viewBox="0 0 80 80" className="absolute inset-0 h-full w-full" aria-hidden="true"><path d="M16 46 C27 20 44 58 64 24" fill="none" stroke="#00f2ff" strokeOpacity=".25" strokeWidth="3"/><circle cx="40" cy="40" r="31" fill="none" stroke="rgba(255,255,255,.08)"/></svg>
        <Icon className="relative z-10 text-cyan-100 drop-shadow-[0_0_18px_rgba(0,242,255,0.32)]" size={32} />
      </div>
      <span className="text-center text-xs font-black uppercase tracking-[0.14em] text-slate-300">{name}</span>
    </motion.div>
  );
}
