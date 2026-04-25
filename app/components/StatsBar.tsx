"use client";

import { useEffect, useState, useRef } from "react";
import { Stars } from "./Stars";

export default function StatsBar() {
  const [counts, setCounts] = useState([0, 0, 0]);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const stats = [
    {
      id: 1,
      label: "Projects Completed",
      value: 10,
      icon: "fa-code",
      suffix: "+",
      description: "Successfully Delivered",
      color: "from-purple-600 to-purple-800",
    },
    {
      id: 2,
      label: "Technologies",
      value: 6,
      icon: "fa-layer-group",
      suffix: "+",
      description: "Tech Stack Mastered",
      color: "from-purple-500 to-indigo-600",
    },
    {
      id: 3,
      label: "Happy Clients",
      value: 5,
      icon: "fa-smile",
      suffix: "+",
      description: "Worldwide",
      color: "from-pink-500 to-purple-600",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          stats.forEach((stat, index) => {
            let start = 0;
            const end = stat.value;
            const timer = setInterval(() => {
              start = Math.min(start + 1, end);
              setCounts((prev) => {
                const newCounts = [...prev];
                newCounts[index] = start;
                return newCounts;
              });
              if (start >= end) clearInterval(timer);
            }, 100);
          });
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-12 overflow-hidden">
      {/* Dark Background */}
      <div className="absolute inset-0 bg-black" />

      {/* Stars Component */}
      <Stars />

      {/* Purple Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-950/20 via-transparent to-purple-950/20 pointer-events-none" />

      <div className="relative z-10 max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - Smaller */}
        <div
          className={`text-center mb-8 transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full mb-3 border border-white/20">
            <i className="fas fa-chart-line text-purple-400 text-xs"></i>
            <span className="text-xs font-medium text-white/90">
              Trust & Quality
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
            My Achievements
          </h2>
          <p className="text-gray-400 text-sm mt-1">
            Numbers that define my journey
          </p>
        </div>

        {/* Stats Grid - Wider Cards, Less Height */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={stat.id}
              className={`group transition-all duration-700 delay-${index * 200} ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              } hover:transform hover:-translate-y-1`}
            >
              {/* Card with White Border - Compact Height */}
              <div className="relative bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-sm rounded-xl p-5 border-2 border-white/20 hover:border-white/50 transition-all duration-300 shadow-xl">
                {/* Inner Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-transparent rounded-xl pointer-events-none" />

                {/* Icon - Smaller */}
                <div className="relative inline-flex mb-3">
                  <div className="absolute inset-0 rounded-full bg-white/10 animate-ping opacity-50"></div>
                  <div
                    className={`relative w-14 h-14 rounded-full bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-lg`}
                  >
                    <i className={`fas ${stat.icon} text-xl text-white`}></i>
                  </div>
                </div>

                {/* Counter - Smaller */}
                <div className="mb-1">
                  <span className="text-3xl md:text-4xl font-bold text-white">
                    {isVisible ? counts[index] : 0}
                  </span>
                  <span className="text-2xl md:text-3xl font-bold text-purple-400">
                    {stat.suffix}
                  </span>
                </div>

                {/* Label - Smaller */}
                <h3 className="text-base font-semibold text-white mb-1">
                  {stat.label}
                </h3>

                {/* Description - Smaller */}
                <p className="text-gray-400 mb-3 text-xs">{stat.description}</p>

                {/* White Progress Bar */}
                <div className="w-full h-1 bg-gray-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-white to-purple-300 rounded-full transition-all duration-1000"
                    style={{ width: isVisible ? "100%" : "0%" }}
                  />
                </div>

                {/* Bottom Decorative Line */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent group-hover:w-3/4 transition-all duration-300" />
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badge - Smaller */}
        <div
          className={`mt-8 text-center transition-all duration-700 delay-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <div className="inline-flex items-center gap-3 bg-black/50 backdrop-blur-sm px-5 py-2 rounded-full border border-white/20 hover:border-white/50 transition-all duration-300">
            <i className="fas fa-shield-alt text-purple-400 text-sm"></i>
            <span className="text-gray-300 text-sm font-medium">
              100% Client Satisfaction
            </span>
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <i key={i} className="fas fa-star text-yellow-500 text-xs"></i>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
