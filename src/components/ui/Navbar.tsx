"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Sparkles } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPhotoOpen, setIsPhotoOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "/#about" },
    { name: "Skills", href: "/#skills" },
    { name: "Projects", href: "/#projects" },
    { name: "Links", href: "/links" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4 sm:p-6"
    >
      <div className="flex w-full max-w-5xl items-center justify-between rounded-full border border-white/10 bg-slate-950/80 px-4 py-2.5 sm:px-6 sm:py-3 text-slate-100 backdrop-blur-xl shadow-2xl shadow-sky-950/20 transform-gpu">
        {/* Brand & Photo Modal Trigger */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setIsPhotoOpen(true)}
            className="group relative flex rounded-full outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
            aria-label="Open SK Mohammad Ali photo preview"
          >
            <span
              className="absolute -inset-1 rounded-full bg-gradient-to-r from-sky-500 to-indigo-500 blur-sm opacity-40 transition group-hover:opacity-100"
              aria-hidden="true"
            />
            <Image
              src="/logo.webp"
              alt="SK Mohammad Ali"
              width={38}
              height={38}
              className="relative rounded-full border border-white/20 object-cover transition duration-300 group-hover:scale-105"
              priority
            />
          </button>
          <div className="flex flex-col">
            <span className="text-sm font-bold tracking-tight text-slate-100">
              SK Mohammad Ali
            </span>
            <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-sky-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Available for work
            </span>
          </div>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden items-center gap-1 rounded-full border border-white/5 bg-white/5 px-4 py-1.5 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="rounded-full px-3.5 py-1 text-xs font-semibold text-slate-300 transition-all hover:bg-white/10 hover:text-white"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Desktop Action */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 rounded-full border border-sky-500/30 bg-sky-500/10 px-4 py-1.5 text-xs font-semibold text-sky-300 transition hover:bg-sky-500/20 hover:border-sky-500/50"
          >
            <Sparkles size={13} className="text-sky-400" />
            <span>Get in touch</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          type="button"
          className="p-2 text-slate-300 hover:text-white md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            className="absolute top-20 left-4 right-4 flex flex-col items-center gap-4 rounded-3xl border border-white/10 bg-slate-950/95 p-6 shadow-2xl backdrop-blur-2xl md:hidden transform-gpu"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="w-full rounded-2xl py-2.5 text-center text-sm font-semibold text-slate-200 transition hover:bg-white/10 hover:text-white"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="w-full rounded-full bg-sky-500/20 border border-sky-500/40 py-2.5 text-center text-sm font-bold text-sky-300 shadow-md"
            >
              Get in touch
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Photo Preview Modal */}
      <AnimatePresence>
        {isPhotoOpen && (
          <motion.div
            className="fixed inset-0 z-[70] flex items-center justify-center bg-slate-950/80 px-6 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsPhotoOpen(false)}
          >
            <motion.button
              type="button"
              aria-label="Close photo preview"
              className="absolute right-6 top-6 rounded-full border border-white/20 bg-slate-900 p-3 text-slate-200 shadow-xl transition hover:scale-105 hover:bg-slate-800"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={() => setIsPhotoOpen(false)}
            >
              <X size={20} />
            </motion.button>
            <motion.div
              className="relative aspect-square w-[min(78vw,420px)] rounded-full border-2 border-sky-500/40 bg-slate-900 p-2 shadow-[0_0_80px_rgba(56,189,248,0.25)]"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.85 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              onClick={(event) => event.stopPropagation()}
            >
              <Image
                src="/logo.webp"
                alt="Large round photo of SK Mohammad Ali"
                fill
                sizes="(max-width: 768px) 78vw, 420px"
                className="rounded-full object-cover p-2"
                priority
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
