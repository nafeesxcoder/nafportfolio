import Link from "next/link";
import Script from "next/script";
import { Stars } from "../components/Stars";
import { services, serviceCategories } from "../data/services";
import { engagementModels } from "../data/site";
import {
  pageMeta,
  breadcrumbSchema,
  professionalServiceSchema,
  jsonLd,
} from "../lib/seo";

export const metadata = pageMeta({
  title: "Services — Web Development, Mobile Apps & SEO",
  description:
    "Full service list from Unique Web Layer: business and e-commerce websites, SaaS platforms, React Native and Flutter apps, custom MERN software, SEO and maintenance plans — delivered worldwide.",
  path: "/services",
  keywords: [
    "web development services",
    "mobile app development services",
    "SEO services",
    "software development company services",
    "hire developers worldwide",
  ],
});

const categoryMeta: Record<
  string,
  { blurb: string; icon: string; accent: string }
> = {
  "Web Development": {
    blurb:
      "Marketing sites, stores and web platforms built on Next.js, React and the MERN stack — fast, responsive and search-ready.",
    icon: "fa-code",
    accent: "from-purple-500 to-indigo-600",
  },
  "Mobile App Development": {
    blurb:
      "Android and iOS apps from one codebase, with the backend, admin panel and app store launch handled for you.",
    icon: "fa-mobile-screen-button",
    accent: "from-cyan-500 to-blue-600",
  },
  "SEO & Digital Growth": {
    blurb:
      "Technical, on-page, local and international SEO — plus maintenance plans that keep everything healthy after launch.",
    icon: "fa-chart-line",
    accent: "from-lime-500 to-green-600",
  },
};

export default function ServicesListPage() {
  return (
    <>
      <Script
        id="services-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(professionalServiceSchema)}
      />
      <Script
        id="services-breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
          ]),
        )}
      />

      <main className="min-h-screen bg-black">
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-black" />
          <Stars />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-purple-600/10 backdrop-blur-sm px-4 py-2 rounded-full mb-4 border border-purple-500/20">
                <i className="fas fa-layer-group text-purple-400 text-sm"></i>
                <span className="text-sm font-medium text-purple-300">
                  {services.length} Services
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
                What We Build
              </h1>
              <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                Websites, mobile apps, custom software and the SEO that ranks
                them — delivered online to businesses in every country, with a
                fixed quote before work starts.
              </p>
            </div>

            {/* Categories */}
            {serviceCategories.map((category) => {
              const meta = categoryMeta[category];
              const list = services.filter((s) => s.category === category);

              return (
                <div key={category} className="mb-20">
                  <div className="flex flex-col sm:flex-row sm:items-end gap-4 mb-8">
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${meta.accent} flex items-center justify-center flex-shrink-0`}
                      >
                        <i className={`fas ${meta.icon} text-white`}></i>
                      </div>
                      <div>
                        <h2 className="text-2xl md:text-3xl font-bold text-white">
                          {category}
                        </h2>
                        <p className="text-gray-400 text-sm mt-1 max-w-2xl">
                          {meta.blurb}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {list.map((s) => (
                      <Link key={s.slug} href={`/services/${s.slug}`}>
                        <article className="group h-full rounded-2xl border border-purple-500/20 bg-gradient-to-br from-purple-900/20 to-black/40 backdrop-blur-sm p-6 hover:border-purple-500/60 hover:shadow-2xl hover:shadow-purple-500/10 hover:-translate-y-1 transition-all duration-300 flex flex-col">
                          <div
                            className={`w-12 h-12 rounded-xl bg-gradient-to-br ${s.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                          >
                            <i className={`fas ${s.icon} text-white`}></i>
                          </div>

                          <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors leading-tight">
                            {s.name}
                          </h3>

                          <p className="text-gray-400 text-sm mt-2 leading-relaxed flex-1">
                            {s.description}
                          </p>

                          <div className="flex items-center justify-between mt-5 pt-4 border-t border-white/10">
                            <div>
                              <div className="text-[10px] text-gray-500 uppercase tracking-wide">
                                From
                              </div>
                              <div
                                className="text-base font-bold"
                                style={{ color: s.color }}
                              >
                                {s.price}
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="text-[10px] text-gray-500 uppercase tracking-wide">
                                Timeline
                              </div>
                              <div className="text-xs text-gray-300">
                                {s.delivery}
                              </div>
                            </div>
                          </div>

                          <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-purple-400 group-hover:gap-3 transition-all">
                            View details
                            <i className="fas fa-arrow-right text-xs"></i>
                          </span>
                        </article>
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}

            {/* Engagement models */}
            <div className="mb-20">
              <div className="text-center mb-10">
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                  How You Can Work With Us
                </h2>
                <p className="text-gray-400 mt-3 max-w-2xl mx-auto text-sm">
                  Three engagement models — pick the one that fits the stage
                  your product is at.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-5">
                {engagementModels.map((m) => (
                  <div
                    key={m.title}
                    className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:border-purple-500/40 transition-colors"
                  >
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-purple-600/40 to-pink-600/30 flex items-center justify-center mb-4">
                      <i className={`fas ${m.icon} text-purple-200`}></i>
                    </div>
                    <h3 className="text-white font-bold text-lg">{m.title}</h3>
                    <p className="text-gray-400 text-sm mt-2 leading-relaxed">
                      {m.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mt-4">
                      {m.bestFor.map((b) => (
                        <span
                          key={b}
                          className="text-[11px] px-2 py-0.5 rounded-full bg-purple-500/15 border border-purple-500/30 text-gray-300"
                        >
                          {b}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="text-center rounded-3xl border border-purple-500/25 bg-gradient-to-br from-purple-900/25 to-black/40 p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                Not sure which service you need?
              </h2>
              <p className="text-gray-400 mt-3 max-w-xl mx-auto text-sm md:text-base">
                Describe the problem in a few lines. We&apos;ll tell you what we
                would build, what it costs and how long it takes — no sales
                call required.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center mt-7">
                <Link href="/contact">
                  <button className="px-7 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-semibold hover:scale-105 transition-transform w-full sm:w-auto">
                    Get a Free Quote
                  </button>
                </Link>
                <Link href="/process">
                  <button className="px-7 py-3 rounded-full border border-purple-400/50 text-white text-sm font-semibold hover:bg-purple-600/10 transition-colors w-full sm:w-auto">
                    See Our Process
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
