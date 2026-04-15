"use client";

import Image from "next/image";
import Link from "next/link";
import { Calendar } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative z-10 border-t bg-neutral-950/80 backdrop-blur-xl border-neutral-800/50">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* Left side - Logo and Navigation */}
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3">
              <Image
                src="/astravia-logo.png"
                alt="Astravia"
                width={32}
                height={32}
                className="h-8 w-auto filter grayscale"
              />
            </div>

            <nav className="flex items-center gap-6 text-neutral-400">
              <Link
                href="/"
                className="text-sm font-medium transition-colors hover:text-neutral-100"
              >
                Home
              </Link>
              <Link
                href="/#products"
                className="text-sm font-medium transition-colors hover:text-neutral-100"
              >
                Work
              </Link>
              <Link
                href="/#how-i-work"
                className="text-sm font-medium transition-colors hover:text-neutral-100"
              >
                Services
              </Link>
              <Link
                href="/#about"
                className="text-sm font-medium transition-colors hover:text-neutral-100"
              >
                About
              </Link>
            </nav>
          </div>

          {/* Right side - Contact */}
          <div className="flex items-center gap-4">
            <a
              href="mailto:jhon@astraviallc.com"
              className="text-sm text-cyan-400 font-medium transition-colors hover:text-cyan-300"
            >
              jhon@astraviallc.com
            </a>
            <a
              href="https://calendly.com/acostajf/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-neutral-400 font-medium transition-colors hover:text-neutral-200"
            >
              <Calendar className="size-3.5" />
              Book a Call
            </a>
          </div>
        </div>

        <div className="mt-6">
          <p className="text-sm text-neutral-500 text-center lg:text-left">
            &copy; {new Date().getFullYear()}, AstraVia LLC.
          </p>
        </div>
      </div>
    </footer>
  );
}
