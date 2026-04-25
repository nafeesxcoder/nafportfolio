"use client";

import { Stars } from "./Stars";
import Link from "next/link";
import { useState, useEffect } from "react";

interface ServiceDetailProps {
  title: string;
  category: string;
  icon: string;
  color: string;
  gradient: string;
  targetAudience: string[];
  features: string[];
  description: string;
  longDescription: string;
  price: string;
  delivery: string;
  benefits: string[];
  process: string[];
  technologies: string[];
}

export default function ServiceDetail({
  title,
  category,
  icon,
  color,
  gradient,
  targetAudience,
  features,
  description,
  longDescription,
  price,
  delivery,
  benefits,
  process,
  technologies,
}: ServiceDetailProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen py-32 overflow-hidden">
      {/* Black Background */}
      <div className="absolute inset-0 bg-black" />
      <Stars />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-12 transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <div className="inline-flex items-center gap-2 bg-purple-600/10 backdrop-blur-sm px-4 py-2 rounded-full mb-4 border border-purple-500/20">
            <i className={`fas ${icon} text-purple-400 text-sm`}></i>
            <span className="text-sm font-medium text-purple-300">
              {category}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
            {title}
          </h1>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">{description}</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content - Left 2 columns */}
          <div className="lg:col-span-2 space-y-8">
            {/* Long Description */}
            <div
              className={`bg-gradient-to-br from-purple-900/20 to-black/40 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20 transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            >
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <i className="fas fa-info-circle text-purple-400"></i>
                Overview
              </h2>
              <p className="text-gray-300 leading-relaxed">{longDescription}</p>
            </div>

            {/* Features */}
            <div
              className={`bg-gradient-to-br from-purple-900/20 to-black/40 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20 transition-all duration-700 delay-100 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            >
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <i className="fas fa-list-check text-purple-400"></i>
                Key Features
              </h2>
              <div className="grid md:grid-cols-2 gap-3">
                {features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <i
                      className="fas fa-check-circle text-sm mt-0.5"
                      style={{ color }}
                    ></i>
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Process */}
            <div
              className={`bg-gradient-to-br from-purple-900/20 to-black/40 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20 transition-all duration-700 delay-200 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            >
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <i className="fas fa-chart-line text-purple-400"></i>
                Development Process
              </h2>
              <div className="space-y-4">
                {process.map((step, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div
                      className={`w-8 h-8 rounded-full bg-gradient-to-r ${gradient} flex items-center justify-center flex-shrink-0`}
                    >
                      <span className="text-white text-sm font-bold">
                        {idx + 1}
                      </span>
                    </div>
                    <p className="text-gray-300 text-sm pt-1">{step}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div
              className={`bg-gradient-to-br from-purple-900/20 to-black/40 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20 transition-all duration-700 delay-300 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            >
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <i className="fas fa-microchip text-purple-400"></i>
                Technologies Used
              </h2>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar - Right 1 column */}
          <div className="space-y-6">
            {/* Price Card */}
            <div
              className={`bg-gradient-to-br from-purple-900/40 to-black/60 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/30 sticky top-24 transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            >
              <div className="text-center mb-6">
                <div
                  className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center mx-auto mb-4`}
                >
                  <i className={`fas ${icon} text-3xl text-white`}></i>
                </div>
                <h3 className="text-2xl font-bold text-white">{title}</h3>
                <p className="text-gray-400 text-sm mt-1">{category}</p>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center pb-2 border-b border-white/10">
                  <span className="text-gray-400 text-sm">Starting Price</span>
                  <span className="text-2xl font-bold text-white">{price}</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-white/10">
                  <span className="text-gray-400 text-sm">Delivery Time</span>
                  <span className="text-white font-semibold">{delivery}</span>
                </div>
              </div>

              <Link href="/contact">
                <button className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-purple-800 text-white font-semibold hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300">
                  Get This Service
                </button>
              </Link>
            </div>

            {/* Target Audience */}
            <div className="bg-gradient-to-br from-purple-900/20 to-black/40 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20">
              <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                <i className="fas fa-users text-purple-400"></i>
                Perfect For
              </h3>
              <div className="space-y-2">
                {targetAudience.map((audience, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <i
                      className="fas fa-check-circle text-xs"
                      style={{ color }}
                    ></i>
                    <span className="text-gray-300 text-sm">{audience}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div className="bg-gradient-to-br from-purple-900/20 to-black/40 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20">
              <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                <i className="fas fa-gem text-purple-400"></i>
                Key Benefits
              </h3>
              <div className="space-y-2">
                {benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <i className="fas fa-star text-xs" style={{ color }}></i>
                    <span className="text-gray-300 text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
