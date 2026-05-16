"use client";

import Link from "next/link";
import { Stars } from "../components/Stars";
import { useState, useEffect } from "react";

export default function ServicesListPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      name: "Business / Company Website",
      path: "/services/business",
      icon: "fa-building",
      gradient: "from-cyan-500 to-blue-600",
      desc: "Establish your online presence and attract more customers globally",
      features: ["Home Page", "About Us", "Services", "Contact Form"],
    },
    {
      name: "E-Commerce Website",
      path: "/services/ecommerce",
      icon: "fa-cart-shopping",
      gradient: "from-pink-500 to-rose-600",
      desc: "Sell your products worldwide with a secure online store",
      features: [
        "Product Listing",
        "Cart System",
        "Payment Gateway",
        "Order Tracking",
      ],
    },
    {
      name: "Landing Page",
      path: "/services/landing",
      icon: "fa-bullseye",
      gradient: "from-orange-500 to-red-600",
      desc: "Convert visitors into paying customers with high-performing pages",
      features: ["Single Page", "CTA Buttons", "Lead Form", "Analytics Ready"],
    },
    {
      name: "Portfolio Website",
      path: "/services/portfolio",
      icon: "fa-user-astronaut",
      gradient: "from-purple-600 to-indigo-600",
      desc: "Showcase your work professionally and attract global clients",
      features: [
        "Projects Showcase",
        "Skills Section",
        "Contact Form",
        "Resume Download",
      ],
    },
    {
      name: "Blog / Content Website",
      path: "/services/blog",
      icon: "fa-blog",
      gradient: "from-emerald-500 to-teal-600",
      desc: "Grow your audience and rank on Google with SEO-friendly blogs",
      features: ["Articles", "Categories", "Comments", "SEO Optimized"],
    },
    {
      name: "Booking / Appointment Website",
      path: "/services/booking",
      icon: "fa-calendar-check",
      gradient: "from-blue-500 to-cyan-600",
      desc: "Allow customers to book appointments easily online",
      features: [
        "Calendar",
        "Booking System",
        "Email Confirmation",
        "Availability Management",
      ],
    },
    {
      name: "Education / LMS Website",
      path: "/services/lms",
      icon: "fa-graduation-cap",
      gradient: "from-teal-500 to-emerald-600",
      desc: "Create and sell online courses with a powerful learning platform",
      features: [
        "Courses",
        "Video Lessons",
        "Student Dashboard",
        "Quiz System",
      ],
    },
    {
      name: "Real Estate Website",
      path: "/services/real-estate",
      icon: "fa-home",
      gradient: "from-red-500 to-orange-600",
      desc: "Showcase properties with advanced search and attract serious buyers",
      features: [
        "Property Listings",
        "Filters",
        "Map Integration",
        "Agent Profiles",
      ],
    },
    {
      name: "Restaurant / Food Website",
      path: "/services/restaurant",
      icon: "fa-utensils",
      gradient: "from-orange-500 to-amber-600",
      desc: "Increase orders with a modern and mobile-friendly website",
      features: [
        "Menu Display",
        "Online Order",
        "Table Reservation",
        "Location Map",
      ],
    },
    {
      name: "SaaS / Web App",
      path: "/services/saas",
      icon: "fa-cloud",
      gradient: "from-purple-500 to-pink-600",
      desc: "Build scalable web applications with secure backend systems",
      features: ["User Login", "Dashboard", "API Integration", "Subscription"],
    },
    {
      name: "Membership Website",
      path: "/services/membership",
      icon: "fa-users",
      gradient: "from-cyan-500 to-blue-600",
      desc: "Monetize your content with membership-based platforms",
      features: [
        "User Login",
        "Paid Access",
        "Subscription Plans",
        "Member Dashboard",
      ],
    },
  ];

  return (
    <section className="relative min-h-screen py-32 overflow-hidden">
      {/* Black Background */}
      <div className="absolute inset-0 bg-black" />

      {/* Stars Component */}
      <Stars />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="inline-flex items-center gap-2 bg-purple-600/10 backdrop-blur-sm px-4 py-2 rounded-full mb-4 border border-purple-500/20">
            <i className="fas fa-globe text-purple-400 text-sm"></i>
            <span className="text-sm font-medium text-purple-300">
              What I Build
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
            All Services
          </h1>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Choose the perfect website for your business needs. Each project is
            built with attention to detail, performance, and user experience.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <Link href={service.path} key={idx}>
              <div
                className={`group bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/10 cursor-pointer ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: `${idx * 50}ms` }}
              >
                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <i className={`fas ${service.icon} text-xl text-white`}></i>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                  {service.name}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm mb-3">{service.desc}</p>

                {/* Features Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {service.features.slice(0, 3).map((feature, i) => (
                    <span
                      key={i}
                      className="text-[10px] px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-gray-400"
                    >
                      {feature}
                    </span>
                  ))}
                  {service.features.length > 3 && (
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/5 text-gray-500">
                      +{service.features.length - 3}
                    </span>
                  )}
                </div>

                {/* Learn More Link */}
                <div className="flex items-center gap-2 text-purple-400 text-sm group-hover:gap-3 transition-all">
                  <span>Learn More</span>
                  <i className="fas fa-arrow-right text-xs group-hover:translate-x-1 transition-transform"></i>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className={`text-center mt-12 transition-all duration-700 delay-600 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="inline-flex items-center gap-4 bg-gradient-to-r from-purple-900/20 to-black/40 backdrop-blur-sm px-6 py-3 rounded-full border border-purple-500/30">
            <i className="fas fa-question-circle text-purple-400"></i>
            <span className="text-gray-300 text-sm">
              Need a custom solution?
            </span>
            <Link href="/contact">
              <button className="px-4 py-1.5 rounded-full bg-purple-600/20 text-purple-300 text-sm hover:bg-purple-600/40 transition-all">
                Contact Me
              </button>
            </Link>
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
