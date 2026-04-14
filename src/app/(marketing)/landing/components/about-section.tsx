import { Github, Linkedin } from "lucide-react";
import Button from "../../../../components/ui/button";
import { Calendar } from "lucide-react";

export function AboutSection() {
  return (
    <section
      id="about"
      className="py-20 md:py-28 border-t border-neutral-800/50"
      style={{
        opacity: 0,
        animation: "fadeSlideUp 0.8s ease-out 0.4s forwards",
      }}
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <span className="inline-flex items-center gap-2 uppercase tracking-widest text-xs font-medium mb-6 border-neutral-700 px-4 py-1.5 border rounded-full bg-gradient-to-tr from-teal-300/10 via-blue-400/10 to-orange-300/10 text-neutral-400 font-geist">
          About
        </span>

        <h2 className="text-3xl md:text-4xl text-neutral-100 font-light tracking-tight font-geist mb-8">
          Jhon Acosta
        </h2>

        <div className="space-y-5 text-lg text-neutral-400 font-geist font-normal leading-relaxed">
          <p>
            I&apos;m the founder of AstraVia LLC. I&apos;ve spent 5+ years
            building and shipping software across product engineering, AI
            systems, and data-heavy platforms. My background spans U.S.
            startups, international agencies, and my own SaaS products.
          </p>

          <p>
            I work best with founders and product teams who have something
            real. Real users, real revenue, real traction. But they need a
            technical partner to take it from working to scalable.
          </p>

          <p>
            I&apos;m not a ticket executor. I think in systems, not features.
            I care about architecture, AI workflows, product direction, and
            building things that compound.
          </p>

          <p className="text-neutral-300">
            If your product is past MVP and your technical needs are
            outgrowing your current setup, let&apos;s talk.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-4 mt-8">
          <Button
            variant="gradient"
            size="md"
            href="https://calendly.com/acostajf/30min"
            rightIcon={<Calendar className="size-4" />}
          >
            Book a Strategy Call
          </Button>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com/jfacostam"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-10 h-10 rounded-xl border border-neutral-800 text-neutral-400 hover:text-neutral-200 hover:border-neutral-600 transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/jhon-acosta"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-10 h-10 rounded-xl border border-neutral-800 text-neutral-400 hover:text-neutral-200 hover:border-neutral-600 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
