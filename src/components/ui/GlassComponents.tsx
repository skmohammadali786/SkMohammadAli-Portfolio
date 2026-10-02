import { cn } from "@/lib/utils";

interface GlassPanelProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function GlassPanel({ children, className, delay = 0 }: GlassPanelProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/60 p-6 text-slate-100 backdrop-blur-xl shadow-xl shadow-slate-950/40 transition duration-300 hover:border-sky-500/30 hover:shadow-2xl hover:shadow-sky-950/20 sm:p-8",
        className
      )}
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="pointer-events-none absolute right-6 top-6 h-12 w-12 rounded-full border border-white/5 bg-white/[0.02]" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}

export function SectionHeader({ title, subtitle, eyebrow }: { title: string; subtitle?: string; eyebrow?: string }) {
  return (
    <div className="mb-12 max-w-5xl">
      {eyebrow && (
        <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-sky-500/20 bg-sky-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-sky-400">
          <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
          {eyebrow}
        </p>
      )}
      <h2 className="text-[clamp(2.4rem,7vw,5.5rem)] font-extrabold leading-[0.92] tracking-tight text-slate-100">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-5 max-w-3xl text-base font-normal leading-relaxed text-slate-400 sm:mt-6 sm:text-xl sm:leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
