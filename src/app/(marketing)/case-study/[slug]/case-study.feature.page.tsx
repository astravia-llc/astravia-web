"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import type { Project } from "data/projects";

export function CaseStudyPage({ project }: { project: Project }) {
  const { caseStudy } = project;

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
                Visit {project.name}
                <ArrowUpRight className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </nav>

      <main className="relative pt-28 pb-20">
        {/* Hero */}
        <section
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
          style={{
            opacity: 0,
            animation: "fadeSlideUp 0.8s ease-out 0.3s forwards",
          }}
        >
          {/* Project meta */}
          <div className="flex items-center gap-3 mb-6">
            {project.logoSrc && (
              <span className="inline-flex size-10 items-center justify-center rounded-xl overflow-hidden bg-neutral-900/60 border border-neutral-800">
                <Image
                  src={project.logoSrc}
                  alt={`${project.name} logo`}
                  width={24}
                  height={24}
                  className="size-6 object-contain"
                />
              </span>
            )}
            <span
              className={`inline-flex items-center gap-2 uppercase tracking-widest text-xs font-medium border-neutral-700 px-3 py-1 border rounded-full bg-gradient-to-tr ${project.gradient.replace("from-", "from-").replace("to-", "to-")}/10 text-neutral-400 font-geist`}
            >
              {project.kind}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl text-neutral-100 font-light tracking-tight font-geist">
            {project.name}
          </h1>
          <p className="text-lg md:text-xl text-neutral-400 mt-4 font-geist font-normal leading-relaxed">
            {project.tagline}
          </p>

          {/* Hero image */}
          {project.imageSrc && (
            <div className="relative mt-10 aspect-[16/9] w-full overflow-hidden rounded-2xl border border-neutral-800/50 bg-neutral-900">
              <div
                className={`pointer-events-none absolute -top-20 -right-20 w-80 h-80 rounded-full blur-3xl opacity-[0.10] bg-gradient-to-br ${project.gradient}`}
              />
              <Image
                src={project.imageSrc}
                alt={`${project.name} preview`}
                fill
                className="object-contain md:object-cover"
                priority
              />
            </div>
          )}
        </section>

        {/* Summary + sidebar info */}
        <section
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16"
          style={{
            opacity: 0,
            animation: "fadeSlideUp 0.8s ease-out 0.5s forwards",
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Summary */}
            <div className="md:col-span-2">
              <h2 className="text-sm uppercase tracking-widest text-neutral-500 font-geist mb-4">
                Overview
              </h2>
              <p className="text-neutral-300 leading-relaxed font-geist font-normal">
                {caseStudy.summary}
              </p>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div>
                <h3 className="text-sm uppercase tracking-widest text-neutral-500 font-geist mb-2">
                  Role
                </h3>
                <p className="text-neutral-300 font-geist text-sm">
                  {caseStudy.role}
                </p>
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-widest text-neutral-500 font-geist mb-3">
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {caseStudy.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-neutral-800/60 border border-neutral-700/50 text-neutral-300 font-geist"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
          <hr className="border-neutral-800/50" />
        </div>

        {/* Challenges */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
          <h2
            className="text-2xl md:text-3xl text-neutral-100 font-light tracking-tight font-geist mb-12"
            style={{
              opacity: 0,
              animation: "fadeSlideUp 0.8s ease-out 0.6s forwards",
            }}
          >
            Challenges & Approach
          </h2>

          <div className="space-y-16">
            {caseStudy.challenges.map((challenge, i) => (
              <article
                key={challenge.title}
                className="relative"
                style={{
                  opacity: 0,
                  animation: `fadeSlideUp 0.8s ease-out ${0.7 + i * 0.15}s forwards`,
                }}
              >
                {/* Challenge number */}
                <div className="flex items-start gap-5">
                  <span
                    className={`shrink-0 inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br ${project.gradient} text-white text-sm font-medium font-geist`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg md:text-xl text-neutral-100 font-geist font-normal tracking-tight">
                      {challenge.title}
                    </h3>

                    <div className="mt-4 space-y-4">
                      <div>
                        <h4 className="text-sm uppercase tracking-widest text-neutral-500 font-geist mb-2">
                          The Challenge
                        </h4>
                        <p className="text-neutral-400 leading-relaxed font-geist font-normal">
                          {challenge.description}
                        </p>
                      </div>

                      <div>
                        <h4 className="text-sm uppercase tracking-widest text-neutral-500 font-geist mb-2">
                          The Approach
                        </h4>
                        <p className="text-neutral-300 leading-relaxed font-geist font-normal">
                          {challenge.approach}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Separator between challenges */}
                {i < caseStudy.challenges.length - 1 && (
                  <hr className="border-neutral-800/30 mt-16" />
                )}
              </article>
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <section
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-20"
          style={{
            opacity: 0,
            animation: "fadeSlideUp 0.8s ease-out 1.2s forwards",
          }}
        >
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
            <Link
              href="/#products"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-neutral-700 hover:border-neutral-600 hover:bg-neutral-900/50 text-sm text-neutral-200 transition-all duration-300 font-geist"
            >
              <ArrowLeft className="w-4 h-4" />
              View All Projects
            </Link>
            {project.href && (
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white bg-gradient-to-r from-teal-500/20 to-orange-600/20 hover:from-teal-500/50 hover:to-orange-700/50 border border-neutral-700 hover:border-neutral-500 text-sm transition-all duration-300 font-geist"
              >
                Visit {project.name}
                <ArrowUpRight className="w-4 h-4" />
              </a>
            )}
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

export default CaseStudyPage;
