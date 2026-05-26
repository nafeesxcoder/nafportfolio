"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Stars } from "./Stars";
import Link from "next/link";
import Image from "next/image";
import {
  FiCheck,
  FiArrowRight,
  FiDollarSign,
  FiClock,
  FiTarget,
  FiStar,
  FiInfo,
} from "react-icons/fi";
import { FaRocket, FaCrown } from "react-icons/fa";
// ✅ Import React Icons for services
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
} from "react-icons/fa";

export default function ServicesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const sectionRef = useRef(null);

  const services = [
    {
      id: 1,
      slug: "business",
      title: "Business / Company Website",
      category: "For Local Businesses & Startups",
      icon: FaBuilding, // ✅ React Icon
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
      slug: "ecommerce",
      title: "E-Commerce Website",
      category: "High Paying Category 💰",
      icon: FaShoppingCart, // ✅ React Icon
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
      slug: "landing",
      title: "Landing Page",
      category: "Marketing Focused Site 🎯",
      icon: FaBullseye, // ✅ React Icon
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
      slug: "portfolio",
      title: "Portfolio Website",
      category: "For Freelancers & Creatives",
      icon: FaUserAstronaut, // ✅ React Icon
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
      slug: "blog",
      title: "Blog / Content Website",
      category: "SEO Based Income 📝",
      icon: FaBlog, // ✅ React Icon
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
      slug: "booking",
      title: "Booking / Appointment Website",
      category: "High Demand Real-world Use Case 📅",
      icon: FaCalendarCheck, // ✅ React Icon
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
      slug: "lms",
      title: "Education / LMS Website",
      category: "Trending Niche 🎓",
      icon: FaGraduationCap, // ✅ React Icon
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
      slug: "real-estate",
      title: "Real Estate Website",
      category: "Popular Among Foreign Clients 🏢",
      icon: FaHome, // ✅ React Icon
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
      slug: "restaurant",
      title: "Restaurant / Food Website",
      category: "Easy + Fast Projects 🍔",
      icon: FaUtensils, // ✅ React Icon
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
      slug: "saas",
      title: "SaaS / Web App",
      category: "Premium Level (High Price) 💎",
      icon: FaCloud, // ✅ React Icon
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
      slug: "membership",
      title: "Membership Website",
      category: "Recurring Income Model 🔐",
      icon: FaUsers, // ✅ React Icon
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

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % services.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [services.length]);

  const currentService = services[currentSlide];

  return (
    <section ref={sectionRef} className="relative py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/10 to-black" />
      <Stars />

      {/* Animated Background Orbs */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 backdrop-blur-sm mb-4">
            <FaRocket className="w-3 h-3 text-purple-400" />
            <span className="text-xs font-semibold tracking-wider text-purple-300 uppercase">
              Our Services
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="bg-gradient-to-r from-white via-purple-300 to-white bg-clip-text text-transparent">
              Everything You Need
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Under One Roof
            </span>
          </h2>

          <p className="text-gray-400 text-base mt-4 max-w-2xl mx-auto">
            From simple landing pages to complex web applications — we build it
            all
          </p>
        </motion.div>

        {/* Premium Slider */}
        <div className="relative group">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="relative bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden shadow-2xl"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Left Side - Stylish Image (Clickable) */}
                <Link href={`/services/${currentService.slug}`}>
                  <div className="relative h-[350px] lg:h-[500px] overflow-hidden group/image cursor-pointer">
                    <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent z-10 lg:bg-gradient-to-r" />

                    <motion.div
                      whileHover={{ scale: 1.08 }}
                      transition={{ duration: 0.6 }}
                      className="w-full h-full"
                    >
                      <Image
                        src={currentService.image}
                        alt={currentService.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover"
                        priority
                      />
                    </motion.div>

                    {/* Overlay on Hover */}
                    <div className="absolute inset-0 bg-purple-600/30 opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 z-20 flex items-center justify-center">
                      <div className="bg-black/70 backdrop-blur-md px-4 py-2 rounded-full flex items-center gap-2">
                        <FiInfo className="text-white" />
                        <span className="text-white text-sm font-medium">
                          View Details
                        </span>
                      </div>
                    </div>

                    {/* Corner Decor */}
                    <div className="absolute top-4 left-4 z-30">
                      <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-purple-500/30">
                        <FaCrown className="w-3 h-3 text-yellow-500" />
                        <span className="text-xs font-medium text-white">
                          {currentService.category}
                        </span>
                      </div>
                    </div>

                    {/* Floating Icon - ✅ Now using React Icon */}
                    <motion.div
                      animate={{ y: [0, -8, 0] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="absolute bottom-6 right-6 z-30"
                    >
                      <div
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${currentService.gradient} flex items-center justify-center shadow-2xl backdrop-blur-sm`}
                      >
                        <currentService.icon className="text-2xl text-white" />
                      </div>
                    </motion.div>
                  </div>
                </Link>

                {/* Right Side - Information */}
                <div className="p-6 lg:p-8">
                  <Link href={`/services/${currentService.slug}`}>
                    <h3 className="text-2xl lg:text-3xl font-bold mb-3 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent hover:from-purple-300 hover:to-white transition-all duration-300 cursor-pointer">
                      {currentService.title}
                      <span className="text-sm text-purple-400 ml-2">↗</span>
                    </h3>
                  </Link>

                  <p className="text-gray-300 text-sm lg:text-base mb-6 leading-relaxed">
                    {currentService.description}
                  </p>

                  {/* Target Audience Card */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                    className="relative mb-6 p-4 rounded-xl bg-gradient-to-r from-purple-600/10 to-transparent border-l-4 border-purple-500"
                  >
                    <div className="flex items-start gap-3">
                      <FiTarget className="text-purple-400 mt-0.5" />
                      <div>
                        <span className="text-xs text-gray-400 uppercase tracking-wider">
                          Target Audience
                        </span>
                        <p className="text-sm text-white font-medium mt-1">
                          {currentService.targetAudience}
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Features Grid */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                      <FiStar className="text-purple-400" />
                      Key Features
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {currentService.features.map((feature, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.2 + idx * 0.05 }}
                          className="flex items-center gap-2 text-xs px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:border-purple-500/30 transition-all duration-300"
                        >
                          <FiCheck className="text-purple-400 text-xs flex-shrink-0" />
                          <span>{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Price & Delivery */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="relative mb-6 p-4 rounded-xl bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
                          <FiDollarSign className="text-white text-xl" />
                        </div>
                        <div>
                          <span className="text-xs text-gray-300 uppercase tracking-wider">
                            Starting from
                          </span>
                          <p className="text-xl font-bold text-white">
                            {currentService.price}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                          <FiClock className="text-white text-xl" />
                        </div>
                        <div className="text-right">
                          <span className="text-xs text-gray-300 uppercase tracking-wider">
                            Delivery
                          </span>
                          <p className="text-xl font-bold text-purple-400">
                            {currentService.delivery}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* CTA Buttons */}
                  <div className="flex gap-3">
                    <Link href="/contact" className="flex-1">
                      <button className="group w-full px-6 py-3 rounded-xl text-sm font-semibold bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-xl hover:shadow-purple-500/30 transition-all duration-300 flex items-center justify-center gap-2">
                        <span>Get This Website</span>
                        <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                      </button>
                    </Link>

                    <Link href={`/services/${currentService.slug}`}>
                      <button className="px-5 py-3 rounded-xl text-sm font-medium bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-purple-600/30 hover:border-purple-500/50 transition-all duration-300 flex items-center gap-2">
                        <FiInfo className="text-sm" />
                        <span className="hidden sm:inline">Learn More</span>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Slider Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {services.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`transition-all duration-300 rounded-full ${
                  currentSlide === idx
                    ? "w-8 h-2 bg-gradient-to-r from-purple-500 to-pink-500"
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
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white hover:bg-purple-600/80 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100"
          >
            <i className="fas fa-chevron-left"></i>
          </button>
          <button
            onClick={() =>
              setCurrentSlide((prev) => (prev + 1) % services.length)
            }
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white hover:bg-purple-600/80 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100"
          >
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>

        {/* Quick Navigation Pills */}
        <div className="flex flex-wrap justify-center gap-2 mt-8">
          {services.slice(0, 6).map((service, idx) => (
            <button
              key={service.id}
              onClick={() => setCurrentSlide(idx)}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-300 ${
                currentSlide === idx
                  ? `bg-gradient-to-r ${service.gradient} text-white shadow-lg`
                  : "bg-white/5 border border-white/10 text-gray-400 hover:bg-white/10"
              }`}
            >
              <service.icon className="text-xs mr-2 inline" />
              {service.title.split(" ")[0]}
            </button>
          ))}
          <Link href="/services">
            <button className="px-4 py-2 rounded-full text-xs font-medium bg-purple-600/20 border border-purple-500/30 text-purple-300 hover:bg-purple-600/40 transition-all duration-300">
              <i className="fas fa-arrow-right mr-2"></i>
              View All ({services.length})
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
