import clsx from "clsx";
import { Rocket, Calendar } from "lucide-react";

export function CTASection() {
  return (
    <section
      className="py-20 bg-gradient-to-r from-neutral-900/50 to-neutral-800/30 border-y border-neutral-800/50 backdrop-grayscale-100"
      style={{
        opacity: 0,
        animation: "0.8s ease-out 0.2s 1 normal forwards running fadeSlideUp",
        transition: "outline 0.1s ease-in-out",
      }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h3 className="text-3xl md:text-4xl text-neutral-100 mb-6 font-light tracking-tight font-geist">
          Ready to experience the future?
        </h3>
        <p className="text-lg text-neutral-400 mb-10 max-w-2xl mx-auto font-geist font-normal">
          Join thousands of enterprises leveraging Astravia AI for superior
          customer experiences.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            className={clsx(
              "hover:cursor-pointer group inline-flex items-center gap-2 rounded-full bg-gradient-to-r text-white px-8 py-4 transition-all duration-300 transform  font-geist font-normal",
              "from-teal-500/20 to-orange-600/20 hover:from-teal-500/50 hover:to-orange-700/50",
              "border border-neutral-700 hover:border-neutral-500 "
            )}
          >
            <Rocket className="w-5 h-5 stroke-2" />
            Start Free Trial
          </button>
          <button className="hover:cursor-pointer inline-flex items-center gap-2 rounded-full border border-neutral-700 hover:border-neutral-600 hover:bg-neutral-900/50 px-8 py-4 transition-all duration-300 font-geist font-normal">
            <Calendar className="w-5 h-5 stroke-1.5" />
            Schedule Demo
          </button>
        </div>
      </div>
    </section>
  );
}

export default CTASection;
