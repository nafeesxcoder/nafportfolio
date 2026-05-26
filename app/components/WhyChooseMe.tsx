"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Stars } from "./Stars";
import {
  FiZap,
  FiSmartphone,
  FiCode,
  FiShield,
  FiHeadphones,
  FiCheckCircle,
  FiStar,
  FiGlobe,
  FiAward,
} from "react-icons/fi";
import { FaRocket } from "react-icons/fa";
import { IoDiamondOutline } from "react-icons/io5";

export default function WhyChooseMe() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const features = [
    {
      id: 1,
      title: "Lightning Fast Delivery",
      icon: FiZap,
      color: "#f59e0b",
      gradient: "from-amber-500 to-orange-600",
      description: "Timely project completion without compromising quality",
      benefits: [
        "Agile development methodology",
        "Regular progress updates",
        "On-time delivery guarantee",
        "48-hour bug fixing",
      ],
    },
    {
      id: 2,
      title: "100% Responsive",
      icon: FiSmartphone,
      color: "#10b981",
      gradient: "from-emerald-500 to-teal-600",
      description: "Perfect display on all devices - mobile, tablet, desktop",
      benefits: [
        "Mobile-first approach",
        "Cross-browser compatible",
        "Fluid layouts",
        "Touch-friendly",
      ],
    },
    {
      id: 3,
      title: "Clean & Scalable Code",
      icon: FiCode,
      color: "#8b5cf6",
      gradient: "from-purple-600 to-indigo-600",
      description: "Well-structured, maintainable, and future-ready code",
      benefits: [
        "Modular architecture",
        "SEO-friendly structure",
        "Easy to scale",
        "Documentation included",
      ],
    },
    {
      id: 4,
      title: "Quality Assurance",
      icon: FiShield,
      color: "#3b82f6",
      gradient: "from-blue-500 to-cyan-600",
      description: "Rigorous testing for bug-free performance",
      benefits: [
        "Unit & integration tests",
        "Cross-device testing",
        "Performance optimized",
        "Security best practices",
      ],
    },
    {
      id: 5,
      title: "24/7 Support",
      icon: FiHeadphones,
      color: "#ec4899",
      gradient: "from-pink-500 to-rose-600",
      description: "Round-the-clock technical assistance",
      benefits: [
        "Fast response (< 4 hours)",
        "Dedicated support channel",
        "Post-launch maintenance",
        "Free training sessions",
      ],
    },
    {
      id: 6,
      title: "Best Value",
      icon: IoDiamondOutline,
      color: "#06b6d4",
      gradient: "from-cyan-500 to-blue-600",
      description: "Premium quality at competitive prices",
      benefits: [
        "No hidden costs",
        "Flexible payments",
        "Money-back guarantee",
        "Free 3 months support",
      ],
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section ref={sectionRef} className="relative py-20 overflow-hidden">
      {/* Premium Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/10 to-black" />

      {/* Animated Stars Layer */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-0.5 h-0.5 bg-white/30 rounded-full"
            initial={{
              x: Math.random() * 100 + "%",
              y: Math.random() * 100 + "%",
              opacity: 0,
            }}
            animate={{
              opacity: [0, 0.5, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <Stars />

      {/* Animated Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-pink-600/10 rounded-full blur-3xl animate-pulse delay-1000" />

      {/* Moving Gradient Lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-pink-500/20 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Premium Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 backdrop-blur-sm mb-4">
            <FaRocket className="w-3 h-3 text-purple-400" />
            <span className="text-xs font-semibold tracking-wider text-purple-300 uppercase">
              Why Choose Me
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            <span className="bg-gradient-to-r from-white via-purple-300 to-white bg-clip-text text-transparent">
              Trusted by
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Global Clients
            </span>
          </h2>

          <p className="text-gray-400 text-sm md:text-base mt-3 max-w-2xl mx-auto">
            Here's why international clients choose to work with me
          </p>
        </motion.div>

        {/* Features Grid - With Animated Gradient Border */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              variants={cardVariants}
              transition={{ duration: 0.4 }}
              onMouseEnter={() => setHoveredId(feature.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group"
            >
              {/* 🔥 Animated Gradient Border - Same as StatsBar */}
              <div className="relative w-full rounded-xl p-[1.5px] group overflow-hidden">
                <div
                  className="absolute inset-0 rounded-xl blur-[6px] opacity-70 group-hover:opacity-100 transition duration-300"
                  style={{
                    background: `conic-gradient(from 0deg, #751f8c, #b665f2, #ec4899, #751f8c)`,
                    animation: "spin 6s linear infinite",
                  }}
                />

                {/* Inner Card */}
                <div className="relative bg-gradient-to-br from-gray-900/90 to-black/90 rounded-xl p-4 border border-white/10 backdrop-blur-md transition-all duration-300 h-full">
                  {/* Top Gradient Line */}
                  <motion.div
                    className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${feature.gradient}`}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: hoveredId === feature.id ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Icon with Glow Effect */}
                  <div className="relative mb-3">
                    <motion.div
                      className={`absolute -inset-1.5 bg-gradient-to-r ${feature.gradient} rounded-lg blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-500`}
                      animate={{ opacity: hoveredId === feature.id ? 0.5 : 0 }}
                    />
                    <div
                      className={`relative w-12 h-12 rounded-lg bg-gradient-to-br ${feature.gradient} flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300`}
                    >
                      <feature.icon className="text-white text-xl" />
                    </div>

                    {/* Floating Star */}
                    <motion.div
                      className="absolute -top-1.5 -right-1.5 w-3 h-3"
                      animate={{
                        rotate: [0, 360],
                        scale: [1, 1.2, 1],
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <FiStar className="text-yellow-500 fill-yellow-500 text-xs" />
                    </motion.div>
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-bold text-white mb-1 group-hover:text-purple-300 transition-colors">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-xs mb-3 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Benefits List */}
                  <div className="space-y-1.5">
                    {feature.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-start gap-1.5">
                        <FiCheckCircle
                          className="text-[10px] mt-0.5 flex-shrink-0"
                          style={{ color: feature.color }}
                        />
                        <span className="text-gray-300 text-[11px] leading-relaxed">
                          {benefit}
                        </span>
                      </div>
                    ))}
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
        </motion.div>

        {/* Trust Badge Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 flex flex-wrap justify-center gap-3"
        >
          {[
            {
              icon: FiAward,
              label: "100% Client Satisfaction",
              color: "text-yellow-500",
            },
            {
              icon: FiCode,
              label: "35+ Projects Delivered",
              color: "text-purple-400",
            },
            {
              icon: FiGlobe,
              label: "Global Client Base",
              color: "text-cyan-400",
            },
          ].map((badge, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.03, y: -2 }}
              className="flex items-center gap-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm px-4 py-1.5 rounded-full border border-purple-500/30 hover:border-purple-500/60 transition-all duration-300"
            >
              <badge.icon className={`w-3.5 h-3.5 ${badge.color}`} />
              <span className="text-gray-300 text-xs font-medium">
                {badge.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
