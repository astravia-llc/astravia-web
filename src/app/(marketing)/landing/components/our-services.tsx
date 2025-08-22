import {
  ShieldCheck,
  Award,
  Network,
  BrainCircuit,
  Handshake,
} from "lucide-react";

export function OurServices() {
  return (
    <section
      className="py-20 backdrop-grayscale-80"
      style={{
        opacity: 0,
        animation: "fadeSlideUp 0.8s ease-out 0.4s forwards",
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="backdrop-blur-lg  inline-flex items-center gap-2 uppercase tracking-widest text-xs font-medium mb-4 border-neutral-700 px-4 py-1.5 border rounded-full bg-gradient-to-tr from-teal-300/10 via-blue-400/10 to-orange-300/10 text-neutral-400 font-geist">
            Our Services
          </span>
          <p className="text-2xl text-neutral-200 font-light tracking-tight font-geist">
            We offer a range of services to help you achieve your goals.
          </p>
        </div>

        <div className="flex gap-8 items-center justify-evenly">
          {[ShieldCheck, Network, BrainCircuit, Award, Handshake].map(
            (Icon, i) => (
              <div
                key={i}
                className="group w-16 h-16 rounded-xl bg-neutral-900/50 border border-neutral-800 hover:border-neutral-700 flex items-center justify-center transition-all duration-300 hover:scale-110 backdrop-blur-lg"
              >
                <Icon className="w-7 h-7 text-neutral-500 group-hover:text-neutral-300 stroke-1.5 transition-colors" />
              </div>
            )
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 text-center">
          {[
            {
              title: "Software Development",
              subtitle:
                "We build software for the long term. Scalable, maintainable, and future-proof.",
            },
            {
              title: "AI Integration",
              subtitle:
                "We integrate AI into your legacy software to improve efficiency and accuracy",
            },
            {
              title: "Consulting",
              subtitle: "Get our experts advice to improve your business.",
            },
          ].map((cert, i) => (
            <div key={i}>
              <div className="text-xs text-neutral-300 uppercase tracking-wide font-geist font-normal">
                {cert.title}
              </div>
              <div className="text-sm text-neutral-400 mt-1 font-geist font-normal">
                {cert.subtitle}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurServices;
