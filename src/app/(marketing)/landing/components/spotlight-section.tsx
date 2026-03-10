import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function SpotlightSection() {
  return (
    <section
      className="py-20 md:py-24"
      style={{
        opacity: 0,
        animation: "fadeSlideUp 0.8s ease-out 0.4s forwards",
      }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl bg-gradient-to-br from-neutral-900/90 to-neutral-900/40 border border-neutral-800/50 p-8 md:p-12 overflow-hidden">
          {/* Accent glow */}
          <div className="pointer-events-none absolute -top-24 -right-24 w-72 h-72 rounded-full blur-3xl opacity-[0.08] bg-gradient-to-br from-emerald-500 to-teal-600" />

          <span className="inline-flex items-center gap-2 uppercase tracking-widest text-xs font-medium border-neutral-700 px-3 py-1 border rounded-full bg-gradient-to-tr from-emerald-300/10 to-teal-300/10 text-neutral-400 font-geist mb-6">
            Featured Project
          </span>

          <p className="text-neutral-300 leading-relaxed font-geist font-normal max-w-3xl">
            With Grove, Astravia built a premium relationship intelligence
            product that turns messy conversational context into structured,
            reviewable memory. It&apos;s a strong example of our approach to
            AI-native software: useful workflows, thoughtful UX, real
            integrations, and systems designed for trust.
          </p>

          <div className="flex flex-wrap gap-2 mt-6">
            {[
              "AI-assisted workflows",
              "Telegram integration",
              "Google Contacts sync",
              "Network visualization",
              "Premium SaaS UX",
            ].map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-neutral-800/60 border border-neutral-700/50 text-neutral-400 font-geist"
              >
                {tag}
              </span>
            ))}
          </div>

          <Link
            href="/case-study/grove"
            className="inline-flex items-center gap-1.5 mt-8 text-sm text-neutral-400 hover:text-neutral-200 transition-colors font-geist"
          >
            Explore the Grove case study
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default SpotlightSection;
