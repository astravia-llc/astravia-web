"use client";

import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Calendar } from "lucide-react";
import type { Project } from "data/projects";
import Button from "components/ui/button";

const CAPABILITIES = [
  {
    title: "Rich Contact Memory",
    body: "Deep contact profiles with notes, timeline events, goals, dreams, values, family context, and current life updates — structured for recall, not just storage.",
  },
  {
    title: "Conversation Prep",
    body: "A manually triggered AI workflow that helps users think before they reach out, with recommendations, things to keep in mind, and a short reference summary.",
  },
  {
    title: "Network & Garden Views",
    body: "Visual relationship interfaces that help users see their connections as a living system, not just a list.",
  },
  {
    title: "Telegram Capture Workflow",
    body: "A Telegram bot that accepts text or voice-note updates after conversations, then structures them into reviewable contact updates.",
  },
  {
    title: "Google Integrations",
    body: "Google authentication and Google Contacts import and sync, so users start with their existing network rather than building from scratch.",
  },
  {
    title: "Reviewable AI Updates",
    body: "AI-assisted extraction and structuring with provenance, confirmation, and change visibility — rather than blind automation.",
  },
];

const DELIVERABLES = [
  "Product strategy and positioning",
  "Information architecture for deep relationship memory",
  "AI workflow design with human-in-the-loop review",
  "Integration design for Telegram and Google",
  "Structured contact and timeline systems",
  "Reviewable automation and change-tracking UX",
  "Premium marketing and pricing surfaces",
  "Product-led SaaS experience end to end",
];

const HIGHLIGHTS = [
  "Designed a relationship intelligence system, not just a contact manager",
  "Built AI-assisted workflows around real user actions instead of generic chatbot behavior",
  "Structured messy conversational input into reviewable data updates",
  "Combined premium UX with extensible SaaS architecture",
  "Integrated multi-surface capture via Telegram and web",
  "Designed for trust with confirmation, provenance, and review flows",
];

export function GroveCaseStudyPage({ project }: { project: Project }) {
  return (
    <>
      {/* Top bar */}
      <nav
        className="fixed top-0 w-full z-50 bg-neutral-950/80 backdrop-blur-xl border-b border-neutral-800/50"
        style={{
          opacity: 0,
          animation:
            "0.8s ease-out 0.2s 1 normal forwards running fadeSlideDown",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-neutral-200 transition-colors font-geist"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
            {project.href && (
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-neutral-400 hover:text-neutral-200 transition-colors font-geist"
              >
                Visit Grove
                <ArrowUpRight className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </nav>

      <main className="relative pt-28 pb-20">
        {/* ── Hero ── */}
        <section
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
          style={{
            opacity: 0,
            animation: "fadeSlideUp 0.8s ease-out 0.3s forwards",
          }}
        >
          <span className="inline-flex items-center gap-2 uppercase tracking-widest text-xs font-medium border-neutral-700 px-3 py-1 border rounded-full bg-gradient-to-tr from-emerald-300/10 to-teal-300/10 text-neutral-400 font-geist mb-6">
            Product
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl text-neutral-100 font-light tracking-tight font-geist leading-[1.1]">
            Grove — AI-powered relationship memory, built for thoughtful
            follow-through
          </h1>

          <p className="text-lg md:text-xl text-neutral-400 mt-6 font-geist font-normal leading-relaxed max-w-3xl">
            A premium SaaS product designed to help users capture relationship
            context after conversations, structure it into rich contact
            intelligence, and reconnect more thoughtfully over time.
          </p>

          <p className="text-sm text-neutral-500 mt-4 font-geist font-normal leading-relaxed max-w-3xl">
            Designed, built, and shipped end-to-end as sole technical owner.
            Grove demonstrates my approach to AI-native, integration-heavy
            products with strong UX, structured data architecture, and
            reviewable automation.
          </p>

          <div className="flex flex-col sm:flex-row items-start gap-4 mt-10">
            <Button
              variant="gradient"
              size="md"
              rightIcon={<Calendar className="w-4 h-4" />}
              href="https://calendly.com/acostajf/30min"
            >
              Book a Strategy Call
            </Button>
            {project.href && (
              <Button
                variant="outline"
                size="md"
                rightIcon={<ArrowUpRight className="w-4 h-4" />}
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Grove
              </Button>
            )}
          </div>
        </section>

        {/* ── The Problem ── */}
        <section
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-24"
          style={{
            opacity: 0,
            animation: "fadeSlideUp 0.8s ease-out 0.5s forwards",
          }}
        >
          <h2 className="text-2xl md:text-3xl text-neutral-100 font-light tracking-tight font-geist mb-6">
            The problem
          </h2>
          <p className="text-neutral-400 leading-relaxed font-geist font-normal">
            People with high-context networks often remember the person but lose
            the context: what they were building, what changed in their life,
            what mattered in the last conversation, what they wanted to follow up
            on later. Most tools are either too shallow, too transactional, or
            too CRM-like to support real relationship continuity.
          </p>
        </section>

        {/* ── The Solution ── */}
        <section
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-20"
          style={{
            opacity: 0,
            animation: "fadeSlideUp 0.8s ease-out 0.6s forwards",
          }}
        >
          <h2 className="text-2xl md:text-3xl text-neutral-100 font-light tracking-tight font-geist mb-6">
            The solution
          </h2>
          <p className="text-neutral-400 leading-relaxed font-geist font-normal mb-4">
            Grove turns relationship context into a structured, living system.
            It helps users:
          </p>
          <ul className="space-y-2 text-neutral-400 font-geist font-normal">
            {[
              "Capture meaningful details after conversations",
              "Structure them into rich contact profiles",
              "Prepare better follow-ups with context",
              "Visualize relationships over time",
              "Use AI in a reviewable, human-centered way",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-emerald-500/60" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* ── Divider ── */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
          <hr className="border-neutral-800/50" />
        </div>

        {/* ── Key Product Capabilities ── */}
        <section
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-20"
          style={{
            opacity: 0,
            animation: "fadeSlideUp 0.8s ease-out 0.7s forwards",
          }}
        >
          <h2 className="text-2xl md:text-3xl text-neutral-100 font-light tracking-tight font-geist mb-12">
            Key product capabilities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {CAPABILITIES.map((cap, i) => (
              <div
                key={cap.title}
                className="relative p-5 rounded-xl bg-neutral-900/40 border border-neutral-800/50"
                style={{
                  opacity: 0,
                  animation: `fadeSlideUp 0.6s ease-out ${0.8 + i * 0.08}s forwards`,
                }}
              >
                <h3 className="text-base text-neutral-200 font-geist font-normal tracking-tight mb-2">
                  {cap.title}
                </h3>
                <p className="text-sm text-neutral-400 leading-relaxed font-geist font-normal">
                  {cap.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Why This Matters ── */}
        <section
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-20"
          style={{
            opacity: 0,
            animation: "fadeSlideUp 0.8s ease-out 0.9s forwards",
          }}
        >
          <h2 className="text-2xl md:text-3xl text-neutral-100 font-light tracking-tight font-geist mb-6">
            Why this matters for prospects
          </h2>
          <p className="text-neutral-400 leading-relaxed font-geist font-normal mb-4">
            Grove shows how I design and build software that combines:
          </p>
          <ul className="space-y-2 text-neutral-400 font-geist font-normal">
            {[
              "AI-assisted workflows",
              "Structured data systems",
              "Premium product UX",
              "Third-party integrations",
              "Human-in-the-loop automation",
              "Multi-interface experiences across web and chat surfaces",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-emerald-500/60" />
                {item}
              </li>
            ))}
          </ul>
          <p className="text-neutral-400 leading-relaxed font-geist font-normal mt-6">
            This project is a strong example of what I deliver: more than simple
            dashboards or CRUD apps. It demonstrates product thinking,
            architecture, and UX maturity in one cohesive system.
          </p>
        </section>

        {/* ── Divider ── */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
          <hr className="border-neutral-800/50" />
        </div>

        {/* ── What Astravia Delivered ── */}
        <section
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-20"
          style={{
            opacity: 0,
            animation: "fadeSlideUp 0.8s ease-out 1.0s forwards",
          }}
        >
          <h2 className="text-2xl md:text-3xl text-neutral-100 font-light tracking-tight font-geist mb-8">
            What I delivered
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
            {DELIVERABLES.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 text-neutral-400 font-geist font-normal text-sm"
              >
                <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-emerald-500/60" />
                {item}
              </div>
            ))}
          </div>
        </section>

        {/* ── Engineering Highlights ── */}
        <section
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-20"
          style={{
            opacity: 0,
            animation: "fadeSlideUp 0.8s ease-out 1.1s forwards",
          }}
        >
          <h2 className="text-2xl md:text-3xl text-neutral-100 font-light tracking-tight font-geist mb-8">
            Selected product and engineering highlights
          </h2>
          <div className="space-y-3">
            {HIGHLIGHTS.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 text-neutral-300 font-geist font-normal text-sm leading-relaxed"
              >
                <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500" />
                {item}
              </div>
            ))}
          </div>
        </section>

        {/* ── Divider ── */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
          <hr className="border-neutral-800/50" />
        </div>

        {/* ── Final CTA ── */}
        <section
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 text-center"
          style={{
            opacity: 0,
            animation: "fadeSlideUp 0.8s ease-out 1.2s forwards",
          }}
        >
          <h2 className="text-2xl md:text-3xl text-neutral-100 font-light tracking-tight font-geist mb-4">
            Need software that feels as thoughtful as it is functional?
          </h2>
          <p className="text-neutral-400 font-geist font-normal max-w-2xl mx-auto mb-8">
            I build AI-native products, integration-heavy workflows, and premium
            software experiences designed around real user behavior.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
            <Button
              variant="gradient"
              size="md"
              rightIcon={<Calendar className="w-4 h-4" />}
              href="https://calendly.com/acostajf/30min"
            >
              Book a Strategy Call
            </Button>
            <Link
              href="/#products"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-neutral-700 hover:border-neutral-600 hover:bg-neutral-900/50 text-sm text-neutral-200 transition-all duration-300 font-geist"
            >
              <ArrowLeft className="w-4 h-4" />
              View All Projects
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-neutral-800/50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-neutral-500 text-sm font-geist">
          &copy; {new Date().getFullYear()} Astravia LLC. All rights reserved.
        </div>
      </footer>
    </>
  );
}

export default GroveCaseStudyPage;
