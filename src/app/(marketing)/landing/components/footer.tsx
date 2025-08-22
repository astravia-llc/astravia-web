"use client";

import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="relative z-10 border-t bg-neutral-950/80 backdrop-blur-xl border-neutral-800/50">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* Left side - Logo and Navigation */}
          <div className="flex items-center gap-8">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <Image
                src="/astravia-logo.png"
                alt="Astravia"
                width={32}
                height={32}
                className="h-8 w-auto filter grayscale"
              />
            </div>

            {/* Navigation Links */}
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
                Products
              </Link>
            </nav>
          </div>

          {/* Right side - Contact Email */}
          <div className="flex items-center gap-3">
            <a
              href="mailto:jfacostamu@gmail.com"
              className="text-sm text-cyan-400 font-medium transition-colors hover:text-cyan-300"
            >
              jfacostamu@gmail.com
            </a>
          </div>
        </div>

        {/* Bottom line - Copyright */}
        <div className="mt-6">
          <p className="text-sm text-neutral-500 text-center lg:text-left">
            © 2025, Astravia LLC.
          </p>
        </div>
      </div>
    </footer>
  );
}
