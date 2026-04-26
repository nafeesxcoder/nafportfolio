"use client";

import { useState, useRef, useEffect } from "react";
import { Stars } from "./Stars";
import Link from "next/link";
import Image from "next/image";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const tools = [
    { name: "React.js", icon: "fab fa-react", color: "#61dafb" },
    { name: "Node.js", icon: "fab fa-node-js", color: "#68a063" },
    { name: "Next.js", icon: "fas fa-code", color: "#ffffff" },
    { name: "Express.js", icon: "fas fa-server", color: "#ffffff" },
    { name: "MongoDB", icon: "fas fa-database", color: "#47A248" },
    { name: "MySQL", icon: "fas fa-database", color: "#4479A1" },
    { name: "Tailwind CSS", icon: "fab fa-css3-alt", color: "#38bdf8" },
    { name: "TypeScript", icon: "fab fa-js", color: "#3178c6" },
    { name: "Git", icon: "fab fa-git-alt", color: "#f05032" },
    { name: "Docker", icon: "fab fa-docker", color: "#2496ed" },
  ];

  const stats = [
    {
      value: "50+",
      label: "Projects Completed",
      icon: "fa-code",
      color: "#8b5cf6",
    },
    {
      value: "30+",
      label: "Happy Clients",
      icon: "fa-smile",
      color: "#ec4899",
    },
    {
      value: "4+",
      label: "Years Experience",
      icon: "fa-calendar",
      color: "#06b6d4",
    },
    {
      value: "10+",
      label: "Technologies",
      icon: "fa-microchip",
      color: "#10b981",
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
      {/* Black Background */}
      <div className="absolute inset-0 bg-black" />
      <Stars />
      <div className="absolute inset-0 bg-gradient-to-b from-purple-950/10 via-transparent to-purple-950/10 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-12 transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <div className="inline-flex items-center gap-2 bg-purple-600/10 backdrop-blur-sm px-4 py-2 rounded-full mb-4 border border-purple-500/20">
            <i className="fas fa-user-astronaut text-purple-400 text-sm"></i>
            <span className="text-sm font-medium text-purple-300">
              About Me
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
            Who Am I?
          </h2>
          <p className="text-gray-500 mt-2 text-sm max-w-2xl mx-auto">
            Get to know the developer behind the code
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT - Image & Stats */}
          <div className="space-y-6">
            {/* Image Circle */}
            <div className="relative group flex justify-center">
              <div className="absolute w-[300px] h-[300px] rounded-full bg-gradient-to-r from-purple-600 to-pink-600 opacity-20 blur-2xl animate-pulse-slow" />
              <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-purple-500/30 group-hover:scale-105 transition-all duration-500">
                <Image
                  src="/about-image.png"
                  alt="Nafees Ahmad"
                  width={256}
                  height={256}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://via.placeholder.com/256x256/1a1a2e/ffffff?text=NA";
                  }}
                />
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  className={`bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm rounded-xl p-4 text-center border border-white/10 hover:border-purple-500/30 transition-all duration-300 hover:scale-105 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
                  style={{ transitionDelay: `${idx * 100}ms` }}
                >
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-2">
                    <i className={`fas ${stat.icon} text-purple-400`}></i>
                  </div>
                  <div className="text-2xl font-bold text-white">
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT - Content */}
          <div className="space-y-6">
            {/* Quote/Bio */}
            <div
              className={`bg-gradient-to-br from-purple-900/20 to-black/40 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20 transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            >
              <i className="fas fa-quote-left text-purple-400 text-2xl mb-3 block opacity-50"></i>
              <p className="text-gray-300 text-lg leading-relaxed">
                I'm a{" "}
                <span className="text-purple-400 font-semibold">
                  full stack developer
                </span>{" "}
                focused on building
                <span className="text-white">
                  {" "}
                  fast, modern, and user-friendly websites
                </span>{" "}
                for
                <span className="text-purple-400"> global clients</span>.
              </p>
              <i className="fas fa-quote-right text-purple-400 text-2xl mt-3 block text-right opacity-50"></i>
            </div>

            {/* Personal Info */}
            <div
              className={`space-y-4 transition-all duration-700 delay-200 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            >
              <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
                <i className="fas fa-map-marker-alt text-purple-400 w-5"></i>
                <span className="text-gray-300">
                  Based in <span className="text-white">India</span> — Working
                  with clients{" "}
                  <span className="text-purple-400">worldwide</span>
                </span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
                <i className="fas fa-clock text-purple-400 w-5"></i>
                <span className="text-gray-300">
                  <span className="text-white">4+ years</span> of experience in
                  web development
                </span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
                <i className="fas fa-check-circle text-purple-400 w-5"></i>
                <span className="text-gray-300">
                  <span className="text-white">50+ projects</span> delivered
                  successfully
                </span>
              </div>
            </div>

            {/* Tools/Skills Section */}
            <div
              className={`transition-all duration-700 delay-400 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            >
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <i className="fas fa-code text-purple-400"></i>
                Tech Stack & Tools
              </h3>
              <div className="flex flex-wrap gap-2">
                {tools.slice(0, 8).map((tool, idx) => (
                  <div key={idx} className="group relative">
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 hover:border-purple-500/30 transition-all duration-300 hover:scale-105 cursor-pointer">
                      <i
                        className={`${tool.icon} text-sm`}
                        style={{ color: tool.color }}
                      ></i>
                      <span className="text-xs text-gray-300 group-hover:text-white transition-colors">
                        {tool.name}
                      </span>
                    </div>
                  </div>
                ))}
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-purple-500/10 border border-purple-500/30">
                  <i className="fas fa-plus text-xs text-purple-400"></i>
                  <span className="text-xs text-purple-300">
                    {tools.length - 8}+ more
                  </span>
                </div>
              </div>
            </div>

            {/* Buttons - Learn More & Contact */}
            <div
              className={`flex flex-col sm:flex-row gap-4 pt-4 transition-all duration-700 delay-500 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            >
              {/* Learn More Button - Goes to About Page */}
              <Link href="/about">
                <button className="group relative px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-purple-800 text-white font-semibold hover:scale-105 transition-all duration-300 shadow-lg shadow-purple-500/25 overflow-hidden">
                  <span className="relative z-10 flex items-center gap-2">
                    Learn More About Me
                    <i className="fas fa-user text-sm group-hover:translate-x-1 transition-transform"></i>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>
              </Link>

              {/* Contact Button */}
              <Link href="/contact">
                <button className="px-6 py-3 rounded-full border-2 border-purple-400/50 text-white font-semibold hover:border-purple-400 hover:bg-purple-600/10 hover:scale-105 transition-all duration-300 flex items-center gap-2">
                  <i className="fas fa-paper-plane text-sm"></i>
                  Hire Me
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.1);
          }
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        .delay-200 {
          transition-delay: 0.2s;
        }
        .delay-400 {
          transition-delay: 0.4s;
        }
        .delay-500 {
          transition-delay: 0.5s;
        }
      `}</style>
    </section>
  );
}
