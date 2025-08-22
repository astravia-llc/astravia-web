import { ShieldCheck, FileLock, GlobeLock, Award, Key } from "lucide-react";

export function OurServices() {
  return (
    <section
      className="py-20"
      style={{
        opacity: 0,
        animation: "fadeSlideUp 0.8s ease-out 0.4s forwards",
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h3 className="text-sm text-neutral-400 uppercase tracking-widest mb-2 font-geist font-normal transition-all duration-300">
            Our Services
          </h3>
          <p className="text-2xl text-neutral-200 font-light tracking-tight font-geist">
            We offer a range of services to help you achieve your goals.
          </p>
        </div>

        <div className="flex gap-8 items-center justify-evenly">
          {[ShieldCheck, FileLock, GlobeLock, Award, Key].map((Icon, i) => (
            <div
              key={i}
              className="group w-16 h-16 rounded-xl bg-neutral-900/50 border border-neutral-800 hover:border-neutral-700 flex items-center justify-center transition-all duration-300 hover:scale-110"
            >
              <Icon className="w-7 h-7 text-neutral-600 group-hover:text-neutral-400 stroke-1.5 transition-colors" />
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-12 text-center">
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
              <div className="text-xs text-neutral-400 uppercase tracking-wide font-geist font-normal">
                {cert.title}
              </div>
              <div className="text-sm text-neutral-500 mt-1 font-geist font-normal">
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
