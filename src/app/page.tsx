import { portfolioData } from "@/lib/data/portfolio";
import { ArrowRight, Download } from "lucide-react";

import DeferredSectionsSlot from "@/components/home/DeferredSectionsSlot";

function PeopleIllustration() {
  return (
    <div className="relative mx-auto w-full max-w-[620px]">
      <svg viewBox="0 0 680 520" className="w-full" role="img" aria-label="Hand drawn connected people illustration">
        <defs>
          <filter id="wobble"><feTurbulence type="fractalNoise" baseFrequency="0.012" numOctaves="1" result="noise"/><feDisplacementMap in="SourceGraphic" in2="noise" scale="1.7"/></filter>
        </defs>
        <path d="M76 367 C171 258 246 440 353 287 C447 151 526 293 607 143" fill="none" stroke="#2c2e2a" strokeWidth="10" strokeLinecap="round" filter="url(#wobble)" />
        <path d="M76 367 C171 258 246 440 353 287 C447 151 526 293 607 143" fill="none" stroke="#8ed462" strokeWidth="5" strokeLinecap="round" />
        <g transform="translate(34 292)">
          <ellipse cx="86" cy="104" rx="78" ry="34" fill="#f5e211" />
          <rect x="40" y="22" width="92" height="116" rx="45" fill="#8ed462" stroke="#2c2e2a" strokeWidth="6" />
          <circle cx="86" cy="-4" r="42" fill="#ff8b64" stroke="#2c2e2a" strokeWidth="6" />
          <path d="M66 -7 Q86 8 107 -7" fill="none" stroke="#2c2e2a" strokeWidth="5" strokeLinecap="round" />
          <circle cx="72" cy="-13" r="4" fill="#2c2e2a" /><circle cx="101" cy="-13" r="4" fill="#2c2e2a" />
        </g>
        <g transform="translate(252 190)">
          <ellipse cx="88" cy="190" rx="94" ry="38" fill="#75b7ff" />
          <path d="M22 84 C42 18 132 10 156 84 L141 185 H37 Z" fill="#ffffff" stroke="#2c2e2a" strokeWidth="6" />
          <circle cx="90" cy="36" r="45" fill="#ffd19c" stroke="#2c2e2a" strokeWidth="6" />
          <path d="M60 22 C78 -20 129 5 133 40" fill="none" stroke="#2c2e2a" strokeWidth="13" strokeLinecap="round" />
          <path d="M69 43 Q91 58 115 43" fill="none" stroke="#2c2e2a" strokeWidth="5" strokeLinecap="round" />
        </g>
        <g transform="translate(492 82)">
          <ellipse cx="62" cy="242" rx="82" ry="34" fill="#8ed462" opacity=".9" />
          <rect x="18" y="80" width="92" height="158" rx="46" fill="#f5e211" stroke="#2c2e2a" strokeWidth="6" />
          <circle cx="64" cy="43" r="42" fill="#b88cff" stroke="#2c2e2a" strokeWidth="6" />
          <path d="M42 42 Q64 58 87 42" fill="none" stroke="#2c2e2a" strokeWidth="5" strokeLinecap="round" />
          <circle cx="50" cy="34" r="4" fill="#2c2e2a" /><circle cx="78" cy="34" r="4" fill="#2c2e2a" />
        </g>
        {[[78,367],[353,287],[607,143]].map(([cx, cy]) => <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="15" fill="#ffffff" stroke="#2c2e2a" strokeWidth="6" />)}
      </svg>
      <div className="absolute -bottom-5 left-3 rounded-full border-2 border-ink bg-white px-5 py-3 text-sm font-black text-ink shadow-[5px_5px_0_#2c2e2a] sm:left-16">Design • Code • Systems</div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="relative overflow-hidden text-ink">
      <section className="mx-auto grid min-h-screen max-w-[1500px] items-center gap-12 px-4 pb-16 pt-28 sm:px-8 sm:pb-20 sm:pt-32 lg:grid-cols-[1.05fr_.95fr]">
        <div className="animate-hero-enter">
          <p className="mb-5 w-fit rounded-full border-2 border-ink bg-white px-5 py-2 text-sm font-black uppercase tracking-[0.12em] shadow-[4px_4px_0_#2c2e2a]">{portfolioData.title}</p>
          <h1 className="max-w-5xl text-[clamp(3.15rem,15vw,12.5rem)] sm:text-[clamp(5.5rem,13vw,13.5rem)] font-black leading-[0.84] tracking-[-0.09em] sm:leading-[0.78] sm:tracking-[-0.1em] text-ink">
            SK Mohammad Ali
          </h1>
          <h2 className="mt-5 max-w-4xl text-[clamp(1.35rem,4vw,3.25rem)] font-black leading-[0.95] tracking-[-0.06em] text-ink">Full-Stack Developer, Electrical Engineering Student, IoT Project Builder & Practical Systems Maker in Kolkata</h2>
          <p className="mt-6 max-w-3xl text-base font-semibold leading-7 text-ink/80 sm:mt-8 sm:text-2xl sm:leading-9">{portfolioData.about.split("\n")[0]}</p>
          <div className="mt-8 flex flex-col gap-3 min-[420px]:flex-row min-[420px]:flex-wrap sm:mt-10 sm:gap-4">
            <a href="#projects" className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-ink bg-fresh px-5 py-3 text-sm font-black sm:px-8 sm:py-4 sm:text-lg text-ink shadow-[5px_5px_0_#2c2e2a] transition hover:-translate-y-1 hover:shadow-[8px_8px_0_#2c2e2a]">View Work <ArrowRight size={18} /></a>
            <a href="/resume.pdf" download className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-ink bg-white px-5 py-3 text-sm font-black sm:px-8 sm:py-4 sm:text-lg text-ink shadow-[5px_5px_0_#2c2e2a] transition hover:-translate-y-1 hover:shadow-[8px_8px_0_#2c2e2a]"><Download size={18} /> Download Resume</a>
          </div>
        </div>
        <div className="animate-hero-enter [animation-delay:120ms]">
          <PeopleIllustration />
        </div>
      </section>

      <DeferredSectionsSlot />
    </div>
  );
}
