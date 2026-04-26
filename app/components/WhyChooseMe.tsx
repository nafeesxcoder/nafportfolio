"use client";

import { useState, useRef, useEffect } from "react";
import { Stars } from "./Stars";

export default function WhyChooseMe() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const features = [
    {
      id: 1,
      title: "⚡ Fast Delivery",
      icon: "fa-bolt",
      color: "#f59e0b",
      gradient: "from-amber-500 to-orange-600",
      description: "Timely project completion without compromising quality",
      benefits: [
        "Agile development methodology",
        "Regular progress updates every 3-4 days",
        "On-time delivery guarantee",
        "48-hour bug fixing commitment",
      ],
    },
    {
      id: 2,
      title: "📱 100% Responsive",
      icon: "fa-mobile-alt",
      color: "#10b981",
      gradient: "from-emerald-500 to-teal-600",
      description: "Perfect display on all devices - mobile, tablet, desktop",
      benefits: [
        "Mobile-first approach",
        "Cross-browser compatibility",
        "Fluid layouts & flexible images",
        "Touch-friendly interfaces",
      ],
    },
    {
      id: 3,
      title: "🔧 Clean & Scalable Code",
      icon: "fa-code-branch",
      color: "#8b5cf6",
      gradient: "from-purple-600 to-indigo-600",
      description: "Well-structured, maintainable, and future-ready code",
      benefits: [
        "Modular component architecture",
        "SEO-friendly structure",
        "Easy to scale and modify",
        "Proper documentation included",
      ],
    },
    {
      id: 4,
      title: "🛡️ Quality Assurance",
      icon: "fa-shield-alt",
      color: "#3b82f6",
      gradient: "from-blue-500 to-cyan-600",
      description: "Rigorous testing for bug-free performance",
      benefits: [
        "Unit & integration testing",
        "Cross-device testing",
        "Performance optimization",
        "Security best practices",
      ],
    },
    {
      id: 5,
      title: "💬 24/7 Support",
      icon: "fa-headset",
      color: "#ec4899",
      gradient: "from-pink-500 to-rose-600",
      description: "Round-the-clock technical assistance",
      benefits: [
        "Fast response time (< 4 hours)",
        "Dedicated support channel",
        "Post-launch maintenance",
        "Free training sessions",
      ],
    },
    {
      id: 6,
      title: "💰 Best Value",
      icon: "fa-gem",
      color: "#06b6d4",
      gradient: "from-cyan-500 to-blue-600",
      description: "Premium quality at competitive prices",
      benefits: [
        "No hidden costs",
        "Flexible payment options",
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
            <i className="fas fa-check-circle text-purple-400 text-sm"></i>
            <span className="text-sm font-medium text-purple-300">
              Why Choose Me
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
            Trusted by Global Clients
          </h2>
          <p className="text-gray-500 mt-2 text-sm max-w-2xl mx-auto">
            Here's why international clients choose to work with me
          </p>
        </div>

        {/* Features Grid - 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className={`group transition-all duration-700 delay-${Math.min(index * 100, 500)} ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <div className="relative bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-purple-500/30 transition-all duration-500 hover:transform hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-500/10 h-full">
                {/* Top Gradient Line */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.gradient} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
                />

                {/* Icon */}
                <div className="relative inline-flex mb-4">
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-600/20 to-transparent blur-xl" />
                  <div
                    className={`relative w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300`}
                  >
                    <i className={`fas ${feature.icon} text-xl text-white`}></i>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {feature.description}
                </p>

                {/* Benefits List */}
                <div className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <i
                        className="fas fa-check-circle text-xs mt-0.5 flex-shrink-0"
                        style={{ color: feature.color }}
                      ></i>
                      <span className="text-gray-300 text-xs leading-relaxed">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Bottom Glow */}
                <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 w-32 h-32 bg-purple-600/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badge Row */}
        <div
          className={`mt-12 flex flex-wrap justify-center gap-6 transition-all duration-700 delay-600 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          {/* Client Satisfaction */}
          <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm px-5 py-2 rounded-full border border-white/10">
            <i className="fas fa-star text-yellow-500"></i>
            <span className="text-gray-300 text-sm">
              100% Client Satisfaction
            </span>
          </div>

          {/* Projects Delivered */}
          <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm px-5 py-2 rounded-full border border-white/10">
            <i className="fas fa-code text-purple-400"></i>
            <span className="text-gray-300 text-sm">
              50+ Projects Delivered
            </span>
          </div>

          {/* Global Clients */}
          <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm px-5 py-2 rounded-full border border-white/10">
            <i className="fas fa-globe text-purple-400"></i>
            <span className="text-gray-300 text-sm">Global Client Base</span>
          </div>
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
        .delay-500 {
          transition-delay: 0.5s;
        }
        .delay-600 {
          transition-delay: 0.6s;
        }
      `}</style>
    </section>
  );
}
