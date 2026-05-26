"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaChevronDown,
  FaTimes,
  FaRocket,
} from "react-icons/fa";

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Handle scroll for header background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close desktop dropdown when clicking outside
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

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMenuOpen]);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Work", path: "/work" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const services = [
    { name: "Business/Company Website", path: "/services/business" },
    { name: "E-Commerce Website", path: "/services/ecommerce" },
    { name: "Landing Page", path: "/services/landing" },
    { name: "Portfolio Website", path: "/services/portfolio" },
    { name: "Blog/Content Website", path: "/services/blog" },
    { name: "Booking/Appointment Website", path: "/services/booking" },
    { name: "Education/LMS Website", path: "/services/lms" },
    { name: "Real Estate Website", path: "/services/real-estate" },
    { name: "Restaurant/Food Website", path: "/services/restaurant" },
    { name: "SaaS/Web App", path: "/services/saas" },
    { name: "Membership Website", path: "/services/membership" },
  ];

  return (
    <>
      <header
        className={`w-full transition-all duration-500 ${
          scrolled
            ? "bg-black/95 backdrop-blur-xl py-3 shadow-2xl shadow-purple-900/20"
            : "bg-black/80 backdrop-blur-md py-4"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center">
          {/* LEFT SIDE - Logo + Navigation */}
          <div className="flex items-center gap-8">
            <Link
              href="/"
              className="group relative flex items-center z-50"
              onClick={() => setIsMenuOpen(false)}
            >
              <img
                src="/logo.png"
                alt="Logo"
                className="h-10 md:h-12 w-auto object-contain"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
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
                  Services
                  <FaChevronDown
                    className={`text-xs transition-transform duration-300 ${isServicesOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {isServicesOpen && (
                  <div
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                    className="absolute top-full left-0 mt-2 w-64 bg-black/95 backdrop-blur-xl rounded-2xl border border-purple-500/30 shadow-2xl py-3 z-50"
                  >
                    <div className="max-h-96 overflow-y-auto custom-scroll">
                      {/* ✅ ADDED: All Services Link */}
                      <Link
                        href="/services"
                        className="block px-4 py-2.5 text-sm text-purple-400 hover:text-purple-300 hover:bg-white/5 transition-all duration-300 border-b border-white/10 mb-2 font-semibold"
                        onClick={() => setIsServicesOpen(false)}
                      >
                        <i className="fas fa-grid-2 mr-2"></i> All Services (
                        {services.length})
                      </Link>

                      {services.map((s) => (
                        <Link
                          key={s.path}
                          href={s.path}
                          className="block px-4 py-2.5 text-sm text-gray-300 hover:text-[#b665f2] hover:bg-white/5 transition-all duration-300"
                          onClick={() => setIsServicesOpen(false)}
                        >
                          {s.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - Hire Me button (desktop only) */}
          <div className="flex items-center gap-4">
            <Link href="/contact" className="hidden md:block">
              <button className="group relative px-5 py-2 bg-gradient-to-r from-[#751f8c] to-[#b665f2] rounded-full text-white text-sm font-semibold overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50">
                <span className="relative z-10 flex items-center gap-2">
                  <FaRocket className="text-xs" />
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

      {/* MOBILE MENU */}
      <div
        className={`fixed top-0 right-0 w-[85%] max-w-sm h-screen bg-black/95 backdrop-blur-xl z-[200] transform transition-transform duration-300 ease-out shadow-2xl md:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-5 border-b border-white/10 sticky top-0 bg-black/95 z-10">
          <Link
            href="/"
            className="flex items-center"
            onClick={() => setIsMenuOpen(false)}
          >
            <img
              src="/logo.png"
              alt="Logo"
              className="h-10 w-auto object-contain"
            />
          </Link>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center"
          >
            <FaTimes className="text-white text-sm" />
          </button>
        </div>

        <div className="h-full overflow-y-auto pb-28">
          <div className="p-5 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-3 rounded-xl transition-all duration-300 ${
                  pathname === item.path
                    ? "bg-gradient-to-r from-[#751f8c]/20 to-[#b665f2]/20 text-[#b665f2] border border-purple-500/30"
                    : "text-gray-300 hover:bg-white/5"
                }`}
              >
                <span className="font-medium">{item.name}</span>
              </Link>
            ))}

            {/* Mobile Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                className={`flex items-center justify-between w-full px-4 py-3 rounded-xl transition-all duration-300 ${
                  pathname.includes("/services")
                    ? "bg-gradient-to-r from-[#751f8c]/20 to-[#b665f2]/20 text-[#b665f2] border border-purple-500/30"
                    : "text-gray-300 hover:bg-white/5"
                }`}
              >
                <span className="font-medium">Services</span>
                <FaChevronDown
                  className={`text-xs transition-transform duration-300 ${isMobileServicesOpen ? "rotate-180" : ""}`}
                />
              </button>

              {/* Services Dropdown Menu */}
              {isMobileServicesOpen && (
                <div className="ml-4 mt-2 space-y-1 border-l border-purple-500/30 pl-3 max-h-48 overflow-y-auto">
                  {/* ✅ ADDED: All Services Link for Mobile */}
                  <Link
                    href="/services"
                    onClick={() => {
                      setIsMenuOpen(false);
                      setIsMobileServicesOpen(false);
                    }}
                    className="block px-3 py-2 rounded-lg text-sm text-purple-400 hover:text-purple-300 hover:bg-white/5 transition-all duration-300 font-semibold"
                  >
                    <i className="fas fa-grid-2 mr-2"></i> All Services (
                    {services.length})
                  </Link>

                  {services.map((s) => (
                    <Link
                      key={s.path}
                      href={s.path}
                      onClick={() => {
                        setIsMenuOpen(false);
                        setIsMobileServicesOpen(false);
                      }}
                      className="block px-3 py-2 rounded-lg text-sm text-gray-400 hover:text-[#b665f2] hover:bg-white/5 transition-all duration-300"
                    >
                      {s.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Bottom Section - Hire Me Button */}
          <div className="absolute bottom-0 left-0 right-0 flex justify-center p-2 bg-gradient-to-t from-black to-transparent pt-3">
            <Link
              href="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="w-full max-w-[calc(100%-2rem)]"
            >
              <button className="w-full py-3 bg-gradient-to-r from-[#751f8c] to-[#b665f2] rounded-lg text-white font-medium text-sm flex items-center justify-center gap-1">
                <FaRocket className="text-sm" /> Hire Me
              </button>
            </Link>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-[199] md:hidden"
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
