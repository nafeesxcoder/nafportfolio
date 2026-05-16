"use client";

import { useState } from "react";
import { Stars } from "../components/Stars";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceType: "",
    budget: "",
    timeline: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(
    null,
  );
  const [errors, setErrors] = useState<Record<string, string>>({});

  const serviceOptions = [
    "Business/Company Website",
    "E-Commerce Website",
    "Landing Page",
    "Portfolio Website",
    "Blog/Content Website",
    "Booking/Appointment Website",
    "Education/LMS Website",
    "Real Estate Website",
    "Restaurant/Food Website",
    "SaaS/Web App",
    "Membership Website",
    "Other (Please specify)",
  ];

  const budgetOptions = [
    "Less than $500",
    "$500 - $1,000",
    "$1,000 - $2,500",
    "$2,500 - $5,000",
    "$5,000+",
    "Not sure / Discuss",
  ];

  const timelineOptions = [
    "ASAP (1-2 weeks)",
    "Urgent (2-3 weeks)",
    "Normal (3-4 weeks)",
    "Flexible (4-6 weeks)",
    "Long term project",
  ];

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.serviceType) {
      newErrors.serviceType = "Please select a service type";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please describe your project";
    } else if (formData.message.length < 20) {
      newErrors.message = "Please provide more details (minimum 20 characters)";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus(null);

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Project Inquiry:", formData);
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        serviceType: "",
        budget: "",
        timeline: "",
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
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 bg-black" />
      <Stars />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-purple-600/10 backdrop-blur-sm px-4 py-2 rounded-full mb-4 border border-purple-500/20">
            <i className="fas fa-paper-plane text-purple-400 text-sm"></i>
            <span className="text-sm font-medium text-purple-300">
              Project Inquiry
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
            Let's Work Together
          </h1>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Tell me about your project and I'll get back to you within 24 hours
          </p>
        </div>

        {/* Status Messages */}
        {submitStatus === "success" && (
          <div className="mb-8 max-w-2xl mx-auto">
            <div className="bg-green-500/10 border-l-4 border-green-500 p-4 rounded-lg">
              <p className="text-sm text-green-400 font-medium">
                ✓ Thank you! Your inquiry has been sent. I'll get back to you
                soon.
              </p>
            </div>
          </div>
        )}

        {submitStatus === "error" && (
          <div className="mb-8 max-w-2xl mx-auto">
            <div className="bg-red-500/10 border-l-4 border-red-500 p-4 rounded-lg">
              <p className="text-sm text-red-400 font-medium">
                ❌ Something went wrong. Please try again later.
              </p>
            </div>
          </div>
        )}

        <div className="grid md:grid-cols-2 gap-8">
          {/* Project Inquiry Form */}
          <div className="bg-gradient-to-br from-purple-900/20 to-black/40 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20">
            <h2 className="text-2xl font-bold text-white mb-6">
              Project Details
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div>
                <label className="block text-gray-300 font-medium mb-2">
                  Full Name <span className="text-purple-400">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-purple-500 focus:outline-none text-white placeholder:text-gray-500"
                  placeholder="John Doe"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-400">{errors.name}</p>
                )}
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-300 font-medium mb-2">
                    Email <span className="text-purple-400">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-purple-500 focus:outline-none text-white placeholder:text-gray-500"
                    placeholder="john@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-400">{errors.email}</p>
                  )}
                </div>
                <div>
                  <label className="block text-gray-300 font-medium mb-2">
                    Phone (Optional)
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-purple-500 focus:outline-none text-white placeholder:text-gray-500"
                    placeholder="+91 12345 67890"
                  />
                </div>
              </div>

              {/* Service Type */}
              <div>
                <label className="block text-gray-300 font-medium mb-2">
                  Service Type <span className="text-purple-400">*</span>
                </label>
                <select
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-purple-500 focus:outline-none text-white"
                >
                  <option value="">Select a service</option>
                  {serviceOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                {errors.serviceType && (
                  <p className="mt-1 text-sm text-red-400">
                    {errors.serviceType}
                  </p>
                )}
              </div>

              {/* Budget & Timeline */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-300 font-medium mb-2">
                    Budget Range
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-purple-500 focus:outline-none text-white"
                  >
                    {budgetOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-gray-300 font-medium mb-2">
                    Timeline
                  </label>
                  <select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-purple-500 focus:outline-none text-white"
                  >
                    {timelineOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Project Message */}
              <div>
                <label className="block text-gray-300 font-medium mb-2">
                  Tell me about your project{" "}
                  <span className="text-purple-400">*</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-purple-500 focus:outline-none text-white placeholder:text-gray-500 resize-none"
                  placeholder="What kind of website do you need? What features are important? Do you have any design preferences? Any deadlines?"
                ></textarea>
                {errors.message && (
                  <p className="mt-1 text-sm text-red-400">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-purple-800 text-white font-semibold transition-all duration-300 ${
                  isSubmitting
                    ? "opacity-70 cursor-not-allowed"
                    : "hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
                }`}
              >
                {isSubmitting ? "Sending..." : "Send Project Inquiry"}
              </button>
            </form>
          </div>

          {/* Right Side - Info */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-purple-900/20 to-black/40 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20">
              <h3 className="text-xl font-bold text-white mb-4">
                What happens next?
              </h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-purple-600/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-purple-400 text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="text-white font-medium">
                      Review & Response
                    </h4>
                    <p className="text-gray-400 text-sm">
                      I'll review your project details and respond within 24
                      hours
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-purple-600/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-purple-400 text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="text-white font-medium">
                      Discussion & Planning
                    </h4>
                    <p className="text-gray-400 text-sm">
                      We'll discuss requirements, timeline, and budget in detail
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-purple-600/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-purple-400 text-sm">3</span>
                  </div>
                  <div>
                    <h4 className="text-white font-medium">
                      Proposal & Agreement
                    </h4>
                    <p className="text-gray-400 text-sm">
                      I'll share a detailed proposal with pricing and timeline
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-purple-600/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-purple-400 text-sm">4</span>
                  </div>
                  <div>
                    <h4 className="text-white font-medium">
                      Start Development
                    </h4>
                    <p className="text-gray-400 text-sm">
                      Once approved, I'll start building your website
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-900/20 to-black/40 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20">
              <h3 className="text-xl font-bold text-white mb-4">
                Quick Questions?
              </h3>
              <p className="text-gray-400 text-sm mb-4">
                Prefer to connect directly?
              </p>
              <div className="space-y-3">
                <a
                  href="mailto:nafeesahadbly@gmail.com"
                  className="flex items-center gap-3 text-gray-300 hover:text-purple-400 transition"
                >
                  <i className="fas fa-envelope"></i>
                  <span>nafeesahadbly@gmail.com</span>
                </a>
                <a
                  href="https://github.com/nafeesxcoder"
                  target="_blank"
                  className="flex items-center gap-3 text-gray-300 hover:text-purple-400 transition"
                >
                  <i className="fab fa-github"></i>
                  <span>github.com/nafeesxcoder</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
