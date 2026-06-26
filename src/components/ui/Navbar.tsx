"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPhotoOpen, setIsPhotoOpen] = useState(false);

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
          <button
            type="button"
            onClick={() => setIsPhotoOpen(true)}
            className="group relative flex rounded-full outline-none focus-visible:ring-4 focus-visible:ring-[#8ed462]/60"
            aria-label="Open SK Mohammad Ali photo preview"
          >
            <span className="absolute inset-0 rounded-full bg-fresh blur-md opacity-0 transition group-hover:opacity-70" aria-hidden="true" />
            <Image
              src="/logo.webp"
              alt="SK Mohammad Ali"
              width={40}
              height={40}
              className="relative rounded-full border-2 border-ink object-cover transition duration-300 group-hover:scale-110 group-hover:rotate-3"
              priority
            />
          </button>
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

      <AnimatePresence>
        {isPhotoOpen && (
          <motion.div
            className="fixed inset-0 z-[70] flex items-center justify-center bg-ink/75 px-6 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsPhotoOpen(false)}
          >
            <motion.button
              type="button"
              aria-label="Close photo preview"
              className="absolute right-6 top-6 rounded-full border-2 border-ink bg-white p-3 text-ink shadow-[5px_5px_0_#2c2e2a] transition hover:-translate-y-1"
              initial={{ opacity: 0, rotate: -20, scale: 0.8 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: 20, scale: 0.8 }}
              onClick={() => setIsPhotoOpen(false)}
            >
              <X />
            </motion.button>
            <motion.div
              className="relative aspect-square w-[min(78vw,440px)] rounded-full border-4 border-white bg-fresh p-3 shadow-[0_0_80px_rgba(142,212,98,0.55),12px_12px_0_#2c2e2a]"
              initial={{ opacity: 0, scale: 0.35, rotate: -18, y: 60 }}
              animate={{ opacity: 1, scale: 1, rotate: 0, y: 0 }}
              exit={{ opacity: 0, scale: 0.45, rotate: 18, y: 40 }}
              transition={{ type: "spring", stiffness: 170, damping: 18 }}
              onClick={(event) => event.stopPropagation()}
            >
              <motion.span
                className="absolute inset-[-18px] rounded-full border-2 border-dashed border-[#f5e211]"
                animate={{ rotate: 360 }}
                transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                aria-hidden="true"
              />
              <Image
                src="/logo.webp"
                alt="Large round photo of SK Mohammad Ali"
                fill
                sizes="(max-width: 768px) 78vw, 440px"
                className="rounded-full object-cover p-3"
                priority
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
