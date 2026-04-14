import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AstraVia LLC — Fractional CTO & AI Technical Partner for Startups",
  description:
    "I help funded startups consolidate scattered workflows into scalable AI-powered platforms. Fractional CTO retainers, project-based builds, and AI architecture audits.",
  keywords: [
    "Fractional CTO",
    "Technical Partner",
    "AI Integration",
    "Startup CTO",
    "Technical Architecture",
    "AI Consulting",
    "AstraVia LLC",
    "Next.js",
    "Full-Stack Development",
    "Product Engineering",
  ],
  openGraph: {
    title: "AstraVia LLC — Fractional CTO & AI Technical Partner",
    description:
      "I help funded startups consolidate scattered workflows into scalable AI-powered platforms. Fractional CTO retainers, project-based builds, and AI architecture audits.",
    url: "https://www.astraviallc.com",
    siteName: "AstraVia LLC",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/api/og",
        width: 1200,
        height: 630,
        alt: "AstraVia LLC — Fractional CTO & AI Technical Partner for Startups",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AstraVia LLC — Fractional CTO & AI Technical Partner",
    description:
      "I help funded startups consolidate scattered workflows into scalable AI-powered platforms. Fractional CTO retainers, project-based builds, and AI architecture audits.",
    images: ["/api/og"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-neutral-950 text-neutral-200 antialiased overflow-x-hidden`}
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}
