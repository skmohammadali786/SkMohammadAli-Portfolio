"use client";

import type { ComponentType } from "react";
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
  Send,
} from "lucide-react";
import { IconBrandTelegram as Telegram } from "@tabler/icons-react";

const iconMap: Record<string, ComponentType<{ className?: string; size?: number | string }>> = {
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
    body: "From UI direction and component systems to backend logic and embedded hardware, a single owner who carries work from concept to launch.",
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
  { value: `${portfolioData.projects.length}+`, label: "featured engineering project" },
  { value: `${portfolioData.skills.length}+`, label: "technical capabilities" },
  { value: "2028", label: "graduating B.Tech EE" },
];

function MarqueeStrip() {
  const items = portfolioData.skills.map((skill) => skill.name);
  return (
    <div className="overflow-hidden border-y border-white/10 bg-slate-950/80 py-4 text-slate-100 backdrop-blur-md">
      <div className="flex min-w-max animate-[scroll-left_28s_linear_infinite] gap-12 font-mono text-xs uppercase tracking-widest text-sky-400">
        {[...items, ...items, ...items].map((item, index) => (
          <span key={`${item}-${index}`} className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-sky-400/60" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function HomeDeferredSections() {
  return (
    <>
      <MarqueeStrip />

      {/* Core Focus Bento Grid */}
      <section className="mx-auto grid max-w-[1500px] gap-5 px-4 py-16 sm:px-8 md:grid-cols-2 lg:grid-cols-4">
        {promiseCards.map((card, index) => (
          <GlassPanel
            key={card.title}
            delay={index * 0.05}
            className="group hover:border-sky-500/40"
          >
            <a href={card.href} className="flex h-full min-h-[260px] flex-col justify-between">
              <div>
                <p className="font-mono text-3xl font-extrabold text-sky-400/80 group-hover:text-sky-300">
                  0{index + 1}
                </p>
                <h3 className="mt-4 text-2xl font-bold tracking-tight text-slate-100">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm font-normal leading-relaxed text-slate-400">
                  {card.body}
                </p>
              </div>
              <span className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sky-400 transition group-hover:translate-x-1">
                {card.label} <ArrowRight size={16} />
              </span>
            </a>
          </GlassPanel>
        ))}
      </section>

      {/* About Section */}
      <section id="about" className="mx-auto max-w-[1500px] px-4 py-20 sm:px-8">
        <SectionHeader
          eyebrow="About"
          title="Engineering work with one clear human thread."
        />
        <GlassPanel className="bg-slate-900/60 text-base font-normal leading-relaxed text-slate-300 sm:text-xl sm:leading-relaxed whitespace-pre-wrap border-white/10">
          {portfolioData.about}
        </GlassPanel>
      </section>

      {/* Capability Map Section */}
      <section id="skills" className="mx-auto max-w-[1500px] px-4 py-20 sm:px-8">
        <SectionHeader
          eyebrow="Capability Map"
          title="Skills, drawn like a living network."
        />
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {portfolioData.skills.map((skill, index) => (
            <SkillBadge
              key={skill.name}
              name={skill.name}
              icon={iconMap[skill.icon] || Cpu}
              delay={index * 0.035}
            />
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="mx-auto max-w-[1500px] px-4 py-20 sm:px-8">
        <SectionHeader
          eyebrow="Journey"
          title="Professional signals, simplified."
        />
        <div className="grid gap-5 lg:grid-cols-3">
          {portfolioData.experience.map((exp, index) => (
            <GlassPanel key={exp.role} delay={index * 0.07}>
              <div className="flex h-full flex-col justify-between gap-6">
                <div>
                  <span className="inline-flex items-center gap-1.5 rounded-md border border-sky-500/30 bg-sky-500/10 px-2.5 py-1 text-[11px] font-mono text-sky-300">
                    <Calendar size={13} />
                    {exp.period}
                  </span>
                  <h3 className="mt-4 text-2xl font-bold tracking-tight text-slate-100">
                    {exp.role}
                  </h3>
                  <p className="mt-1 font-semibold text-sky-400/90 text-sm">
                    {exp.company}
                  </p>
                  <p className="mt-4 text-sm font-normal leading-relaxed text-slate-400">
                    {exp.description}
                  </p>
                </div>
              </div>
            </GlassPanel>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="mx-auto max-w-[1500px] px-4 py-20 sm:px-8">
        <SectionHeader
          eyebrow="Foundation"
          title="Education that grounds the work."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {portfolioData.education.map((edu, index) => (
            <GlassPanel key={edu.degree} delay={index * 0.07}>
              <div className="flex items-start gap-4">
                <div className="rounded-xl border border-sky-500/30 bg-sky-500/10 p-3 text-sky-400 shrink-0">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold tracking-tight text-slate-100">
                    {edu.degree}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-slate-300">
                    {edu.institution}
                  </p>
                  <p className="mt-3 font-mono text-xs text-sky-400">
                    {edu.period}
                  </p>
                </div>
              </div>
            </GlassPanel>
          ))}
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="projects" className="mx-auto max-w-[1500px] px-4 py-20 sm:px-8">
        <SectionHeader
          eyebrow="Featured Work"
          title="Engineering projects and practical systems work."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {portfolioData.projects.map((project, index) => (
            <ProjectCard key={project.title} {...project} delay={index * 0.06} />
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="mx-auto max-w-[1500px] px-4 py-16 sm:px-8">
        <div className="grid gap-5 md:grid-cols-3">
          {stats.map((stat, index) => (
            <GlassPanel key={stat.label} delay={index * 0.06} className="text-center">
              <p className="text-[clamp(3.5rem,8vw,6rem)] font-extrabold leading-none tracking-tight text-sky-400">
                {stat.value}
              </p>
              <p className="mt-3 font-mono text-xs uppercase tracking-wider text-slate-400">
                {stat.label}
              </p>
            </GlassPanel>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="mx-auto max-w-[1500px] px-4 py-20 sm:px-8">
        <SectionHeader
          eyebrow="Ready when you are"
          title="Let’s build something useful."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          <GlassPanel className="flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="rounded-2xl border border-sky-500/30 bg-sky-500/10 p-3 text-sky-400 shrink-0">
                  <Mail size={22} />
                </div>
                <div>
                  <p className="font-mono text-xs uppercase tracking-wider text-slate-400">Email</p>
                  {portfolioData.contact.emails.map((email) => (
                    <EmailDisplay key={email} email={email} className="block break-all text-sm font-semibold text-slate-200 sm:text-base hover:text-sky-300 transition" />
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="rounded-2xl border border-sky-500/30 bg-sky-500/10 p-3 text-sky-400 shrink-0">
                  <MapPin size={22} />
                </div>
                <div>
                  <p className="font-mono text-xs uppercase tracking-wider text-slate-400">Location</p>
                  <p className="text-base font-semibold text-slate-200">{portfolioData.contact.location}</p>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-slate-400 mb-3">Connect</p>
                <div className="flex flex-wrap gap-2.5">
                  {[
                    { icon: Github, href: portfolioData.contact.github, label: "GitHub" },
                    { icon: Linkedin, href: portfolioData.contact.linkedin, label: "LinkedIn" },
                    { icon: Twitter, href: portfolioData.contact.twitter, label: "Twitter" },
                    { icon: Telegram, href: portfolioData.contact.telegram, label: "Telegram" },
                    { icon: Instagram, href: portfolioData.contact.instagram, label: "Instagram" },
                    { icon: Facebook, href: portfolioData.contact.facebook, label: "Facebook" },
                  ].map((social, i) => (
                    <a
                      key={i}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-900/80 px-3.5 py-2 text-xs font-semibold text-slate-300 transition hover:border-sky-400 hover:bg-sky-500/20 hover:text-sky-300"
                      aria-label={social.label}
                    >
                      <social.icon size={16} />
                      <span>{social.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </GlassPanel>

          <GlassPanel>
            <form className="space-y-4" action="https://formspree.io/f/xaqgoblz" method="POST">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block font-mono text-xs uppercase tracking-wider text-slate-400">Name</label>
                  <input
                    type="text"
                    name="name"
                    className="w-full rounded-xl border border-white/10 bg-slate-950/80 px-4 py-3 text-sm font-medium text-slate-100 placeholder-slate-500 outline-none focus:border-sky-500/60 focus:ring-1 focus:ring-sky-500/60"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div>
                  <label className="mb-1.5 block font-mono text-xs uppercase tracking-wider text-slate-400">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="w-full rounded-xl border border-white/10 bg-slate-950/80 px-4 py-3 text-sm font-medium text-slate-100 placeholder-slate-500 outline-none focus:border-sky-500/60 focus:ring-1 focus:ring-sky-500/60"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="mb-1.5 block font-mono text-xs uppercase tracking-wider text-slate-400">Message</label>
                <textarea
                  rows={4}
                  name="message"
                  className="w-full rounded-xl border border-white/10 bg-slate-950/80 px-4 py-3 text-sm font-medium text-slate-100 placeholder-slate-500 outline-none focus:border-sky-500/60 focus:ring-1 focus:ring-sky-500/60"
                  placeholder="Tell me about your project"
                  required
                />
              </div>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-sky-500 px-6 py-3.5 text-sm font-bold text-slate-950 transition hover:bg-sky-400 shadow-lg shadow-sky-500/20"
              >
                <Send size={16} />
                <span>Send Message</span>
              </button>
            </form>
          </GlassPanel>
        </div>
      </section>

      {/* Footer */}
      <footer className="mx-auto flex max-w-[1500px] flex-col justify-between gap-4 border-t border-white/10 px-4 py-10 text-xs font-mono text-slate-400 sm:flex-row sm:px-8">
        <p>© 2026 {portfolioData.name}. All rights reserved.</p>
        <p>Real people. Real work. Real web & hardware systems.</p>
      </footer>
    </>
  );
}
