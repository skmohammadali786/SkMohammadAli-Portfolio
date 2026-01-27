"use client";

import { motion } from "framer-motion";
import { GlassPanel } from "./GlassComponents";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  link: string;
  delay?: number;
}

export function ProjectCard({ title, description, tags, link, delay = 0 }: ProjectCardProps) {
  return (
    <GlassPanel delay={delay} className="group h-full">
      <div className="relative mb-4 aspect-video overflow-hidden rounded-lg bg-[#0F1115]">
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-white/5 to-transparent">
          <div className="h-24 w-40 rounded border border-white/5 bg-white/5 backdrop-blur-sm" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100 bg-black/60">
          <a
            href={link}
            className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-black transition-transform hover:scale-105"
          >
            View Project <ExternalLink size={16} />
          </a>
        </div>
      </div>
      <h3 className="mb-2 text-xl font-bold text-white">{title}</h3>
      <p className="mb-4 text-sm text-[#B3B3B3] line-clamp-2">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border-white/10 bg-white/5 px-2 py-0.5 text-[10px] font-medium text-zinc-300"
            >
              {tag}
            </span>
          ))}
        </div>
    </GlassPanel>
  );
}

export function SkillBadge({ name, icon: Icon, delay = 0 }: { name: string; icon: any; delay?: number }) {
  return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay }}
        viewport={{ once: true }}
        className="flex flex-col items-center gap-2"
      >
          <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md transition-colors hover:border-white/40 hover:bg-white/10">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 to-transparent opacity-0 transition-opacity hover:opacity-100" />
            <Icon className="text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]" size={32} />
          </div>
        <span className="text-xs font-semibold text-[#B3B3B3]">{name}</span>
      </motion.div>
  );
}
