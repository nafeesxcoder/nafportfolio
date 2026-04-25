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
    <section className="relative min-h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/40 to-black animate-[gradientShift_10s_ease_infinite]" />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-purple-950/30 via-transparent to-black/50" />

      {/* Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(147,51,234,0.25)_0%,transparent_70%)]" />

      <Stars />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full">
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
                <button className="px-6 py-2.5 rounded-full text-white bg-gradient-to-r from-purple-600 to-purple-800 hover:scale-105 transition">
                  View My Work →
                </button>
              </Link>

              <Link href="/contact">
                <button className="px-6 py-2.5 rounded-full text-white border border-purple-400/50 hover:bg-purple-600/10 hover:scale-105 transition">
                  Get In Touch
                </button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-8 pt-6 border-t border-purple-500/20 animate-slideUp delay-500">
              {[
                ["50+", "Projects"],
                ["30+", "Clients"],
                ["4+", "Years"],
              ].map(([num, label], i) => (
                <div key={i} className="hover:scale-110 transition">
                  <div className="text-xl font-bold text-purple-400">{num}</div>
                  <div className="text-xs text-gray-400">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative group">
            {/* Glow Border */}
            <div className="absolute -inset-1 rounded-2xl blur opacity-30 group-hover:opacity-100 transition" />

            {/* Image */}
            <div className="relative rounded-2xl overflow-hidden">
              <Image
                src="/Hero.png"
                alt="Hero"
                width={500}
                height={400}
                className="w-full h-auto object-cover rounded-2xl transition group-hover:scale-105"
                priority
              />
            </div>

            {/* Floating Icons */}
            <div className="absolute -top-4 -right-4 bg-purple-600/20 backdrop-blur rounded-lg p-2 border border-purple-400/30 animate-bounce">
              ⚛️
            </div>

            <div className="absolute -bottom-4 -left-4 bg-purple-600/20 backdrop-blur rounded-lg p-2 border border-purple-400/30 animate-bounce delay-300">
              🟢
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
