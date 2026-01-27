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
    <div className="mx-auto max-w-5xl px-6">
      {/* Hero Section */}
      <section className="flex min-h-screen flex-col items-center justify-center pt-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="mb-4 text-5xl font-extrabold tracking-tight text-white sm:text-7xl md:text-8xl">
            {portfolioData.name}
          </h1>
          <p className="mb-8 text-xl text-[#B3B3B3] sm:text-2xl">
            {portfolioData.title}
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="#projects"
              className="flex items-center gap-2 rounded-full bg-white px-8 py-3 font-bold text-black transition-transform hover:scale-105"
            >
              View Work <ArrowRight size={20} />
            </a>
            <a
              href="#contact"
              className="flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-3 font-bold text-white backdrop-blur-sm transition-transform hover:scale-105"
            >
              Contact Me
            </a>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32">
        <SectionHeader 
          title="About Me" 
          subtitle="Combining engineering precision with creative development." 
        />
        <GlassPanel className="text-lg leading-relaxed text-white">
          {portfolioData.about}
        </GlassPanel>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32">
        <SectionHeader 
          title="Skills" 
          subtitle="Technologies and tools I excel in." 
        />
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-6">
          {portfolioData.skills.map((skill, index) => (
            <SkillBadge
              key={skill.name}
              name={skill.name}
              icon={iconMap[skill.icon]}
              delay={index * 0.1}
            />
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32">
        <SectionHeader 
          title="Experience" 
          subtitle="My professional and leadership journey." 
        />
        <div className="space-y-8">
          {(portfolioData as any).experience.map((exp: any, index: number) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <GlassPanel className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                    <p className="text-white font-medium">{exp.company}</p>
                  <p className="mt-2 text-[#B3B3B3]">{exp.description}</p>
                </div>
                <div className="flex items-center gap-2 text-[#B3B3B3]/60 whitespace-nowrap">
                  <Calendar size={18} />
                  <span>{exp.period}</span>
                </div>
              </GlassPanel>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-32">
        <SectionHeader 
          title="Education" 
          subtitle="My academic background." 
        />
        <div className="space-y-8">
          {(portfolioData as any).education.map((edu: any, index: number) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <GlassPanel className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-l-4 border-white/10">
                <div className="flex items-start gap-4">
                  <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/5 text-white">
                    <GraduationCap size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                    <p className="text-[#B3B3B3]">{edu.institution}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-[#B3B3B3]/60 whitespace-nowrap">
                  <Calendar size={18} />
                  <span>{edu.period}</span>
                </div>
              </GlassPanel>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32">
        <SectionHeader 
          title="Featured Projects" 
          subtitle="A selection of my recent technical work." 
        />
        <div className="grid gap-8 md:grid-cols-3">
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
      <section id="contact" className="py-32">
        <SectionHeader 
          title="Get In Touch" 
          subtitle="Let's build something amazing together." 
        />
        <div className="grid gap-8 md:grid-cols-2">
          <GlassPanel className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/5 text-white">
                  <Mail size={24} />
                </div>
              <div>
                <p className="text-sm text-[#B3B3B3]/60">Email</p>
                <p className="text-lg font-medium text-white">{portfolioData.contact.email}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/5 text-white">
                <MapPin size={24} />
              </div>
              <div>
                <p className="text-sm text-[#B3B3B3]/60">Location</p>
                <p className="text-lg font-medium text-white">{portfolioData.contact.location}</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-4 pt-4">
              <a href={portfolioData.contact.github} target="_blank" rel="noopener noreferrer" className="text-[#B3B3B3] transition-colors hover:text-white">
                <Github size={28} />
              </a>
              <a href={portfolioData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-[#B3B3B3] transition-colors hover:text-white">
                <Linkedin size={28} />
              </a>
              <a href={portfolioData.contact.instagram} target="_blank" rel="noopener noreferrer" className="text-[#B3B3B3] transition-colors hover:text-white">
                <Instagram size={28} />
              </a>
              <a href={portfolioData.contact.twitter} target="_blank" rel="noopener noreferrer" className="text-[#B3B3B3] transition-colors hover:text-white">
                <Twitter size={28} />
              </a>
              <a href={portfolioData.contact.facebook} target="_blank" rel="noopener noreferrer" className="text-[#B3B3B3] transition-colors hover:text-white">
                <Facebook size={28} />
              </a>
            </div>
          </GlassPanel>
          
          <GlassPanel>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="mb-1 block text-sm text-[#B3B3B3]">Name</label>
                <input
                  type="text"
                  className="w-full rounded-lg border border-white/5 bg-white/5 px-4 py-2 text-white focus:border-white/20"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm text-[#B3B3B3]">Email</label>
                <input
                  type="email"
                  className="w-full rounded-lg border border-white/5 bg-white/5 px-4 py-2 text-white focus:border-white/20"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm text-[#B3B3B3]">Message</label>
                <textarea
                  rows={4}
                  className="w-full rounded-lg border border-white/5 bg-white/5 px-4 py-2 text-white focus:border-white/20"
                  placeholder="Tell me about your project"
                />
              </div>
              <button className="w-full rounded-lg bg-white py-3 font-bold text-black transition-transform hover:scale-[1.02]">
                Send Message
              </button>
            </form>
          </GlassPanel>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center text-sm text-[#B3B3B3]/60">
        <p>© 2025 {portfolioData.name}. All rights reserved.</p>
        <p className="mt-2">Built with Next.js, Three.js, and Framer Motion.</p>
      </footer>
    </div>
  );
}
