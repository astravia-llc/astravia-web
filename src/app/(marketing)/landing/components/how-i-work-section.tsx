import { Calendar, Clock, Search, Zap } from "lucide-react";
import Button from "../../../../components/ui/button";

const ENGAGEMENTS = [
  {
    title: "Fractional CTO",
    subtitle: "Ongoing Technical Leadership",
    price: "$8,000/month",
    description:
      "10-20 hours per week embedded in your team. I own architecture decisions, AI integration strategy, and technical direction so your product scales without costly mistakes.",
    bullets: [
      "Weekly architecture and code review sessions",
      "Hiring and vendor evaluation guidance",
      "AI integration strategy and execution",
      "Direct Slack access for real-time decisions",
    ],
    icon: Clock,
    cta: "Book a Strategy Call",
    best: "Funded startups past MVP who need a technical leader, not just another developer.",
  },
  {
    title: "Technical Partner",
    subtitle: "Build & Ship",
    price: "$20,000 - $50,000",
    description:
      "End-to-end architecture and development for a defined scope. I take your scattered workflows, consolidate them into one platform, and wire in the AI layer. You get a production system, not a prototype.",
    bullets: [
      "Architecture through deployment",
      "AI/ML integration and data pipeline setup",
      "Infrastructure and CI/CD configuration",
      "30-day post-launch support window",
    ],
    icon: Zap,
    cta: "Discuss Your Project",
    best: "Teams with a clear product vision who need senior execution, not hand-holding.",
  },
  {
    title: "AI Architecture Audit",
    subtitle: "One-Time Deep Dive",
    price: "$5,000",
    description:
      "A focused 2-week audit of your current stack, data flows, and AI opportunity. You get a technical roadmap with prioritized recommendations, not a slide deck.",
    bullets: [
      "Full architecture and data flow review",
      "AI opportunity mapping with effort estimates",
      "Prioritized implementation roadmap",
      "60-minute walkthrough of findings",
    ],
    icon: Search,
    cta: "Book an Audit",
    best: "Teams who aren't sure what to build next and need a senior technical perspective.",
  },
];

export function HowIWorkSection() {
  return (
    <section
      id="how-i-work"
      className="py-20 md:py-28"
      style={{
        opacity: 0,
        animation: "fadeSlideUp 0.8s ease-out 0.4s forwards",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <span className="backdrop-blur-lg inline-flex items-center gap-2 uppercase tracking-widest text-xs font-medium mb-4 border-neutral-700 px-4 py-1.5 border rounded-full bg-gradient-to-tr from-teal-300/10 via-blue-400/10 to-orange-300/10 text-neutral-400 font-geist">
            How I Work
          </span>
          <h2 className="text-3xl md:text-4xl text-neutral-100 font-light tracking-tight font-geist">
            Three ways to work together
          </h2>
          <p className="text-neutral-400 mt-4 max-w-2xl mx-auto font-geist font-normal">
            Every engagement starts with a strategy call. No pitch decks, no
            account managers. Just a direct conversation about what you need.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {ENGAGEMENTS.map((eng) => {
            const Icon = eng.icon;
            return (
              <div
                key={eng.title}
                className="group relative bg-gradient-to-br from-neutral-900/90 to-neutral-900/40 border border-neutral-800/50 hover:border-neutral-700 rounded-2xl p-6 md:p-8 transition-all duration-300 flex flex-col"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/20">
                    <Icon className="w-5 h-5 text-teal-400" />
                  </div>
                  <div>
                    <h3 className="text-lg text-neutral-100 font-geist font-normal tracking-tight">
                      {eng.title}
                    </h3>
                    <p className="text-xs text-neutral-500 font-geist">
                      {eng.subtitle}
                    </p>
                  </div>
                </div>

                <div className="text-2xl text-cyan-400 font-light font-geist mb-4">
                  {eng.price}
                </div>

                <p className="text-sm text-neutral-400 font-geist font-normal leading-relaxed mb-6">
                  {eng.description}
                </p>

                <ul className="space-y-2 mb-6 flex-1">
                  {eng.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-start gap-2 text-sm text-neutral-400 font-geist"
                    >
                      <span className="text-teal-400 mt-0.5 shrink-0">
                        &#10003;
                      </span>
                      {bullet}
                    </li>
                  ))}
                </ul>

                <p className="text-xs text-neutral-500 font-geist mb-4 italic">
                  Best for: {eng.best}
                </p>

                <Button
                  variant="outline"
                  size="sm"
                  href="https://calendly.com/acostajf/30min"
                  rightIcon={<Calendar className="size-3.5" />}
                >
                  {eng.cta}
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default HowIWorkSection;
