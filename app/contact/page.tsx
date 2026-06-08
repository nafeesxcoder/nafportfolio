"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Stars } from "../components/Stars";
import Link from "next/link";
import { FaWhatsapp, FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiMongodb,
} from "react-icons/si";
import {
  FiShield,
  FiClock,
  FiCheckCircle,
  FiArrowRight,
  FiUsers,
  FiGlobe,
  FiBriefcase,
  FiStar,
  FiSend,
  FiSmile,
  FiTrendingUp,
  FiAward,
} from "react-icons/fi";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    service: "",
    budget: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(
    null,
  );
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.mobile.trim()) newErrors.mobile = "Mobile number is required";
    else if (!/^[6-9][0-9]{9}$/.test(formData.mobile))
      newErrors.mobile = "Enter valid 10-digit number";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Enter valid email";
    if (!formData.service) newErrors.service = "Please select a service";
    if (!formData.message.trim())
      newErrors.message = "Please describe your project";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus(null);
    if (!validateForm()) return;
    setIsSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Inquiry:", formData);
      setSubmitStatus("success");
      setFormData({
        name: "",
        mobile: "",
        email: "",
        service: "",
        budget: "",
        message: "",
      });
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (error) {
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const serviceOptions = [
    "Business Website",
    "E-Commerce Website",
    "Portfolio Website",
    "Landing Page",
    "Real Estate Website",
    "Restaurant Website",
    "SaaS Platform",
    "Web Application",
  ];

  const budgetOptions = [
    "Under $500",
    "$500 - $1000",
    "$1000 - $2500",
    "$2500 - $5000",
    "$5000+",
  ];

  return (
    <section className="relative min-h-screen overflow-hidden py-12 sm:py-16 md:py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/10 to-black" />
      <Stars />

      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4 border border-purple-500/30">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
            </span>
            <span className="text-sm font-medium text-purple-300">
              Get Your Custom Quote
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
            <span className="bg-gradient-to-r from-white via-purple-300 to-white bg-clip-text text-transparent">
              Let's Build Your
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Dream Project
            </span>
          </h1>
          <p className="text-gray-400 text-sm sm:text-base mt-3 max-w-2xl mx-auto">
            Fill out the form and get a free consultation within 24 hours
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* LEFT SIDE - Premium Features */}
          <div className="space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-3">
              {[
                {
                  icon: FiBriefcase,
                  value: "30+",
                  label: "Projects",
                  color: "from-purple-500 to-pink-500",
                },
                {
                  icon: FiUsers,
                  value: "20+",
                  label: "Clients",
                  color: "from-cyan-500 to-blue-500",
                },
                {
                  icon: FiGlobe,
                  value: "10+",
                  label: "Countries",
                  color: "from-emerald-500 to-teal-500",
                },
                {
                  icon: FiAward,
                  value: "100%",
                  label: "Satisfaction",
                  color: "from-orange-500 to-red-500",
                },
              ].map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-gradient-to-br from-white/5 to-black/20 backdrop-blur-sm rounded-xl p-3 text-center border border-white/10 hover:border-purple-500/30 transition-all duration-300 group"
                >
                  <div
                    className={`w-10 h-10 rounded-lg bg-gradient-to-br ${stat.color} flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform`}
                  >
                    <stat.icon className="text-white text-lg" />
                  </div>
                  <div className="text-xl font-bold text-white">
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Tech Stack */}
            <div className="bg-gradient-to-br from-purple-900/20 to-black/40 backdrop-blur-sm rounded-xl p-5 border border-purple-500/20">
              <h3 className="text-white font-semibold mb-3 flex items-center gap-2">
                <FiStar className="text-purple-400" /> Tech Stack We Master
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  { icon: FaReact, name: "React", color: "#61dafb" },
                  { icon: SiNextdotjs, name: "Next.js", color: "#fff" },
                  { icon: FaNodeJs, name: "Node.js", color: "#68a063" },
                  { icon: SiMongodb, name: "MongoDB", color: "#47A248" },
                  { icon: SiTailwindcss, name: "Tailwind", color: "#38bdf8" },
                  { icon: SiTypescript, name: "TypeScript", color: "#3178c6" },
                ].map((tech, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10"
                  >
                    <tech.icon
                      className="text-sm"
                      style={{ color: tech.color }}
                    />
                    <span className="text-xs text-gray-300">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <FiShield className="text-purple-400" /> Secure & Confidential
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <FiClock className="text-purple-400" /> 24hr Response
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <FiTrendingUp className="text-purple-400" /> ROI Focused
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - Modern Form */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl blur-xl" />

            <div className="relative bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-xl rounded-2xl p-6 border border-purple-500/30 shadow-2xl">
              {/* Form Header */}
              <div className="mb-6 text-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 mb-3">
                  <FiSend className="w-3 h-3 text-purple-400" />
                  <span className="text-xs font-medium text-purple-400">
                    Start Your Journey
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white">
                  Request a Free Quote
                </h3>
                <p className="text-gray-400 text-sm mt-1">
                  Fill the details and we'll get back to you
                </p>
              </div>

              {/* Status Messages */}
              {submitStatus === "success" && (
                <div className="mb-6 bg-green-500/10 border-l-4 border-green-500 p-3 rounded-lg">
                  <p className="text-sm text-green-400 font-medium">
                    ✓ Thank you! We'll contact you soon.
                  </p>
                </div>
              )}
              {submitStatus === "error" && (
                <div className="mb-6 bg-red-500/10 border-l-4 border-red-500 p-3 rounded-lg">
                  <p className="text-sm text-red-400 font-medium">
                    ❌ Something went wrong. Please try again.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name Field */}
                <div>
                  <div
                    className={`relative transition-all duration-300 ${focusedField === "name" ? "transform scale-[1.02]" : ""}`}
                  >
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("name")}
                      onBlur={() => setFocusedField(null)}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-purple-500 focus:outline-none text-white placeholder:text-gray-500 transition-all duration-300"
                      placeholder="Your Full Name *"
                    />
                    <FiSmile className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 text-lg" />
                  </div>
                  {errors.name && (
                    <p className="text-sm text-red-400 mt-1">{errors.name}</p>
                  )}
                </div>

                {/* Mobile & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="tel"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-purple-500 focus:outline-none text-white placeholder:text-gray-500"
                      placeholder="Mobile Number *"
                    />
                    {errors.mobile && (
                      <p className="text-sm text-red-400 mt-1">
                        {errors.mobile}
                      </p>
                    )}
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-purple-500 focus:outline-none text-white placeholder:text-gray-500"
                      placeholder="Email Address *"
                    />
                    {errors.email && (
                      <p className="text-sm text-red-400 mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Service & Budget Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-purple-500 focus:outline-none text-white"
                    >
                      <option value="">Select Service *</option>
                      {serviceOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                    {errors.service && (
                      <p className="text-sm text-red-400 mt-1">
                        {errors.service}
                      </p>
                    )}
                  </div>
                  <div>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-purple-500 focus:outline-none text-white"
                    >
                      <option value="">Budget Range</option>
                      {budgetOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-purple-500 focus:outline-none text-white placeholder:text-gray-500 resize-none"
                    placeholder="Tell us about your project idea... *"
                  />
                  {errors.message && (
                    <p className="text-sm text-red-400 mt-1">
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`group w-full py-3.5 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                    isSubmitting
                      ? "opacity-70 cursor-not-allowed"
                      : "hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
                  }`}
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Get Free Quote
                      <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>

                {/* WhatsApp Alternative */}
                <div className="text-center pt-2">
                  <p className="text-xs text-gray-500 mb-2">
                    Or reach us directly on
                  </p>
                  <a
                    href="https://wa.me/917409233994"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-green-500 hover:text-green-400 transition"
                  >
                    <FaWhatsapp className="w-4 h-4" />
                    WhatsApp Chat
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
