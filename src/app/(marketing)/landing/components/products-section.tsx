import {
  ArrowUpRight,
  Rocket,
  Utensils,
  Users,
  ClipboardList,
} from "lucide-react";

type ShowcaseItem = {
  name: string;
  tagline: string;
  kind: "Product" | "Client Project";
  description: string;
  highlights: string[];
  icon: "rocket" | "utensils" | "users" | "clipboard";
  gradient: string; // tailwind gradient for badge/art
  cta?: { label: string; href: string }[];
};

const ITEMS: ShowcaseItem[] = [
  {
    name: "Calorichat",
    tagline: "AI nutrition coach",
    kind: "Product",
    description:
      "SaaS to track calories and generate adaptable nutritional plans powered by AI.",
    highlights: ["RAG meal knowledge", "Adaptive macros", "Progress coaching"],
    icon: "utensils",
    gradient: "from-teal-500 to-orange-600",
    cta: [
      { label: "Visit", href: "#" },
      { label: "Case Study", href: "#" },
    ],
  },
  {
    name: "Plan Perfect",
    tagline: "Non‑profit plan manager",
    kind: "Client Project",
    description:
      "Programs and plan management platform designed for non-profit organizations.",
    highlights: ["Multi-tenant", "Secure workflows", "Impact reporting"],
    icon: "clipboard",
    gradient: "from-indigo-500 to-cyan-500",
    cta: [{ label: "Overview", href: "#" }],
  },
];

function IconFor({ type }: { type: ShowcaseItem["icon"] }) {
  switch (type) {
    case "rocket":
      return <Rocket className="w-5 h-5" />;
    case "utensils":
      return <Utensils className="w-5 h-5" />;
    case "users":
      return <Users className="w-5 h-5" />;
    default:
      return <ClipboardList className="w-5 h-5" />;
  }
}

export function ProductsSection() {
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
            Products & Projects
          </span>
          <h2 className="text-3xl md:text-4xl text-neutral-100 font-light tracking-tight font-geist">
            What we build
          </h2>
          <p className="text-neutral-400 mt-4 max-w-2xl mx-auto font-geist font-normal">
            In‑house products and selected client work delivered with Astravia
            quality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
          {ITEMS.map((item) => (
            <article
              key={item.name}
              className="group relative bg-gradient-to-br from-neutral-900/80 to-neutral-900/40 border border-neutral-800/50 hover:border-neutral-700 rounded-2xl p-6 transition-all duration-300 hover:scale-[1.01] overflow-hidden"
            >
              {/* Accent glow */}
              <div
                className={`pointer-events-none absolute -top-20 -right-20 w-60 h-60 rounded-full blur-3xl opacity-[0.12] bg-gradient-to-br ${item.gradient}`}
              />

              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-lg bg-gradient-to-br ${item.gradient} flex items-center justify-center text-white`}
                >
                  <IconFor type={item.icon} />
                </div>
                <div className="min-w-0">
                  <div className="text-xs uppercase tracking-wide text-neutral-400 font-geist">
                    {item.kind}
                  </div>
                  <h3 className="text-lg text-neutral-100 font-geist font-normal tracking-tight truncate">
                    {item.name}
                  </h3>
                </div>
                <span className="ml-auto text-neutral-500 group-hover:text-neutral-300 transition-colors">
                  <ArrowUpRight className="w-5 h-5" />
                </span>
              </div>

              <p className="text-neutral-400 text-sm mt-4 font-geist font-normal">
                {item.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {item.highlights.map((h) => (
                  <span
                    key={h}
                    className="px-2 py-1 rounded-full border border-neutral-700 text-xs text-neutral-400 font-geist"
                  >
                    {h}
                  </span>
                ))}
              </div>

              {item.cta && (
                <div className="mt-6 flex items-center gap-3">
                  {item.cta.map((c) => (
                    <a
                      key={c.label}
                      href={c.href}
                      className="text-sm text-neutral-300 hover:text-white px-3 py-1.5 rounded-full border border-neutral-700 hover:border-neutral-600 transition-colors font-geist"
                    >
                      {c.label}
                    </a>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductsSection;
