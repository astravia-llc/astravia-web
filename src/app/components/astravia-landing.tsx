"use client";

import { useEffect } from "react";
import {
  Menu,
  Zap,
  Shield,
  Target,
  MessageCircle,
  Brain,
  Database,
  CheckCircle,
  Rocket,
  Calendar,
  ShieldCheck,
  FileLock,
  GlobeLock,
  Award,
  Key,
  Send,
} from "lucide-react";
import Image from "next/image";
import clsx from "clsx";

export default function AstraviaLanding() {
  useEffect(() => {
    // Add scroll-triggered animations for mobile responsiveness
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).style.opacity = "1";
          (entry.target as HTMLElement).style.transform = "translateY(0)";
        }
      });
    }, observerOptions);

    // Observe elements for mobile scroll animations
    document.querySelectorAll('[style*="opacity: 0"]').forEach((el) => {
      if (window.innerWidth < 1024) {
        (el as HTMLElement).style.transition =
          "opacity 0.8s ease-out, transform 0.8s ease-out";
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Spline 3D Background */}
      <div className="fixed w-full h-screen">
        <iframe
          src="https://my.spline.design/hellodistortingintro-KK1UjacLdIpYX67NFsvuRTYC/"
          // src="https://my.spline.design/liquidring-PGc8zQXZyDUpVFvWNgohNZnv"
          frameBorder="0"
          width="100%"
          height="100%"
        />
      </div>

      {/* Navigation */}
      <nav
        className="fixed top-0 w-full z-50 bg-neutral-950/80 backdrop-blur-xl border-b border-neutral-800/50"
        style={{
          opacity: 0,
          animation:
            "0.8s ease-out 0.2s 1 normal forwards running fadeSlideDown",
          transition: "outline 0.1s ease-in-out",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div
                className="w-8 h-8 rounded-lg bg-gradient-to-br flex items-center justify-center from-transparent from-[10%] via-transparent via-[75%] to-orange-600 to-[95%]"
                style={{ transition: "outline 0.1s ease-in-out" }}
              >
                <Image
                  src="/images/logo.png"
                  alt="Astravia Logo"
                  width={100}
                  height={100}
                  className="size-10 text-white stroke-2"
                />
              </div>
              <span
                className="text-lg tracking-tight font-geist font-normal"
                style={{ transition: "outline 0.1s ease-in-out" }}
              >
                Astravia
              </span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a
                href="#"
                className="text-sm text-neutral-400 hover:text-neutral-200 transition-colors font-geist font-normal"
                style={{ transition: "outline 0.1s ease-in-out" }}
              >
                Products
              </a>
              <a
                href="#"
                className="text-sm text-neutral-400 hover:text-neutral-200 transition-colors font-geist font-normal"
                style={{ transition: "outline 0.1s ease-in-out" }}
              >
                Solutions
              </a>
              <a
                href="#"
                className="text-sm text-neutral-400 hover:text-neutral-200 transition-colors font-geist font-normal"
                style={{ transition: "outline 0.1s ease-in-out" }}
              >
                Developers
              </a>
              <a
                href="#"
                className="text-sm text-neutral-400 hover:text-neutral-200 transition-colors font-geist font-normal"
                style={{ transition: "outline 0.1s ease-in-out" }}
              >
                Company
              </a>
            </div>
            <button className="md:hidden">
              <Menu className="size-5" />
            </button>
          </div>
        </div>
      </nav>

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
              <span
                className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-teal-400 to-orange-500"
                style={{ transition: "outline 0.1s ease-in-out" }}
              ></span>
              <span
                className="text-neutral-400 font-geist font-normal"
                style={{ transition: "outline 0.1s ease-in-out" }}
              >
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
              Revolutionary AI architecture designed for enterprise-grade
              customer intelligence. Built for precision, optimized for scale.
            </p>

            <div
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
              style={{
                opacity: 0,
                animation: "fadeSlideUp 0.8s ease-out 1s forwards",
              }}
            >
              <a
                href="#"
                className="px-6 py-3 inline-flex items-center gap-2 rounded-full border border-neutral-700 hover:border-neutral-600 hover:bg-neutral-900/50 text-sm  transition-all duration-300 font-geist font-normal"
                style={{ transition: "outline 0.1s ease-in-out" }}
              >
                Watch Our Work
              </a>
              <a
                href="#"
                className="bg-neutral-700/50 px-6 py-3 inline-flex items-center gap-2 rounded-full border border-neutral-700 hover:border-neutral-600 hover:bg-neutral-400/50 text-sm transition-all duration-300 font-geist font-normal"
                style={{ transition: "outline 0.1s ease-in-out" }}
              >
                Let`&apos;`s Talk
                <Send className="size-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Animated background */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div
            className="absolute -top-40 -right-32 w-96 h-96 rounded-full blur-3xl bg-indigo-500/5"
            style={{ transition: "outline 0.1s ease-in-out" }}
          ></div>
          <div
            className="absolute -bottom-40 -left-32 w-96 h-96 rounded-full blur-3xl bg-indigo-500/5"
            style={{ transition: "outline 0.1s ease-in-out" }}
          ></div>
        </div>
      </header>

      {/* Stats Section */}
      <section
        className="py-16 border-y border-neutral-800/50 backdrop-blur-lg"
        style={{
          opacity: 0,
          animation: "0.8s ease-out 1.2s 1 normal forwards running fadeSlideUp",
          transition: "outline 0.1s ease-in-out",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-2xl md:text-3xl mb-2 font-light tracking-tight font-geist text-cyan-400">
                99.7%
              </div>
              <div
                className="text-sm text-neutral-400 font-geist font-normal"
                style={{ transition: "outline 0.1s ease-in-out" }}
              >
                Accuracy Rate
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl mb-2 font-light tracking-tight font-geist text-cyan-400">
                2.3s
              </div>
              <div
                className="text-sm text-neutral-400 font-geist font-normal"
                style={{ transition: "outline 0.1s ease-in-out" }}
              >
                Avg Response Time
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl mb-2 font-light tracking-tight font-geist text-cyan-400">
                150M+
              </div>
              <div
                className="text-sm text-neutral-400 font-geist font-normal"
                style={{ transition: "outline 0.1s ease-in-out" }}
              >
                Conversations Processed
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl mb-2 font-light tracking-tight font-geist text-cyan-400">
                24/7
              </div>
              <div
                className="text-sm text-neutral-400 font-geist font-normal"
                style={{ transition: "outline 0.1s ease-in-out" }}
              >
                Uptime Guarantee
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Description */}
            <div
              className="lg:col-span-4 space-y-6"
              style={{
                opacity: 0,
                animation: "fadeSlideRight 0.8s ease-out 0.2s forwards",
              }}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <span
                    className="inline-flex items-center justify-center w-8 h-8 rounded-full text-sm font-geist font-normal bg-indigo-500/10 text-cyan-400"
                    style={{ transition: "outline 0.1s ease-in-out" }}
                  >
                    03
                  </span>
                </div>
                <div>
                  <h2 className="text-2xl text-neutral-100 mb-4 font-light tracking-tight font-geist">
                    Advanced AI Architecture
                  </h2>
                  <p
                    className="text-neutral-400 leading-relaxed font-geist font-normal"
                    style={{ transition: "outline 0.1s ease-in-out" }}
                  >
                    The Astravia AI™ features a proprietary AI architecture
                    specifically engineered for customer service excellence.
                    Every neural layer is meticulously optimized for precision,
                    speed, and reliability—enabling our AI agents to resolve
                    customer conversations more effectively than any competing
                    solution.
                  </p>
                </div>
              </div>

              <div className="space-y-4 pl-12">
                <div className="flex items-center gap-3">
                  <Zap
                    className="w-4 h-4 stroke-2 text-cyan-400"
                    style={{ transition: "outline 0.1s ease-in-out" }}
                  />
                  <span
                    className="text-sm text-neutral-300 font-geist font-normal"
                    style={{ transition: "outline 0.1s ease-in-out" }}
                  >
                    Lightning-fast inference optimization
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield
                    className="w-4 h-4 stroke-2 text-cyan-400"
                    style={{ transition: "outline 0.1s ease-in-out" }}
                  />
                  <span
                    className="text-sm text-neutral-300 font-geist font-normal"
                    style={{ transition: "outline 0.1s ease-in-out" }}
                  >
                    Enterprise-grade security protocols
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Target
                    className="w-4 h-4 stroke-2 text-cyan-400"
                    style={{ transition: "outline 0.1s ease-in-out" }}
                  />
                  <span
                    className="text-sm text-neutral-300 font-geist font-normal"
                    style={{ transition: "outline 0.1s ease-in-out" }}
                  >
                    Context-aware response generation
                  </span>
                </div>
              </div>
            </div>

            {/* Architecture Diagram */}
            <div
              className="lg:col-span-8"
              style={{
                opacity: 0,
                animation: "fadeSlideLeft 0.8s ease-out 0.4s forwards",
              }}
            >
              <div
                className="relative bg-gradient-to-br from-neutral-900/80 to-neutral-900/40 border border-neutral-800/50 rounded-2xl overflow-hidden p-6 md:p-12"
                style={{ transition: "outline 0.1s ease-in-out" }}
              >
                {/* Grid background */}
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
                      style={{ transition: "outline 0.1s ease-in-out" }}
                    ></rect>
                  </svg>
                </div>

                {/* Main Architecture Flow */}
                <div className="relative">
                  <div className="flex flex-col items-center space-y-8">
                    {/* Input Layer */}
                    <div className="w-full max-w-md">
                      <div className="bg-gradient-to-r from-blue-500/20 to-blue-600/20 border border-blue-500/30 rounded-xl p-6 text-center">
                        <MessageCircle className="w-8 h-8 text-blue-400 mx-auto mb-3 stroke-1.5" />
                        <div
                          className="text-sm text-blue-400 font-geist font-normal"
                          style={{ transition: "outline 0.1s ease-in-out" }}
                        >
                          Customer Query Input
                        </div>
                        <div
                          className="text-xs text-neutral-400 mt-1 font-geist font-normal"
                          style={{ transition: "outline 0.1s ease-in-out" }}
                        >
                          Natural language processing
                        </div>
                      </div>
                    </div>

                    {/* Processing Layers */}
                    <div className="w-full grid md:grid-cols-2 gap-6 max-w-4xl">
                      <div
                        className="bg-gradient-to-r border rounded-xl p-6 from-indigo-500/20 to-indigo-600/20 border-indigo-500/30"
                        style={{ transition: "outline 0.1s ease-in-out" }}
                      >
                        <Brain
                          className="w-8 h-8 mb-3 stroke-1.5 text-indigo-400"
                          style={{ transition: "outline 0.1s ease-in-out" }}
                        />
                        <div
                          className="text-sm mb-2 font-geist font-normal text-indigo-400"
                          style={{ transition: "outline 0.1s ease-in-out" }}
                        >
                          Neural Processing Core
                        </div>
                        <div
                          className="text-xs text-neutral-400 font-geist font-normal"
                          style={{ transition: "outline 0.1s ease-in-out" }}
                        >
                          Advanced transformer architecture
                        </div>
                      </div>
                      <div
                        className="bg-gradient-to-r from-green-500/20 to-green-600/20 border border-green-500/30 rounded-xl p-6"
                        style={{ transition: "outline 0.1s ease-in-out" }}
                      >
                        <Database
                          className="w-8 h-8 text-green-400 mb-3 stroke-1.5"
                          style={{ transition: "outline 0.1s ease-in-out" }}
                        />
                        <div
                          className="text-sm text-green-400 mb-2 font-geist font-normal"
                          style={{ transition: "outline 0.1s ease-in-out" }}
                        >
                          Knowledge Retrieval
                        </div>
                        <div
                          className="text-xs text-neutral-400 font-geist font-normal"
                          style={{ transition: "outline 0.1s ease-in-out" }}
                        >
                          RAG-enhanced information access
                        </div>
                      </div>
                    </div>

                    {/* Output Layer */}
                    <div className="w-full max-w-md">
                      <div
                        className="bg-gradient-to-r border rounded-xl p-6 text-center from-indigo-500/20 to-indigo-600/20 border-indigo-500/30"
                        style={{ transition: "outline 0.1s ease-in-out" }}
                      >
                        <CheckCircle
                          className="w-8 h-8 mx-auto mb-3 stroke-1.5 text-indigo-400"
                          style={{ transition: "outline 0.1s ease-in-out" }}
                        />
                        <div
                          className="text-sm font-geist font-normal text-indigo-400"
                          style={{ transition: "outline 0.1s ease-in-out" }}
                        >
                          Validated Response
                        </div>
                        <div
                          className="text-xs text-neutral-400 mt-1 font-geist font-normal"
                          style={{ transition: "outline 0.1s ease-in-out" }}
                        >
                          Quality-assured output
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Flow Lines */}
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

                {/* Technical Specifications */}
                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div
                    className="text-center p-4 rounded-lg bg-neutral-800/30"
                    style={{ transition: "outline 0.1s ease-in-out" }}
                  >
                    <div
                      className="text-lg mb-1 font-geist font-normal text-cyan-400"
                      style={{ transition: "outline 0.1s ease-in-out" }}
                    >
                      4.2B
                    </div>
                    <div
                      className="text-xs text-neutral-400 font-geist font-normal"
                      style={{ transition: "outline 0.1s ease-in-out" }}
                    >
                      Parameters
                    </div>
                  </div>
                  <div
                    className="text-center p-4 rounded-lg bg-neutral-800/30"
                    style={{ transition: "outline 0.1s ease-in-out" }}
                  >
                    <div
                      className="text-lg mb-1 font-geist font-normal text-cyan-400"
                      style={{ transition: "outline 0.1s ease-in-out" }}
                    >
                      128K
                    </div>
                    <div
                      className="text-xs text-neutral-400 font-geist font-normal"
                      style={{ transition: "outline 0.1s ease-in-out" }}
                    >
                      Context Window
                    </div>
                  </div>
                  <div
                    className="text-center p-4 rounded-lg bg-neutral-800/30"
                    style={{ transition: "outline 0.1s ease-in-out" }}
                  >
                    <div
                      className="text-lg mb-1 font-geist font-normal text-cyan-400"
                      style={{ transition: "outline 0.1s ease-in-out" }}
                    >
                      99.97%
                    </div>
                    <div
                      className="text-xs text-neutral-400 font-geist font-normal"
                      style={{ transition: "outline 0.1s ease-in-out" }}
                    >
                      Uptime SLA
                    </div>
                  </div>
                </div>
              </div>

              {/* Process Callouts */}
              <div className="hidden lg:block">
                <div
                  className="absolute -left-8 top-32 w-64"
                  style={{
                    opacity: 0,
                    animation: "fadeSlideRight 0.8s ease-out 1s forwards",
                  }}
                >
                  <div className="space-y-8">
                    <div
                      className="flex items-start gap-3 p-4 bg-neutral-900/80 rounded-lg border border-neutral-800/50 backdrop-blur-sm"
                      style={{ transition: "outline 0.1s ease-in-out" }}
                    >
                      <span
                        className="w-2 h-2 rounded-full mt-2 flex-shrink-0 bg-indigo-500"
                        style={{ transition: "outline 0.1s ease-in-out" }}
                      ></span>
                      <div>
                        <div
                          className="text-xs uppercase tracking-wide mb-1 font-geist font-normal text-cyan-400"
                          style={{ transition: "outline 0.1s ease-in-out" }}
                        >
                          [3.A.1] Query Refinement
                        </div>
                        <div
                          className="text-xs text-neutral-400 leading-relaxed font-geist font-normal"
                          style={{ transition: "outline 0.1s ease-in-out" }}
                        >
                          Advanced preprocessing optimizes input comprehension
                          and context extraction.
                        </div>
                      </div>
                    </div>
                    <div
                      className="flex items-start gap-3 p-4 bg-neutral-900/80 rounded-lg border border-neutral-800/50 backdrop-blur-sm"
                      style={{ transition: "outline 0.1s ease-in-out" }}
                    >
                      <span
                        className="w-2 h-2 rounded-full mt-2 flex-shrink-0 bg-indigo-500"
                        style={{ transition: "outline 0.1s ease-in-out" }}
                      ></span>
                      <div>
                        <div
                          className="text-xs uppercase tracking-wide mb-1 font-geist font-normal text-cyan-400"
                          style={{ transition: "outline 0.1s ease-in-out" }}
                        >
                          [3.A.3] Response Validation
                        </div>
                        <div
                          className="text-xs text-neutral-400 leading-relaxed font-geist font-normal"
                          style={{ transition: "outline 0.1s ease-in-out" }}
                        >
                          Multi-layer validation ensures accuracy and safety
                          compliance.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="absolute -right-8 top-48 w-64"
                  style={{
                    opacity: 0,
                    animation: "fadeSlideLeft 0.8s ease-out 1.2s forwards",
                  }}
                >
                  <div className="space-y-8">
                    <div
                      className="flex items-start gap-3 p-4 bg-neutral-900/80 rounded-lg border border-neutral-800/50 backdrop-blur-sm"
                      style={{ transition: "outline 0.1s ease-in-out" }}
                    >
                      <span
                        className="w-2 h-2 rounded-full mt-2 flex-shrink-0 bg-indigo-500"
                        style={{ transition: "outline 0.1s ease-in-out" }}
                      ></span>
                      <div>
                        <div
                          className="text-xs uppercase tracking-wide mb-1 font-geist font-normal text-cyan-400"
                          style={{ transition: "outline 0.1s ease-in-out" }}
                        >
                          [3.A.2] Intelligent Generation
                        </div>
                        <div
                          className="text-xs text-neutral-400 leading-relaxed font-geist font-normal"
                          style={{ transition: "outline 0.1s ease-in-out" }}
                        >
                          Proprietary RAG architecture delivers contextually
                          precise responses.
                        </div>
                      </div>
                    </div>
                    <div
                      className="flex items-start gap-3 p-4 bg-neutral-900/80 rounded-lg border border-neutral-800/50 backdrop-blur-sm"
                      style={{ transition: "outline 0.1s ease-in-out" }}
                    >
                      <span
                        className="w-2 h-2 rounded-full mt-2 flex-shrink-0 bg-indigo-500"
                        style={{ transition: "outline 0.1s ease-in-out" }}
                      ></span>
                      <div>
                        <div
                          className="text-xs uppercase tracking-wide mb-1 font-geist font-normal text-cyan-400"
                          style={{ transition: "outline 0.1s ease-in-out" }}
                        >
                          [3.A.4] Continuous Optimization
                        </div>
                        <div
                          className="text-xs text-neutral-400 leading-relaxed font-geist font-normal"
                          style={{ transition: "outline 0.1s ease-in-out" }}
                        >
                          Real-time learning improves efficiency and knowledge
                          coverage.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
          <p
            className="text-lg text-neutral-400 mb-10 max-w-2xl mx-auto font-geist font-normal"
            style={{ transition: "outline 0.1s ease-in-out" }}
          >
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
              style={{ transition: "outline 0.1s ease-in-out" }}
            >
              <Rocket className="w-5 h-5 stroke-2" />
              Start Free Trial
            </button>
            <button
              className="hover:cursor-pointer inline-flex items-center gap-2 rounded-full border border-neutral-700 hover:border-neutral-600 hover:bg-neutral-900/50 px-8 py-4 transition-all duration-300 font-geist font-normal"
              style={{ transition: "outline 0.1s ease-in-out" }}
            >
              <Calendar className="w-5 h-5 stroke-1.5" />
              Schedule Demo
            </button>
          </div>
        </div>
      </section>

      {/* Trust & Certifications */}
      <section
        className="py-20"
        style={{
          opacity: 0,
          animation: "fadeSlideUp 0.8s ease-out 0.4s forwards",
        }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3
              className="text-sm text-neutral-400 uppercase tracking-widest mb-2 font-geist font-normal"
              style={{ transition: "outline 0.1s ease-in-out" }}
            >
              Enterprise Security & Compliance
            </h3>
            <p className="text-2xl text-neutral-200 font-light tracking-tight font-geist">
              Trusted by Fortune 500 companies worldwide
            </p>
          </div>

          <div className="flex gap-8 items-center justify-evenly">
            {[ShieldCheck, FileLock, GlobeLock, Award, Key].map((Icon, i) => (
              <div
                key={i}
                className="group w-16 h-16 rounded-xl bg-neutral-900/50 border border-neutral-800 hover:border-neutral-700 flex items-center justify-center transition-all duration-300 hover:scale-110"
                style={{ transition: "outline 0.1s ease-in-out" }}
              >
                <Icon className="w-7 h-7 text-neutral-600 group-hover:text-neutral-400 stroke-1.5 transition-colors" />
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 text-center">
            {[
              { title: "SOC 2 Type II", subtitle: "Security Certified" },
              { title: "GDPR", subtitle: "Privacy Compliant" },
              { title: "ISO 27001", subtitle: "Information Security" },
              { title: "HIPAA", subtitle: "Healthcare Ready" },
            ].map((cert, i) => (
              <div key={i}>
                <div
                  className="text-xs text-neutral-400 uppercase tracking-wide font-geist font-normal"
                  style={{ transition: "outline 0.1s ease-in-out" }}
                >
                  {cert.title}
                </div>
                <div
                  className="text-sm text-neutral-500 mt-1 font-geist font-normal"
                  style={{ transition: "outline 0.1s ease-in-out" }}
                >
                  {cert.subtitle}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
