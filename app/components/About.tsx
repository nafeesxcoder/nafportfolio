"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Stars } from "./Stars";
import Link from "next/link";
import Image from "next/image";
import {
  FiUser,
  FiMapPin,
  FiClock,
  FiCheckCircle,
  FiArrowRight,
  FiCode,
  FiHexagon,
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiMail,
  FiAward,
  FiBriefcase,
  FiGlobe,
  FiInstagram,
} from "react-icons/fi";
import { FaReact, FaNodeJs, FaGitAlt, FaWhatsapp } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiMongodb,
  SiExpress,
} from "react-icons/si";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const tools = [
    { name: "React.js", icon: FaReact, color: "#61dafb", delay: 0 },
    { name: "Node.js", icon: FaNodeJs, color: "#68a063", delay: 0.1 },
    { name: "Next.js", icon: SiNextdotjs, color: "#ffffff", delay: 0.2 },
    { name: "Express.js", icon: SiExpress, color: "#ffffff", delay: 0.3 },
    { name: "MongoDB", icon: SiMongodb, color: "#47A248", delay: 0.4 },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38bdf8", delay: 0.5 },
    { name: "TypeScript", icon: SiTypescript, color: "#3178c6", delay: 0.6 },
    { name: "Git", icon: FaGitAlt, color: "#f05032", delay: 0.7 },
  ];

  const achievements = [
    {
      icon: FiAward,
      value: "100%",
      label: "Client Satisfaction",
      color: "#8b5cf6",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: FiBriefcase,
      value: "50+",
      label: "Projects Delivered",
      color: "#06b6d4",
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      icon: FiGlobe,
      value: "Global",
      label: "Client Base",
      color: "#10b981",
      gradient: "from-emerald-500 to-teal-500",
    },
  ];

  const socialLinks = [
    {
      icon: FiGithub,
      href: "https://github.com/nafeesxcoder",
      label: "GitHub",
      color: "hover:text-purple-400",
    },
    {
      icon: FiLinkedin,
      href: "https://www.linkedin.com/in/uniqueweblayer/",
      label: "LinkedIn",
      color: "hover:text-blue-400",
    },
    {
      icon: FiTwitter,
      href: "https://x.com/uniqueweblayer",
      label: "Twitter",
      color: "hover:text-sky-400",
    },
    {
      icon: FiInstagram,
      href: "https://instagram.com/uniqueweblayer",
      label: "Instagram",
      color: "hover:text-pink-500",
    },
    {
      icon: FiMail,
      href: "mailto:info@uniqueweblayer.com",
      label: "Email",
      color: "hover:text-red-400",
    },
    {
      icon: FaWhatsapp,
      href: "https://wa.me/917409233994",
      label: "WhatsApp",
      color: "hover:text-green-500",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setHasStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-24 overflow-hidden">
      {/* Premium Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/10 to-black" />

      <Stars />

      {/* Animated Orbs */}
      <div className="absolute top-20 left-10 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 backdrop-blur-sm mb-5">
            <FiHexagon className="w-3.5 h-3.5 text-purple-400" />
            <span className="text-xs font-semibold tracking-wider text-purple-300 uppercase">
              About Me
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            <span className="bg-gradient-to-r from-white via-purple-300 to-white bg-clip-text text-transparent">
              Crafting Digital
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent relative inline-block">
              Excellence
              <motion.span
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                initial={{ width: 0 }}
                animate={isInView ? { width: "100%" } : { width: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              />
            </span>
          </h2>

          <p className="text-gray-400 text-base md:text-lg mt-6 max-w-2xl mx-auto">
            Creative developer who transforms complex problems into elegant
            digital solutions
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* LEFT SIDE - Clean Image */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="relative group"
            >
              {/* Image Container - Clean, no background */}
              <div className="relative w-full max-w-md mx-auto">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl group-hover:scale-[1.02] transition-all duration-500">
                  <Image
                    src="/Hero.png"
                    alt="Unique Web Layer - Developer"
                    width={450}
                    height={500}
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                    priority
                  />
                </div>
              </div>

              {/* Floating Tech Icons */}
              <motion.div
                animate={{ y: [0, -10, 0], rotate: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-6 -right-6 bg-gradient-to-br from-purple-600 to-pink-600 p-3 rounded-2xl shadow-xl z-20"
              >
                <FaReact className="text-white text-2xl" />
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0], rotate: [0, -10, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, delay: 0.5 }}
                className="absolute -bottom-6 -left-6 bg-gradient-to-br from-cyan-500 to-blue-600 p-3 rounded-2xl shadow-xl z-20"
              >
                <SiNextdotjs className="text-white text-2xl" />
              </motion.div>
            </motion.div>

            {/* Social Links - Only relevant platforms */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.3 }}
              className="flex justify-center gap-3 mt-8 flex-wrap"
            >
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 transition-all duration-300 hover:scale-110 ${social.color}`}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </motion.div>
          </div>

          {/* RIGHT SIDE - Content */}
          <div className="space-y-6">
            {/* Quote */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="relative bg-gradient-to-br from-purple-900/20 to-black/40 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20"
            >
              <div className="absolute -top-3 -left-2 text-5xl font-serif text-purple-500/30">
                "
              </div>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed px-4">
                I'm a{" "}
                <span className="text-purple-400 font-semibold">
                  full stack developer
                </span>{" "}
                passionate about building{" "}
                <span className="text-white">
                  fast, modern, and user-friendly websites
                </span>{" "}
                that help businesses grow in the{" "}
                <span className="text-purple-400 font-semibold">
                  digital world
                </span>
                .
              </p>
              <div className="absolute -bottom-3 -right-2 text-5xl font-serif text-purple-500/30">
                "
              </div>
            </motion.div>

            {/* Info Cards */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-3"
            >
              {[
                {
                  icon: FiMapPin,
                  text: "Based in ",
                  highlight: "India",
                  suffix: " — Working with clients ",
                  highlight2: "worldwide",
                },
                {
                  icon: FiClock,
                  text: "",
                  highlight: "4+ years",
                  suffix: " of professional experience",
                },
                {
                  icon: FiCheckCircle,
                  text: "",
                  highlight: "50+ projects",
                  suffix: " delivered successfully",
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + idx * 0.1 }}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-white/5 to-transparent border-l-4 border-purple-500 hover:border-purple-400 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500/30 to-pink-500/30 flex items-center justify-center">
                    <item.icon className="text-purple-400 w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-gray-300 text-sm">
                      {item.text}
                      <span className="text-white font-semibold">
                        {item.highlight}
                      </span>
                      {item.suffix}
                      {item.highlight2 && (
                        <span className="text-purple-400 font-semibold">
                          {" "}
                          {item.highlight2}
                        </span>
                      )}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Tech Stack */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                  <FiCode className="text-white text-sm" />
                </div>
                <h3 className="text-lg font-semibold text-white">
                  Tech Arsenal
                </h3>
                <div className="flex-1 h-px bg-gradient-to-r from-purple-500/50 to-transparent" />
              </div>

              <div className="flex flex-wrap gap-2">
                {tools.map((tool, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.3 + tool.delay }}
                    whileHover={{ y: -3 }}
                  >
                    <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20">
                      <tool.icon
                        className="text-sm"
                        style={{ color: tool.color }}
                      />
                      <span className="text-xs text-gray-300 hover:text-white transition-colors">
                        {tool.name}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <Link href="/about">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold transition-all duration-300 shadow-lg shadow-purple-500/25 overflow-hidden w-full sm:w-auto"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Discover My Story
                    <FiArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
                  </span>
                </motion.button>
              </Link>

              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 rounded-full border-2 border-purple-400/50 text-white font-semibold hover:border-purple-400 hover:bg-purple-600/10 transition-all duration-300 flex items-center justify-center gap-2 w-full sm:w-auto group"
                >
                  <FiUser className="text-sm group-hover:rotate-12 transition-transform" />
                  Let's Connect
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Achievements Row with StatsBar Animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16"
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {achievements.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: isInView ? 0 : 50, opacity: isInView ? 1 : 0 }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="relative group"
              >
                {/* Animated Gradient Border - Like StatsBar */}
                <div className="relative w-full rounded-xl p-[1.5px] overflow-hidden">
                  <div
                    className="absolute inset-0 rounded-xl blur-[6px] opacity-70 group-hover:opacity-100 transition duration-300"
                    style={{
                      background: `conic-gradient(from 0deg, #751f8c, #b665f2, #ec4899, #751f8c)`,
                      animation: "spin 6s linear infinite",
                    }}
                  />

                  {/* Inner Card */}
                  <div className="relative bg-gradient-to-br from-gray-900/90 to-black/90 rounded-xl p-6 text-center border border-white/10 backdrop-blur-md transition-all duration-300">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mx-auto mb-3`}
                    >
                      <item.icon className="text-white text-xl" />
                    </div>
                    <div className="text-2xl font-bold text-white">
                      {item.value}
                    </div>
                    <div className="text-xs text-gray-400 mt-1">
                      {item.label}
                    </div>

                    {/* Progress Bar Animation */}
                    <div className="w-full h-0.5 bg-white/10 rounded-full mt-3 overflow-hidden">
                      <motion.div
                        className={`h-full bg-gradient-to-r ${item.gradient} rounded-full`}
                        initial={{ width: "0%" }}
                        animate={{ width: isInView ? "100%" : "0%" }}
                        transition={{ duration: 1, delay: 0.5 + idx * 0.1 }}
                      />
                    </div>
                  </div>
                </div>

                <style jsx>{`
                  @keyframes spin {
                    0% {
                      transform: rotate(0deg);
                    }
                    100% {
                      transform: rotate(360deg);
                    }
                  }
                `}</style>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
