import { Github, Linkedin } from "lucide-react";

type TeamMember = {
  name: string;
  role: string;
  bio: string;
  initials: string;
  gradient: string; // tailwind gradient classes for avatar
  skills: string[];
  links?: { github?: string; linkedin?: string };
};

const TEAM: TeamMember[] = [
  {
    name: "Jhonfredy Acosta",
    role: "Founder & AI Architect",
    bio: "Architecting enterprise-grade AI systems with a focus on reliability and delightful UX.",
    initials: "JA",
    gradient: "from-teal-500 to-orange-600",
    skills: ["Next.js", "LLMs", "RAG", "Edge"],
    links: { github: "#", linkedin: "#" },
  },
  {
    name: "Camila Torres",
    role: "Senior Frontend Engineer",
    bio: "Design systems, accessibility and high-performance UI at scale.",
    initials: "CT",
    gradient: "from-indigo-500 to-cyan-500",
    skills: ["React", "Tailwind", "A11y", "Animations"],
    links: { github: "#", linkedin: "#" },
  },
  {
    name: "Luis Romero",
    role: "Platform Engineer",
    bio: "Observability-first platforms with zero-downtime deploys and cost-aware infra.",
    initials: "LR",
    gradient: "from-purple-500 to-blue-500",
    skills: ["Node", "Workers", "K8s", "Prisma"],
    links: { github: "#", linkedin: "#" },
  },
  {
    name: "Sara Méndez",
    role: "Product Designer",
    bio: "Human-centered product, elegant micro-interactions and pragmatic research.",
    initials: "SM",
    gradient: "from-rose-500 to-orange-500",
    skills: ["Design Systems", "Prototyping", "UX Research"],
    links: { linkedin: "#" },
  },
];

export function DevelopersSection() {
  return (
    <section
      className="py-20 md:py-28"
      style={{
        opacity: 0,
        animation: "fadeSlideUp 0.8s ease-out 0.4s forwards",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-flex items-center gap-2 uppercase tracking-widest text-xs font-medium mb-4 border-neutral-700 px-4 py-1.5 border rounded-full bg-gradient-to-tr from-teal-300/10 via-blue-400/10 to-orange-300/10 text-neutral-400 font-geist">
            Developers
          </span>
          <h2 className="text-3xl md:text-4xl text-neutral-100 font-light tracking-tight font-geist">
            Built by engineers, for builders
          </h2>
          <p className="text-neutral-400 mt-4 max-w-2xl mx-auto font-geist font-normal">
            A compact, senior team crafting precise software and elegant AI
            systems.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {TEAM.map((m) => (
            <article
              key={m.name}
              className="group relative bg-neutral-900/50 border border-neutral-800/50 hover:border-neutral-700 rounded-2xl p-6 transition-all duration-300 hover:scale-[1.01]"
            >
              <div className="flex items-start gap-4">
                <div className="relative">
                  <div
                    className={`w-12 h-12 rounded-full bg-gradient-to-br ${m.gradient} flex items-center justify-center text-white font-medium`}
                  >
                    {m.initials}
                  </div>
                  <div className="absolute -inset-0.5 rounded-full blur-md opacity-20 bg-gradient-to-br from-neutral-50/0 to-neutral-50/20 pointer-events-none" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-neutral-100 font-geist font-normal tracking-tight truncate">
                    {m.name}
                  </h3>
                  <p className="text-neutral-400 text-sm font-geist font-normal truncate">
                    {m.role}
                  </p>
                </div>
                <div className="ml-auto flex items-center gap-2">
                  {m.links?.github && (
                    <a
                      href={m.links.github}
                      className="p-2 rounded-md hover:bg-neutral-800/60 text-neutral-500 hover:text-neutral-300 transition-colors"
                      aria-label={`${m.name} GitHub`}
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                  {m.links?.linkedin && (
                    <a
                      href={m.links.linkedin}
                      className="p-2 rounded-md hover:bg-neutral-800/60 text-neutral-500 hover:text-neutral-300 transition-colors"
                      aria-label={`${m.name} LinkedIn`}
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

              <p className="text-neutral-400 text-sm mt-4 font-geist font-normal line-clamp-3">
                {m.bio}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {m.skills.map((s) => (
                  <span
                    key={s}
                    className="px-2 py-1 rounded-full border border-neutral-700 text-xs text-neutral-400 font-geist"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default DevelopersSection;
