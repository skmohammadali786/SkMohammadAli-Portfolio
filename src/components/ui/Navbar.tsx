"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { portfolioData } from "@/lib/data/portfolio";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6"
    >
      <div className="flex w-full max-w-5xl items-center justify-between rounded-full border border-white/5 bg-[#0F1115]/80 px-6 py-3 backdrop-blur-md transform-gpu">
        <div className="text-xl font-bold tracking-tighter text-white"></div>
        
        {/* Desktop Nav */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-[#B3B3B3] transition-colors hover:text-white"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-4 md:flex">
          <a href={portfolioData.contact.github} target="_blank" rel="noopener noreferrer" className="text-[#B3B3B3] hover:text-white"><Github size={20} /></a>
          <a href={portfolioData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-[#B3B3B3] hover:text-white"><Linkedin size={20} /></a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

        {/* Mobile Menu */}
        {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="absolute top-24 left-6 right-6 flex flex-col items-center gap-6 rounded-3xl border border-white/5 bg-[#0F1115]/95 p-8 backdrop-blur-md md:hidden transform-gpu"
            >
            {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium text-white"
            >
              {link.name}
            </a>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
}
