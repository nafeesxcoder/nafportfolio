"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Work", path: "/work" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const services = [
    {
      name: "Business/Company Website",
      path: "/services/business",
      icon: "fa-building",
    },
    {
      name: "E-Commerce Website",
      path: "/services/ecommerce",
      icon: "fa-cart-shopping",
    },
    {
      name: "Landing Page",
      path: "/services/landing",
      icon: "fa-bullseye",
    },
    {
      name: "Portfolio Website",
      path: "/services/portfolio",
      icon: "fa-user-astronaut",
    },
    { name: "Blog/Content Website", path: "/services/blog", icon: "fa-blog" },
    {
      name: "Booking/Appointment Website",
      path: "/services/booking",
      icon: "fa-calendar-check",
    },
    {
      name: "Education/LMS Website",
      path: "/services/lms",
      icon: "fa-graduation-cap",
    },
    {
      name: "Real Estate Website",
      path: "/services/real-estate",
      icon: "fa-home",
    },
    {
      name: "Restaurant/Food Website",
      path: "/services/restaurant",
      icon: "fa-utensils",
    },
    { name: "SaaS/Web App", path: "/services/saas", icon: "fa-cloud" },
    {
      name: "Membership Website",
      path: "/services/membership",
      icon: "fa-users",
    },
  ];

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-black/95 backdrop-blur-xl shadow-lg py-3"
            : "bg-black/80 backdrop-blur-md shadow-md py-5"
        }`}
      >
        <nav className="max-w-6xl mx-auto px-5 md:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link
              href="/"
              className="group relative text-2xl font-bold tracking-tight"
            >
              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Nafees.dev
              </span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#751f8c] to-[#b665f2] group-hover:w-full transition-all duration-300"></span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`relative px-3 py-2 text-base font-medium transition-all duration-300 ${
                    pathname === item.path
                      ? "text-[#751f8c]"
                      : "text-gray-300 hover:text-[#751f8c]"
                  }`}
                >
                  {item.name}
                  {pathname === item.path && (
                    <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-[#751f8c] rounded-full"></span>
                  )}
                </Link>
              ))}

              {/* Services Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                  className={`relative px-3 py-2 text-base font-medium transition-all duration-300 flex items-center gap-1 ${
                    pathname.includes("/services")
                      ? "text-[#751f8c]"
                      : "text-gray-300 hover:text-[#751f8c]"
                  }`}
                >
                  Services
                  <i
                    className={`fas fa-chevron-down text-xs transition-transform duration-300 ${isServicesOpen ? "rotate-180" : ""}`}
                  ></i>
                </button>

                {/* Dropdown Menu */}
                {isServicesOpen && (
                  <div
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                    className="absolute top-full left-0 mt-2 w-64 bg-black/95 backdrop-blur-xl rounded-xl border border-purple-500/30 shadow-xl py-2 z-50"
                  >
                    {services.map((service) => (
                      <Link
                        key={service.path}
                        href={service.path}
                        className="flex items-center gap-3 px-4 py-2 text-sm text-gray-300 hover:text-[#751f8c] hover:bg-white/5 transition-colors"
                        onClick={() => setIsServicesOpen(false)}
                      >
                        <i
                          className={`fas ${service.icon} text-xs text-purple-400`}
                        ></i>
                        <span>{service.name}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Hire Me Button - Contact Page Link */}
              <Link href="/contact">
                <button className="ml-2 px-6 py-2.5 bg-gradient-to-r from-[#751f8c] to-[#b665f2] hover:from-[#8129d1] hover:to-[#c77dff] text-white rounded-full font-semibold text-sm transition-all duration-300 hover:scale-105 shadow-lg shadow-purple-500/25">
                  <i className="fas fa-rocket mr-2 text-xs"></i>
                  Hire Me
                </button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-lg hover:bg-white/10 transition-all duration-300"
              aria-label="Toggle menu"
            >
              <div className="relative w-5 h-5">
                <span
                  className={`absolute h-0.5 bg-white rounded-full transition-all duration-300 ${
                    isMenuOpen ? "rotate-45 top-2 w-5" : "top-1 w-5"
                  }`}
                ></span>
                <span
                  className={`absolute h-0.5 bg-white rounded-full transition-all duration-300 top-2 left-0 ${
                    isMenuOpen ? "opacity-0" : "w-5"
                  }`}
                ></span>
                <span
                  className={`absolute h-0.5 bg-white rounded-full transition-all duration-300 ${
                    isMenuOpen ? "-rotate-45 top-2 w-5" : "top-3 w-3"
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 bg-black/98 backdrop-blur-xl z-40 transition-all duration-500 md:hidden ${
            isMenuOpen
              ? "opacity-100 visible translate-x-0"
              : "opacity-0 invisible translate-x-full"
          }`}
          style={{ top: "70px" }}
        >
          <div className="flex flex-col h-full overflow-y-auto">
            <div className="flex-1 py-8 px-6">
              {navItems.map((item, idx) => (
                <Link
                  key={item.path}
                  href={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-4 py-4 mb-2 text-lg font-medium rounded-lg transition-all duration-300 ${
                    pathname === item.path
                      ? "bg-[#751f8c]/20 text-[#751f8c] pl-6"
                      : "text-gray-300 hover:bg-white/10 hover:pl-6"
                  }`}
                  style={{ animationDelay: `${idx * 50}ms` }}
                >
                  {item.name}
                </Link>
              ))}

              {/* Services in Mobile */}
              <div className="mt-4">
                <div className="text-sm text-purple-400 px-4 py-2 mb-2">
                  Services
                </div>
                {services.map((service, idx) => (
                  <Link
                    key={service.path}
                    href={service.path}
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 text-sm text-gray-300 hover:text-[#751f8c] hover:bg-white/5 rounded-lg transition-colors"
                  >
                    <i
                      className={`fas ${service.icon} text-xs text-purple-400`}
                    ></i>
                    <span>{service.name}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Mobile Footer - Hire Me Button */}
            <div className="p-6 border-t border-white/10">
              <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                <button className="w-full py-3.5 bg-gradient-to-r from-[#751f8c] to-[#b665f2] hover:from-[#8129d1] hover:to-[#c77dff] text-white rounded-full font-semibold text-base transition-all shadow-lg shadow-purple-500/25">
                  <i className="fas fa-rocket mr-2"></i>
                  Hire Me
                </button>
              </Link>
              <div className="flex justify-center gap-6 mt-6">
                <a
                  href="https://github.com/nafeesxcoder"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#751f8c] transition-colors text-sm"
                >
                  GitHub
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#751f8c] transition-colors text-sm"
                >
                  LinkedIn
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#751f8c] transition-colors text-sm"
                >
                  Twitter
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
