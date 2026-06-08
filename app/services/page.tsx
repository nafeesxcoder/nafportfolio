"use client";

import Link from "next/link";
import { Stars } from "../components/Stars";
import { useState, useEffect } from "react";
import {
  FaBuilding,
  FaShoppingCart,
  FaBullseye,
  FaUserAstronaut,
  FaBlog,
  FaCalendarCheck,
  FaGraduationCap,
  FaHome,
  FaUtensils,
  FaCloud,
  FaUsers,
  FaArrowRight,
  FaGlobe,
  FaCheckCircle,
  FaRocket,
  FaShieldAlt,
  FaHeadset,
} from "react-icons/fa";

export default function ServicesListPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      name: "Business / Company Website",
      path: "/services/business",
      icon: FaBuilding,
      gradient: "from-cyan-500 to-blue-600",
      color: "#06b6d4",
      desc: "Establish your online presence and attract customers worldwide",
      features: [
        "Home Page",
        "About Us",
        "Services",
        "Contact Form",
        "SEO Ready",
        "Mobile Responsive",
      ],
      globalDesc:
        "Professional business websites for companies in USA, UK, Canada, Australia, UAE & Europe",
      price: "$499",
    },
    {
      name: "E-Commerce Website",
      path: "/services/ecommerce",
      icon: FaShoppingCart,
      gradient: "from-pink-500 to-rose-600",
      color: "#ec4899",
      desc: "Sell your products worldwide with a secure online store",
      features: [
        "Product Listing",
        "Cart System",
        "Payment Gateway",
        "Order Tracking",
        "Inventory Management",
        "Wishlist",
      ],
      globalDesc:
        "Global e-commerce solutions with multi-currency support for international sellers",
      price: "$999",
    },
    {
      name: "Landing Page",
      path: "/services/landing",
      icon: FaBullseye,
      gradient: "from-orange-500 to-red-600",
      color: "#f59e0b",
      desc: "Convert visitors into paying customers with high-performing pages",
      features: [
        "Single Page",
        "CTA Buttons",
        "Lead Form",
        "Analytics Ready",
        "A/B Testing",
        "Fast Loading",
      ],
      globalDesc: "High-converting landing pages for global campaigns",
      price: "$199",
    },
    {
      name: "Portfolio Website",
      path: "/services/portfolio",
      icon: FaUserAstronaut,
      gradient: "from-purple-600 to-indigo-600",
      color: "#8b5cf6",
      desc: "Showcase your work professionally and attract global clients",
      features: [
        "Projects Showcase",
        "Skills Section",
        "Contact Form",
        "Resume Download",
        "Blog Optional",
        "Testimonials",
      ],
      globalDesc: "Stunning portfolios that attract international clients",
      price: "$349",
    },
    {
      name: "Blog / Content Website",
      path: "/services/blog",
      icon: FaBlog,
      gradient: "from-emerald-500 to-teal-600",
      color: "#10b981",
      desc: "Grow your audience and rank on Google with SEO-friendly blogs",
      features: [
        "Articles",
        "Categories",
        "Comments",
        "SEO Optimized",
        "Newsletter",
        "Social Sharing",
      ],
      globalDesc: "SEO-optimized blogs that rank globally",
      price: "$299",
    },
    {
      name: "Booking / Appointment Website",
      path: "/services/booking",
      icon: FaCalendarCheck,
      gradient: "from-blue-500 to-cyan-600",
      color: "#3b82f6",
      desc: "Allow customers to book appointments easily online",
      features: [
        "Calendar",
        "Booking System",
        "Email Confirmation",
        "Availability Management",
        "Payment Integration",
        "Reminders",
      ],
      globalDesc: "24/7 booking systems for global clients across time zones",
      price: "$449",
    },
    {
      name: "Education / LMS Website",
      path: "/services/lms",
      icon: FaGraduationCap,
      gradient: "from-teal-500 to-emerald-600",
      color: "#14b8a6",
      desc: "Create and sell online courses with a powerful learning platform",
      features: [
        "Courses",
        "Video Lessons",
        "Student Dashboard",
        "Quiz System",
        "Certificates",
        "Progress Tracking",
      ],
      globalDesc: "LMS platforms for educators worldwide",
      price: "$799",
    },
    {
      name: "Real Estate Website",
      path: "/services/real-estate",
      icon: FaHome,
      gradient: "from-red-500 to-orange-600",
      color: "#ef4444",
      desc: "Showcase properties with advanced search and attract serious buyers",
      features: [
        "Property Listings",
        "Filters",
        "Map Integration",
        "Agent Profiles",
        "Virtual Tours",
        "Mortgage Calculator",
      ],
      globalDesc:
        "Real estate portals for agents in USA, UK, Canada & Australia",
      price: "$649",
    },
    {
      name: "Restaurant / Food Website",
      path: "/services/restaurant",
      icon: FaUtensils,
      gradient: "from-orange-500 to-amber-600",
      color: "#f97316",
      desc: "Increase orders with a modern and mobile-friendly website",
      features: [
        "Menu Display",
        "Online Order",
        "Table Reservation",
        "Location Map",
        "Reviews",
        "Delivery Integration",
      ],
      globalDesc: "Restaurant websites with online ordering for global chains",
      price: "$349",
    },
    {
      name: "SaaS / Web App",
      path: "/services/saas",
      icon: FaCloud,
      gradient: "from-purple-500 to-pink-600",
      color: "#a855f7",
      desc: "Build scalable web applications with secure backend systems",
      features: [
        "User Login",
        "Dashboard",
        "API Integration",
        "Subscription",
        "Admin Panel",
        "Analytics",
      ],
      globalDesc: "Scalable SaaS platforms for startups worldwide",
      price: "$1499+",
    },
    {
      name: "Membership Website",
      path: "/services/membership",
      icon: FaUsers,
      gradient: "from-cyan-500 to-blue-600",
      color: "#06b6d4",
      desc: "Monetize your content with membership-based platforms",
      features: [
        "User Login",
        "Paid Access",
        "Subscription Plans",
        "Member Dashboard",
        "Content Dripping",
        "Community Forums",
      ],
      globalDesc: "Membership sites with global payment support",
      price: "$899",
    },
  ];

  const countries = [
    { name: "USA", flag: "🇺🇸", code: "US" },
    { name: "UK", flag: "🇬🇧", code: "GB" },
    { name: "Canada", flag: "🇨🇦", code: "CA" },
    { name: "Australia", flag: "🇦🇺", code: "AU" },
    { name: "UAE", flag: "🇦🇪", code: "AE" },
    { name: "Germany", flag: "🇩🇪", code: "DE" },
    { name: "France", flag: "🇫🇷", code: "FR" },
    { name: "Singapore", flag: "🇸🇬", code: "SG" },
  ];

  const stats = [
    { value: "15+", label: "Countries Served", icon: FaGlobe },
    { value: "50+", label: "International Clients", icon: FaUsers },
    { value: "24/7", label: "Global Support", icon: FaHeadset },
    { value: "100%", label: "Client Satisfaction", icon: FaCheckCircle },
  ];

  return (
    <section className="relative min-h-screen py-32 overflow-hidden">
      {/* Black Background */}
      <div className="absolute inset-0 bg-black" />
      <Stars />
      <div className="absolute inset-0 bg-gradient-to-b from-purple-950/10 via-transparent to-purple-950/10" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-12 transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <div className="inline-flex items-center gap-2 bg-purple-600/10 backdrop-blur-sm px-4 py-2 rounded-full mb-4 border border-purple-500/20">
            <FaGlobe className="text-purple-400 text-sm" />
            <span className="text-sm font-medium text-purple-300">
              Serving Clients Worldwide
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
            Web Development Services
          </h1>
          <p className="text-gray-400 mt-4 max-w-3xl mx-auto">
            From Business Websites to Complex SaaS Platforms — We deliver
            complete web solutions for clients
            <span className="text-purple-400"> worldwide</span> (USA, UK,
            Canada, Australia, UAE, Europe)
          </p>
        </div>

        {/* Countries Banner */}
        <div
          className={`mb-12 p-5 bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-2xl border border-white/10 backdrop-blur-sm transition-all duration-700 delay-100 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <div className="text-center mb-3">
            <span className="text-sm text-purple-300">
              🌍 Trusted by clients in
            </span>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            {countries.map((country) => (
              <div key={country.code} className="flex items-center gap-2 group">
                <span className="text-2xl group-hover:scale-110 transition-transform">
                  {country.flag}
                </span>
                <span className="text-gray-300 text-sm group-hover:text-purple-400 transition-colors">
                  {country.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <Link href={service.path} key={idx}>
              <div
                className={`group bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/10 cursor-pointer h-full ${
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
                  <service.icon className="text-xl text-white" />
                </div>

                {/* Title & Price */}
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors">
                    {service.name}
                  </h3>
                  <span className="text-xs font-semibold text-purple-400 bg-purple-500/20 px-2 py-0.5 rounded-full">
                    {service.price}
                  </span>
                </div>

                {/* Description */}
                <p className="text-gray-400 text-sm mb-2">{service.desc}</p>

                {/* Global Service Hint */}
                <p className="text-purple-400/70 text-xs mb-3 italic flex items-center gap-1">
                  <FaGlobe className="text-[10px]" />
                  {service.globalDesc}
                </p>

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
                  <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Global Reach CTA */}
        <div
          className={`text-center mt-12 transition-all duration-700 delay-500 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <div className="inline-flex items-center gap-4 bg-gradient-to-r from-purple-900/20 to-black/40 backdrop-blur-sm px-6 py-3 rounded-full border border-purple-500/30 hover:border-purple-500/50 transition-all duration-300">
            <FaGlobe className="text-purple-400" />
            <span className="text-gray-300 text-sm">
              Need a custom solution for your country?
            </span>
            <Link href="/contact">
              <button className="px-5 py-1.5 rounded-full bg-gradient-to-r from-purple-600 to-purple-800 text-white text-sm hover:scale-105 transition-all duration-300">
                Contact Us
              </button>
            </Link>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className={`text-center p-5 bg-gradient-to-br from-purple-900/20 to-black/40 rounded-xl border border-white/10 hover:border-purple-500/30 transition-all duration-300 hover:scale-105 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
              style={{ transitionDelay: `${600 + idx * 100}ms` }}
            >
              <stat.icon className="text-3xl text-purple-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">{stat.value}</div>
              <div className="text-xs text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Why Choose Us Section */}
        <div
          className={`mt-12 p-8 bg-gradient-to-br from-purple-900/20 to-black/40 rounded-2xl border border-purple-500/20 transition-all duration-700 delay-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <div className="text-center mb-6">
            <FaRocket className="text-3xl text-purple-400 mx-auto mb-3" />
            <h2 className="text-2xl font-bold text-white">
              Why Choose Unique Web Layer?
            </h2>
            <p className="text-gray-400 text-sm mt-2">
              We deliver quality, speed, and global expertise
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4">
              <FaShieldAlt className="text-2xl text-purple-400 mx-auto mb-2" />
              <h3 className="text-white font-semibold mb-1">
                Quality Assurance
              </h3>
              <p className="text-gray-400 text-xs">
                Pixel-perfect, tested, and optimized code
              </p>
            </div>
            <div className="text-center p-4">
              <FaRocket className="text-2xl text-purple-400 mx-auto mb-2" />
              <h3 className="text-white font-semibold mb-1">Fast Delivery</h3>
              <p className="text-gray-400 text-xs">
                Timely delivery with regular updates
              </p>
            </div>
            <div className="text-center p-4">
              <FaHeadset className="text-2xl text-purple-400 mx-auto mb-2" />
              <h3 className="text-white font-semibold mb-1">24/7 Support</h3>
              <p className="text-gray-400 text-xs">
                Round-the-clock assistance for all clients
              </p>
            </div>
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
        .delay-700 {
          transition-delay: 0.7s;
        }
      `}</style>
    </section>
  );
}
