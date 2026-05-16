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
import { FaWhatsapp, FaXTwitter } from "react-icons/fa6";

const footerLinks = {
  quickLinks: [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Work", href: "/work" },
    { name: "Contact", href: "/contact" },
  ],
};

// Your services array
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

// Fixed Modal Component with proper types
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
  // Prevent body scroll when modal is open
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

  // Handle ESC key press
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
    <div className="relative bg-gradient-to-b from-gray-900 to-black">
      {/* Main Footer */}
      <footer className="relative bg-black/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold mb-4">
                <span className="bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">
                  Nafees
                </span>
                <span className="text-purple-500">.dev</span>
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Full-stack developer passionate about creating beautiful,
                functional, and user-friendly web applications. Let's bring your
                ideas to life.
              </p>

              {/* Social Links */}
              <div className="flex gap-4 mt-6">
                <a
                  href="https://github.com/nafeesahmad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-purple-500 transition-colors"
                >
                  <FaGithub className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/nafeesahmad/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-purple-500 transition-colors"
                >
                  <FaLinkedinIn className="w-5 h-5" />
                </a>
                <a
                  href="https://twitter.com/nafeesahmad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-purple-500 transition-colors"
                >
                  <FaTwitter className="w-5 h-5" />
                </a>
                <a
                  href="https://instagram.com/nafeesahmad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-purple-500 transition-colors"
                >
                  <FaInstagram className="w-5 h-5" />
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
              <h3 className="text-lg font-semibold text-white mb-4">
                Quick Links
              </h3>
              <ul className="space-y-2">
                {footerLinks.quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-purple-500 transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-lg font-semibold text-white mb-4">
                Services
              </h3>
              <ul className="space-y-2 max-h-60 overflow-y-auto pr-2 custom-scroll">
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
              <h3 className="text-lg font-semibold text-white mb-4">
                Get in Touch
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-gray-400 text-sm">
                  <MdEmail className="w-5 h-5 mt-0.5 text-purple-500" />
                  <a
                    href="mailto:rafeetashali@gmail.com"
                    className="hover:text-purple-500 transition-colors"
                  >
                    nafeesahadbly@gmail.com
                  </a>
                </li>
                <li className="flex items-start gap-3 text-gray-400 text-sm">
                  <MdPhone className="w-5 h-5 mt-0.5 text-purple-500" />
                  <a
                    href="tel:+917409233994"
                    className="hover:text-purple-500 transition-colors"
                  >
                    +91 (740) 923-3994
                  </a>
                </li>
                <li className="flex items-start gap-3 text-gray-400 text-sm">
                  <MdLocationOn className="w-5 h-5 mt-0.5 text-purple-500" />
                  <span>A-2/111 New Kondli, New Delhi, india </span>
                </li>
                <li className="flex items-start gap-3 text-gray-400 text-sm">
                  <MdAccessTime className="w-5 h-5 mt-0.5 text-purple-500" />
                  <div>
                    <p>Mon - Fri: 9:00 AM - 7:00 PM</p>
                    <p>Sat - Sun: Available for meetings</p>
                  </div>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-800 mt-10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-500 text-sm">
                © {new Date().getFullYear()} Nafees.dev. All rights reserved.
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
      </footer>

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
            Your privacy is important to me. This privacy policy explains how I
            collect, use, and protect your personal information.
          </p>

          <h4 className="font-semibold text-gray-800 dark:text-white">
            1. Information I Collect
          </h4>
          <p>
            I may collect personal information such as your name, email address,
            and project details when you contact me through the website.
          </p>

          <h4 className="font-semibold text-gray-800 dark:text-white">
            2. How I Use Your Information
          </h4>
          <p>
            I use your information to respond to inquiries, provide services,
            and improve my website.
          </p>

          <h4 className="font-semibold text-gray-800 dark:text-white">
            3. Data Security
          </h4>
          <p>
            I take reasonable measures to protect your personal information from
            unauthorized access.
          </p>

          <h4 className="font-semibold text-gray-800 dark:text-white">
            4. Third-Party Services
          </h4>
          <p>
            I may use third-party services that collect information to improve
            my website.
          </p>

          <h4 className="font-semibold text-gray-800 dark:text-white">
            5. Contact
          </h4>
          <p>
            If you have questions about this policy, please contact me at
            nafeesahadbly@gmail.com.
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
          <p>By using my services, you agree to these terms and conditions.</p>

          <h4 className="font-semibold text-gray-800 dark:text-white">
            2. Services
          </h4>
          <p>
            I provide web development and related services as agreed upon in our
            contract.
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
            Upon full payment, the client owns the final deliverables. I retain
            the right to showcase the work in my portfolio.
          </p>

          <h4 className="font-semibold text-gray-800 dark:text-white">
            6. Limitation of Liability
          </h4>
          <p>
            I am not liable for any indirect damages arising from the use of my
            services.
          </p>

          <h4 className="font-semibold text-gray-800 dark:text-white">
            7. Governing Law
          </h4>
          <p>These terms are governed by the laws of California.</p>

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
    </div>
  );
}
