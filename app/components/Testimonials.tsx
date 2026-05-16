"use client";

import { useState, useRef, useEffect } from "react";
import { Stars } from "./Stars";

export default function Testimonials() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef(null);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "CEO, TechStart Solutions",
      company: "TechStart Solutions",
      image: "https://randomuser.me/api/portraits/women/1.jpg",
      rating: 5,
      text: "Great work, very professional and fast delivery! Nafees understood our requirements perfectly and delivered ahead of schedule. The website is clean, responsive, and exactly what we needed. Highly recommend!",
      project: "E-Commerce Website",
      location: "United States",
      icon: "fa-building",
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "Founder, DigitalGrowth",
      company: "DigitalGrowth",
      image: "https://randomuser.me/api/portraits/men/2.jpg",
      rating: 5,
      text: "Outstanding developer! Nafees built our company portfolio website with amazing attention to detail. The code is clean and well-structured. Communication was excellent throughout the project. Will definitely work again!",
      project: "Portfolio Website",
      location: "Canada",
      icon: "fa-rocket",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      position: "Marketing Director, GlobalBrands",
      company: "GlobalBrands",
      image: "https://randomuser.me/api/portraits/women/3.jpg",
      rating: 5,
      text: "Very impressed with the quality and speed of delivery. Nafees created a stunning landing page that increased our conversion rate by 40%. Professional, responsive, and truly cares about client success!",
      project: "Landing Page",
      location: "United Kingdom",
      icon: "fa-chart-line",
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

  // Auto slide every 5 seconds
  useEffect(() => {
    if (!isVisible) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isVisible, testimonials.length]);

  const currentTestimonial = testimonials[activeIndex];

  return (
    <section ref={sectionRef} className="relative py-20 overflow-hidden">
      {/* Black Background */}
      <div className="absolute inset-0 bg-black" />
      <Stars />
      <div className="absolute inset-0 bg-gradient-to-b from-purple-950/10 via-transparent to-purple-950/10 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-12 transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <div className="inline-flex items-center gap-2 bg-purple-600/10 backdrop-blur-sm px-4 py-2 rounded-full mb-4 border border-purple-500/20">
            <i className="fas fa-star text-purple-400 text-sm"></i>
            <span className="text-sm font-medium text-purple-300">
              Testimonials
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
            What Clients Say
          </h2>
          <p className="text-gray-500 mt-2 text-sm max-w-2xl mx-auto">
            Trusted by clients worldwide
          </p>
        </div>

        {/* Main Testimonial Card */}
        <div
          className={`transition-all duration-700 delay-200 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <div className="relative bg-gradient-to-br from-purple-900/20 to-black/40 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20">
            {/* Quote Icon Background */}
            <div className="absolute top-6 right-6 opacity-10">
              <i className="fas fa-quote-right text-6xl text-purple-400"></i>
            </div>

            {/* Rating Stars */}
            <div className="flex gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <i key={i} className="fas fa-star text-yellow-500 text-sm"></i>
              ))}
            </div>

            {/* Testimonial Text */}
            <p className="text-gray-300 text-lg leading-relaxed mb-8 relative z-10">
              "{currentTestimonial.text}"
            </p>

            {/* Client Info */}
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-4">
                {/* Client Image */}
                <div className="w-14 h-14 rounded-full overflow-hidden bg-gradient-to-br from-purple-600 to-pink-600 p-0.5">
                  <img
                    src={currentTestimonial.image}
                    alt={currentTestimonial.name}
                    className="w-full h-full rounded-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = `https://ui-avatars.com/api/?name=${currentTestimonial.name.replace(" ", "+")}&background=8b5cf6&color=fff`;
                    }}
                  />
                </div>

                <div>
                  <h4 className="text-white font-semibold text-lg">
                    {currentTestimonial.name}
                  </h4>
                  <p className="text-gray-400 text-sm">
                    {currentTestimonial.position}
                  </p>
                  <div className="flex items-center gap-2 mt-1">
                    <i className="fas fa-map-marker-alt text-purple-400 text-xs"></i>
                    <span className="text-gray-500 text-xs">
                      {currentTestimonial.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Project Badge */}
              <div className="flex items-center gap-2 bg-purple-600/20 px-3 py-1.5 rounded-full border border-purple-500/30">
                <i
                  className={`fas ${currentTestimonial.icon} text-purple-400 text-xs`}
                ></i>
                <span className="text-gray-300 text-xs">
                  {currentTestimonial.project}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`transition-all duration-300 rounded-full ${
                activeIndex === idx
                  ? "w-8 h-2 bg-purple-500"
                  : "w-2 h-2 bg-white/30 hover:bg-white/50"
              }`}
            />
          ))}
        </div>

        {/* Additional Stats Badge */}
        <div
          className={`text-center mt-10 transition-all duration-700 delay-500 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <div className="inline-flex items-center gap-4 bg-white/5 backdrop-blur-sm px-6 py-3 rounded-full border border-white/10">
            <div className="flex items-center gap-2">
              <i className="fas fa-smile text-purple-400"></i>
              <span className="text-gray-300 text-sm">30+ Happy Clients</span>
            </div>
            <div className="w-px h-4 bg-white/20"></div>
            <div className="flex items-center gap-2">
              <i className="fas fa-star text-yellow-500"></i>
              <span className="text-gray-300 text-sm">5 Star Rating</span>
            </div>
            <div className="w-px h-4 bg-white/20"></div>
            <div className="flex items-center gap-2">
              <i className="fas fa-globe text-purple-400"></i>
              <span className="text-gray-300 text-sm">Global Clients</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .delay-200 {
          transition-delay: 0.2s;
        }
        .delay-500 {
          transition-delay: 0.5s;
        }
      `}</style>
    </section>
  );
}
