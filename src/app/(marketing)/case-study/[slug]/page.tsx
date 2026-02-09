import { notFound } from "next/navigation";
import { Metadata } from "next";
import { PROJECTS } from "data/projects";
import { CaseStudyPage } from "./case-study.feature.page";

export const dynamic = "force-static";

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.name} — Case Study | Astravia LLC`,
    description: project.caseStudy.summary,
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) notFound();
  return <CaseStudyPage project={project} />;
}
