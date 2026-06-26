"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Menu, X } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
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
      <div className="flex w-full max-w-5xl items-center justify-between rounded-full border-2 border-ink bg-white px-6 py-3 text-ink shadow-[5px_5px_0_#2c2e2a] transform-gpu">
        <div className="text-xl font-bold tracking-tighter text-ink">
          <Link href="/">
            <Image src="/logo.webp" alt="Logo" width={40} height={40} className="rounded-full" />
          </Link>
        </div>
        
        {/* Desktop Nav */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-ink transition-colors hover:text-[#5ba634]"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-4 md:flex">
          <a href={portfolioData.contact.github} target="_blank" rel="noopener noreferrer" className="text-ink hover:text-[#5ba634]"><Github size={20} /></a>
          <a href={portfolioData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-ink hover:text-[#5ba634]"><Linkedin size={20} /></a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-ink" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

        {/* Mobile Menu */}
        {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="absolute top-24 left-6 right-6 flex flex-col items-center gap-6 rounded-[2rem] border-2 border-ink bg-white p-8 shadow-[5px_5px_0_#2c2e2a] md:hidden transform-gpu"
            >
            {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium text-ink"
            >
              {link.name}
            </a>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
}
