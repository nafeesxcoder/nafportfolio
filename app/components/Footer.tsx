"use client";

/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
  FaTwitter,
} from "react-icons/fa";
import { MdLocationOn, MdEmail, MdAccessTime, MdPhone } from "react-icons/md";
import Link from "next/link";
import Image from "next/image";

const footerLinks = {
  quickLinks: [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Work", href: "/work" },
    { name: "Contact", href: "/contact" },
  ],
};

// All services
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

// Modal Component
const Modal = ({
  isOpen,
  onClose,
  title,
  children,
}: {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-2xl w-full mx-4 max-h-[80vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
            {title}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="custom-scrollbar">{children}</div>
        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default function Footer() {
  const [isPrivacyPolicyOpen, setIsPrivacyPolicyOpen] = useState(false);
  const [isTermsConditionsOpen, setIsTermsConditionsOpen] = useState(false);

  return (
    <footer className="relative bg-black/95 backdrop-blur-sm mt-20">
      {/* Distinct Top Border - Purple Gradient Line */}
      <div className="absolute -top-0.5 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-purple-500 to-transparent" />

      {/* Top Purple Glow Effect */}
      <div className="absolute -top-4 left-0 right-0 h-8 bg-gradient-to-b from-purple-500/20 to-transparent blur-md pointer-events-none" />

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Info - With Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="block mb-6">
              <Image
                src="/logo.png"
                alt="Unique Web Layer"
                width={160}
                height={50}
                className="w-auto h-12 object-contain"
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Full-stack developer passionate about creating beautiful,
              functional, and user-friendly web applications. Let's bring your
              ideas to life.
            </p>

            {/* Social Links */}
            <div className="flex gap-3 mt-6">
              <a
                href="https://github.com/nafeesxcoder"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-purple-500 hover:bg-purple-500/10 transition-all duration-300 hover:scale-110"
              >
                <FaGithub className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/company/uniqueweblayer/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Unique Web Layer on LinkedIn"
                className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-purple-500 hover:bg-purple-500/10 transition-all duration-300 hover:scale-110"
              >
                <FaLinkedinIn className="w-4 h-4" />
              </a>
              <a
                href="https://x.com/uniqueweblayer"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-purple-500 hover:bg-purple-500/10 transition-all duration-300 hover:scale-110"
              >
                <FaTwitter className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com/uniqueweblayer"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-purple-500 hover:bg-purple-500/10 transition-all duration-300 hover:scale-110"
              >
                <FaInstagram className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold text-white mb-4 relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-purple-500 rounded-full"></span>
            </h3>
            <ul className="space-y-3 mt-6">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-purple-500 transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services - Simple List with Scroll */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold text-white mb-4 relative inline-block">
              Services
              <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-purple-500 rounded-full"></span>
            </h3>
            <ul className="space-y-2 max-h-64 overflow-y-auto pr-2 custom-scroll mt-6">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.path}
                    className="text-gray-400 hover:text-purple-500 transition-colors text-sm flex items-center gap-2 group"
                  >
                    <i
                      className={`fas ${service.icon} text-xs transition-colors`}
                      style={{ color: service.color }}
                    ></i>
                    <span className="group-hover:text-purple-500 transition-colors">
                      {service.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-lg font-semibold text-white mb-4 relative inline-block">
              Get in Touch
              <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-purple-500 rounded-full"></span>
            </h3>
            <ul className="space-y-4 mt-6">
              <li className="flex items-start gap-3 text-gray-400 text-sm group">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-purple-500/10 transition-colors">
                  <MdEmail className="w-4 h-4 text-purple-500" />
                </div>
                <a
                  href="mailto:info@uniqueweblayer.com"
                  className="hover:text-purple-500 transition-colors break-all"
                >
                  info@uniqueweblayer.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-400 text-sm group">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-purple-500/10 transition-colors">
                  <MdPhone className="w-4 h-4 text-purple-500" />
                </div>
                <a
                  href="tel:+917409233994"
                  className="hover:text-purple-500 transition-colors"
                >
                  +91 (740) 923-3994
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-400 text-sm group">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-purple-500/10 transition-colors">
                  <MdLocationOn className="w-4 h-4 text-purple-500" />
                </div>
                <span>
                  G-34, Sector -3, Noida, Uttar Pradesh -201301, India
                </span>
              </li>
              <li className="flex items-start gap-3 text-gray-400 text-sm group">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-purple-500/10 transition-colors">
                  <MdAccessTime className="w-4 h-4 text-purple-500" />
                </div>
                <div>
                  <p>Mon - Fri: 9:00 AM - 7:00 PM</p>
                  <p>Sat - Sun: Available for meetings</p>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Divider */}
        <div className="border-t border-white/10 mt-10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Unique Web Layer. All rights
              reserved.
            </p>

            <div className="flex gap-6">
              <button
                onClick={() => setIsTermsConditionsOpen(true)}
                className="text-gray-500 hover:text-purple-500 transition-colors text-sm"
              >
                Terms & Conditions
              </button>
              <button
                onClick={() => setIsPrivacyPolicyOpen(true)}
                className="text-gray-500 hover:text-purple-500 transition-colors text-sm"
              >
                Privacy Policy
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Privacy Policy Modal */}
      <Modal
        isOpen={isPrivacyPolicyOpen}
        onClose={() => setIsPrivacyPolicyOpen(false)}
        title="Privacy Policy"
      >
        <div className="space-y-4 text-sm text-gray-600 dark:text-gray-300">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
            Privacy Policy
          </h3>
          <p>
            Your privacy is important to us. This privacy policy explains how we
            collect, use, and protect your personal information.
          </p>
          <h4 className="font-semibold text-gray-800 dark:text-white">
            1. Information We Collect
          </h4>
          <p>
            We may collect personal information such as your name, email
            address, and project details when you contact us through the
            website.
          </p>
          <h4 className="font-semibold text-gray-800 dark:text-white">
            2. How We Use Your Information
          </h4>
          <p>
            We use your information to respond to inquiries, provide services,
            and improve our website.
          </p>
          <h4 className="font-semibold text-gray-800 dark:text-white">
            3. Data Security
          </h4>
          <p>
            We take reasonable measures to protect your personal information
            from unauthorized access.
          </p>
          <h4 className="font-semibold text-gray-800 dark:text-white">
            4. Contact Us
          </h4>
          <p>
            If you have questions about this policy, please contact us at
            info@uniqueweblayer.com
          </p>
          <p className="text-gray-500 text-xs">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>
      </Modal>

      {/* Terms & Conditions Modal */}
      <Modal
        isOpen={isTermsConditionsOpen}
        onClose={() => setIsTermsConditionsOpen(false)}
        title="Terms & Conditions"
      >
        <div className="space-y-4 text-sm text-gray-600 dark:text-gray-300">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
            Terms & Conditions
          </h3>
          <h4 className="font-semibold text-gray-800 dark:text-white">
            1. Acceptance of Terms
          </h4>
          <p>By using our services, you agree to these terms and conditions.</p>
          <h4 className="font-semibold text-gray-800 dark:text-white">
            2. Services
          </h4>
          <p>
            We provide web development and related services as agreed upon in
            our contract.
          </p>
          <h4 className="font-semibold text-gray-800 dark:text-white">
            3. Payment Terms
          </h4>
          <p>
            Payment terms are specified in the project agreement. A deposit may
            be required before work begins.
          </p>
          <h4 className="font-semibold text-gray-800 dark:text-white">
            4. Project Timeline
          </h4>
          <p>
            Project timelines are estimates and may be adjusted based on project
            requirements and feedback.
          </p>
          <h4 className="font-semibold text-gray-800 dark:text-white">
            5. Intellectual Property
          </h4>
          <p>
            Upon full payment, the client owns the final deliverables. We retain
            the right to showcase the work in our portfolio.
          </p>
          <h4 className="font-semibold text-gray-800 dark:text-white">
            6. Limitation of Liability
          </h4>
          <p>
            We are not liable for any indirect damages arising from the use of
            our services.
          </p>
          <h4 className="font-semibold text-gray-800 dark:text-white">
            7. Governing Law
          </h4>
          <p>These terms are governed by the laws of India.</p>
          <p className="text-gray-500 text-xs">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>
      </Modal>

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
    </footer>
  );
}
