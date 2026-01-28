"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/lib/data/portfolio";
import { GlassPanel, SectionHeader } from "@/components/ui/GlassComponents";
import { ProjectCard, SkillBadge } from "@/components/ui/Cards";
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
  Twitter
} from "lucide-react";

const iconMap: Record<string, any> = {
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
  Zap
};

export default function Home() {
  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6">
      {/* Hero Section */}
      <section className="flex min-h-[90vh] flex-col items-center justify-center py-20 text-center sm:min-h-screen">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="transform-gpu will-change-transform"
        >
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-white sm:text-7xl md:text-8xl lg:text-9xl">
            {portfolioData.name}
          </h1>
          <p className="mb-8 text-lg text-[#B3B3B3] sm:text-2xl md:text-3xl">
            {portfolioData.title}
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#projects"
              className="w-full flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 font-bold text-black transition-all hover:scale-105 active:scale-95 sm:w-auto"
            >
              View Work <ArrowRight size={20} />
            </a>
            <a
              href="#contact"
              className="w-full flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-4 font-bold text-white backdrop-blur-sm transition-all hover:scale-105 active:scale-95 sm:w-auto"
            >
              Contact Me
            </a>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 sm:py-32">
        <SectionHeader 
          title="About Me" 
          subtitle="Combining engineering precision with creative development." 
        />
        <GlassPanel className="text-base leading-relaxed text-white sm:text-lg">
          {portfolioData.about}
        </GlassPanel>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 sm:py-32">
        <SectionHeader 
          title="Skills" 
          subtitle="Technologies and tools I excel in." 
        />
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 sm:gap-8">
          {portfolioData.skills.map((skill, index) => (
            <SkillBadge
              key={skill.name}
              name={skill.name}
              icon={iconMap[skill.icon]}
              delay={index * 0.05}
            />
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 sm:py-32">
        <SectionHeader 
          title="Experience" 
          subtitle="My professional and leadership journey." 
        />
        <div className="space-y-6 sm:space-y-8">
          {(portfolioData as any).experience.map((exp: any, index: number) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="transform-gpu will-change-transform"
            >
              <GlassPanel className="flex flex-col gap-4 md:flex-row md:items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white sm:text-xl">{exp.role}</h3>
                  <p className="text-sm font-medium text-white/80 sm:text-base">{exp.company}</p>
                  <p className="mt-2 text-sm text-[#B3B3B3] sm:text-base">{exp.description}</p>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#B3B3B3]/60 whitespace-nowrap sm:text-sm">
                  <Calendar size={16} />
                  <span>{exp.period}</span>
                </div>
              </GlassPanel>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 sm:py-32">
        <SectionHeader 
          title="Education" 
          subtitle="My academic background." 
        />
        <div className="space-y-6 sm:space-y-8">
          {(portfolioData as any).education.map((edu: any, index: number) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="transform-gpu will-change-transform"
            >
              <GlassPanel className="flex flex-col gap-4 border-l-4 border-white/10 md:flex-row md:items-center justify-between">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/5 text-white">
                    <GraduationCap size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white sm:text-xl">{edu.degree}</h3>
                    <p className="text-sm text-[#B3B3B3] sm:text-base">{edu.institution}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#B3B3B3]/60 whitespace-nowrap sm:text-sm">
                  <Calendar size={16} />
                  <span>{edu.period}</span>
                </div>
              </GlassPanel>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 sm:py-32">
        <SectionHeader 
          title="Featured Projects" 
          subtitle="A selection of my recent technical work." 
        />
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {portfolioData.projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              {...project}
              delay={index * 0.1}
            />
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 sm:py-32">
        <SectionHeader 
          title="Get In Touch" 
          subtitle="Let's build something amazing together." 
        />
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
          <GlassPanel className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/5 text-white">
                  <Mail size={22} />
                </div>
              <div>
                <p className="text-xs text-[#B3B3B3]/60">Email</p>
                <p className="text-base font-medium text-white sm:text-lg">{portfolioData.contact.email}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/5 text-white">
                <MapPin size={22} />
              </div>
              <div>
                <p className="text-xs text-[#B3B3B3]/60">Location</p>
                <p className="text-base font-medium text-white sm:text-lg">{portfolioData.contact.location}</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-4 pt-4">
              {[
                { icon: Github, href: portfolioData.contact.github },
                { icon: Linkedin, href: portfolioData.contact.linkedin },
                { icon: Instagram, href: portfolioData.contact.instagram },
                { icon: Twitter, href: portfolioData.contact.twitter },
                { icon: Facebook, href: portfolioData.contact.facebook }
              ].map((social, i) => (
                <a 
                  key={i}
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[#B3B3B3] transition-all hover:scale-110 hover:text-white"
                >
                  <social.icon size={24} />
                </a>
              ))}
            </div>
          </GlassPanel>
          
          <GlassPanel>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1 block text-xs text-[#B3B3B3]">Name</label>
                  <input
                    type="text"
                    className="w-full rounded-lg border border-white/5 bg-white/5 px-4 py-3 text-sm text-white focus:border-white/20 focus:outline-none focus:ring-0"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-xs text-[#B3B3B3]">Email</label>
                  <input
                    type="email"
                    className="w-full rounded-lg border border-white/5 bg-white/5 px-4 py-3 text-sm text-white focus:border-white/20 focus:outline-none focus:ring-0"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label className="mb-1 block text-xs text-[#B3B3B3]">Message</label>
                <textarea
                  rows={4}
                  className="w-full rounded-lg border border-white/5 bg-white/5 px-4 py-3 text-sm text-white focus:border-white/20 focus:outline-none focus:ring-0"
                  placeholder="Tell me about your project"
                />
              </div>
              <button className="w-full rounded-lg bg-white py-4 text-sm font-bold text-black transition-all hover:bg-zinc-200 active:scale-95">
                Send Message
              </button>
            </form>
          </GlassPanel>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center text-xs text-[#B3B3B3]/60">
        <p>© 2025 {portfolioData.name}. All rights reserved.</p>
      </footer>
    </div>
  );
}
