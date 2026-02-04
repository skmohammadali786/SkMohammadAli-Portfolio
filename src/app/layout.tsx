import type { Metadata } from "next";
import "./globals.css";
import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
import ErrorReporter from "@/components/ErrorReporter";
import Script from "next/script";
import Navbar from "@/components/ui/Navbar";
import Scene from "@/components/3d/Scene";
import LoadingScreen from "@/components/ui/LoadingScreen";

export const metadata: Metadata = {
  metadataBase: new URL('https://www.skmohammadali.com'),
  title: "SK MOHAMMAD ALI | Engineering Student & Full-Stack Developer",
  description: "Explore the professional portfolio of SK Mohammad Ali, an Electrical Engineering student and Full-Stack Developer. View innovative projects in IoT and web development, technical skills, and contact information.",
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="antialiased bg-black text-white">
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
