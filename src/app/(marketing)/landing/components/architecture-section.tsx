import { MessageCircle, Brain, Database, CheckCircle } from "lucide-react";

export function ArchitectureSection() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div
            className="lg:col-span-4 space-y-6"
            style={{
              opacity: 0,
              animation: "fadeSlideRight 0.8s ease-out 0.2s forwards",
            }}
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full text-sm font-geist font-normal bg-indigo-500/10 text-cyan-400">
                  03
                </span>
              </div>
              <div>
                <h2 className="text-2xl text-neutral-100 mb-4 font-light tracking-tight font-geist">
                  Advanced AI Architecture
                </h2>
                <p className="text-neutral-400 leading-relaxed font-geist font-normal">
                  The Astravia AI™ features a proprietary AI architecture
                  specifically engineered for customer service excellence. Every
                  neural layer is optimized for precision, speed, and
                  reliability.
                </p>
              </div>
            </div>

            <div className="space-y-4 pl-12">
              <div className="flex items-center gap-3">
                <svg
                  className="w-4 h-4 text-cyan-400"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
                <span className="text-sm text-neutral-300 font-geist font-normal">
                  Lightning-fast inference optimization
                </span>
              </div>
              <div className="flex items-center gap-3">
                <svg
                  className="w-4 h-4 text-cyan-400"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                <span className="text-sm text-neutral-300 font-geist font-normal">
                  Enterprise-grade security protocols
                </span>
              </div>
              <div className="flex items-center gap-3">
                <svg
                  className="w-4 h-4 text-cyan-400"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M21 12a9 9 0 1 1-9-9" />
                  <path d="M21 3v9h-9" />
                </svg>
                <span className="text-sm text-neutral-300 font-geist font-normal">
                  Context-aware response generation
                </span>
              </div>
            </div>
          </div>

          <div
            className="lg:col-span-8"
            style={{
              opacity: 0,
              animation: "fadeSlideLeft 0.8s ease-out 0.4s forwards",
            }}
          >
            <div className="relative bg-gradient-to-br from-neutral-900/80 to-neutral-900/40 border border-neutral-800/50 rounded-2xl overflow-hidden p-6 md:p-12">
              <div className="absolute inset-0 pointer-events-none opacity-30">
                <svg
                  className="w-full h-full"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <pattern
                      id="grid"
                      width="40"
                      height="40"
                      patternUnits="userSpaceOnUse"
                    >
                      <path
                        d="M40 0V40H0"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="0.5"
                      ></path>
                    </pattern>
                  </defs>
                  <rect
                    width="100%"
                    height="100%"
                    fill="url(#grid)"
                    className="text-neutral-700"
                  ></rect>
                </svg>
              </div>

              <div className="relative">
                <div className="flex flex-col items-center space-y-8">
                  <div className="w-full max-w-md">
                    <div className="bg-gradient-to-r from-blue-500/20 to-blue-600/20 border border-blue-500/30 rounded-xl p-6 text-center">
                      <MessageCircle className="w-8 h-8 text-blue-400 mx-auto mb-3 stroke-1.5" />
                      <div className="text-sm text-blue-400 font-geist font-normal">
                        Customer Query Input
                      </div>
                      <div className="text-xs text-neutral-400 mt-1 font-geist font-normal">
                        Natural language processing
                      </div>
                    </div>
                  </div>

                  <div className="w-full grid md:grid-cols-2 gap-6 max-w-4xl">
                    <div className="bg-gradient-to-r border rounded-xl p-6 from-indigo-500/20 to-indigo-600/20 border-indigo-500/30">
                      <Brain className="w-8 h-8 mb-3 stroke-1.5 text-indigo-400" />
                      <div className="text-sm mb-2 font-geist font-normal text-indigo-400">
                        Neural Processing Core
                      </div>
                      <div className="text-xs text-neutral-400 font-geist font-normal">
                        Advanced transformer architecture
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-green-500/20 to-green-600/20 border border-green-500/30 rounded-xl p-6">
                      <Database className="w-8 h-8 text-green-400 mb-3 stroke-1.5" />
                      <div className="text-sm text-green-400 mb-2 font-geist font-normal">
                        Knowledge Retrieval
                      </div>
                      <div className="text-xs text-neutral-400 font-geist font-normal">
                        RAG-enhanced information access
                      </div>
                    </div>
                  </div>

                  <div className="w-full max-w-md">
                    <div className="bg-gradient-to-r border rounded-xl p-6 text-center from-indigo-500/20 to-indigo-600/20 border-indigo-500/30">
                      <CheckCircle className="w-8 h-8 mx-auto mb-3 stroke-1.5 text-indigo-400" />
                      <div className="text-sm font-geist font-normal text-indigo-400">
                        Validated Response
                      </div>
                      <div className="text-xs text-neutral-400 mt-1 font-geist font-normal">
                        Quality-assured output
                      </div>
                    </div>
                  </div>
                </div>

                <svg
                  className="absolute inset-0 w-full h-full pointer-events-none"
                  style={{ zIndex: -1 }}
                >
                  <defs>
                    <linearGradient
                      id="flowGradient"
                      x1="0%"
                      y1="0%"
                      x2="0%"
                      y2="100%"
                    >
                      <stop
                        offset="0%"
                        style={{ stopColor: "#f97316", stopOpacity: 0.6 }}
                      ></stop>
                      <stop
                        offset="100%"
                        style={{ stopColor: "#f97316", stopOpacity: 0.2 }}
                      ></stop>
                    </linearGradient>
                  </defs>
                  <path
                    d="M50% 20% L50% 80%"
                    stroke="url(#flowGradient)"
                    strokeWidth="2"
                    strokeDasharray="6 6"
                    fill="none"
                  >
                    <animate
                      attributeName="stroke-dashoffset"
                      values="0;12"
                      dur="2s"
                      repeatCount="indefinite"
                    ></animate>
                  </path>
                </svg>
              </div>

              <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { v: "4.2B", l: "Parameters" },
                  { v: "128K", l: "Context Window" },
                  { v: "99.97%", l: "Uptime SLA" },
                ].map((t) => (
                  <div
                    className="text-center p-4 rounded-lg bg-neutral-800/30"
                    key={t.l}
                  >
                    <div className="text-lg mb-1 font-geist font-normal text-cyan-400">
                      {t.v}
                    </div>
                    <div className="text-xs text-neutral-400 font-geist font-normal">
                      {t.l}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ArchitectureSection;
