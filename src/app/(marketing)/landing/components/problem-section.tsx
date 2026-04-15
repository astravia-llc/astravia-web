export function ProblemSection() {
  return (
    <section
      id="problem"
      className="py-20 md:py-28 relative"
      style={{
        opacity: 0,
        animation: "fadeSlideUp 0.8s ease-out 0.4s forwards",
      }}
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl bg-neutral-950/70 backdrop-blur-xl border border-neutral-800/30 p-6 sm:p-10 md:p-12">
          <span className="inline-flex items-center gap-2 uppercase tracking-widest text-xs font-medium mb-6 border-neutral-700 px-4 py-1.5 border rounded-full bg-gradient-to-tr from-teal-300/10 via-blue-400/10 to-orange-300/10 text-neutral-400 font-geist">
            The Problem I Solve
          </span>

          <h2 className="text-3xl md:text-4xl text-neutral-100 font-light tracking-tight font-geist mb-8">
            You&apos;ve built something that works. Users are paying. But under
            the hood:
          </h2>

          <div className="space-y-4 text-lg text-neutral-400 font-geist font-normal leading-relaxed">
            <p className="flex items-start gap-3">
              <span className="text-teal-400 shrink-0 mt-1">&rarr;</span>
              Data lives in five different places
            </p>
            <p className="flex items-start gap-3">
              <span className="text-teal-400 shrink-0 mt-1">&rarr;</span>
              Your team runs manual workflows they secretly hate
            </p>
            <p className="flex items-start gap-3">
              <span className="text-teal-400 shrink-0 mt-1">&rarr;</span>
              You know AI could 10x this, but nobody on your team can execute it
            </p>
            <p className="flex items-start gap-3">
              <span className="text-teal-400 shrink-0 mt-1">&rarr;</span>
              Your architecture was built for launch, not for scale
            </p>
            <p className="flex items-start gap-3">
              <span className="text-teal-400 shrink-0 mt-1">&rarr;</span>
              You&apos;re one bad quarter away from a painful rewrite
            </p>
          </div>

          <p className="mt-10 text-lg text-neutral-300 font-geist font-normal leading-relaxed">
            I take the duct-tape version and turn it into the real platform.
            Consolidated data, automated workflows, AI where it actually matters,
            and architecture that doesn&apos;t break when you 5x your users.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ProblemSection;
