"use client";

import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Calendar } from "lucide-react";
import type { Project } from "data/projects";
import Button from "components/ui/button";

const TECH_STACK = [
  { layer: "Frontend + AI generation", tech: "Lovable (Gemini-based)", notes: "Full-stack AI IDE, React/TypeScript" },
  { layer: "Commerce", tech: "Shopify Basic", notes: "Store, checkout, order management" },
  { layer: "Payments", tech: "Shopify Payments (Stripe)", notes: "Integrated payment processing" },
  { layer: "Backend", tech: "Supabase", notes: "Edge Functions (Deno), Postgres, Storage" },
  { layer: "Print fulfillment", tech: "Gelato API v4", notes: "Custom webhook integration" },
  { layer: "Image upscaling", tech: "Replicate — clarity-upscaler", notes: "Post-payment only" },
  { layer: "Notifications", tech: "Telegram Bot API", notes: "Interactive error alerts with retry buttons" },
  { layer: "Analytics", tech: "PostHog", notes: "UGC attribution, funnel tracking" },
];

const ORDER_FLOW_STEPS = [
  "User uploads pet photo (private bucket)",
  "Client-side pre-crop to 4:5 vertical (Canvas API + react-image-crop)",
  "Lovable AI (Gemini) generates classical portrait preview",
  "Preview saved to public bucket (832\u00d71040px)",
  "User approves \u2192 selects product \u2192 adds to Shopify cart with portrait URL as line item property",
  "Shopify checkout \u2192 payment via Shopify Payments / Stripe",
  "Shopify fires orders/paid webhook",
  "Supabase Edge Function: verify HMAC, respond 200 immediately, then background pipeline via EdgeRuntime.waitUntil()",
  "Background: insert order \u2192 call Replicate upscaler (30\u201390s) \u2192 save final PNG \u2192 create Gelato print order \u2192 update status",
  "Gelato prints and ships \u2192 tracking synced to Shopify",
];

type EngineeringDecision = {
  title: string;
  problem: string;
  discarded: { name: string; reason: string }[];
  chosen: string;
  lesson?: string;
};

const DECISIONS: EngineeringDecision[] = [
  {
    title: "Gelato Integration \u2014 Custom API Over Native App",
    problem:
      "Gelato\u2019s native Shopify app auto-imports orders but has no concept of a dynamically generated image. Every order would require manual artwork upload, defeating the entire value proposition.",
    discarded: [
      {
        name: "Gelato native app only",
        reason:
          "Sees \u201cFine Art Print 8\u00d710\u201d with no artwork \u2014 creates blank orders.",
      },
      {
        name: "Gelato app with Personalization Studio",
        reason:
          "Dynamic artwork feature is designed for user-uploaded files within Shopify\u2019s product page, not externally generated URLs.",
      },
    ],
    chosen:
      "Custom Gelato API v4: image URL travels as a cart attribute through checkout. After payment, a Supabase Edge Function reads the URL and calls Gelato directly. Full control, fully automated.",
    lesson:
      "The native app was kept installed solely for its shipping rate profiles. Uninstalling it removes the fulfillment location from products, breaking shipping rate calculation at checkout \u2014 Shopify shows \u201cShipping not available\u201d for all addresses.",
  },
  {
    title: "Shopify Webhook Timeout \u2014 Background Processing",
    problem:
      "Shopify webhooks have a 5-second response timeout. The post-payment pipeline (upscaling + Gelato order) takes 30\u2013120 seconds.",
    discarded: [
      {
        name: "Synchronous processing",
        reason:
          "Shopify marks webhook as failed after 5s and retries \u2014 causes duplicate Gelato orders.",
      },
      {
        name: "External queue (Redis/Upstash)",
        reason:
          "Adds infrastructure complexity and cost for an early-stage product.",
      },
    ],
    chosen:
      "EdgeRuntime.waitUntil(): respond 200 to Shopify immediately after HMAC verification, run the entire pipeline as a non-blocking background promise. Zero additional infrastructure. 150s free plan limit is well within upscaler runtime.",
  },
  {
    title: "Image Upscaler \u2014 Preserving Painterly Aesthetic",
    problem:
      "AI generates ~1024\u00d71536px previews (~102 DPI). Gelato requires 300 DPI for fine art prints. Standard upscalers destroy the oil painting texture.",
    discarded: [
      {
        name: "Real-ESRGAN",
        reason:
          "Over-smooths the image \u2014 craquelure, brushstrokes, and aged-canvas texture get eliminated. Result looks like clean digital art.",
      },
      {
        name: "Sharp/bicubic upscaling in Edge Function",
        reason:
          "Purely geometric \u2014 same quality problem, no texture preservation.",
      },
    ],
    chosen:
      "philz1337x/clarity-upscaler on Replicate: accepts a text prompt during upscaling. Prompting for craquelure, aged canvas, brushstrokes preserves the painterly aesthetic. Cost ~$0.05/image. creativity: 0 + resemblance: 1 prevents hallucinations that alter the pet\u2019s likeness.",
    lesson:
      "Originally triggered at cart-add time (charged per abandoner). Moved to post-payment only \u2014 ~$0.05 per order = 0.06% of Fine Art Print revenue.",
  },
  {
    title: "Portrait Orientation \u2014 Two-Layer Solution",
    problem:
      "AI generates portraits matching input orientation. Landscape input \u2192 landscape output \u2192 aggressive 4:5 center-crop \u2192 degraded composition.",
    discarded: [
      {
        name: "Post-generation crop only",
        reason:
          "Works for vertical inputs but causes severe composition issues for landscape \u2014 pets get cut off at head or body.",
      },
      {
        name: "Server-side pre-crop",
        reason:
          "Adds latency and a round-trip. Frontend already has the image.",
      },
    ],
    chosen:
      "Client-side pre-crop using Canvas API + react-image-crop when landscape photo is detected. User can adjust the crop area. Post-generation server-side crop kept as safety net.",
  },
  {
    title: "Payments \u2014 Unlocking Shopify Payments",
    problem:
      "Shopify Payments not available for stores registered in Colombia. Alternative providers (Mercado Pago, dLocal) have poor UX recognition for US/Canada customers.",
    discarded: [
      {
        name: "Mercado Pago",
        reason:
          "3.49%+ fees, poor brand recognition for US/Canada market.",
      },
      {
        name: "dLocal / ONERWAY / Tilopay",
        reason:
          "Unknown brands create checkout friction and abandonment.",
      },
    ],
    chosen:
      "Configured the store through a US-eligible business setup so Shopify Payments could be enabled for the target market. This reduced checkout friction by using a familiar payment flow and accelerated payment methods such as Apple Pay and Google Pay.",
  },
  {
    title: "Operational Monitoring \u2014 Telegram Over Email",
    problem:
      "Solo-founder product needs immediate, mobile-first, actionable alerts \u2014 not email.",
    discarded: [
      {
        name: "Email (Resend/SendGrid)",
        reason: "Easy to miss, no interactivity for triggering backend actions.",
      },
      {
        name: "Slack/Discord webhook",
        reason: "Requires another app open, no native interactive buttons.",
      },
    ],
    chosen:
      "Telegram Bot with inline keyboard buttons. Three Edge Functions: telegram-notify (sends alerts), telegram-callback (handles button presses), retry-order-upscale (re-runs failed pipeline for a specific order). Failed orders can be retried from the phone without any dashboard.",
  },
];

const SECURITY_ISSUES = [
  {
    issue: "IDOR on generate-signed-url",
    cause: "Function accepted any order_id without verifying caller ownership",
    fix: "Added email/order_id ownership check before generating download URL",
  },
  {
    issue: "Privilege escalation on admin_users",
    cause:
      "INSERT RLS policy was WITH CHECK (true) \u2014 any authenticated user could self-promote to admin",
    fix: "Restricted to service role only",
  },
  {
    issue: "Digital downloads exposed via public bucket",
    cause:
      "Public final-assets bucket + readable generation_requests table = enumerable download paths",
    fix: "Restricted generation_request_id visibility in public queries. Bucket stays public because Gelato needs direct download access.",
  },
];

const NOT_BUILT = [
  "Custom order tracking dashboard \u2014 Shopify + Gelato cover this natively",
  "Canvas or framed product variants \u2014 kept catalog minimal for launch",
  "Human/couple/family portraits \u2014 pets only, brand focus",
  "Custom email system \u2014 Shopify handles transactional emails",
  "External AI provider migration \u2014 Lovable\u2019s Gemini kept to avoid destabilizing proven generation quality",
  "fal.ai integration \u2014 prototyped and rolled back; quality and reliability did not justify added complexity",
];

export function EternalPortraitsCaseStudyPage({
  project,
}: {
  project: Project;
}) {
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
                Visit Eternal Portraits
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
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-flex items-center gap-2 uppercase tracking-widest text-xs font-medium border-neutral-700 px-3 py-1 border rounded-full bg-gradient-to-tr from-amber-300/10 to-rose-300/10 text-neutral-400 font-geist">
              Product
            </span>
            <span className="inline-flex items-center gap-2 uppercase tracking-widest text-xs font-medium border-neutral-700 px-3 py-1 border rounded-full bg-neutral-800/40 text-neutral-500 font-geist">
              2 weeks \u2014 idea to production
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl text-neutral-100 font-light tracking-tight font-geist leading-[1.1]">
            Eternal Portraits
          </h1>

          <p className="text-lg md:text-xl text-neutral-400 mt-6 font-geist font-normal leading-relaxed max-w-3xl">
            A premium AI-generated pet portrait e-commerce platform with
            print-on-demand fulfillment. Pet owners upload a photo and receive a
            Renaissance-style classical oil painting portrait as a digital
            download or fine art print shipped globally.
          </p>

          <p className="text-sm text-neutral-500 mt-4 font-geist font-normal leading-relaxed max-w-3xl">
            Built using an AI-powered development workflow with Lovable as the
            primary IDE, Shopify for commerce, Gelato for fulfillment, and
            Supabase for backend orchestration. ChatGPT and Claude served as
            strategic partners throughout development. This project represents a
            new capability: full-stack e-commerce with AI generation,
            print-on-demand integration, and operational automation.
          </p>

          <div className="flex flex-wrap gap-3 mt-6">
            {[
              "Digital Download $29",
              "Fine Art Print 8\u00d710 $59",
              "Fine Art Print 12\u00d716 $89",
            ].map((tier) => (
              <span
                key={tier}
                className="inline-flex items-center px-3 py-1.5 rounded-md text-xs font-medium bg-neutral-800/60 border border-neutral-700/50 text-neutral-400 font-geist"
              >
                {tier}
              </span>
            ))}
          </div>

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
                Visit Eternal Portraits
              </Button>
            )}
          </div>
        </section>

        {/* ── Tech Stack ── */}
        <section
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-24"
          style={{
            opacity: 0,
            animation: "fadeSlideUp 0.8s ease-out 0.5s forwards",
          }}
        >
          <h2 className="text-2xl md:text-3xl text-neutral-100 font-light tracking-tight font-geist mb-8">
            Tech Stack
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm font-geist">
              <thead>
                <tr className="border-b border-neutral-800/50">
                  <th className="text-left text-neutral-500 uppercase tracking-widest text-xs font-medium py-3 pr-4">
                    Layer
                  </th>
                  <th className="text-left text-neutral-500 uppercase tracking-widest text-xs font-medium py-3 pr-4">
                    Technology
                  </th>
                  <th className="text-left text-neutral-500 uppercase tracking-widest text-xs font-medium py-3 hidden sm:table-cell">
                    Notes
                  </th>
                </tr>
              </thead>
              <tbody>
                {TECH_STACK.map((row) => (
                  <tr
                    key={row.layer}
                    className="border-b border-neutral-800/30"
                  >
                    <td className="py-3 pr-4 text-neutral-400 whitespace-nowrap">
                      {row.layer}
                    </td>
                    <td className="py-3 pr-4 text-neutral-200">
                      {row.tech}
                    </td>
                    <td className="py-3 text-neutral-500 hidden sm:table-cell">
                      {row.notes}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── Divider ── */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
          <hr className="border-neutral-800/50" />
        </div>

        {/* ── Architecture / Order Flow ── */}
        <section
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-20"
          style={{
            opacity: 0,
            animation: "fadeSlideUp 0.8s ease-out 0.6s forwards",
          }}
        >
          <h2 className="text-2xl md:text-3xl text-neutral-100 font-light tracking-tight font-geist mb-8">
            Core Order Flow
          </h2>
          <div className="space-y-0">
            {ORDER_FLOW_STEPS.map((step, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="flex flex-col items-center">
                  <span className="shrink-0 inline-flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-amber-500/20 to-rose-600/20 border border-neutral-700/50 text-neutral-300 text-xs font-medium font-geist">
                    {i + 1}
                  </span>
                  {i < ORDER_FLOW_STEPS.length - 1 && (
                    <div className="w-px h-6 bg-neutral-800/50" />
                  )}
                </div>
                <p className="text-sm text-neutral-400 font-geist font-normal pt-1.5 pb-3">
                  {step}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Divider ── */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
          <hr className="border-neutral-800/50" />
        </div>

        {/* ── Engineering Decisions ── */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
          <h2
            className="text-2xl md:text-3xl text-neutral-100 font-light tracking-tight font-geist mb-4"
            style={{
              opacity: 0,
              animation: "fadeSlideUp 0.8s ease-out 0.7s forwards",
            }}
          >
            Key Engineering Decisions
          </h2>
          <p
            className="text-neutral-500 text-sm font-geist mb-12"
            style={{
              opacity: 0,
              animation: "fadeSlideUp 0.8s ease-out 0.75s forwards",
            }}
          >
            Each decision includes the approaches evaluated and why they were
            discarded.
          </p>

          <div className="space-y-16">
            {DECISIONS.map((decision, i) => (
              <article
                key={decision.title}
                className="relative"
                style={{
                  opacity: 0,
                  animation: `fadeSlideUp 0.8s ease-out ${0.8 + i * 0.1}s forwards`,
                }}
              >
                <div className="flex items-start gap-5">
                  <span className="shrink-0 inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-amber-500 to-rose-600 text-white text-sm font-medium font-geist">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg md:text-xl text-neutral-100 font-geist font-normal tracking-tight">
                      {decision.title}
                    </h3>

                    <div className="mt-4 space-y-4">
                      {/* Problem */}
                      <div>
                        <h4 className="text-sm uppercase tracking-widest text-neutral-500 font-geist mb-2">
                          The Problem
                        </h4>
                        <p className="text-neutral-400 leading-relaxed font-geist font-normal">
                          {decision.problem}
                        </p>
                      </div>

                      {/* Discarded */}
                      <div>
                        <h4 className="text-sm uppercase tracking-widest text-neutral-500 font-geist mb-2">
                          Approaches Discarded
                        </h4>
                        <div className="space-y-2">
                          {decision.discarded.map((d) => (
                            <div
                              key={d.name}
                              className="flex items-start gap-2 text-sm"
                            >
                              <span className="mt-1 shrink-0 w-4 h-4 rounded text-center text-[10px] leading-4 bg-neutral-800/60 border border-neutral-700/50 text-neutral-500">
                                ✕
                              </span>
                              <span className="text-neutral-400 font-geist">
                                <span className="text-neutral-300">
                                  {d.name}:
                                </span>{" "}
                                {d.reason}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Chosen */}
                      <div>
                        <h4 className="text-sm uppercase tracking-widest text-neutral-500 font-geist mb-2">
                          Chosen Approach
                        </h4>
                        <p className="text-neutral-300 leading-relaxed font-geist font-normal">
                          {decision.chosen}
                        </p>
                      </div>

                      {/* Lesson */}
                      {decision.lesson && (
                        <div className="mt-3 p-3 rounded-lg bg-amber-500/5 border border-amber-500/10">
                          <p className="text-sm text-amber-200/70 font-geist font-normal leading-relaxed">
                            <span className="font-medium text-amber-200/90">
                              Lesson learned:
                            </span>{" "}
                            {decision.lesson}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {i < DECISIONS.length - 1 && (
                  <hr className="border-neutral-800/30 mt-16" />
                )}
              </article>
            ))}
          </div>
        </section>

        {/* ── Divider ── */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
          <hr className="border-neutral-800/50" />
        </div>

        {/* ── Security ── */}
        <section
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-20"
          style={{
            opacity: 0,
            animation: "fadeSlideUp 0.8s ease-out 1.4s forwards",
          }}
        >
          <h2 className="text-2xl md:text-3xl text-neutral-100 font-light tracking-tight font-geist mb-8">
            Security Issues Found Pre-Launch
          </h2>
          <div className="space-y-4">
            {SECURITY_ISSUES.map((issue) => (
              <div
                key={issue.issue}
                className="p-4 rounded-xl bg-neutral-900/40 border border-neutral-800/50"
              >
                <h4 className="text-sm text-neutral-200 font-geist font-normal mb-2">
                  {issue.issue}
                </h4>
                <p className="text-xs text-neutral-500 font-geist mb-2">
                  Root cause: {issue.cause}
                </p>
                <p className="text-xs text-neutral-400 font-geist">
                  Fix: {issue.fix}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── What Was Not Built ── */}
        <section
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-20"
          style={{
            opacity: 0,
            animation: "fadeSlideUp 0.8s ease-out 1.5s forwards",
          }}
        >
          <h2 className="text-2xl md:text-3xl text-neutral-100 font-light tracking-tight font-geist mb-6">
            What Was Intentionally Not Built
          </h2>
          <p className="text-sm text-neutral-500 font-geist mb-6">
            Scope discipline is part of the engineering. These were evaluated and
            deferred.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
            {NOT_BUILT.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 text-neutral-400 font-geist font-normal text-sm"
              >
                <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-neutral-600" />
                {item}
              </div>
            ))}
          </div>
        </section>

        {/* ── Divider ── */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
          <hr className="border-neutral-800/50" />
        </div>

        {/* ── Why This Matters ── */}
        <section
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-20"
          style={{
            opacity: 0,
            animation: "fadeSlideUp 0.8s ease-out 1.6s forwards",
          }}
        >
          <h2 className="text-2xl md:text-3xl text-neutral-100 font-light tracking-tight font-geist mb-6">
            Why this project matters
          </h2>
          <p className="text-neutral-400 leading-relaxed font-geist font-normal mb-4">
            Eternal Portraits demonstrates what I can ship: a complete,
            revenue-ready product from idea to production in two weeks using an
            AI-powered development workflow. It combines:
          </p>
          <ul className="space-y-2 text-neutral-400 font-geist font-normal">
            {[
              "AI-powered development with Lovable as the primary IDE",
              "E-commerce architecture across Shopify, Supabase, and third-party APIs",
              "Print-on-demand fulfillment with custom API integration",
              "AI image generation and post-processing pipelines",
              "Operational automation with Telegram-based monitoring",
              "Pre-launch security auditing and remediation",
              "Strategic use of ChatGPT and Claude throughout development",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-amber-500/60" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* ── Final CTA ── */}
        <section
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 text-center"
          style={{
            opacity: 0,
            animation: "fadeSlideUp 0.8s ease-out 1.7s forwards",
          }}
        >
          <h2 className="text-2xl md:text-3xl text-neutral-100 font-light tracking-tight font-geist mb-4">
            Need a product built fast without cutting corners?
          </h2>
          <p className="text-neutral-400 font-geist font-normal max-w-2xl mx-auto mb-8">
            I build production-ready products using AI-native workflows, real
            integrations, and disciplined engineering.
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

export default EternalPortraitsCaseStudyPage;
