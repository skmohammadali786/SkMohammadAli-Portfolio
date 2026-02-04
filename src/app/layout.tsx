import type { Metadata } from "next";
import "./globals.css";
import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
import ErrorReporter from "@/components/ErrorReporter";
import Script from "next/script";
import Navbar from "@/components/ui/Navbar";
import Scene from "@/components/3d/Scene";
import LoadingScreen from "@/components/ui/LoadingScreen";

export const metadata: Metadata = {
  metadataBase: new URL("https://skmohammadali.in"),
  title: "SK MOHAMMAD ALI | Engineering Student & Full-Stack Developer",
  description: "A premium 3D portfolio showcasing the work and skills of SK Mohammad Ali.",
  alternates: {
    canonical: "https://skmohammadali.in/",
  },
  openGraph: {
    title: "SK MOHAMMAD ALI | Full Stack Developer",
    description: "Engineering student and full stack developer portfolio.",
    url: "https://skmohammadali.in/",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "SK Mohammad Ali",
  "url": "https://skmohammadali.in/",
  "sameAs": [
    "https://www.linkedin.com/in/skmohammadali",
    "https://github.com/skmohammadali786",
    "https://www.instagram.com/skmohammadali_?igsh=MTlpbzltcTU3eDNmag==",
    "https://www.facebook.com/share/17nMRusRwv/",
    "https://x.com/Skmohammadali_"
  ],
  "jobTitle": "Full Stack Developer",
  "description": "Engineering student and full stack developer."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="antialiased bg-black text-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Script
          id="orchids-browser-logs"
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts/orchids-browser-logs.js"
          strategy="afterInteractive"
          data-orchids-project-id="6bf21f54-77be-440d-8b6d-8dc995cee286"
        />
        <ErrorReporter />
        <Script
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts//route-messenger.js"
          strategy="afterInteractive"
          data-target-origin="*"
          data-message-type="ROUTE_CHANGE"
          data-include-search-params="true"
          data-only-in-iframe="true"
          data-debug="true"
          data-custom-data='{"appName": "YourApp", "version": "1.0.0", "greeting": "hi"}'
        />
        <Scene />
        <Navbar />
        <LoadingScreen />
        <main className="relative z-10">
          {children}
        </main>
        <VisualEditsMessenger />
      </body>
    </html>
  );
}
