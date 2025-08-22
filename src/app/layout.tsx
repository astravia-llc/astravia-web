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
  title: "Astravia LLC | Intelligent SaaS for Customer-Centric Growth",
  description:
    "Astravia LLC builds AI-driven SaaS products designed to empower businesses with advanced customer intelligence. Our first product, CaloriChat, helps users track nutrition effortlessly while showcasing the future of data-driven wellness tools.",
  keywords: [
    "Astravia LLC",
    "CaloriChat",
    "AI SaaS",
    "Customer Intelligence",
    "Business Analytics",
    "Nutrition AI",
    "Customer Growth Tools",
    "Startup SaaS",
    "AI for Business",
    "Software Development",
    "AI Integration",
    "Consulting",
    "Support",
    "Software Agency",
    "Custom Software Development",
    "Legacy Software Development",
    "AI Integration",
    "AI Consulting",
    "AI Support",
    "AI Training",
    "AI Custom Software",
    "AI Legacy Software",
  ],
  openGraph: {
    title: "Astravia LLC — Advanced SaaS for Intelligent Customer Growth",
    description:
      "Astravia builds AI-first SaaS products that empower businesses and individuals to grow smarter. Starting with CaloriChat, our intelligent calorie tracking and customer engagement tool.",
    url: "https://www.astraviallc.com", // cámbialo cuando tengas dominio final
    siteName: "Astravia LLC",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/api/og", // llama a la ruta que genera la imagen
        width: 1200,
        height: 630,
        alt: "Astravia LLC - Intelligent SaaS for Customer-Centric Growth",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Astravia LLC | AI-Powered SaaS for Customer-Centric Growth",
    description:
      "Astravia builds AI-first SaaS products that empower businesses and individuals to grow smarter. Starting with CaloriChat, our intelligent calorie tracking and customer engagement tool.",
    creator: "@astravia",
    images: ["https://www.astraviallc.com/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Google Fonts */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600;700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600;700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;900&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:wght@400;500;600;700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400;700;900&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@300;400;500;600;700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@300;400;500;600;700;800&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=PT+Serif:wght@400;700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Geist+Mono:wght@300;400;500;600;700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;500;600;700;800&display=swap"
        />
      </head>
      <body
        className="bg-neutral-950 text-neutral-200 antialiased overflow-x-hidden"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}
