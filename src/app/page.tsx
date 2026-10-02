import { portfolioData } from "@/lib/data/portfolio";
import { ArrowRight, Download, Cpu, Code2, Globe2, Sparkles, Terminal } from "lucide-react";
import DeferredSectionsSlot from "@/components/home/DeferredSectionsSlot";

function InteractiveWorkbenchSpecimen() {
  return (
    <div className="relative mx-auto w-full max-w-[620px]">
      <div className="relative rounded-3xl border border-white/10 bg-slate-950/80 p-6 shadow-2xl backdrop-blur-xl">
        {/* Terminal Header */}
        <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-3">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-rose-500/80" />
            <span className="h-3 w-3 rounded-full bg-amber-500/80" />
            <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
            <span className="ml-2 font-mono text-xs text-slate-400">skmohammadali.sys -- v2.8</span>
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-0.5 font-mono text-[11px] text-emerald-400 border border-emerald-500/20">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            SYSTEM OPERATIONAL
          </span>
        </div>

        {/* Specimen Content */}
        <div className="space-y-4 font-mono text-xs">
          <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-4">
            <div className="flex items-center justify-between text-slate-400">
              <span className="flex items-center gap-2 text-sky-400 font-semibold">
                <Cpu size={16} /> CORE FOCUS
              </span>
              <span className="text-[10px]">B.Tech EE (2024–2028)</span>
            </div>
            <p className="mt-2 text-slate-200 font-sans text-sm leading-relaxed">
              Electrical Engineering • IoT Hardware • Full-Stack Systems Architecture
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-3">
              <div className="flex items-center gap-2 text-slate-400">
                <Code2 size={14} className="text-purple-400" />
                <span className="text-[11px] font-semibold text-slate-300">Web Stack</span>
              </div>
              <p className="mt-1 text-[11px] text-slate-400 font-sans">Next.js, TypeScript, Tailwind, REST</p>
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-3">
              <div className="flex items-center gap-2 text-slate-400">
                <Globe2 size={14} className="text-emerald-400" />
                <span className="text-[11px] font-semibold text-slate-300">Embedded & IoT</span>
              </div>
              <p className="mt-1 text-[11px] text-slate-400 font-sans">Microcontrollers, Voice Modules, Sensors</p>
            </div>
          </div>

          {/* Interactive Code / Status console */}
          <div className="rounded-xl border border-slate-800/80 bg-slate-950 p-4 text-slate-300">
            <div className="flex items-center gap-2 text-slate-500 mb-2">
              <Terminal size={14} className="text-sky-400" />
              <span>active_mission.ts</span>
            </div>
            <p className="text-sky-300 font-mono text-[11px]">
              <span className="text-purple-400">const</span> builder = {"{"}
              <br />
              &nbsp;&nbsp;location: <span className="text-emerald-300">&quot;Kolkata, India&quot;</span>,
              <br />
              &nbsp;&nbsp;mindset: <span className="text-amber-300">&quot;Practical, scalable, high-craft&quot;</span>,
              <br />
              &nbsp;&nbsp;status: <span className="text-sky-300">&quot;Building real-world web & hardware systems&quot;</span>
              <br />
              {"}"};
            </p>
          </div>
        </div>

        {/* Specimen Badge */}
        <div className="mt-4 flex items-center justify-between text-xs text-slate-400 pt-2 border-t border-slate-800/60 font-sans">
          <span className="inline-flex items-center gap-1.5 text-slate-300 font-medium">
            <Sparkles size={14} className="text-sky-400" /> Design • Code • Hardware Systems
          </span>
          <span className="text-slate-500">Aliah University</span>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="relative overflow-hidden text-slate-100">
      <section className="mx-auto grid min-h-screen max-w-[1500px] items-center gap-12 px-4 pb-16 pt-28 sm:px-8 sm:pb-20 sm:pt-36 lg:grid-cols-[1.1fr_.9fr]">
        <div className="animate-hero-enter">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-sky-400">
            <span className="h-2 w-2 rounded-full bg-sky-400 animate-ping" />
            {portfolioData.title}
          </div>

          <h1 className="max-w-5xl text-[clamp(2.8rem,8vw,6.5rem)] font-extrabold leading-[0.95] tracking-tight text-slate-100">
            SK Mohammad Ali
          </h1>

          <h2 className="mt-5 max-w-3xl text-[clamp(1.2rem,2.8vw,2.2rem)] font-bold leading-snug text-sky-300/90">
            Full-Stack Developer, Electrical Engineering Student, IoT Project Builder & Practical Systems Maker in Kolkata
          </h2>

          <p className="mt-6 max-w-2xl text-base font-normal leading-relaxed text-slate-300 sm:mt-8 sm:text-lg sm:leading-relaxed">
            {portfolioData.about.split("\n")[0]}
          </p>

          <div className="mt-8 flex flex-col gap-3.5 min-[420px]:flex-row min-[420px]:flex-wrap sm:mt-10 sm:gap-4">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-sky-500 px-7 py-3.5 text-sm font-bold text-slate-950 shadow-lg shadow-sky-500/25 transition hover:bg-sky-400 hover:shadow-sky-400/40 sm:text-base"
            >
              <span>View Work</span>
              <ArrowRight size={18} />
            </a>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-slate-900/80 px-7 py-3.5 text-sm font-bold text-slate-100 backdrop-blur-md shadow-lg transition hover:border-white/40 hover:bg-slate-800 sm:text-base"
            >
              <Download size={18} />
              <span>Download Resume</span>
            </a>
          </div>
        </div>

        <div className="animate-hero-enter [animation-delay:120ms]">
          <InteractiveWorkbenchSpecimen />
        </div>
      </section>

      <DeferredSectionsSlot />
    </div>
  );
}
