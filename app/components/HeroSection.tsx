"use client";

import Link from "next/link";
import Image from "next/image";
import { Stars } from "./Stars";
import { useState, useEffect } from "react";

export default function HeroSection() {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const technologies = [
    "React.js",
    "Node.js",
    "Next.js",
    "MongoDB",
    "Express.js",
    "mysql",
  ];

  useEffect(() => {
    const handleTyping = () => {
      const currentTech = technologies[index];

      if (isDeleting) {
        setText(currentTech.substring(0, text.length - 1));
        if (text.length === 0) {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % technologies.length);
        }
      } else {
        setText(currentTech.substring(0, text.length + 1));
        if (text.length === currentTech.length) {
          setTimeout(() => setIsDeleting(true), 1200);
        }
      }
    };

    const timer = setTimeout(handleTyping, isDeleting ? 50 : 100);
    return () => clearTimeout(timer);
  }, [text, index, isDeleting]);

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/30 to-black animate-gradient" />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-purple-950/20 via-transparent to-black/30" />

      {/* Radial Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(147,51,234,0.2)_0%,transparent_70%)]" />

      <Stars />

      {/* Bottom Circular Design */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden pointer-events-none">
        <div className="relative w-full h-20">
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[200%] h-20 rounded-t-full bg-gradient-to-t from-purple-600/15 via-purple-600/5 to-transparent blur-xl animate-pulse-slow" />
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[140%] h-16 rounded-t-full border-t border-purple-500/30 animate-spin-slow" />
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[180%] h-20 rounded-t-full border-t border-dashed border-purple-500/20 animate-spin-slow-reverse" />

          <div className="absolute bottom-0 left-[20%] w-2 h-2 rounded-full bg-purple-500/60 animate-float" />
          <div className="absolute bottom-0 left-[50%] w-2.5 h-2.5 rounded-full bg-purple-400/60 animate-float-delay" />
          <div className="absolute bottom-0 left-[80%] w-2 h-2 rounded-full bg-purple-600/60 animate-float" />
        </div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* LEFT - Content */}
          <div className="text-center lg:text-left space-y-5">
            {/* Animated Badge */}
            <div className="inline-flex items-center gap-2 bg-purple-600/15 backdrop-blur-sm px-3 py-1.5 rounded-full border border-purple-500/30 animate-fadeIn">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-purple-500"></span>
              </span>
              <span className="text-xs text-white/90 font-medium">
                Available for work
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight animate-slideUp">
              <span className="bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 bg-clip-text text-transparent">
                I build high-converting
              </span>
              <br />
              <span className="text-white">websites for global businesses</span>
            </h1>

            {/* Subtitle */}
            <div className="space-y-2 animate-slideUp delay-200">
              <p className="text-lg text-gray-300">
                Full Stack Developer{" "}
                <span className="text-purple-400 font-semibold">
                  (React + Node.js)
                </span>
              </p>

              {/* Typing Effect - Inline Badge */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-gray-400 text-sm">Specializing in:</span>
                <div className="bg-purple-600/20 backdrop-blur-sm px-2 py-0.5 rounded-md">
                  <span className="text-purple-300 text-sm font-mono">
                    {text}
                  </span>
                  <span className="text-purple-400 animate-pulse ml-0.5">
                    |
                  </span>
                </div>
              </div>

              <p className="text-gray-400 text-base">
                helping startups grow faster with modern web solutions
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start animate-slideUp delay-300">
              <Link href="/work">
                <button className="group relative px-6 py-2.5 rounded-full text-sm text-white bg-gradient-to-r from-purple-600 to-purple-800 hover:scale-105 transition-all duration-300 shadow-lg shadow-purple-500/25 overflow-hidden">
                  <span className="relative z-10">View My Work</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-purple-500 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </button>
              </Link>

              <Link href="/contact">
                <button className="px-6 py-2.5 rounded-full text-sm text-white border border-purple-400/50 hover:border-purple-400 hover:bg-purple-600/10 hover:scale-105 transition-all duration-300">
                  Get In Touch
                </button>
              </Link>
            </div>
          </div>

          {/* RIGHT - Image */}
          <div className="relative group flex justify-center items-center">
            {/* Floating Tech Icons */}
            <div className="absolute -top-8 -right-8 w-10 h-10 rounded-full bg-purple-600/20 backdrop-blur-sm flex items-center justify-center border border-purple-500/30 animate-float z-20">
              <i className="fab fa-react text-purple-400 text-sm"></i>
            </div>
            <div className="absolute -bottom-8 -left-8 w-10 h-10 rounded-full bg-purple-600/20 backdrop-blur-sm flex items-center justify-center border border-purple-500/30 animate-float-delay z-20">
              <i className="fab fa-node-js text-purple-400 text-sm"></i>
            </div>

            {/* Image Container */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden transform transition-all duration-500 group-hover:scale-105 group-hover:rotate-2">
                <Image
                  src="/Hero.png"
                  alt="Hero Illustration"
                  width={420}
                  height={320}
                  className="w-full h-auto object-cover rounded-2xl transition-all duration-700 group-hover:scale-110"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <div className="w-5 h-8 border border-purple-400/30 rounded-full flex justify-center">
          <div className="w-0.5 h-1.5 bg-purple-400 rounded-full mt-1.5 animate-scroll"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 10s ease infinite;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-5px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(25px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes spin-slow {
          from {
            transform: translateX(-50%) rotate(0deg);
          }
          to {
            transform: translateX(-50%) rotate(360deg);
          }
        }

        @keyframes spin-slow-reverse {
          from {
            transform: translateX(-50%) rotate(360deg);
          }
          to {
            transform: translateX(-50%) rotate(0deg);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 0.2;
            transform: scale(1);
          }
          50% {
            opacity: 0.4;
            transform: scale(1.05);
          }
        }

        @keyframes bounce {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }

        @keyframes scroll {
          0% {
            transform: translateY(0);
            opacity: 1;
          }
          100% {
            transform: translateY(8px);
            opacity: 0;
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out;
        }
        .animate-slideUp {
          animation: slideUp 0.5s ease-out forwards;
          opacity: 0;
        }
        .animate-spin-slow {
          animation: spin-slow 15s linear infinite;
        }
        .animate-spin-slow-reverse {
          animation: spin-slow-reverse 18s linear infinite;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-float-delay {
          animation: float 3s ease-in-out infinite 1.5s;
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
        .animate-bounce {
          animation: bounce 2s ease-in-out infinite;
        }
        .animate-scroll {
          animation: scroll 1.2s ease-in-out infinite;
        }

        .delay-200 {
          animation-delay: 0.15s;
        }
        .delay-300 {
          animation-delay: 0.25s;
        }
        .delay-500 {
          animation-delay: 0.35s;
        }
      `}</style>
    </section>
  );
}
