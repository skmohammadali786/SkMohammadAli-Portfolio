"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/lib/data/portfolio";
import { GlassPanel, SectionHeader } from "@/components/ui/GlassComponents";
import { ProjectCard, SkillBadge } from "@/components/ui/Cards";
import EmailDisplay from "@/components/ui/EmailDisplay";
import {
  Layout,
  Server,
  Cpu,
  Settings,
  Palette,
  Cloud,
  Github,
  Linkedin,
  Mail,
  MapPin,
  ArrowRight,
  MessageCircle,
  Mic,
  Brain,
  Shield,
  Briefcase,
  Zap,
  GraduationCap,
  Calendar,
  Instagram,
  Facebook,
  Twitter,
  Download,
  Sparkles,
  Globe2,
  Code2,
  Send,
} from "lucide-react";
import { IconBrandTelegram as Telegram } from "@tabler/icons-react";

const iconMap: Record<string, React.ComponentType<{ className?: string; size?: number | string }>> = {
  Layout,
  Server,
  Cpu,
  Settings,
  Palette,
  Cloud,
  MessageCircle,
  Mic,
  Brain,
  Shield,
  Briefcase,
  Zap,
};

const promiseCards = [
  {
    title: "No more chaos.",
    body: "I turn scattered requirements, sketches, and ideas into one polished build path with clean priorities and calm execution.",
    href: "#skills",
    label: "Skills",
  },
  {
    title: "One brief. One creator.",
    body: "From interface design and frontend systems to full-stack logic, you work with a single technical owner from start to finish.",
    href: "#projects",
    label: "Projects",
  },
  {
    title: "Speak in systems.",
    body: "Engineering discipline shapes every detail: reusable components, thoughtful motion, accessible content, and production-ready structure.",
    href: "#experience",
    label: "Experience",
  },
  {
    title: "Global, for real.",
    body: "Based in Kolkata and building for the web, I create responsive products that feel clear, fast, and human anywhere.",
    href: "#contact",
    label: "Contact",
  },
];

const stats = [
  { value: `${portfolioData.projects.length}+`, label: "featured technical projects shaped into portfolio-ready experiences." },
  { value: `${portfolioData.skills.length}+`, label: "skills across frontend, backend, creative tooling, and cloud workflows." },
  { value: "2026", label: "the year this cinematic portfolio system is tuned for modern web presence." },
];

function InsightOrb() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[520px]">
      <svg viewBox="0 0 520 520" className="h-full w-full drop-shadow-[0_40px_90px_rgba(0,242,255,0.16)]" role="img" aria-label="Abstract connected portfolio insight globe">
        <defs>
          <radialGradient id="orbFill" cx="50%" cy="42%" r="60%">
            <stop offset="0%" stopColor="#dffbff" stopOpacity="0.9" />
            <stop offset="42%" stopColor="#52e7ff" stopOpacity="0.34" />
            <stop offset="100%" stopColor="#121212" stopOpacity="0.15" />
          </radialGradient>
          <linearGradient id="lineGlow" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#00f2ff" />
            <stop offset="1" stopColor="#8b5cf6" />
          </linearGradient>
          <filter id="softGlow"><feGaussianBlur stdDeviation="6" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
        </defs>
        <circle cx="260" cy="260" r="190" fill="url(#orbFill)" stroke="rgba(255,255,255,.22)" strokeWidth="1" />
        {[120, 170, 220, 270, 320].map((y, i) => <ellipse key={y} cx="260" cy="260" rx={185 - i * 18} ry={Math.max(18, 76 - i * 9)} fill="none" stroke="rgba(255,255,255,.16)" />)}
        {[120, 180, 240, 300, 360, 420].map((x) => <path key={x} d={`M${x} 95 C ${260} 180, ${260} 340, ${520 - x} 425`} fill="none" stroke="rgba(255,255,255,.12)" />)}
        <path d="M116 292 C174 198 228 340 296 222 S405 260 430 146" fill="none" stroke="url(#lineGlow)" strokeWidth="4" strokeLinecap="round" filter="url(#softGlow)" />
        {[[116,292],[188,251],[296,222],[374,236],[430,146],[245,346],[338,332]].map(([cx, cy], index) => (
          <g key={`${cx}-${cy}`}>
            <circle cx={cx} cy={cy} r={index % 2 ? 8 : 11} fill="#081014" stroke="#a7f8ff" strokeWidth="3" />
            <circle cx={cx} cy={cy} r={index % 2 ? 3 : 4} fill="#00f2ff" />
          </g>
        ))}
      </svg>
      <div className="absolute left-4 top-10 rounded-3xl border border-white/15 bg-white/10 px-5 py-4 text-left shadow-2xl backdrop-blur-xl">
        <p className="text-xs uppercase tracking-[0.32em] text-cyan-100/70">Focus</p>
        <p className="text-2xl font-black text-white">Design + Code</p>
      </div>
      <div className="absolute bottom-8 right-2 rounded-3xl border border-cyan-200/20 bg-[#071014]/80 px-5 py-4 text-left shadow-2xl backdrop-blur-xl">
        <p className="text-xs uppercase tracking-[0.32em] text-cyan-100/70">Signal</p>
        <p className="text-2xl font-black text-cyan-100">Human-first</p>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
      <section className="grid min-h-screen items-center gap-12 pb-20 pt-32 lg:grid-cols-[1.05fr_.95fr]">
        <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-200/20 bg-cyan-100/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.28em] text-cyan-100">
            <Sparkles size={14} /> Real human interfaces
          </div>
          <h1 className="max-w-4xl text-5xl font-black leading-[0.9] tracking-[-0.08em] text-white sm:text-7xl lg:text-8xl">
            {portfolioData.name}
          </h1>
          <p className="mt-5 text-2xl font-semibold tracking-tight text-cyan-100/90 sm:text-4xl">{portfolioData.title}</p>
          <p className="mt-7 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">{portfolioData.about.split("\n")[0]}</p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a href="#projects" className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-100 px-8 py-4 font-black text-[#071014] shadow-[0_0_40px_rgba(0,242,255,.24)] transition hover:-translate-y-1">View Work <ArrowRight size={20} /></a>
            <a href="/resume.pdf" download className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/10 px-8 py-4 font-bold text-white backdrop-blur-xl transition hover:-translate-y-1 hover:border-cyan-200/40"><Download size={20} /> Download Resume</a>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.15 }}><InsightOrb /></motion.div>
      </section>

      <section className="grid gap-5 py-10 md:grid-cols-4">
        {promiseCards.map((card, index) => <GlassPanel key={card.title} delay={index * 0.06} className="group min-h-64"><a href={card.href} className="flex h-full flex-col justify-between"><div><p className="text-sm font-bold uppercase tracking-[0.24em] text-cyan-100/60">0{index + 1}</p><h3 className="mt-5 text-3xl font-black tracking-tight text-white">{card.title}</h3><p className="mt-4 text-sm leading-7 text-slate-300">{card.body}</p></div><span className="mt-8 inline-flex items-center gap-2 text-sm font-black text-cyan-100">{card.label} <ArrowRight size={16} className="transition group-hover:translate-x-1" /></span></a></GlassPanel>)}
      </section>

      <section id="about" className="py-24"><SectionHeader eyebrow="About" title="Built with engineering precision and cinematic calm." subtitle="The original portfolio data stays intact; the presentation now borrows MindMarket's editorial rhythm, rounded cards, confident spacing, and human-centered storytelling." /><GlassPanel className="text-base leading-8 text-slate-200 sm:text-lg whitespace-pre-wrap">{portfolioData.about}</GlassPanel></section>

      <section id="skills" className="py-24"><SectionHeader eyebrow="Capability network" title="Skills that connect strategy to execution." subtitle="A soft SVG-inspired grid of tools, designed like a global insight map." /><div className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">{portfolioData.skills.map((skill, index) => <SkillBadge key={skill.name} name={skill.name} icon={iconMap[skill.icon]} delay={index * 0.04} />)}</div></section>

      <section id="experience" className="py-24"><SectionHeader eyebrow="Journey" title="One path, many signals." subtitle="Professional and leadership milestones arranged as focused research cards." /><div className="space-y-5">{portfolioData.experience.map((exp, index) => <GlassPanel key={exp.role} delay={index * 0.08} className="grid gap-5 md:grid-cols-[1fr_auto]"><div><h3 className="text-2xl font-black text-white">{exp.role}</h3><p className="mt-1 font-semibold text-cyan-100/80">{exp.company}</p><p className="mt-4 leading-7 text-slate-300">{exp.description}</p></div><div className="flex h-fit items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-cyan-100"><Calendar size={16} />{exp.period}</div></GlassPanel>)}</div></section>

      <section id="education" className="py-24"><SectionHeader eyebrow="Foundation" title="Academic background." subtitle="Structured learning that supports practical full-stack problem solving." /><div className="grid gap-5 md:grid-cols-2">{portfolioData.education.map((edu, index) => <GlassPanel key={edu.degree} delay={index * 0.08}><div className="flex items-start gap-4"><div className="rounded-2xl border border-cyan-200/20 bg-cyan-100/10 p-3 text-cyan-100"><GraduationCap size={24} /></div><div><h3 className="text-xl font-black text-white">{edu.degree}</h3><p className="mt-2 text-slate-300">{edu.institution}</p><p className="mt-4 inline-flex items-center gap-2 text-sm text-cyan-100/70"><Calendar size={16} />{edu.period}</p></div></div></GlassPanel>)}</div></section>

      <section id="projects" className="py-24"><SectionHeader eyebrow="Featured Articles" title="Featured Projects" subtitle="Project cards redesigned as editorial insight tiles without changing the underlying project data." /><div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{portfolioData.projects.map((project, index) => <ProjectCard key={project.title} {...project} delay={index * 0.08} />)}</div></section>

      <section className="py-24"><div className="grid gap-6 lg:grid-cols-[.85fr_1.15fr]"><div><SectionHeader eyebrow="Numbers" title="A few numbers behind the work." subtitle="Small signals that summarize the current portfolio system." /></div><div className="grid gap-5 md:grid-cols-3">{stats.map((stat, index) => <GlassPanel key={stat.value} delay={index * 0.06}><p className="text-5xl font-black tracking-tighter text-cyan-100">{stat.value}</p><p className="mt-4 text-sm leading-7 text-slate-300">{stat.label}</p></GlassPanel>)}</div></div></section>

      <section id="contact" className="py-24"><SectionHeader eyebrow="Ready when you are" title="Let's connect." subtitle="Have a project in mind? Send a message and let’s shape it into something clear, useful, and memorable." /><div className="grid gap-6 md:grid-cols-2"><GlassPanel className="flex flex-col gap-6"><div className="flex items-center gap-4"><div className="rounded-2xl border border-cyan-200/20 bg-cyan-100/10 p-3 text-cyan-100"><Mail size={22} /></div><div><p className="text-xs uppercase tracking-[0.24em] text-slate-400">Email</p>{portfolioData.contact.emails.map((email) => <EmailDisplay key={email} email={email} className="block text-base font-semibold text-white sm:text-lg" />)}</div></div><div className="flex items-center gap-4"><div className="rounded-2xl border border-cyan-200/20 bg-cyan-100/10 p-3 text-cyan-100"><MapPin size={22} /></div><div><p className="text-xs uppercase tracking-[0.24em] text-slate-400">Location</p><p className="text-lg font-semibold text-white">{portfolioData.contact.location}</p></div></div><div className="flex flex-wrap gap-4 pt-4">{[{ icon: Github, href: portfolioData.contact.github },{ icon: Linkedin, href: portfolioData.contact.linkedin },{ icon: Twitter, href: portfolioData.contact.twitter },{ icon: Telegram, href: portfolioData.contact.telegram },{ icon: Instagram, href: portfolioData.contact.instagram },{ icon: Facebook, href: portfolioData.contact.facebook }].map((social, i) => <a key={i} href={social.href} target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/10 bg-white/10 p-3 text-slate-300 transition hover:-translate-y-1 hover:text-cyan-100"><social.icon size={22} /></a>)}</div></GlassPanel><GlassPanel><form className="space-y-4" action="https://formspree.io/f/xvzbgbrr" method="POST"><div className="grid gap-4 sm:grid-cols-2"><div><label className="mb-2 block text-xs uppercase tracking-[0.22em] text-slate-400">Name</label><input type="text" name="name" className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-200/50" placeholder="Your Name" required /></div><div><label className="mb-2 block text-xs uppercase tracking-[0.22em] text-slate-400">Email</label><input type="email" name="email" className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-200/50" placeholder="your@email.com" required /></div></div><div><label className="mb-2 block text-xs uppercase tracking-[0.22em] text-slate-400">Message</label><textarea rows={4} name="message" className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-200/50" placeholder="Tell me about your project" required /></div><button className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-cyan-100 py-4 text-sm font-black text-[#071014] transition hover:-translate-y-1"><Send size={18} /> Send Message</button></form></GlassPanel></div></section>

      <footer className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-12 text-sm text-slate-400 sm:flex-row"><p>© 2026 {portfolioData.name}. All rights reserved.</p><p className="inline-flex items-center gap-2"><Globe2 size={16} /><Code2 size={16} /> Designed as a human-first portfolio system.</p></footer>
    </div>
  );
}
