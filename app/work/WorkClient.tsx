"use client";

import { useState, useRef, useEffect, useMemo } from "react";
import Link from "next/link";
import { Stars } from "../components/Stars";
import { projects, projectFilters, type ProjectType } from "../data/projects";

export default function WorkClient() {
  const [isVisible, setIsVisible] = useState(false);
  const [filter, setFilter] = useState<"all" | ProjectType>("all");
  const sectionRef = useRef(null);

  const visibleProjects = useMemo(
    () => (filter === "all" ? projects : projects.filter((p) => p.type === filter)),
    [filter],
  );

  const counts = useMemo(
    () => ({
      all: projects.length,
      web: projects.filter((p) => p.type === "web").length,
      app: projects.filter((p) => p.type === "app").length,
      seo: projects.filter((p) => p.type === "seo").length,
    }),
    [],
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen bg-black">
      <section ref={sectionRef} className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black" />
        <Stars />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div
            className={`text-center mb-10 transition-all duration-700 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <div className="inline-flex items-center gap-2 bg-purple-600/10 backdrop-blur-sm px-4 py-2 rounded-full mb-4 border border-purple-500/20">
              <i className="fas fa-folder-open text-purple-400 text-sm"></i>
              <span className="text-sm font-medium text-purple-300">
                Portfolio
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
              Our Work
            </h1>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Websites, mobile apps and SEO campaigns delivered for clients
              across the world — from single landing pages to full product
              builds.
            </p>
          </div>

          {/* Filter bar */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
            {projectFilters.map((f) => {
              const active = filter === f.value;
              return (
                <button
                  key={f.value}
                  onClick={() => setFilter(f.value)}
                  className={`px-4 sm:px-5 py-2 rounded-full text-sm font-medium border transition-all duration-300 ${
                    active
                      ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white border-transparent shadow-lg shadow-purple-500/25"
                      : "bg-white/[0.03] text-gray-300 border-white/10 hover:border-purple-500/50 hover:text-white"
                  }`}
                >
                  {f.label}
                  <span
                    className={`ml-2 text-[11px] ${
                      active ? "text-white/80" : "text-gray-500"
                    }`}
                  >
                    {counts[f.value]}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">
            {visibleProjects.map((project, index) => {
              const hasLink = project.liveLink && project.liveLink !== "#";
              return (
                <article
                  key={project.id}
                  className={`group transition-all duration-700 ${
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-10 opacity-0"
                  }`}
                  style={{ transitionDelay: `${Math.min(index * 70, 420)}ms` }}
                >
                  <div className="relative bg-gradient-to-br from-purple-900/40 to-purple-950/30 backdrop-blur-sm rounded-2xl border border-purple-500/30 hover:border-purple-500/60 transition-all duration-500 overflow-hidden hover:shadow-2xl hover:shadow-purple-500/20 hover:scale-[1.02] h-full flex flex-col">
                    {/* Image */}
                    <div className="relative h-52 overflow-hidden bg-gradient-to-br from-purple-900/60 to-black">
                      <div className="absolute inset-0 bg-gradient-to-t from-purple-950/80 via-transparent to-transparent z-10" />
                      {project.image ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={project.image}
                          alt={`${project.title} — ${project.category} project by Unique Web Layer`}
                          loading="lazy"
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                      ) : (
                        <div className="w-full h-full flex flex-col items-center justify-center gap-2 border-b border-dashed border-purple-500/30">
                          <i className="fas fa-image text-4xl text-purple-400/40"></i>
                          <span className="text-[11px] text-purple-300/50 font-mono">
                            add screenshot in /public
                          </span>
                        </div>
                      )}

                      {/* Type chip */}
                      <div className="absolute top-3 left-3 z-20 px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wide bg-black/60 backdrop-blur-sm border border-white/15 text-white">
                        {project.type === "app"
                          ? "Mobile App"
                          : project.type === "seo"
                            ? "SEO"
                            : "Website"}
                      </div>

                      {project.country && (
                        <div className="absolute top-3 right-3 z-20 px-2.5 py-1 rounded-full text-[10px] bg-black/60 backdrop-blur-sm border border-white/15 text-gray-200">
                          <i className="fas fa-location-dot mr-1 text-purple-300"></i>
                          {project.country}
                        </div>
                      )}

                      <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                        style={{ backgroundColor: project.color }}
                      />
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-1">
                      <div
                        className="text-xs font-semibold mb-2"
                        style={{ color: project.color }}
                      >
                        {project.category}
                      </div>

                      <div className="flex items-start justify-between gap-3 mb-3">
                        <h2 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors leading-tight">
                          {project.title}
                        </h2>
                        {hasLink && (
                          <div className="flex items-center gap-1.5 flex-shrink-0 mt-1">
                            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                            <span className="text-[10px] text-green-500">
                              Live
                            </span>
                          </div>
                        )}
                      </div>

                      <p className="text-gray-300 text-sm mb-4 leading-relaxed flex-1">
                        {project.description}
                      </p>

                      {project.result && (
                        <div className="mb-4 flex items-start gap-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 px-3 py-2">
                          <i className="fas fa-arrow-trend-up text-emerald-400 text-xs mt-0.5"></i>
                          <span className="text-[11px] text-emerald-200/90">
                            {project.result}
                          </span>
                        </div>
                      )}

                      <div className="flex flex-wrap gap-2 mb-5">
                        {project.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="text-[11px] px-2.5 py-1 rounded-full bg-purple-500/15 border border-purple-500/30 text-gray-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {hasLink ? (
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex w-full px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 items-center justify-center gap-2 hover:brightness-125"
                          style={{
                            backgroundColor: `${project.color}20`,
                            color: project.color,
                          }}
                        >
                          <i className="fas fa-external-link-alt text-xs"></i>
                          <span>View Live Project</span>
                        </a>
                      ) : (
                        <span className="inline-flex w-full px-4 py-2.5 rounded-xl text-sm font-medium items-center justify-center gap-2 bg-white/[0.04] border border-dashed border-white/15 text-gray-500">
                          <i className="fas fa-link-slash text-xs"></i>
                          Link coming soon
                        </span>
                      )}
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
                  </div>
                </article>
              );
            })}
          </div>

          {/* CTA */}
          <div className="mt-16 text-center rounded-3xl border border-purple-500/25 bg-gradient-to-br from-purple-900/25 to-black/40 backdrop-blur-sm p-8 sm:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Want a project like these?
            </h2>
            <p className="text-gray-400 mt-3 max-w-xl mx-auto text-sm md:text-base">
              Tell us what you are building. You get a fixed quote, a timeline
              and a scope document — usually within one working day.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center mt-7">
              <Link href="/contact">
                <button className="px-7 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-semibold hover:scale-105 transition-transform w-full sm:w-auto">
                  Start a Project
                </button>
              </Link>
              <Link href="/services">
                <button className="px-7 py-3 rounded-full border border-purple-400/50 text-white text-sm font-semibold hover:bg-purple-600/10 transition-colors w-full sm:w-auto">
                  Browse Services
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
