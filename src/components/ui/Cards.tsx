import type { ComponentType } from "react";
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
  const palette = ["#8ed462", "#f5e211", "#75b7ff", "#ff8b64"];
  const accent = palette[title.length % palette.length];

  return (
    <GlassPanel delay={delay} className="group bg-white">
      <div className="relative mb-7 aspect-[1.05/1] overflow-hidden rounded-[2.5rem] border-2 border-ink bg-cream">
        <svg viewBox="0 0 420 400" className="absolute inset-0 h-full w-full" aria-hidden="true">
          <rect width="420" height="400" fill="#f5f1e4" />
          <path d="M34 288 C94 190 158 318 218 176 S330 178 388 76" fill="none" stroke="#2c2e2a" strokeWidth="10" strokeLinecap="round" />
          <path d="M34 288 C94 190 158 318 218 176 S330 178 388 76" fill="none" stroke={accent} strokeWidth="5" strokeLinecap="round" />
          <circle cx="94" cy="190" r="46" fill={accent} stroke="#2c2e2a" strokeWidth="6" />
          <circle cx="218" cy="176" r="56" fill="#ffffff" stroke="#2c2e2a" strokeWidth="6" />
          <circle cx="330" cy="178" r="42" fill="#f5e211" stroke="#2c2e2a" strokeWidth="6" />
          <rect x="42" y="38" width="192" height="34" rx="17" fill="#ffffff" stroke="#2c2e2a" strokeWidth="5" />
          <rect x="42" y="92" width="112" height="18" rx="9" fill="#2c2e2a" opacity=".18" />
          <rect x="42" y="122" width="172" height="18" rx="9" fill="#2c2e2a" opacity=".12" />
          <path d="M256 283 Q292 236 330 283 T404 283" fill="none" stroke="#2c2e2a" strokeWidth="6" strokeLinecap="round" />
        </svg>
        <a href={link} className="absolute bottom-5 right-5 rounded-full border-2 border-ink bg-white p-4 text-ink shadow-[4px_4px_0_#2c2e2a] transition group-hover:-translate-y-1" aria-label={`View ${title}`}><ExternalLink size={20} /></a>
      </div>
      <h3 className="mb-4 text-3xl font-black sm:text-4xl leading-none tracking-[-0.08em]">{title}</h3>
      <p className="mb-6 text-base font-semibold leading-7 sm:text-lg sm:leading-8 text-ink/76">{description}</p>
      <div className="flex flex-wrap gap-2">{tags.map((tag) => <span key={tag} className="rounded-full border-2 border-ink bg-cream px-3 py-1 text-xs font-black uppercase tracking-[0.08em]">{tag}</span>)}</div>
    </GlassPanel>
  );
}

export function SkillBadge({ name, icon: Icon, delay = 0 }: { name: string; icon: ComponentType<{ className?: string; size?: number | string }>; delay?: number }) {
  return (
    <div className="group rounded-[2.25rem] border-2 border-ink bg-white p-5 text-center shadow-[5px_5px_0_#2c2e2a] transition hover:-translate-y-1 hover:bg-fresh" style={{ animationDelay: `${delay}s` }}>
      <div className="relative mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full border-2 border-ink bg-cream">
        <svg viewBox="0 0 80 80" className="absolute inset-0 h-full w-full" aria-hidden="true"><path d="M13 44 C25 17 45 63 67 25" fill="none" stroke="#8ed462" strokeWidth="6" strokeLinecap="round"/><circle cx="40" cy="40" r="30" fill="none" stroke="#2c2e2a" strokeOpacity=".2" strokeWidth="2"/></svg>
        <Icon className="relative z-10 text-ink" size={32} />
      </div>
      <span className="text-sm font-black uppercase tracking-[-0.02em]">{name}</span>
    </div>
  );
}
