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
        "relative overflow-hidden rounded-[3rem] border-2 border-ink bg-white p-6 text-ink shadow-[7px_7px_0_#2c2e2a] transition duration-300 hover:-translate-y-1 hover:shadow-[10px_10px_0_#2c2e2a] sm:p-8",
        className
      )}
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="pointer-events-none absolute right-6 top-6 h-10 w-10 rounded-full border-2 border-ink/15" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}

export function SectionHeader({ title, subtitle, eyebrow }: { title: string; subtitle?: string; eyebrow?: string }) {
  return (
    <div className="mb-12 max-w-5xl">
      {eyebrow && (
        <p className="mb-4 w-fit rounded-full border-2 border-ink bg-white px-4 py-2 text-sm font-black uppercase tracking-[0.12em] shadow-[3px_3px_0_#2c2e2a]">
          {eyebrow}
        </p>
      )}
      <h2 className="text-[clamp(2.7rem,12vw,9.5rem)] font-black leading-[0.82] tracking-[-0.1em] text-ink">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-5 max-w-4xl text-base font-semibold leading-7 text-ink/75 sm:mt-7 sm:text-2xl sm:leading-9">
          {subtitle}
        </p>
      )}
    </div>
  );
}
