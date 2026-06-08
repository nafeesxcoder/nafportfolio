"use client";

import { useState, useRef, useEffect } from "react";
import { Stars } from "../components/Stars";
import Link from "next/link";

export default function Work() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const projects = [
    {
      id: 1,
      title: "Timex Media",
      category: "Web Development",
      description:
        "Modern media solutions platform with high-performance React architecture and stunning animations.",
      image: "/timex-media.png",
      tags: ["Next.js", "Tailwind CSS", "Framer Motion", "Vercel"],
      liveLink: "https://timex-media.vercel.app",
      color: "#06b6d4",
    },
    {
      id: 2,
      title: "Timex Solution Inc",
      category: "Enterprise Solution",
      description:
        "Enterprise-level solution provider website with service showcases, client portals, and comprehensive business solutions.",
      image: "/timexsolution.png",
      tags: ["React", "Node.js", "Express", "MongoDB"],
      liveLink: "https://timexsolutioninc.com",
      color: "#8b5cf6",
    },
    {
      id: 3,
      title: "Cal Coast Logistics",
      category: "Logistics Platform",
      description:
        "Logistics & supply chain management platform featuring real-time tracking, shipment scheduling, and fleet management dashboards.",
      image: "/calcoast.png",
      tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
      liveLink: "https://calcoastlogistics.com/",
      color: "#10b981",
    },
    {
      id: 4,
      title: "DTL Connect",
      category: "Blockchain",
      description:
        "Innovative digital trade platform connecting businesses globally with smart contract integration and secure document exchange.",
      image: "/dtl.png",
      tags: ["Vue.js", "Django", "Web3", "Redis"],
      liveLink: "https://dtlparking.vercel.app/",
      color: "#f59e0b",
    },
    {
      id: 5,
      title: "Aish Signs & Graphics",
      category: "Printing & Signage",
      description:
        "Aish Signs & Graphics specializes in high-quality printing and signage solutions. Whether you need stunning event decor, eye-catching vehicle wraps, or professional business signage, we have you covered.",
      image: "/asih.png",
      tags: ["Next.js", "Tailwind CSS", "EmailJS", "Responsive"],
      liveLink: "https://aishsigns.com/",
      color: "#ef4444",
    },
    {
      id: 6,
      title: "ALL AMERICAN TRANSPORT INC  ",
      category: "Data Visualization",
      description:
        "Real-time analytics dashboard with AI-powered insights, predictive analytics, and interactive data visualization.",
      image: "/allamericans.png",
      tags: ["Python", "D3.js", "TensorFlow", "FastAPI", "React"],
      liveLink: "https://allammericans.vercel.app/",
      color: "#3b82f6",
    },
    {
      id: 7,
      title: "A-1 Income Tax Services",
      category: "Financial Solutions",
      description:
        "A-1 Income Tax Services provides expert strategies to grow, protect, and optimize your wealth. We simplify complex financial challenges with tailored tax planning, investment guidance, and compliance solutions.",
      image: "/a1onetax.png",
      tags: ["Next.js", "Tailwind CSS", "Contact Form", "SEO Optimized"],
      liveLink: "https://a1onetax-hnph.vercel.app/",
      color: "#ec4899",
    },
    {
      id: 8,
      title: "LOVEPREET CHANDI REAL ESTATE",
      category: "UI/UX Design",
      description:
        "Modern portfolio website with smooth animations, responsive design, and optimized performance.",
      image: "/lovepreet.png",
      tags: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
      liveLink: "lovepreet-v8xb.vercel.app",
      color: "#14b8a6",
    },
    {
      id: 9,
      title: "SMS Construction",
      category: "Construction",
      description:
        "Sustainable, reliable, and innovative construction solutions. Quality craftsmanship, safety, and client satisfaction — built with precision and integrity for a better future.",
      image: "/smsconstruction.png",
      tags: ["Next.js", "Tailwind CSS", "Responsive", "SEO"],
      liveLink: "https://sms-construction.vercel.app/",
      color: "#f97316",
    },
    {
      id: 10,
      title: "SPITFIRE",
      category: "24/7 Services",
      description:
        "Always ready day & night. We deliver with speed, precision, and dedication — fast, efficient, and trusted solutions around the clock. When others pause, Spitfire rises with passion, resilience, and purpose.",
      image: "/Spitfire.png",
      tags: ["Next.js", "Tailwind CSS", "SEO", "Responsive"],
      liveLink: "https://spitfire-theta.vercel.app/",
      color: "#a855f7",
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
    <main className="min-h-screen bg-black">
      <section ref={sectionRef} className="relative py-20 overflow-hidden">
        {/* Black Background */}
        <div className="absolute inset-0 bg-black" />

        {/* Stars Component */}
        <Stars />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div
            className={`text-center mb-12 transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <div className="inline-flex items-center gap-2 bg-purple-600/10 backdrop-blur-sm px-4 py-2 rounded-full mb-4 border border-purple-500/20">
              <i className="fas fa-code text-purple-400 text-sm"></i>
              <span className="text-sm font-medium text-purple-300">
                My Portfolio
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
              My Work
            </h1>
            <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills and
              expertise
            </p>
          </div>

          {/* Projects Grid - 2 columns desktop, 1 mobile */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`group transition-all duration-700 delay-${Math.min(index * 100, 500)} ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
              >
                {/* Purple Card */}
                <div className="relative bg-gradient-to-br from-purple-900/40 to-purple-950/30 backdrop-blur-sm rounded-2xl border border-purple-500/30 hover:border-purple-500/60 transition-all duration-500 overflow-hidden hover:shadow-2xl hover:shadow-purple-500/20 hover:scale-[1.02] h-full">
                  {/* Image Section */}
                  <div className="relative h-56 overflow-hidden">
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
                    {/* Category */}
                    <div
                      className="text-xs font-semibold mb-2"
                      style={{ color: project.color }}
                    >
                      {project.category}
                    </div>

                    {/* Title */}
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

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="text-xs px-3 py-1 rounded-full bg-purple-500/15 border border-purple-500/30 text-gray-300 hover:border-purple-500/60 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Live Demo Button */}
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn relative overflow-hidden inline-flex w-full px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 items-center justify-center gap-2"
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
                  </div>

                  {/* Bottom Purple Gradient Line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
