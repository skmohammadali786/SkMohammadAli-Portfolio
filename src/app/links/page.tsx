import type { Metadata } from "next";
import { ArrowLeft, ExternalLink, Link as LinkIcon, Mail, Share2 } from "lucide-react";
import { GlassPanel, SectionHeader } from "@/components/ui/GlassComponents";
import { portfolioData } from "@/lib/data/portfolio";

export const metadata: Metadata = {
  title: "Link to SK Mohammad Ali | Engineering, IoT & Full-Stack Portfolio",
  description:
    "Official backlink and citation resources for SK Mohammad Ali, an Electrical Engineering student, IoT builder, and full-stack developer in Kolkata.",
  alternates: {
    canonical: "https://www.skmohammadali.in/links",
  },
  openGraph: {
    title: "Link to SK Mohammad Ali | Engineering, IoT & Full-Stack Portfolio",
    description:
      "Use these official links, profile details, and citation snippets when referencing SK Mohammad Ali's engineering, IoT, and web development work.",
    url: "https://www.skmohammadali.in/links",
    type: "profile",
  },
};

const officialLinks = [
  { label: "Portfolio homepage", href: "https://www.skmohammadali.in", note: "Best primary citation for SK Mohammad Ali's work, resume, projects, and contact details." },
  { label: "GitHub profile", href: portfolioData.contact.github, note: "Use for code-focused references, repository mentions, and developer community profiles." },
  { label: "LinkedIn profile", href: "https://www.linkedin.com/in/skmohammadali", note: "Use for professional, academic, and collaboration references." },
  { label: "X / Twitter profile", href: portfolioData.contact.twitter, note: "Use for social mentions and short-form updates." },
  { label: "Resume PDF", href: "https://www.skmohammadali.in/resume.pdf", note: "Use when a profile, event page, or opportunity board asks for a direct resume link." },
  { label: "LLMs and AI summary", href: "https://www.skmohammadali.in/llms.txt", note: "Use for AI-friendly summaries and structured portfolio context." },
];

const backlinkTargets = [
  "Electrical engineering student profiles and alumni directories",
  "IoT, embedded systems, and assistive technology project roundups",
  "Full-stack developer portfolios and student maker showcases",
  "Hackathon, campus event, and engineering club websites",
  "Kolkata developer, student founder, and SaaS builder directories",
  "Accessibility technology articles referencing voice-controlled mobility projects",
];

const anchorSuggestions = [
  "SK Mohammad Ali portfolio",
  "Electrical Engineering student and IoT builder SK Mohammad Ali",
  "SK Mohammad Ali full-stack developer in Kolkata",
  "Voice Control Wheel Chair project by SK Mohammad Ali",
];

export default function LinksPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    name: "Link to SK Mohammad Ali",
    url: "https://www.skmohammadali.in/links",
    about: {
      "@type": "Person",
      name: "SK Mohammad Ali",
      url: "https://www.skmohammadali.in",
      jobTitle: portfolioData.title,
      sameAs: [
        portfolioData.contact.github,
        "https://www.linkedin.com/in/skmohammadali",
        portfolioData.contact.twitter,
        portfolioData.contact.instagram,
        portfolioData.contact.facebook,
        portfolioData.contact.telegram,
      ],
    },
  };

  return (
    <div className="relative overflow-hidden px-4 pb-24 pt-32 text-slate-100 sm:px-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto max-w-[1500px]">
        <a
          href="/"
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-900/80 px-5 py-2.5 text-xs font-semibold text-slate-200 transition hover:border-sky-400 hover:bg-slate-800"
        >
          <ArrowLeft size={16} /> Back to portfolio
        </a>

        <SectionHeader
          eyebrow="Backlink Resources"
          title="Cite the portfolio with the right signals."
          subtitle="Quality backlinks come from relevant, trustworthy pages. This page gives directories, collaborators, clubs, publishers, and project roundups the official links and context they need to reference SK Mohammad Ali accurately."
        />

        <section className="grid gap-6 lg:grid-cols-[1.1fr_.9fr]">
          <GlassPanel>
            <div className="flex items-start gap-4">
              <div className="rounded-2xl border border-sky-500/30 bg-sky-500/10 p-3 text-sky-400 shrink-0">
                <LinkIcon size={24} />
              </div>
              <div>
                <h1 className="text-3xl font-bold tracking-tight sm:text-4xl text-slate-100">
                  Official citation
                </h1>
                <p className="mt-4 text-sm font-normal leading-relaxed text-slate-300 sm:text-base">
                  SK Mohammad Ali is an Electrical Engineering student at Aliah University, a full-stack developer, and an IoT builder based in Kolkata, India. His portfolio highlights engineering projects, SaaS and web development skills, and practical systems work.
                </p>
              </div>
            </div>
          </GlassPanel>

          <GlassPanel>
            <h2 className="text-2xl font-bold tracking-tight text-slate-100">Suggested anchor text</h2>
            <div className="mt-4 flex flex-wrap gap-2.5">
              {anchorSuggestions.map((anchor) => (
                <span
                  key={anchor}
                  className="rounded-full border border-white/10 bg-slate-950 px-3.5 py-1.5 font-mono text-xs text-sky-300"
                >
                  {anchor}
                </span>
              ))}
            </div>
          </GlassPanel>
        </section>

        <section className="py-16">
          <SectionHeader eyebrow="Official Links" title="Use these URLs when referencing the work." />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {officialLinks.map((link, index) => (
              <GlassPanel key={link.href} delay={index * 0.04}>
                <a
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="group flex h-full flex-col justify-between gap-6"
                >
                  <div>
                    <h2 className="text-xl font-bold tracking-tight text-slate-100 group-hover:text-sky-300 transition-colors">
                      {link.label}
                    </h2>
                    <p className="mt-2 text-xs font-normal leading-relaxed text-slate-400 sm:text-sm">
                      {link.note}
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 break-all font-mono text-xs text-sky-400 transition group-hover:text-sky-300">
                    {link.href} <ExternalLink size={14} />
                  </span>
                </a>
              </GlassPanel>
            ))}
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <GlassPanel>
            <div className="mb-4 flex items-center gap-3">
              <Share2 size={22} className="text-sky-400" />
              <h2 className="text-2xl font-bold tracking-tight text-slate-100">Relevant backlink opportunities</h2>
            </div>
            <ul className="space-y-3 text-sm font-normal text-slate-300">
              {backlinkTargets.map((target) => (
                <li key={target} className="rounded-xl border border-white/10 bg-slate-950 p-3.5 font-sans">
                  {target}
                </li>
              ))}
            </ul>
          </GlassPanel>

          <GlassPanel>
            <div className="mb-4 flex items-center gap-3">
              <Mail size={22} className="text-sky-400" />
              <h2 className="text-2xl font-bold tracking-tight text-slate-100">Collaboration note</h2>
            </div>
            <p className="text-sm font-normal leading-relaxed text-slate-300">
              If you are publishing an engineering showcase, student project directory, campus event page, developer roundup, or accessibility technology article, link to the homepage as the canonical source and mention the Voice Control Wheel Chair project when the context is about IoT or assistive mobility.
            </p>
            <a
              href={`mailto:${portfolioData.contact.emails[0]}?subject=Portfolio%20citation%20or%20collaboration`}
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-sky-500 px-6 py-3 text-xs font-bold text-slate-950 transition hover:bg-sky-400"
            >
              <span>Contact for citation details</span>
              <ExternalLink size={14} />
            </a>
          </GlassPanel>
        </section>
      </div>
    </div>
  );
}
