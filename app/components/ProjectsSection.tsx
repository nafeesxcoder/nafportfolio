"use client";

import { useState, useRef, useEffect } from "react";
import { Stars } from "./Stars";
import Link from "next/link";

export default function ProjectsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const sectionRef = useRef(null);

  const projects = [
    {
      id: 1,
      title: "Timex Media",
      description:
        "Modern media solutions platform with high-performance React architecture and stunning animations.",
      image: "/timex-media.png",
      tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
      liveLink: "https://timex-media.vercel.app",
      color: "#06b6d4",
    },
    {
      id: 2,
      title: "Timex Solution Inc",
      description:
        "Enterprise solution provider with comprehensive business tools and client portals.",
      image: "/timexsolution.png",
      tech: ["React", "Node.js", "Express", "MongoDB"],
      liveLink: "https://timexsolutioninc.com",
      color: "#8b5cf6",
    },
    {
      id: 3,
      title: "Cal Coast Logistics",
      description:
        "Logistics platform with real-time tracking, shipment scheduling & fleet management.",
      image: "/calcoast.png",
      tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
      liveLink: "https://calcoastlogistics.com",
      color: "#10b981",
    },
    {
      id: 4,
      title: "DTL Connect",
      description:
        "Digital trade platform with smart contract integration and secure document exchange.",
      image: "/dtl.png",
      tech: ["Vue.js", "Django", "Web3", "Redis"],
      liveLink: "https://dtl.example.com",
      color: "#f59e0b",
    },
  ];

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
    <section ref={sectionRef} className="relative py-20 overflow-hidden">
      {/* Original Black Background */}
      <div className="absolute inset-0 bg-black" />

      {/* Stars Component */}
      <Stars />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-12 transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <div className="inline-flex items-center gap-2 bg-purple-600/10 backdrop-blur-sm px-4 py-2 rounded-full mb-4 border border-purple-500/20">
            <i className="fas fa-grid-2 text-purple-400 text-sm"></i>
            <span className="text-sm font-medium text-purple-300">
              Recent Works
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-gray-500 mt-2 text-sm">
            Crafting digital excellence
          </p>
        </div>

        {/* Projects Grid - Bigger Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              className={`group transition-all duration-700 delay-${index * 100} ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              {/* Purple Card - Bigger Size */}
              <div className="relative bg-gradient-to-br from-purple-900/40 to-purple-950/30 backdrop-blur-sm rounded-2xl border border-purple-500/30 hover:border-purple-500/60 transition-all duration-500 overflow-hidden hover:shadow-2xl hover:shadow-purple-500/20 hover:scale-[1.02]">
                {/* Image Section - Top */}
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-950/80 via-transparent to-transparent z-10" />
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-800 to-purple-900">
                      <i className="fas fa-code text-6xl text-purple-400/50"></i>
                    </div>
                  )}

                  {/* Color Overlay on Hover */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                    style={{ backgroundColor: project.color }}
                  />
                </div>

                {/* Content Section */}
                <div className="p-6">
                  {/* Title with Status */}
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                      <span className="text-[10px] text-green-500">Live</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 text-sm mb-5 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs px-3 py-1 rounded-full bg-purple-500/15 border border-purple-500/30 text-gray-300 hover:border-purple-500/60 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn relative overflow-hidden flex-1 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 flex items-center justify-center gap-2"
                      style={{
                        backgroundColor: `${project.color}20`,
                        color: project.color,
                      }}
                    >
                      <i className="fas fa-external-link-alt text-xs"></i>
                      <span>Live Demo</span>
                      <div
                        className="absolute inset-0 translate-x-full group-hover/btn:translate-x-0 transition-transform duration-300"
                        style={{ backgroundColor: project.color }}
                      />
                      <span className="absolute inset-0 translate-x-full group-hover/btn:translate-x-0 transition-transform duration-300 text-white flex items-center justify-center gap-1 text-xs">
                        <i className="fas fa-arrow-right"></i> Visit
                      </span>
                    </a>

                    <a
                      href="https://github.com/nafeesxcoder"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-xl text-sm font-medium bg-purple-500/15 border border-purple-500/30 text-gray-300 hover:text-white hover:bg-purple-500/30 transition-all duration-300 flex items-center gap-2"
                    >
                      <i className="fab fa-github text-xs"></i>
                      GitHub
                    </a>
                  </div>
                </div>

                {/* Bottom Purple Gradient Line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-14">
          <Link href="/work">
            <button className="group relative px-8 py-3 rounded-full bg-purple-600/15 border border-purple-500/40 text-sm text-purple-300 hover:text-white hover:bg-purple-600/30 hover:border-purple-500/70 transition-all duration-300 overflow-hidden">
              <span className="relative z-10 flex items-center gap-2">
                View All Projects
                <i className="fas fa-arrow-right text-xs group-hover:translate-x-1 transition-transform"></i>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>
          </Link>
        </div>
      </div>

      <style jsx>{`
        .delay-100 {
          transition-delay: 0.1s;
        }
        .delay-200 {
          transition-delay: 0.2s;
        }
        .delay-300 {
          transition-delay: 0.3s;
        }
        .delay-400 {
          transition-delay: 0.4s;
        }
      `}</style>
    </section>
  );
}
