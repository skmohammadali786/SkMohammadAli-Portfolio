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
    <div className="relative overflow-hidden px-4 pb-24 pt-32 text-ink sm:px-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto max-w-[1500px]">
        <a href="/" className="mb-10 inline-flex items-center gap-2 rounded-full border-2 border-ink bg-white px-5 py-3 text-sm font-black shadow-[4px_4px_0_#2c2e2a] transition hover:-translate-y-1">
          <ArrowLeft size={18} /> Back to portfolio
        </a>

        <SectionHeader
          eyebrow="Backlink Resources"
          title="Cite the portfolio with the right signals."
          subtitle="Quality backlinks come from relevant, trustworthy pages. This page gives directories, collaborators, clubs, publishers, and project roundups the official links and context they need to reference SK Mohammad Ali accurately."
        />

        <section className="grid gap-6 lg:grid-cols-[1.1fr_.9fr]">
          <GlassPanel className="bg-fresh">
            <div className="flex items-start gap-4">
              <div className="rounded-full border-2 border-ink bg-white p-3 shadow-[3px_3px_0_#2c2e2a]">
                <LinkIcon size={24} />
              </div>
              <div>
                <h1 className="text-4xl font-black tracking-[-0.07em] sm:text-6xl">Official citation</h1>
                <p className="mt-5 text-lg font-semibold leading-8 text-ink/78">
                  SK Mohammad Ali is an Electrical Engineering student at Aliah University, a full-stack developer, and an IoT builder based in Kolkata, India. His portfolio highlights engineering projects, SaaS and web development skills, and practical systems work.
                </p>
              </div>
            </div>
          </GlassPanel>

          <GlassPanel className="bg-white">
            <h2 className="text-3xl font-black tracking-[-0.06em]">Suggested anchor text</h2>
            <div className="mt-6 flex flex-wrap gap-3">
              {anchorSuggestions.map((anchor) => (
                <span key={anchor} className="rounded-full border-2 border-ink bg-cream px-4 py-2 text-sm font-black shadow-[3px_3px_0_#2c2e2a]">
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
              <GlassPanel key={link.href} delay={index * 0.04} className={index % 2 ? "bg-white" : "bg-[#f5e211]"}>
                <a href={link.href} target={link.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="group flex h-full flex-col justify-between gap-8">
                  <div>
                    <h2 className="text-3xl font-black tracking-[-0.06em]">{link.label}</h2>
                    <p className="mt-4 text-base font-semibold leading-7 text-ink/75">{link.note}</p>
                  </div>
                  <span className="inline-flex items-center gap-2 break-all text-sm font-black text-ink transition group-hover:text-[#5ba634]">
                    {link.href} <ExternalLink size={18} />
                  </span>
                </a>
              </GlassPanel>
            ))}
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <GlassPanel className="bg-white">
            <div className="mb-6 flex items-center gap-3">
              <Share2 size={26} />
              <h2 className="text-4xl font-black tracking-[-0.07em]">Relevant backlink opportunities</h2>
            </div>
            <ul className="space-y-4 text-lg font-semibold leading-8 text-ink/78">
              {backlinkTargets.map((target) => (
                <li key={target} className="rounded-[1.5rem] border-2 border-ink bg-cream px-5 py-4 shadow-[3px_3px_0_#2c2e2a]">{target}</li>
              ))}
            </ul>
          </GlassPanel>

          <GlassPanel className="bg-fresh">
            <div className="mb-6 flex items-center gap-3">
              <Mail size={26} />
              <h2 className="text-4xl font-black tracking-[-0.07em]">Collaboration note</h2>
            </div>
            <p className="text-lg font-semibold leading-8 text-ink/78">
              If you are publishing an engineering showcase, student project directory, campus event page, developer roundup, or accessibility technology article, link to the homepage as the canonical source and mention the Voice Control Wheel Chair project when the context is about IoT or assistive mobility.
            </p>
            <a href={`mailto:${portfolioData.contact.emails[0]}?subject=Portfolio%20citation%20or%20collaboration`} className="mt-8 inline-flex items-center justify-center gap-2 rounded-full border-2 border-ink bg-white px-6 py-3 text-base font-black shadow-[5px_5px_0_#2c2e2a] transition hover:-translate-y-1">
              Contact for citation details <ExternalLink size={18} />
            </a>
          </GlassPanel>
        </section>
      </div>
    </div>
  );
}
