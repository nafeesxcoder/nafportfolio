"use client";

import { useState, useRef, useEffect } from "react";
import { Stars } from "./Stars";
import Link from "next/link";
import Image from "next/image";

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
      features: [
        "Home page",
        "About",
        "Services",
        "Contact form",
        "SEO Ready",
        "Mobile Responsive",
      ],
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
        "Inventory management",
        "Wishlist",
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
      features: [
        "Single page",
        "CTA buttons",
        "Lead form",
        "Analytics ready",
        "A/B testing",
        "Fast loading",
      ],
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
        "Resume/CV download",
        "Client testimonials",
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
      features: [
        "Articles",
        "Categories",
        "Comments",
        "SEO optimized",
        "Email newsletter",
        "Social sharing",
      ],
      description:
        "Grow your audience and rank on Google with SEO-friendly blogs",
      price: "Starting from $299",
      delivery: "2-3 weeks",
      image: "/blog.png",
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
        "Payment integration",
        "Automated reminders",
      ],
      description: "Allow customers to book appointments easily online",
      price: "Starting from $449",
      delivery: "3-4 weeks",
      image: "/booking.png",
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
        "Certificate generation",
        "Progress tracking",
      ],
      description:
        "Create and sell online courses with a powerful learning platform",
      price: "Starting from $799",
      delivery: "4-6 weeks",
      image: "/lms.png",
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
        "Virtual tours",
        "Mortgage calculator",
      ],
      description:
        "Showcase properties with advanced search and attract serious buyers",
      price: "Starting from $649",
      delivery: "4-5 weeks",
      image: "/real-estate.png",
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
        "Customer reviews",
        "Delivery integration",
      ],
      description: "Increase orders with a modern and mobile-friendly website",
      price: "Starting from $349",
      delivery: "2-3 weeks",
      image: "/restaurant.png",
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
        "Admin panel",
        "Analytics dashboard",
      ],
      description:
        "Build scalable web applications with secure backend systems",
      price: "Starting from $1499",
      delivery: "6-10 weeks",
      image: "/saas.png",
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
        "Content dripping",
        "Community forums",
      ],
      description: "Monetize your content with membership-based platforms",
      price: "Starting from $899",
      delivery: "4-5 weeks",
      image: "/membership.png",
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
    <section
      ref={sectionRef}
      className="relative py-12 lg:py-16 overflow-hidden"
    >
      {/* Black Background */}
      <div className="absolute inset-0 bg-black" />
      <Stars />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - Reduced Margin */}
        <div
          className={`text-center mb-8 transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <div className="inline-flex items-center gap-2 bg-purple-600/10 backdrop-blur-sm px-3 py-1 rounded-full mb-3 border border-purple-500/20">
            <i className="fas fa-globe text-purple-400 text-xs"></i>
            <span className="text-xs font-medium text-purple-300">
              What I Build
            </span>
          </div>
          <h2 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
            All Types of Websites
          </h2>
          <p className="text-gray-400 mt-2 text-xs max-w-2xl mx-auto">
            From simple landing pages to complex web applications
          </p>
        </div>

        {/* Slider Container - Reduced Height */}
        <div className="relative group">
          {/* Main Card */}
          <div className="relative bg-gradient-to-br from-purple-900/20 to-black/40 backdrop-blur-sm rounded-2xl border border-purple-500/20 overflow-hidden shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Left Side - Full Cover Image (Reduced Height) */}
              <div className="relative h-[300px] lg:h-[400px] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10 lg:bg-gradient-to-r" />
                <Image
                  src={currentService.image}
                  alt={currentService.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  priority
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent z-20" />

                {/* Category Badge */}
                <div className="absolute top-4 left-4 z-30">
                  <div className="inline-flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20">
                    <i className="fas fa-crown text-yellow-500 text-[10px]"></i>
                    <span className="text-[10px] font-medium text-white">
                      {currentService.category}
                    </span>
                  </div>
                </div>

                {/* Animated Icon */}
                <div className="absolute bottom-4 right-4 z-30">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${currentService.gradient} flex items-center justify-center shadow-2xl animate-bounce-slow`}
                  >
                    <i
                      className={`fas ${currentService.icon} text-xl text-white`}
                    ></i>
                  </div>
                </div>
              </div>

              {/* Right Side - Content (Reduced Padding) */}
              <div className="p-5 lg:p-6">
                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold mb-2 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                  {currentService.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {currentService.description}
                </p>

                {/* Target Audience */}
                <div className="relative mb-4 p-3 rounded-xl bg-gradient-to-r from-purple-600/10 to-transparent border-l-4 border-purple-500">
                  <div className="flex items-start gap-2">
                    <i className="fas fa-users text-sm text-purple-400 mt-0.5"></i>
                    <div>
                      <span className="text-[10px] text-gray-400 uppercase tracking-wider">
                        Target Audience
                      </span>
                      <p className="text-xs text-white font-medium mt-0.5">
                        {currentService.targetAudience}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Features - Compact Grid */}
                <div className="mb-4">
                  <h4 className="text-xs font-semibold text-white mb-2 flex items-center gap-2">
                    <i className="fas fa-gem text-purple-400 text-[10px]"></i>
                    Key Features
                  </h4>
                  <div className="grid grid-cols-2 gap-1.5">
                    {currentService.features.slice(0, 4).map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-1.5 text-[10px] px-2 py-1.5 rounded-lg bg-white/5 border border-white/10 text-gray-300"
                      >
                        <i className="fas fa-check-circle text-purple-400 text-[8px]"></i>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Price & Delivery - Compact */}
                <div className="relative mb-4 p-3 rounded-xl bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-gray-300 uppercase tracking-wider">
                        Starting from
                      </span>
                      <p className="text-lg font-bold text-white mt-0.5">
                        {currentService.price}
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] text-gray-300 uppercase tracking-wider">
                        Delivery
                      </span>
                      <p className="text-base font-bold text-purple-400 mt-0.5">
                        {currentService.delivery}
                      </p>
                    </div>
                  </div>
                </div>

                {/* CTA Button - Compact */}
                <Link href="/contact">
                  <button className="w-full px-4 py-2.5 rounded-xl text-sm font-medium bg-gradient-to-r from-purple-600 to-purple-800 text-white hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 flex items-center justify-center gap-2 group">
                    <span>Get This Website</span>
                    <i className="fas fa-arrow-right text-xs group-hover:translate-x-1 transition-transform"></i>
                  </button>
                </Link>
              </div>
            </div>

            {/* Slider Dots */}
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-1.5 z-20">
              {services.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`transition-all duration-300 rounded-full ${
                    currentSlide === idx
                      ? "w-6 h-1.5 bg-gradient-to-r from-purple-500 to-pink-500"
                      : "w-1.5 h-1.5 bg-white/30 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>

            {/* Navigation Arrows - Smaller */}
            <button
              onClick={() =>
                setCurrentSlide(
                  (prev) => (prev - 1 + services.length) % services.length,
                )
              }
              className="absolute left-2 top-1/2 transform -translate-y-1/2 w-8 h-8 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white hover:bg-purple-600/80 transition-all duration-300 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100"
            >
              <i className="fas fa-chevron-left text-sm"></i>
            </button>
            <button
              onClick={() =>
                setCurrentSlide((prev) => (prev + 1) % services.length)
              }
              className="absolute right-2 top-1/2 transform -translate-y-1/2 w-8 h-8 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white hover:bg-purple-600/80 transition-all duration-300 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100"
            >
              <i className="fas fa-chevron-right text-sm"></i>
            </button>
          </div>

          {/* Quick Navigation - Compact Grid */}
          <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-11 gap-1.5 mt-4">
            {services.map((service, idx) => (
              <button
                key={service.id}
                onClick={() => setCurrentSlide(idx)}
                className={`p-1.5 rounded-lg text-center transition-all duration-300 ${
                  currentSlide === idx
                    ? "bg-gradient-to-r from-purple-600/30 to-pink-600/30 border border-purple-500/50"
                    : "bg-white/5 border border-white/10 hover:bg-white/10"
                }`}
              >
                <div
                  className={`w-6 h-6 mx-auto rounded-lg flex items-center justify-center transition-all ${currentSlide === idx ? `bg-gradient-to-br ${service.gradient} scale-110` : "bg-white/10"}`}
                >
                  <i
                    className={`fas ${service.icon} text-[10px] ${
                      currentSlide === idx ? "text-white" : "text-gray-500"
                    }`}
                  ></i>
                </div>
                <p
                  className={`text-[8px] mt-1 hidden lg:block ${
                    currentSlide === idx ? "text-purple-400" : "text-gray-500"
                  }`}
                >
                  {service.title.split(" ")[0]}
                </p>
              </button>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }
        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
