"use client";

import { useState, useRef, useEffect } from "react";
import { Stars } from "./Stars";
import Link from "next/link";

export default function ServicesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const sectionRef = useRef(null);

  const services = [
    {
      id: 1,
      title: "Business / Company Website",
      category: "For Local Businesses & Startups",
      icon: "fa-building",
      color: "#06b6d4",
      gradient: "from-cyan-500 to-blue-600",
      targetAudience: "Local businesses, Agencies, Startups",
      features: ["Home page", "About", "Services", "Contact form"],
      description:
        "Establish your online presence and attract more customers globally",
      price: "Starting from $499",
      delivery: "2-3 weeks",
      image: "/business.png",
    },
    {
      id: 2,
      title: "E-Commerce Website",
      category: "High Paying Category 💰",
      icon: "fa-cart-shopping",
      color: "#ec4899",
      gradient: "from-pink-500 to-rose-600",
      targetAudience: "Online stores, Product sellers",
      features: [
        "Product listing",
        "Cart system",
        "Payment gateway",
        "Order tracking",
      ],
      description:
        "Sell your products worldwide with a secure and scalable online store",
      price: "Starting from $999",
      delivery: "4-6 weeks",
      image: "/ecommerce.png",
    },
    {
      id: 3,
      title: "Landing Page",
      category: "Marketing Focused Site 🎯",
      icon: "fa-bullseye",
      color: "#f59e0b",
      gradient: "from-orange-500 to-red-600",
      targetAudience: "Ads campaigns, Product launches",
      features: ["Single page", "CTA buttons", "Lead form", "Analytics ready"],
      description:
        "Convert visitors into paying customers with high-performing landing pages",
      price: "Starting from $199",
      delivery: "1-2 weeks",
      image: "/landing-page.png",
    },
    {
      id: 4,
      title: "Portfolio Website",
      category: "For Freelancers & Creatives",
      icon: "fa-user-astronaut",
      color: "#8b5cf6",
      gradient: "from-purple-600 to-indigo-600",
      targetAudience: "Developers, Designers, Freelancers",
      features: [
        "Projects showcase",
        "Skills section",
        "Contact form",
        "Blog optional",
      ],
      description:
        "Showcase your work professionally and attract global clients",
      price: "Starting from $349",
      delivery: "2-3 weeks",
      image: "/portfolio.png",
    },
    {
      id: 5,
      title: "Blog / Content Website",
      category: "SEO Based Income 📝",
      icon: "fa-blog",
      color: "#10b981",
      gradient: "from-emerald-500 to-teal-600",
      targetAudience: "Bloggers, Content creators",
      features: ["Articles", "Categories", "Comments", "SEO optimized"],
      description:
        "Grow your audience and rank on Google with SEO-friendly blogs",
      price: "Starting from $299",
      delivery: "2-3 weeks",
      image: "/services/blog.png",
    },
    {
      id: 6,
      title: "Booking / Appointment Website",
      category: "High Demand Real-world Use Case 📅",
      icon: "fa-calendar-check",
      color: "#3b82f6",
      gradient: "from-blue-500 to-cyan-600",
      targetAudience: "Salons, Doctors, Coaches",
      features: [
        "Calendar",
        "Booking system",
        "Email/SMS confirmation",
        "Availability management",
      ],
      description: "Allow customers to book appointments easily online",
      price: "Starting from $449",
      delivery: "3-4 weeks",
      image: "/services/booking.png",
    },
    {
      id: 7,
      title: "Education / LMS Website",
      category: "Trending Niche 🎓",
      icon: "fa-graduation-cap",
      color: "#14b8a6",
      gradient: "from-teal-500 to-emerald-600",
      targetAudience: "Coaching centers, Online teachers",
      features: [
        "Courses",
        "Video lessons",
        "Student dashboard",
        "Quiz system",
      ],
      description:
        "Create and sell online courses with a powerful learning platform",
      price: "Starting from $799",
      delivery: "4-6 weeks",
      image: "/services/lms.png",
    },
    {
      id: 8,
      title: "Real Estate Website",
      category: "Popular Among Foreign Clients 🏢",
      icon: "fa-home",
      color: "#ef4444",
      gradient: "from-red-500 to-orange-600",
      targetAudience: "Property dealers, Real estate agents",
      features: [
        "Property listings",
        "Advanced filters",
        "Map integration",
        "Agent dashboard",
      ],
      description:
        "Showcase properties with advanced search and attract serious buyers",
      price: "Starting from $649",
      delivery: "4-5 weeks",
      image: "/services/real-estate.png",
    },
    {
      id: 9,
      title: "Restaurant / Food Website",
      category: "Easy + Fast Projects 🍔",
      icon: "fa-utensils",
      color: "#f97316",
      gradient: "from-orange-500 to-amber-600",
      targetAudience: "Restaurants, Cafes, Food trucks",
      features: [
        "Menu display",
        "Online ordering",
        "Location map",
        "Reservation system",
      ],
      description: "Increase orders with a modern and mobile-friendly website",
      price: "Starting from $349",
      delivery: "2-3 weeks",
      image: "/services/restaurant.png",
    },
    {
      id: 10,
      title: "SaaS / Web App",
      category: "Premium Level (High Price) 💎",
      icon: "fa-cloud",
      color: "#a855f7",
      gradient: "from-purple-500 to-pink-600",
      targetAudience: "Startups, Entrepreneurs",
      features: [
        "Login/Signup",
        "User dashboard",
        "API integrations",
        "Subscription system",
      ],
      description:
        "Build scalable web applications with secure backend systems",
      price: "Starting from $1499",
      delivery: "6-10 weeks",
      image: "/services/saas.png",
    },
    {
      id: 11,
      title: "Membership Website",
      category: "Recurring Income Model 🔐",
      icon: "fa-users",
      color: "#06b6d4",
      gradient: "from-cyan-500 to-blue-600",
      targetAudience: "Content creators, Coaches",
      features: [
        "User login",
        "Paid access",
        "Subscription plans",
        "Member dashboard",
      ],
      description: "Monetize your content with membership-based platforms",
      price: "Starting from $899",
      delivery: "4-5 weeks",
      image: "/services/membership.png",
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

  // Auto slide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % services.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [services.length]);

  const currentService = services[currentSlide];

  return (
    <section ref={sectionRef} className="relative py-20 overflow-hidden">
      {/* Black Background */}
      <div className="absolute inset-0 bg-black" />
      <Stars />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-12 transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <div className="inline-flex items-center gap-2 bg-purple-600/10 backdrop-blur-sm px-4 py-2 rounded-full mb-4 border border-purple-500/20">
            <i className="fas fa-globe text-purple-400 text-sm"></i>
            <span className="text-sm font-medium text-purple-300">
              What I Build
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
            All Types of Websites
          </h2>
          <p className="text-gray-500 mt-2 text-sm max-w-2xl mx-auto">
            From simple landing pages to complex web applications
          </p>
        </div>

        {/* Slider Container */}
        <div className="relative bg-gradient-to-br from-purple-900/20 to-black/40 backdrop-blur-sm rounded-2xl border border-purple-500/20 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Side - Image/Icon */}
            <div className="relative h-[400px] lg:h-[500px] overflow-hidden bg-gradient-to-br from-purple-900/30 to-black/50">
              <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent z-10" />
              <div className="w-full h-full flex items-center justify-center">
                <div
                  className={`w-48 h-48 rounded-3xl bg-gradient-to-br ${currentService.gradient} flex items-center justify-center shadow-2xl transform rotate-6 group-hover:rotate-0 transition-transform duration-500`}
                >
                  <i
                    className={`fas ${currentService.icon} text-7xl text-white`}
                  ></i>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-10" />
              <div className="absolute top-10 right-10 w-32 h-32 bg-purple-600/20 rounded-full blur-3xl" />
            </div>

            {/* Right Side - Content */}
            <div className="p-8 lg:p-10">
              {/* Category Badge */}
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full mb-4 border border-white/20">
                <i
                  className={`fas fa-tag text-xs`}
                  style={{ color: currentService.color }}
                ></i>
                <span className="text-xs font-medium text-gray-300">
                  {currentService.category}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                {currentService.title}
              </h3>

              {/* Description */}
              <p className="text-gray-300 text-base mb-6 leading-relaxed">
                {currentService.description}
              </p>

              {/* Target Audience */}
              <div className="flex items-start gap-3 mb-4 p-3 rounded-xl bg-white/5 border border-white/10">
                <i
                  className="fas fa-users text-sm mt-0.5"
                  style={{ color: currentService.color }}
                ></i>
                <div>
                  <span className="text-xs text-gray-500">For</span>
                  <p className="text-sm text-gray-300">
                    {currentService.targetAudience}
                  </p>
                </div>
              </div>

              {/* Features */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                  <i
                    className="fas fa-list-check text-xs"
                    style={{ color: currentService.color }}
                  ></i>
                  Key Features
                </h4>
                <div className="flex flex-wrap gap-2">
                  {currentService.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              {/* Price & Delivery */}
              <div className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10 mb-6">
                <div>
                  <span className="text-xs text-gray-500">Starting from</span>
                  <p className="text-xl font-bold text-white">
                    {currentService.price}
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-xs text-gray-500">Delivery</span>
                  <p
                    className="text-lg font-semibold"
                    style={{ color: currentService.color }}
                  >
                    {currentService.delivery}
                  </p>
                </div>
              </div>

              {/* CTA Button */}
              <Link href="/contact">
                <button className="w-full px-6 py-3 rounded-xl text-base font-medium bg-gradient-to-r from-purple-600 to-purple-800 text-white hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 flex items-center justify-center gap-2 group">
                  <span>Get This Website</span>
                  <i className="fas fa-arrow-right text-sm group-hover:translate-x-1 transition-transform"></i>
                </button>
              </Link>
            </div>
          </div>

          {/* Slider Dots */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-20 flex-wrap justify-center px-4">
            {services.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`transition-all duration-300 rounded-full ${
                  currentSlide === idx
                    ? "w-8 h-2 bg-purple-500"
                    : "w-2 h-2 bg-white/30 hover:bg-white/50"
                }`}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={() =>
              setCurrentSlide(
                (prev) => (prev - 1 + services.length) % services.length,
              )
            }
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 text-white hover:bg-purple-600/50 transition-all duration-300 z-20 flex items-center justify-center"
          >
            <i className="fas fa-chevron-left"></i>
          </button>
          <button
            onClick={() =>
              setCurrentSlide((prev) => (prev + 1) % services.length)
            }
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 text-white hover:bg-purple-600/50 transition-all duration-300 z-20 flex items-center justify-center"
          >
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>

        {/* Quick Navigation Icons */}
        <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-11 gap-2 mt-6">
          {services.map((service, idx) => (
            <button
              key={service.id}
              onClick={() => setCurrentSlide(idx)}
              className={`p-2 rounded-lg text-center transition-all duration-300 ${
                currentSlide === idx
                  ? "bg-purple-600/20 border border-purple-500/50"
                  : "bg-white/5 border border-white/10 hover:bg-white/10"
              }`}
            >
              <i
                className={`fas ${service.icon} text-base ${
                  currentSlide === idx ? "text-purple-400" : "text-gray-500"
                }`}
              ></i>
              <p
                className={`text-[10px] mt-1 hidden lg:block ${
                  currentSlide === idx ? "text-purple-400" : "text-gray-500"
                }`}
              >
                {service.title.split(" ")[0]}
              </p>
            </button>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .grid > div {
          animation: slideIn 0.5s ease-out;
        }
      `}</style>
    </section>
  );
}
