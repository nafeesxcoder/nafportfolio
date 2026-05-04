"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

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

  // Lock scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMenuOpen]);

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
    },
    {
      name: "E-Commerce Website",
      path: "/services/ecommerce",
      icon: "fa-cart-shopping",
      color: "#ec4899",
    },
    {
      name: "Landing Page",
      path: "/services/landing",
      icon: "fa-bullseye",
      color: "#f59e0b",
    },
    {
      name: "Portfolio Website",
      path: "/services/portfolio",
      icon: "fa-user-astronaut",
      color: "#8b5cf6",
    },
    {
      name: "Blog/Content Website",
      path: "/services/blog",
      icon: "fa-blog",
      color: "#10b981",
    },
    {
      name: "Booking/Appointment Website",
      path: "/services/booking",
      icon: "fa-calendar-check",
      color: "#3b82f6",
    },
    {
      name: "Education/LMS Website",
      path: "/services/lms",
      icon: "fa-graduation-cap",
      color: "#14b8a6",
    },
    {
      name: "Real Estate Website",
      path: "/services/real-estate",
      icon: "fa-home",
      color: "#ef4444",
    },
    {
      name: "Restaurant/Food Website",
      path: "/services/restaurant",
      icon: "fa-utensils",
      color: "#f97316",
    },
    {
      name: "SaaS/Web App",
      path: "/services/saas",
      icon: "fa-cloud",
      color: "#a855f7",
    },
    {
      name: "Membership Website",
      path: "/services/membership",
      icon: "fa-users",
      color: "#06b6d4",
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

      {/* MOBILE MENU - Fixed Scroll Issue */}
      <div
        ref={mobileMenuRef}
        className={`fixed top-0 right-0 w-[85%] max-w-sm h-screen bg-black/95 backdrop-blur-xl z-40 transform transition-transform duration-300 ease-out shadow-2xl md:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <div className="flex justify-between items-center p-5 border-b border-white/10 sticky top-0 bg-black/95 z-10">
          <Link
            href="/"
            className="text-xl font-bold"
            onClick={() => setIsMenuOpen(false)}
          >
            <span className="bg-gradient-to-r from-white via-purple-300 to-purple-400 bg-clip-text text-transparent">
              Nafees
            </span>
            <span className="text-[#b665f2]">.dev</span>
          </Link>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center"
          >
            <i className="fas fa-times text-white text-sm"></i>
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="h-full overflow-y-auto pb-32">
          <div className="p-5 space-y-2">
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
                <i className={`${item.icon} text-base w-5`}></i>
                <span className="flex-1 font-medium">{item.name}</span>
                {pathname === item.path && (
                  <i className="fas fa-check-circle text-[#b665f2] text-xs"></i>
                )}
              </Link>
            ))}

            {/* Services Section - Mobile */}
            <div className="relative">
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className={`flex items-center justify-between w-full px-4 py-3 rounded-xl transition-all duration-300 ${
                  pathname.includes("/services")
                    ? "bg-gradient-to-r from-[#751f8c]/20 to-[#b665f2]/20 text-[#b665f2] border border-purple-500/30"
                    : "text-gray-300 hover:bg-white/5"
                }`}
              >
                <div className="flex items-center gap-3">
                  <i className="fas fa-layer-group text-base w-5"></i>
                  <span className="font-medium">Services</span>
                </div>
                <i
                  className={`fas fa-chevron-down text-xs transition-transform duration-300 ${
                    isServicesOpen ? "rotate-180" : ""
                  }`}
                ></i>
              </button>

              {/* Services Dropdown - Scrollable */}
              {isServicesOpen && (
                <div className="ml-6 mt-2 space-y-1 border-l border-purple-500/30 pl-3 max-h-80 overflow-y-auto">
                  {services.map((s) => (
                    <Link
                      key={s.path}
                      href={s.path}
                      onClick={() => {
                        setIsMenuOpen(false);
                        setIsServicesOpen(false);
                      }}
                      className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-gray-400 hover:text-[#b665f2] hover:bg-white/5 transition-all duration-300"
                    >
                      <i
                        className={`${s.icon} text-xs`}
                        style={{ color: s.color }}
                      ></i>
                      <span className="flex-1">{s.name}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Hire Me Button - Fixed at Bottom */}
          <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black to-transparent pt-8">
            <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
              <button className="w-full py-3 bg-gradient-to-r from-[#751f8c] to-[#b665f2] rounded-xl text-white font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105 active:scale-95">
                <i className="fas fa-rocket text-xs"></i>
                Hire Me
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* OVERLAY */}
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

        /* Mobile menu scroll styles */
        .overflow-y-auto {
          scrollbar-width: thin;
          scrollbar-color: #b665f2 rgba(255, 255, 255, 0.1);
        }

        .overflow-y-auto::-webkit-scrollbar {
          width: 4px;
        }

        .overflow-y-auto::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
        }

        .overflow-y-auto::-webkit-scrollbar-thumb {
          background: linear-gradient(135deg, #751f8c, #b665f2);
          border-radius: 10px;
        }
      `}</style>
    </>
  );
}
