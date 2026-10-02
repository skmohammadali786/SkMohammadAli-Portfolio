import type { ComponentType } from "react";
import { GlassPanel } from "./GlassComponents";
import { ExternalLink, ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  link: string;
  delay?: number;
}

export function ProjectCard({ title, description, tags, link, delay = 0 }: ProjectCardProps) {
  return (
    <GlassPanel delay={delay} className="group bg-slate-900/70 border border-white/10 hover:border-sky-500/40 transition-all">
      <div className="relative mb-6 aspect-[1.4/1] overflow-hidden rounded-2xl border border-white/10 bg-slate-950 p-6 flex flex-col justify-between">
        {/* Subtle grid pattern background */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "radial-gradient(rgba(56, 189, 248, 0.4) 1px, transparent 1px)",
            backgroundSize: "20px 20px"
          }}
        />

        {/* Top Header inside image card */}
        <div className="relative z-10 flex items-center justify-between">
          <span className="inline-flex items-center gap-1.5 rounded-md border border-sky-500/30 bg-sky-500/10 px-2.5 py-1 text-[11px] font-mono font-semibold text-sky-300">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            ENGINEERING WORK
          </span>
          <a
            href={link}
            className="rounded-full border border-white/10 bg-slate-900/80 p-2.5 text-slate-300 transition hover:border-sky-400 hover:bg-sky-500 hover:text-slate-950"
            aria-label={`View ${title}`}
            target={link.startsWith("http") ? "_blank" : undefined}
            rel="noopener noreferrer"
          >
            <ArrowUpRight size={18} />
          </a>
        </div>

        {/* Dynamic Graphic representation */}
        <div className="relative z-10 my-auto flex items-center justify-center py-4">
          <div className="relative flex h-24 w-full items-center justify-center rounded-xl border border-slate-800 bg-slate-900/80 px-4">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-500/50 to-transparent" />
            <svg viewBox="0 0 320 80" className="h-16 w-full text-sky-400/80" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M10 40 Q 80 10, 160 40 T 310 40" strokeDasharray="4 4" />
              <circle cx="80" cy="25" r="5" fill="#38bdf8" />
              <circle cx="160" cy="40" r="7" fill="#a78bfa" />
              <circle cx="240" cy="55" r="5" fill="#34d399" />
            </svg>
          </div>
        </div>

        {/* Tags row in card header */}
        <div className="relative z-10 flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <span key={tag} className="rounded-md border border-white/10 bg-slate-900/90 px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider text-slate-300">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <h3 className="mb-3 text-2xl font-bold tracking-tight text-slate-100 group-hover:text-sky-300 transition-colors sm:text-3xl">
        {title}
      </h3>
      <p className="mb-6 text-sm font-normal leading-relaxed text-slate-400 sm:text-base sm:leading-relaxed">
        {description}
      </p>

      <a
        href={link}
        className="inline-flex items-center gap-2 text-sm font-semibold text-sky-400 hover:text-sky-300 transition"
      >
        <span>Explore details</span>
        <ExternalLink size={15} />
      </a>
    </GlassPanel>
  );
}

export function SkillBadge({ name, icon: Icon, delay = 0 }: { name: string; icon: ComponentType<{ className?: string; size?: number | string }>; delay?: number }) {
  return (
    <div
      className="group relative flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-slate-900/60 p-5 text-center shadow-lg transition-all duration-300 hover:border-sky-500/40 hover:bg-slate-900/90 hover:-translate-y-1"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-xl border border-white/10 bg-slate-950 text-sky-400 transition-transform duration-300 group-hover:scale-110 group-hover:border-sky-500/50 group-hover:bg-sky-500/10">
        <Icon size={26} />
      </div>
      <span className="text-xs font-semibold text-slate-200 group-hover:text-white">
        {name}
      </span>
    </div>
  );
}
