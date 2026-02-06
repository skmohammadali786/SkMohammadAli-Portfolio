import type { Metadata } from "next";
import "./globals.css";
import ErrorReporter from "@/components/ErrorReporter";
import Script from "next/script";
import Navbar from "@/components/ui/Navbar";
import LoadingScreen from "@/components/ui/LoadingScreen";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import { DynamicScene, DynamicVisualEditsMessenger } from "@/components/LazyComponents";

export const metadata: Metadata = {
  metadataBase: new URL('https://www.skmohammadali.com'),
  title: "SK MOHAMMAD ALI | Engineering Student & Full-Stack Developer",
  description: "Explore the professional portfolio of SK Mohammad Ali, an Electrical Engineering student and Full-Stack Developer. View innovative projects in IoT and web development, technical skills, and contact information.",
  openGraph: {
    title: "SK MOHAMMAD ALI | Engineering Student & Full-Stack Developer",
    description: "Explore the professional portfolio of SK Mohammad Ali, an Electrical Engineering student and Full-Stack Developer. View innovative projects in IoT and web development, technical skills, and contact information.",
    url: 'https://www.skmohammadali.com',
    siteName: 'SK MOHAMMAD ALI Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "SK MOHAMMAD ALI | Engineering Student & Full-Stack Developer",
    description: "Explore the professional portfolio of SK Mohammad Ali, an Electrical Engineering student and Full-Stack Developer. View innovative projects in IoT and web development, technical skills, and contact information.",
    creator: '@Skmohammadali_',
  },
  icons: {
    icon: '/favicon.png',
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
        <GoogleAnalytics GA_MEASUREMENT_ID="G-EJCFWZWK8X" />
        <Script
          id="orchids-browser-logs"
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts/orchids-browser-logs.js"
          strategy="lazyOnload"
          data-orchids-project-id="6bf21f54-77be-440d-8b6d-8dc995cee286"
        />
        <ErrorReporter />
        <Script
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts//route-messenger.js"
          strategy="lazyOnload"
          data-target-origin="*"
          data-message-type="ROUTE_CHANGE"
          data-include-search-params="true"
          data-only-in-iframe="true"
          data-debug="true"
          data-custom-data='{"appName": "YourApp", "version": "1.0.0", "greeting": "hi"}'
        />
        <DynamicScene />
        <Navbar />
        <LoadingScreen />
        <main className="relative z-10">
          {children}
        </main>
        <DynamicVisualEditsMessenger />
      </body>
    </html>
  );
}
