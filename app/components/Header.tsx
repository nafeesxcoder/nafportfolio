"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const mobileServicesRef = useRef<HTMLDivElement>(null);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Outside click close desktop dropdown
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setIsServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Lock scroll when any menu is open
  useEffect(() => {
    if (isMenuOpen || isMobileServicesOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMenuOpen, isMobileServicesOpen]);

  // Handle touch swipe for main menu
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 100) {
      setIsMenuOpen(false);
    }
  };

  // Handle touch swipe for services menu
  const handleServicesTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleServicesTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleServicesTouchEnd = () => {
    if (touchStart - touchEnd > 100) {
      setIsMobileServicesOpen(false);
    }
  };

  const navItems = [
    { name: "Home", path: "/", icon: "fa-home" },
    { name: "Work", path: "/work", icon: "fa-briefcase" },
    { name: "About", path: "/about", icon: "fa-user-astronaut" },
    { name: "Contact", path: "/contact", icon: "fa-paper-plane" },
  ];

  const services = [
    {
      name: "Business/Company Website",
      path: "/services/business",
      icon: "fa-building",
      color: "#06b6d4",
      shortName: "Business",
    },
    {
      name: "E-Commerce Website",
      path: "/services/ecommerce",
      icon: "fa-cart-shopping",
      color: "#ec4899",
      shortName: "E-Commerce",
    },
    {
      name: "Landing Page",
      path: "/services/landing",
      icon: "fa-bullseye",
      color: "#f59e0b",
      shortName: "Landing",
    },
    {
      name: "Portfolio Website",
      path: "/services/portfolio",
      icon: "fa-user-astronaut",
      color: "#8b5cf6",
      shortName: "Portfolio",
    },
    {
      name: "Blog/Content Website",
      path: "/services/blog",
      icon: "fa-blog",
      color: "#10b981",
      shortName: "Blog",
    },
    {
      name: "Booking/Appointment Website",
      path: "/services/booking",
      icon: "fa-calendar-check",
      color: "#3b82f6",
      shortName: "Booking",
    },
    {
      name: "Education/LMS Website",
      path: "/services/lms",
      icon: "fa-graduation-cap",
      color: "#14b8a6",
      shortName: "LMS",
    },
    {
      name: "Real Estate Website",
      path: "/services/real-estate",
      icon: "fa-home",
      color: "#ef4444",
      shortName: "Real Estate",
    },
    {
      name: "Restaurant/Food Website",
      path: "/services/restaurant",
      icon: "fa-utensils",
      color: "#f97316",
      shortName: "Restaurant",
    },
    {
      name: "SaaS/Web App",
      path: "/services/saas",
      icon: "fa-cloud",
      color: "#a855f7",
      shortName: "SaaS",
    },
    {
      name: "Membership Website",
      path: "/services/membership",
      icon: "fa-users",
      color: "#06b6d4",
      shortName: "Membership",
    },
  ];

  return (
    <>
      {/* HEADER */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-black/95 backdrop-blur-xl py-3 shadow-2xl shadow-purple-900/20"
            : "bg-black/80 backdrop-blur-md py-4"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center">
          {/* LOGO */}
          <Link
            href="/"
            className="group relative text-2xl font-bold tracking-tight z-50"
            onClick={() => setIsMenuOpen(false)}
          >
            <span className="bg-gradient-to-r from-white via-purple-300 to-purple-400 bg-clip-text text-transparent">
              Nafees
            </span>
            <span className="text-[#b665f2]">.dev</span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#751f8c] to-[#b665f2] group-hover:w-full transition-all duration-500"></span>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`relative text-sm font-medium transition-all duration-300 ${
                  pathname === item.path
                    ? "text-[#b665f2]"
                    : "text-gray-300 hover:text-[#b665f2]"
                }`}
              >
                <i className={`${item.icon} mr-2 text-xs`}></i>
                {item.name}
                {pathname === item.path && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-[#751f8c] to-[#b665f2] rounded-full"></span>
                )}
              </Link>
            ))}

            {/* SERVICES DROPDOWN - Desktop */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
                className={`text-sm font-medium transition-all duration-300 flex items-center gap-1 ${
                  pathname.includes("/services")
                    ? "text-[#b665f2]"
                    : "text-gray-300 hover:text-[#b665f2]"
                }`}
              >
                <i className="fas fa-layer-group mr-1 text-xs"></i>
                Services
                <i
                  className={`fas fa-chevron-down text-xs transition-transform duration-300 ${
                    isServicesOpen ? "rotate-180" : ""
                  }`}
                ></i>
              </button>

              {isServicesOpen && (
                <div
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                  className="absolute top-full right-0 mt-2 w-80 bg-black/95 backdrop-blur-xl rounded-2xl border border-purple-500/30 shadow-2xl py-3 z-50"
                >
                  <div className="max-h-96 overflow-y-auto custom-scroll">
                    {services.map((s) => (
                      <Link
                        key={s.path}
                        href={s.path}
                        className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-300 hover:text-[#b665f2] hover:bg-white/5 transition-all duration-300 group"
                      >
                        <div
                          className="w-8 h-8 rounded-lg flex items-center justify-center"
                          style={{ backgroundColor: `${s.color}20` }}
                        >
                          <i
                            className={`${s.icon} text-sm`}
                            style={{ color: s.color }}
                          ></i>
                        </div>
                        <span className="flex-1">{s.name}</span>
                        <i className="fas fa-arrow-right text-xs opacity-0 group-hover:opacity-100 transition-opacity"></i>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* HIRE ME BUTTON */}
            <Link href="/contact">
              <button className="group relative px-6 py-2.5 bg-gradient-to-r from-[#751f8c] to-[#b665f2] rounded-full text-white text-sm font-semibold overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50">
                <span className="relative z-10 flex items-center gap-2">
                  <i className="fas fa-rocket text-xs"></i>
                  Hire Me
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#b665f2] to-[#751f8c] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </Link>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className="md:hidden relative w-10 h-10 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center z-50"
          >
            <div className="relative w-5 h-5">
              <span className="absolute h-0.5 bg-white rounded-full top-1 w-5"></span>
              <span className="absolute h-0.5 bg-white rounded-full top-2 w-5"></span>
              <span className="absolute h-0.5 bg-white rounded-full top-3 w-5"></span>
            </div>
          </button>
        </nav>
      </header>

      {/* MOBILE MAIN MENU */}
      <div
        ref={mobileMenuRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        className={`fixed top-0 left-0 w-[85%] max-w-sm h-screen bg-gradient-to-br from-gray-900 to-black z-40 transform transition-transform duration-500 ease-out shadow-2xl md:hidden ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Drag Handle */}
        <div className="absolute top-4 left-0 right-0 flex justify-center">
          <div className="w-12 h-1 bg-white/20 rounded-full"></div>
        </div>

        <div className="pt-16 px-6 pb-8 h-full overflow-y-auto">
          {/* Profile Section */}
          <div className="text-center mb-8">
            <div className="w-20 h-20 rounded-full bg-gradient-to-r from-[#751f8c] to-[#b665f2] flex items-center justify-center mx-auto mb-3">
              <i className="fas fa-code text-3xl text-white"></i>
            </div>
            <h3 className="text-white font-bold text-xl">Nafees Ahmad</h3>
            <p className="text-gray-400 text-sm">Full Stack Developer</p>
          </div>

          {/* MAIN NAVIGATION */}
          <div className="space-y-1 mb-6">
            <p className="text-xs text-gray-500 uppercase tracking-wider px-4 mb-2">
              Menu
            </p>
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                  pathname === item.path
                    ? "bg-gradient-to-r from-[#751f8c]/20 to-[#b665f2]/20 text-[#b665f2] border border-purple-500/30"
                    : "text-gray-300 hover:bg-white/5"
                }`}
              >
                <i className={`${item.icon} text-lg w-5`}></i>
                <span className="flex-1 font-medium">{item.name}</span>
                {pathname === item.path && (
                  <i className="fas fa-check-circle text-[#b665f2] text-sm"></i>
                )}
              </Link>
            ))}
          </div>

          {/* SERVICES BUTTON - Opens Services Page in Mobile */}
          <button
            onClick={() => {
              setIsMobileServicesOpen(true);
            }}
            className="flex items-center justify-between w-full px-4 py-3 rounded-xl text-gray-300 hover:bg-white/5 transition-all duration-300 mb-6"
          >
            <div className="flex items-center gap-3">
              <i className="fas fa-layer-group text-lg w-5"></i>
              <span className="font-medium">All Services</span>
              <span className="text-[10px] text-purple-400 bg-purple-500/20 px-2 py-0.5 rounded-full ml-2">
                {services.length}
              </span>
            </div>
            <i className="fas fa-chevron-right text-xs text-gray-500"></i>
          </button>

          {/* CTA BUTTON */}
          <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
            <button className="w-full py-4 bg-gradient-to-r from-[#751f8c] to-[#b665f2] rounded-xl text-white font-semibold flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105 active:scale-95">
              <i className="fas fa-rocket"></i>
              Hire Me
            </button>
          </Link>

          {/* SOCIAL LINKS */}
          <div className="flex justify-center gap-6 mt-8 pt-6 border-t border-white/10">
            <a
              href="https://github.com/nafeesxcoder"
              target="_blank"
              className="text-gray-400 hover:text-[#b665f2] transition-colors"
            >
              <i className="fab fa-github text-xl"></i>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-[#b665f2] transition-colors"
            >
              <i className="fab fa-linkedin-in text-xl"></i>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-[#b665f2] transition-colors"
            >
              <i className="fab fa-twitter text-xl"></i>
            </a>
          </div>

          <p className="text-center text-gray-600 text-xs mt-6">
            © 2024 Nafees.dev
          </p>
        </div>
      </div>

      {/* MOBILE SERVICES PAGE - Opens like a separate page */}
      <div
        ref={mobileServicesRef}
        onTouchStart={handleServicesTouchStart}
        onTouchMove={handleServicesTouchMove}
        onTouchEnd={handleServicesTouchEnd}
        className={`fixed top-0 right-0 w-full h-screen bg-gradient-to-br from-gray-900 to-black z-50 transform transition-transform duration-500 ease-out shadow-2xl ${
          isMobileServicesOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header for Services Page */}
        <div className="sticky top-0 bg-black/80 backdrop-blur-md border-b border-white/10 px-4 py-4 flex items-center gap-4">
          <button
            onClick={() => setIsMobileServicesOpen(false)}
            className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center"
          >
            <i className="fas fa-arrow-left text-white text-lg"></i>
          </button>
          <h2 className="text-xl font-bold text-white flex-1">All Services</h2>
          <span className="text-xs text-purple-400 bg-purple-500/20 px-2 py-1 rounded-full">
            {services.length} Services
          </span>
        </div>

        {/* Drag Handle */}
        <div className="absolute top-4 left-0 right-0 flex justify-center z-10 pointer-events-none">
          <div className="w-12 h-1 bg-white/20 rounded-full"></div>
        </div>

        <div className="px-5 py-6 pb-32 h-full overflow-y-auto">
          {/* Services Grid */}
          <div className="grid grid-cols-1 gap-3">
            {services.map((service) => (
              <Link
                key={service.path}
                href={service.path}
                onClick={() => {
                  setIsMobileServicesOpen(false);
                  setIsMenuOpen(false);
                }}
                className="group flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:scale-[1.02]"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: `${service.color}20` }}
                >
                  <i
                    className={`${service.icon} text-xl`}
                    style={{ color: service.color }}
                  ></i>
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-semibold">{service.name}</h3>
                  <p className="text-gray-400 text-xs">
                    Click to view details →
                  </p>
                </div>
                <i className="fas fa-chevron-right text-gray-500 group-hover:text-[#b665f2] transition-colors"></i>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* OVERLAY for Main Menu */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-35 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      <style jsx>{`
        .custom-scroll::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scroll::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
        }
        .custom-scroll::-webkit-scrollbar-thumb {
          background: linear-gradient(135deg, #751f8c, #b665f2);
          border-radius: 10px;
        }
      `}</style>
    </>
  );
}
