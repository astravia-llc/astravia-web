"use client";

import { Send } from "lucide-react";
import Button from "../../../../components/ui/button";

export function HeroHeader() {
  return (
    <header className="relative overflow-hidden pt-20">
      <div className="max-w-7xl sm:px-6 lg:px-8 md:pt-24 mr-auto ml-auto pt-16 pr-4 pb-8 pl-4">
        <div className="max-w-4xl text-center mr-auto ml-auto">
          <span
            className="inline-flex items-center gap-2 uppercase tracking-widest text-xs font-medium mb-6 border-neutral-700 px-6 py-2 border rounded-full bg-gradient-to-tr from-teal-300/10 via-blue-400/10 to-orange-300/10"
            style={{
              opacity: 0,
              animation: "fadeSlideUp 0.8s ease-out 0.4s forwards",
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-teal-400 to-orange-500"></span>
            <span className="text-neutral-400 font-geist font-normal">
              Next-Generation Software Architecture
            </span>
          </span>

          <h1
            className="sm:text-5xl lg:text-7xl xl:text-8xl leading-[0.9] text-4xl font-light text-neutral-100 tracking-tight mb-8 font-playfair"
            style={{
              opacity: 0,
              animation:
                "0.8s ease-out 0.6s 1 normal forwards running fadeSlideUp",
            }}
          >
            Integrate AI with
            <br className="hidden sm:block" />
            <span
              className="bg-clip-text font-light text-transparent tracking-tight bg-gradient-to-tr from-white via-white to-orange-700 inline-block"
              style={{
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Astravia
            </span>
          </h1>

          <p
            className="text-lg sm:text-xl text-neutral-400 leading-relaxed max-w-2xl mx-auto mb-10 font-geist font-normal"
            style={{
              opacity: 0,
              animation:
                "0.8s ease-out 0.8s 1 normal forwards running fadeSlideUp",
              transition: "outline 0.1s ease-in-out",
            }}
          >
            Revolutionary AI architecture designed for enterprise-grade customer
            intelligence. Built for precision, optimized for scale.
          </p>

          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            style={{
              opacity: 0,
              animation: "fadeSlideUp 0.8s ease-out 1s forwards",
            }}
          >
            <Button variant="outline" size="md" href="#">
              Watch Our Work
            </Button>
            <Button
              variant="neutral"
              size="md"
              href="#"
              rightIcon={<Send className="size-4" />}
            >
              Let&apos;s Talk
            </Button>
          </div>
        </div>
      </div>

      {/* Animated background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-96 h-96 rounded-full blur-3xl bg-indigo-500/5"></div>
        <div className="absolute -bottom-40 -left-32 w-96 h-96 rounded-full blur-3xl bg-indigo-500/5"></div>
      </div>
    </header>
  );
}

export default HeroHeader;
