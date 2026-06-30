import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import { DynamicErrorReporter, DynamicVisualEditsMessenger } from "@/components/LazyComponents";
import SmoothScroll from "@/components/SmoothScroll";

export const metadata: Metadata = {
  metadataBase: new URL('https://www.skmohammadali.in'),
  alternates: {
    canonical: 'https://www.skmohammadali.in',
  },
  title: "SK Mohammad Ali Portfolio | Full-Stack Developer, Electrical Engineering Student & IoT Builder",
  description: "SK Mohammad Ali portfolio for a Kolkata full-stack developer, Electrical Engineering student, IoT builder, and SaaS maker. Explore web development projects, skills, resume, and contact details.",
  keywords: [
    "SK Mohammad Ali",
    "SK Mohammad Ali portfolio",
    "Electrical Engineering student",
    "Full-stack developer",
    "IoT development",
    "SaaS builder",
    "Kolkata developer",
    "Aliah University",
    "engineering projects",
  ],
  openGraph: {
    title: "SK Mohammad Ali Portfolio | Full-Stack Developer, Electrical Engineering Student & IoT Builder",
    description: "SK Mohammad Ali portfolio for a Kolkata full-stack developer, Electrical Engineering student, IoT builder, and SaaS maker. Explore web development projects, skills, resume, and contact details.",
    url: 'https://www.skmohammadali.in',
    siteName: 'SK MOHAMMAD ALI Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "SK Mohammad Ali Portfolio | Full-Stack Developer, Electrical Engineering Student & IoT Builder",
    description: "SK Mohammad Ali portfolio for a Kolkata full-stack developer, Electrical Engineering student, IoT builder, and SaaS maker. Explore web development projects, skills, resume, and contact details.",
    creator: '@Skmohammadali_',
  },
  icons: {
    icon: [
      { url: '/logo.webp', type: 'image/webp' },
      { url: '/favicon.png', type: 'image/png' },
    ],
    apple: '/logo.webp',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "SK Mohammad Ali",
    "jobTitle": "Full-Stack Developer and Electrical Engineering Student",
    "url": "https://www.skmohammadali.in",
    "image": "https://skmohammadali.in/logo.webp",
    "sameAs": [
      "https://www.instagram.com/skmohammadali_",
      "https://www.linkedin.com/in/skmohammadali",
      "https://twitter.com/Skmohammadali_",
      "https://www.facebook.com/share/17nMRusRwv/",
      "https://github.com/skmohammadali786"
    ],
    "email": ["connect@skmohammadali.in", "skmohammadaliofficail@gmail.com"],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Kolkata",
      "addressCountry": "India"
    },
    "alumniOf": {
      "@type": "CollegeOrUniversity",
      "name": "Aliah University"
    }
  };

  return (
    <html lang="en" className="dark">
      <body className="antialiased bg-cream text-ink">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <GoogleAnalytics GA_MEASUREMENT_ID="G-EJCFWZWK8X" />
        {process.env.NODE_ENV === "development" && <DynamicErrorReporter />}
        <Navbar />
        <SmoothScroll>
          <main className="relative z-10">
            {children}
          </main>
        </SmoothScroll>
        {process.env.NODE_ENV === "development" && <DynamicVisualEditsMessenger />}
      </body>
    </html>
  );
}
