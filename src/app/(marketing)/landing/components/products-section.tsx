import clsx from "clsx";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

type ShowcaseItem = {
  name: string;
  tagline: string;
  kind: "Product" | "Client Project";
  gradient: string; // tailwind gradient for badge/art
  imageSrc?: string; // optional public asset
  href?: string;
  logoSrc?: string; // small logo for meta row
};

const ITEMS: ShowcaseItem[] = [
  {
    name: "Calorichat",
    tagline: "AI Calorie Tracker and Nutrition Coach",
    kind: "Product",
    gradient: "from-teal-500 to-orange-600",
    imageSrc: "/astravia-product-green.png", // placeholder until real artwork
    logoSrc: "/logo-calorichat.png",
    href: "https://calorichat.com",
  },
  {
    name: "PlanPerfect",
    tagline: "Non‑profit Organization Plan Manager",
    kind: "Client Project",
    gradient: "from-indigo-500 to-cyan-500",
    imageSrc: "/astravia-product-mint.png", // placeholder until client imagery is added
    logoSrc: "/logo-plan-perfect.png",
    href: "https://www.planperfect.co/",
  },
];

export function ProductsSection() {
  return (
    <section
      id="products"
      className="py-20 md:py-28 scroll-mt-20 md:scroll-mt-28"
      style={{
        opacity: 0,
        animation: "fadeSlideUp 0.8s ease-out 0.4s forwards",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <span className="backdrop-blur-lg  inline-flex items-center gap-2 uppercase tracking-widest text-xs font-medium mb-4 border-neutral-700 px-4 py-1.5 border rounded-full bg-gradient-to-tr from-teal-300/10 via-blue-400/10 to-orange-300/10 text-neutral-400 font-geist">
            Products & Projects
          </span>
          <h2 className="text-3xl md:text-4xl text-neutral-100 font-light tracking-tight font-geist">
            Recent Work
          </h2>
          <p className="text-neutral-400 mt-4 max-w-2xl mx-auto font-geist font-normal">
            Focused, elegant software. A glimpse of our recent work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6 md:gap-8 justify-items-center">
          {ITEMS.map((item) => (
            <article
              key={item.name}
              className="group relative w-full max-w-xl bg-gradient-to-br from-neutral-900/90 to-neutral-900/40 border border-neutral-800/50 hover:border-neutral-700 rounded-2xl p-0 transition-all duration-300 overflow-hidden"
            >
              {/* Accent glow */}
              <div
                className={`pointer-events-none absolute -top-20 -right-20 w-60 h-60 rounded-full blur-3xl opacity-[0.12] bg-gradient-to-br ${item.gradient}`}
              />

              {/* Media */}
              <a
                href={item.href}
                className="block"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-t-xl border border-neutral-800/50 bg-neutral-900">
                  {/* If we had real images, render them; otherwise gradient art */}
                  {item.imageSrc ? (
                    <Image
                      src={item.imageSrc}
                      alt={`${item.name} preview`}
                      fill
                      className="object-contain md:object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                    />
                  ) : (
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-20`}
                    />
                  )}

                  {/* Hover overlay arrow */}
                  <div className="absolute right-3 top-3 z-10 inline-flex items-center justify-center w-8 h-8 rounded-full bg-neutral-900/60 border border-neutral-800 text-neutral-400 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </a>

              {/* Meta */}
              <div className="text-center p-4 backdrop-blur-lg">
                <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-wide text-neutral-400 font-geist">
                  {item.logoSrc ? (
                    <span className="inline-flex size-8 items-center justify-center rounded-md overflow-hidden bg-neutral-900/60 border border-neutral-800">
                      <Image
                        src={item.logoSrc}
                        alt={`${item.name} logo`}
                        width={16}
                        height={16}
                        className="size-5 object-contain"
                      />
                    </span>
                  ) : (
                    <span
                      className={`inline-flex size-6 items-center justify-center rounded-md bg-gradient-to-br ${item.gradient} text-white`}
                    />
                  )}
                  {item.kind}
                </div>
                <h3 className="mt-2 text-lg md:text-xl text-neutral-100 font-geist font-normal tracking-tight">
                  {item.name}
                </h3>
                <p className="text-neutral-400 text-sm mt-1 font-geist">
                  {item.tagline}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductsSection;
