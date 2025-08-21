"use client";

import Image from "next/image";
import clsx from "clsx";
import { Menu } from "lucide-react";

export function Navigation() {
  return (
    <nav
      className="fixed top-0 w-full z-50 bg-neutral-950/80 backdrop-blur-xl border-b border-neutral-800/50"
      style={{
        opacity: 0,
        animation: "0.8s ease-out 0.2s 1 normal forwards running fadeSlideDown",
        transition: "outline 0.1s ease-in-out",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div
              className={clsx(
                "w-8 h-8 rounded-lg bg-gradient-to-br flex items-center justify-center",
                "hover:scale-105 transition-all duration-300"
              )}
            >
              <Image
                src="/astravia-logo.png"
                alt="Astravia Logo"
                width={100}
                height={100}
                className="size-10 text-white stroke-2"
              />
            </div>
            <span className="text-lg tracking-tight font-geist font-normal">
              Astravia
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            {[
              ["Products", "#"],
              ["Solutions", "#"],
              ["Developers", "#"],
              ["Company", "#"],
            ].map(([label, href]) => (
              <a
                key={label as string}
                href={href as string}
                className="text-sm text-neutral-400 hover:text-neutral-200 transition-colors font-geist font-normal"
              >
                {label}
              </a>
            ))}
          </div>
          <button className="md:hidden">
            <Menu className="size-5" />
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
