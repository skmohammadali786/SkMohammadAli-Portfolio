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
    body: "Scattered ideas, technical decisions, and product details become one calm build plan with clear priorities and steady execution.",
    href: "#skills",
    label: "Explore skills",
  },
  {
    title: "One brief. One maker.",
    body: "From UI direction and component systems to backend logic, the portfolio shows a single owner who can carry work from concept to launch.",
    href: "#projects",
    label: "View projects",
  },
  {
    title: "Speak their language.",
    body: "Engineering, design, automation, and cloud work each need a different vocabulary. The work is organized so every signal stays readable.",
    href: "#experience",
    label: "See journey",
  },
  {
    title: "Global, for real.",
    body: "Built in Kolkata for a web without borders: responsive, accessible, direct, and ready for conversations across communities and time zones.",
    href: "#contact",
    label: "Get in touch",
  },
];

const stats = [
  { value: `${portfolioData.projects.length}+`, label: "featured projects" },
  { value: `${portfolioData.skills.length}+`, label: "technical skills" },
  { value: "1", label: "focused creator" },
];

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

function MarqueeStrip() {
  const items = portfolioData.skills.map((skill) => skill.name);
  return (
    <div className="overflow-hidden border-y-2 border-ink bg-fresh py-4 text-ink">
      <div className="flex min-w-max animate-[scroll-left_28s_linear_infinite] gap-10 text-2xl font-black uppercase tracking-[-0.04em] sm:text-4xl">
        {[...items, ...items].map((item, index) => <span key={`${item}-${index}`}>{item}</span>)}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="relative overflow-hidden text-ink">
      <section className="mx-auto grid min-h-screen max-w-[1500px] items-center gap-12 px-4 pb-16 pt-28 sm:px-8 sm:pb-20 sm:pt-32 lg:grid-cols-[1.05fr_.95fr]">
        <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <p className="mb-5 w-fit rounded-full border-2 border-ink bg-white px-5 py-2 text-sm font-black uppercase tracking-[0.12em] shadow-[4px_4px_0_#2c2e2a]">{portfolioData.title}</p>
          <h1 className="max-w-5xl text-[clamp(3.15rem,15vw,12.5rem)] sm:text-[clamp(5.5rem,13vw,13.5rem)] font-black leading-[0.84] tracking-[-0.09em] sm:leading-[0.78] sm:tracking-[-0.1em] text-ink">
            {portfolioData.name}
          </h1>
          <p className="mt-6 max-w-3xl text-base font-semibold leading-7 text-ink/80 sm:mt-8 sm:text-2xl sm:leading-9">{portfolioData.about.split("\n")[0]}</p>
          <div className="mt-8 flex flex-col gap-3 min-[420px]:flex-row min-[420px]:flex-wrap sm:mt-10 sm:gap-4">
            <a href="#projects" className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-ink bg-fresh px-5 py-3 text-sm font-black sm:px-8 sm:py-4 sm:text-lg text-ink shadow-[5px_5px_0_#2c2e2a] transition hover:-translate-y-1 hover:shadow-[8px_8px_0_#2c2e2a]">View Work <ArrowRight size={18} /></a>
            <a href="/resume.pdf" download className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-ink bg-white px-5 py-3 text-sm font-black sm:px-8 sm:py-4 sm:text-lg text-ink shadow-[5px_5px_0_#2c2e2a] transition hover:-translate-y-1 hover:shadow-[8px_8px_0_#2c2e2a]"><Download size={18} /> Download Resume</a>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, rotate: -2, scale: 0.96 }} animate={{ opacity: 1, rotate: 0, scale: 1 }} transition={{ duration: 0.9, delay: 0.1 }}>
          <PeopleIllustration />
        </motion.div>
      </section>

      <MarqueeStrip />

      <section className="mx-auto grid max-w-[1500px] gap-5 px-4 py-20 sm:px-8 md:grid-cols-4">
        {promiseCards.map((card, index) => <GlassPanel key={card.title} delay={index * 0.05} className={index === 0 ? "bg-fresh" : index === 1 ? "bg-white" : index === 2 ? "bg-[#f5e211]" : "bg-[#ff8b64]"}><a href={card.href} className="flex h-full min-h-80 flex-col justify-between"><div><p className="text-6xl font-black tracking-[-0.08em]">0{index + 1}</p><h3 className="mt-8 text-4xl font-black tracking-[-0.08em]">{card.title}</h3><p className="mt-5 text-lg font-semibold leading-8 text-ink/78">{card.body}</p></div><span className="mt-8 inline-flex items-center gap-2 text-lg font-black">{card.label} <ArrowRight size={20} /></span></a></GlassPanel>)}
      </section>

      <section id="about" className="mx-auto max-w-[1500px] px-4 py-24 sm:px-8"><SectionHeader eyebrow="About" title="A portfolio with one clear human thread." /><GlassPanel className="bg-white text-xl font-semibold leading-10 sm:text-2xl whitespace-pre-wrap">{portfolioData.about}</GlassPanel></section>

      <section id="skills" className="mx-auto max-w-[1500px] px-4 py-24 sm:px-8"><SectionHeader eyebrow="Capability Map" title="Skills, drawn like a living network." /><div className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">{portfolioData.skills.map((skill, index) => <SkillBadge key={skill.name} name={skill.name} icon={iconMap[skill.icon]} delay={index * 0.035} />)}</div></section>

      <section id="experience" className="mx-auto max-w-[1500px] px-4 py-24 sm:px-8"><SectionHeader eyebrow="Journey" title="Professional signals, simplified." /><div className="grid gap-5 lg:grid-cols-2">{portfolioData.experience.map((exp, index) => <GlassPanel key={exp.role} delay={index * 0.07} className="bg-white"><div className="flex h-full flex-col justify-between gap-10"><div><h3 className="text-4xl font-black tracking-[-0.07em]">{exp.role}</h3><p className="mt-2 text-xl font-black text-ink/70">{exp.company}</p><p className="mt-6 text-lg font-semibold leading-8 text-ink/78">{exp.description}</p></div><p className="inline-flex w-fit items-center gap-2 rounded-full border-2 border-ink bg-fresh px-4 py-2 font-black"><Calendar size={18} />{exp.period}</p></div></GlassPanel>)}</div></section>

      <section id="education" className="mx-auto max-w-[1500px] px-4 py-24 sm:px-8"><SectionHeader eyebrow="Foundation" title="Education that grounds the work." /><div className="grid gap-5 md:grid-cols-2">{portfolioData.education.map((edu, index) => <GlassPanel key={edu.degree} delay={index * 0.07} className={index % 2 ? "bg-[#f5e211]" : "bg-fresh"}><div className="flex items-start gap-5"><div className="rounded-[2rem] border-2 border-ink bg-white p-4 shadow-[4px_4px_0_#2c2e2a]"><GraduationCap size={30} /></div><div><h3 className="text-3xl font-black tracking-[-0.06em]">{edu.degree}</h3><p className="mt-3 text-xl font-semibold text-ink/78">{edu.institution}</p><p className="mt-6 inline-flex items-center gap-2 font-black"><Calendar size={18} />{edu.period}</p></div></div></GlassPanel>)}</div></section>

      <section id="projects" className="mx-auto max-w-[1500px] px-4 py-24 sm:px-8"><SectionHeader eyebrow="Featured Work" title="Projects as illustrated case cards." /><div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{portfolioData.projects.map((project, index) => <ProjectCard key={project.title} {...project} delay={index * 0.06} />)}</div></section>

      <section className="mx-auto max-w-[1500px] px-4 py-24 sm:px-8"><div className="grid gap-5 md:grid-cols-3">{stats.map((stat, index) => <GlassPanel key={stat.label} delay={index * 0.06} className={index === 1 ? "bg-fresh" : "bg-white"}><p className="text-[clamp(5rem,12vw,10rem)] font-black leading-none tracking-[-0.1em]">{stat.value}</p><p className="mt-4 text-2xl font-black uppercase tracking-[-0.04em]">{stat.label}</p></GlassPanel>)}</div></section>

      <section id="contact" className="mx-auto max-w-[1500px] px-4 py-24 sm:px-8"><SectionHeader eyebrow="Ready when you are" title="Let’s build something useful." subtitle="A friendly, direct contact section in the same paper-and-ink visual language." /><div className="grid gap-6 md:grid-cols-2"><GlassPanel className="bg-fresh"><div className="flex flex-col gap-7"><div className="flex items-center gap-4"><div className="rounded-full border-2 border-ink bg-white p-4 shadow-[4px_4px_0_#2c2e2a]"><Mail size={26} /></div><div><p className="text-sm font-black uppercase tracking-[0.12em]">Email</p>{portfolioData.contact.emails.map((email) => <EmailDisplay key={email} email={email} className="block break-all text-base font-black sm:text-xl" />)}</div></div><div className="flex items-center gap-4"><div className="rounded-full border-2 border-ink bg-white p-4 shadow-[4px_4px_0_#2c2e2a]"><MapPin size={26} /></div><div><p className="text-sm font-black uppercase tracking-[0.12em]">Location</p><p className="text-xl font-black">{portfolioData.contact.location}</p></div></div><div className="flex flex-nowrap gap-2 pt-2 sm:gap-4">{[{ icon: Github, href: portfolioData.contact.github },{ icon: Linkedin, href: portfolioData.contact.linkedin },{ icon: Twitter, href: portfolioData.contact.twitter },{ icon: Telegram, href: portfolioData.contact.telegram },{ icon: Instagram, href: portfolioData.contact.instagram },{ icon: Facebook, href: portfolioData.contact.facebook }].map((social, i) => <a key={i} href={social.href} target="_blank" rel="noopener noreferrer" className="shrink-0 rounded-full border-2 border-ink bg-white p-2 shadow-[3px_3px_0_#2c2e2a] transition hover:-translate-y-1 sm:p-3"><social.icon size={22} /></a>)}</div></div></GlassPanel><GlassPanel className="bg-white"><form className="space-y-5" action="https://formspree.io/f/xaqgoblz" method="POST"><div className="grid gap-5 sm:grid-cols-2"><div><label className="mb-2 block text-sm font-black uppercase tracking-[0.12em]">Name</label><input type="text" name="name" className="w-full rounded-full border-2 border-ink bg-cream px-5 py-4 text-base font-bold text-ink outline-none" placeholder="Your Name" required /></div><div><label className="mb-2 block text-sm font-black uppercase tracking-[0.12em]">Email</label><input type="email" name="email" className="w-full rounded-full border-2 border-ink bg-cream px-5 py-4 text-base font-bold text-ink outline-none" placeholder="your@email.com" required /></div></div><div><label className="mb-2 block text-sm font-black uppercase tracking-[0.12em]">Message</label><textarea rows={5} name="message" className="w-full rounded-[2rem] border-2 border-ink bg-cream px-5 py-4 text-base font-bold text-ink outline-none" placeholder="Tell me about your project" required /></div><button className="inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-ink bg-fresh px-5 py-3 text-sm font-black sm:px-8 sm:py-4 sm:text-lg shadow-[5px_5px_0_#2c2e2a] transition hover:-translate-y-1"><Send size={20} /> Send Message</button></form></GlassPanel></div></section>

      <footer className="mx-auto flex max-w-[1500px] flex-col justify-between gap-6 border-t-2 border-ink px-4 py-12 text-lg font-black sm:flex-row sm:px-8"><p>© 2026 {portfolioData.name}. All rights reserved.</p><p>Real people. Real work. Real web systems.</p></footer>
    </div>
  );
}
