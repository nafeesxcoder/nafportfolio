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
    <section className="relative min-h-[calc(60vh-50px)] flex items-center justify-center overflow-hidden pt-0">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/40 to-black animate-[gradientShift_10s_ease_infinite]" />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-purple-950/30 via-transparent to-black/50" />

      {/* Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(147,51,234,0.25)_0%,transparent_70%)]" />

      <Stars />

      {/* Bottom Circular Design */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden pointer-events-none">
        {/* Main Circle */}
        <div className="relative w-full h-32">
          {/* Gradient Circle */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[150%] h-32 rounded-t-full bg-gradient-to-t from-purple-600/20 via-purple-600/10 to-transparent blur-xl" />

          {/* Multiple Circular Rings */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[120%] h-24 rounded-t-full border-t-2 border-purple-500/30 animate-pulse-slow" />
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[140%] h-28 rounded-t-full border-t border-purple-400/20 animate-spin-slow" />
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[160%] h-32 rounded-t-full border-t border-purple-500/10 animate-spin-slow-reverse" />

          {/* Glowing Orbs */}
          <div className="absolute bottom-0 left-[10%] w-4 h-4 rounded-full bg-purple-500 shadow-lg shadow-purple-500/50 animate-float" />
          <div className="absolute bottom-0 left-[25%] w-2 h-2 rounded-full bg-purple-400 shadow-lg shadow-purple-400/50 animate-float-delay" />
          <div className="absolute bottom-0 left-[40%] w-3 h-3 rounded-full bg-purple-600 shadow-lg shadow-purple-600/50 animate-float" />
          <div className="absolute bottom-0 left-[55%] w-2 h-2 rounded-full bg-purple-300 shadow-lg shadow-purple-300/50 animate-float-delay" />
          <div className="absolute bottom-0 left-[70%] w-4 h-4 rounded-full bg-purple-500 shadow-lg shadow-purple-500/50 animate-float" />
          <div className="absolute bottom-0 left-[85%] w-3 h-3 rounded-full bg-purple-400 shadow-lg shadow-purple-400/50 animate-float-delay" />
          <div className="absolute bottom-0 left-[95%] w-2 h-2 rounded-full bg-purple-600 shadow-lg shadow-purple-600/50 animate-float" />

          {/* Center Large Glow */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-40 h-20 rounded-t-full bg-gradient-to-t from-purple-500/30 to-transparent blur-2xl" />
        </div>

        {/* Animated Waves */}
        <svg
          className="absolute bottom-0 left-0 w-full h-20"
          preserveAspectRatio="none"
          viewBox="0 0 1440 120"
        >
          <path
            d="M0,64L80,58.7C160,53,320,43,480,48C640,53,800,75,960,80C1120,85,1280,75,1360,69.3L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
            fill="rgba(147, 51, 234, 0.15)"
            className="animate-wave"
          />
          <path
            d="M0,96L80,90.7C160,85,320,75,480,80C640,85,800,107,960,106.7C1120,107,1280,96,1360,90.7L1440,85L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
            fill="rgba(139, 92, 246, 0.1)"
            className="animate-wave-delay"
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* LEFT */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-purple-600/20 backdrop-blur px-3 py-1.5 rounded-full mb-4 animate-fadeIn">
              <span className="w-1.5 h-1.5 bg-purple-500 rounded-full animate-pulse" />
              <span className="text-xs text-white/90">Available for work</span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-4 animate-slideUp">
              <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                I build high-converting
              </span>
              <br />
              <span className="text-white">websites for global businesses</span>
            </h1>

            {/* Subtitle */}
            <div className="mb-6 animate-slideUp delay-200">
              <p className="text-lg text-gray-300 mb-2">
                Full Stack Developer{" "}
                <span className="text-purple-400">(React + Node.js)</span>
              </p>

              {/* Typing Effect */}
              <p className="text-sm text-purple-300 mb-3 h-5">
                Specializing in: {text}
                <span className="animate-pulse">|</span>
              </p>

              <p className="text-base text-gray-400">
                helping startups grow faster with modern web solutions
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start animate-slideUp delay-300">
              <Link href="/work">
                <button className="px-6 py-2.5 rounded-full text-white bg-gradient-to-r from-purple-600 to-purple-800 hover:scale-105 transition shadow-lg shadow-purple-500/25">
                  View My Work →
                </button>
              </Link>

              <Link href="/contact">
                <button className="px-6 py-2.5 rounded-full text-white border border-purple-400/50 hover:bg-purple-600/10 hover:scale-105 transition">
                  Get In Touch
                </button>
              </Link>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative group">
            {/* Image */}
            <div className="relative rounded-2xl overflow-hidden">
              <Image
                src="/Hero.png"
                alt="Hero"
                width={500}
                height={400}
                className="w-full h-auto object-cover rounded-2xl transition group-hover:scale-105 duration-500"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes gradientShift {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes wave {
          0% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(-10px);
          }
          100% {
            transform: translateX(0);
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
            transform: translateY(-10px);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out;
        }

        .animate-slideUp {
          animation: slideUp 0.6s ease-out forwards;
          opacity: 0;
        }

        .animate-wave {
          animation: wave 4s ease-in-out infinite;
        }

        .animate-wave-delay {
          animation: wave 4s ease-in-out infinite reverse;
        }

        .animate-spin-slow {
          animation: spin-slow 12s linear infinite;
        }

        .animate-spin-slow-reverse {
          animation: spin-slow-reverse 15s linear infinite;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-float-delay {
          animation: float 3s ease-in-out infinite 1.5s;
        }

        .animate-pulse-slow {
          animation: pulse 4s ease-in-out infinite;
        }

        @keyframes pulse {
          0%,
          100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.8;
          }
        }

        .delay-200 {
          animation-delay: 0.2s;
        }
        .delay-300 {
          animation-delay: 0.3s;
        }
        .delay-500 {
          animation-delay: 0.5s;
        }
      `}</style>
    </section>
  );
}
