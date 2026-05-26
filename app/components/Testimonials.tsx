"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { HiOutlineSparkles } from "react-icons/hi2";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Image from "next/image";
import { Stars } from "./Stars";

type Testimonial = {
  name: string;
  role: string;
  location: string;
  rating: number;
  headline: string;
  quote: string;
  highlights: string[];
  initials: string;
  accent: string;
  logoSrc: string;
};

export default function Testimonials() {
  const testimonials = useMemo<Testimonial[]>(
    () => [
      {
        name: "Sarah Johnson",
        role: "Founder, Bloom Cosmetics",
        location: "Los Angeles, CA",
        rating: 5,
        headline: "Finally, a website that actually brings in sales!",
        quote:
          "I had been struggling with my old website for months. Unique Web Layer completely transformed my online store. Sales went up 40% in the first month alone. The team was super responsive and understood exactly what I needed. Worth every penny!",
        highlights: ["E-commerce Website", "Payment Integration", "SEO"],
        initials: "SJ",
        accent: "from-pink-500 via-rose-500 to-red-500",
        logoSrc: "/fashionhub.png",
      },
      {
        name: "Michael Chen",
        role: "CEO, TechFlow Solutions",
        location: "Austin, TX",
        rating: 5,
        headline: "Best investment we made this year.",
        quote:
          "We needed a complete overhaul of our SaaS platform. Unique Web Layer delivered beyond expectations. The platform is faster, more user-friendly, and our customers love the new interface. Support has been excellent even after launch.",
        highlights: ["SaaS Development", "React", "Node.js"],
        initials: "MC",
        accent: "from-blue-500 via-cyan-500 to-teal-500",
        logoSrc: "/techstart.png",
      },
      {
        name: "Emily Rodriguez",
        role: "Owner, The Daily Brew Cafe",
        location: "Portland, OR",
        rating: 5,
        headline: "Online orders skyrocketed after new website.",
        quote:
          "I was skeptical about investing in a new website, but Unique Web Layer changed my mind. They built an online ordering system that's so easy to use. My regular customers love it, and I'm getting new orders every day. Highly recommend!",
        highlights: ["Online Ordering", "Mobile Friendly", "Fast Delivery"],
        initials: "ER",
        accent: "from-orange-500 via-amber-500 to-yellow-500",
        logoSrc: "/Mountain.png",
      },
      {
        name: "David Thompson",
        role: "Broker, Thompson Realty",
        location: "Miami, FL",
        rating: 5,
        headline: "My listings finally get the attention they deserve.",
        quote:
          "After switching to Unique Web Layer, my property listings look amazing. The website is modern, fast, and clients keep complimenting how easy it is to browse properties. I've already referred three other agents to them!",
        highlights: ["Real Estate Website", "Property Search", "Lead Capture"],
        initials: "DT",
        accent: "from-emerald-500 via-teal-500 to-cyan-500",
        logoSrc: "/realtyplus.png",
      },
      {
        name: "Jessica Williams",
        role: "Marketing Director, West Coast Properties",
        location: "San Diego, CA",
        rating: 5,
        headline: "Transformed our entire online presence.",
        quote:
          "Our old website was embarrassing. Unique Web Layer created a stunning platform that showcases our commercial properties beautifully. The team was patient, professional, and delivered ahead of schedule. Our inquiry rate has doubled!",
        highlights: [
          "Commercial Real Estate",
          "Property Showcase",
          "Analytics",
        ],
        initials: "JW",
        accent: "from-purple-500 via-violet-500 to-indigo-500",
        logoSrc: "/calcoast2.png",
      },
      {
        name: "Dr. Robert Miller",
        role: "Founder, Miller Medical Group",
        location: "Boston, MA",
        rating: 5,
        headline: "Patients love our new booking system.",
        quote:
          "We needed a secure, easy-to-use website for our medical practice. Unique Web Layer delivered exactly what we asked for. Online appointments have increased 60%, and patients find it much easier to get information. Fantastic work!",
        highlights: ["Healthcare Website", "Appointment Booking", "HIPAA"],
        initials: "RM",
        accent: "from-sky-500 via-blue-500 to-indigo-500",
        logoSrc: "/healthfirst.png",
      },
    ],
    [],
  );

  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const active = testimonials[activeIndex];

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => window.clearInterval(id);
  }, [paused, testimonials.length]);

  const goPrev = () =>
    setActiveIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  const goNext = () =>
    setActiveIndex((prev) => (prev + 1) % testimonials.length);

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8"
    >
      {/* Stars Background */}
      <Stars />

      {/* Animated Stars Layer */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-0.5 h-0.5 bg-white/20 rounded-full"
            initial={{
              x: Math.random() * 100 + "%",
              y: Math.random() * 100 + "%",
              opacity: 0.1 + Math.random() * 0.5,
            }}
            animate={{
              opacity: [0.1, 0.5, 0.1],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[42rem] h-[42rem] rounded-full bg-purple-600/20 blur-[160px]" />
        <div className="absolute bottom-0 right-0 w-[26rem] h-[26rem] rounded-full bg-pink-500/10 blur-[140px]" />
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Header - Fully Responsive */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/40 bg-purple-600/10 backdrop-blur-sm">
            <HiOutlineSparkles className="text-purple-300" />
            <span className="text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase text-purple-200">
              What Our Clients Say
            </span>
          </div>

          <h2 className="mt-5 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
              Real Stories. Real Results.
            </span>
          </h2>

          <p className="mt-3 text-gray-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4">
            Don't just take our word for it — hear from businesses we've helped
            grow.
          </p>
        </div>

        {/* Featured card - Centered on mobile */}
        <div
          className="relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="relative rounded-2xl sm:rounded-3xl p-[1.5px] bg-gradient-to-br from-purple-600/70 via-white/10 to-pink-500/50 shadow-[0_20px_80px_-20px_rgba(146,52,235,0.45)]">
            <div className="relative rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#120726]/95 via-[#0b0418]/95 to-black/95 backdrop-blur-xl p-5 sm:p-8 md:p-12 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -24, filter: "blur(6px)" }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="flex flex-col md:grid md:grid-cols-[auto_1fr] gap-6 md:gap-10 items-center md:items-start"
                >
                  {/* Left column: logo + rating - Centered on mobile */}
                  <div className="flex flex-col items-center md:items-start gap-4">
                    <div className="relative">
                      <div
                        className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${active.accent} blur-xl opacity-70`}
                      />
                      <div
                        className={`relative h-20 w-20 sm:h-24 sm:w-24 md:h-28 md:w-28 rounded-2xl bg-gradient-to-br ${active.accent} flex items-center justify-center p-2 sm:p-3 ring-1 ring-white/20 overflow-hidden mx-auto md:mx-0`}
                      >
                        <Image
                          src={active.logoSrc}
                          alt={`${active.name} logo`}
                          width={80}
                          height={80}
                          className="w-full h-full object-contain rounded-xl"
                        />
                      </div>
                    </div>

                    <div className="text-center md:text-left">
                      <div className="flex items-center justify-center md:justify-start gap-1.5">
                        {Array.from({ length: 5 }).map((_, i) => {
                          const filled = i < Math.floor(active.rating);
                          const half =
                            !filled &&
                            i < Math.ceil(active.rating) &&
                            active.rating % 1 !== 0;
                          return (
                            <RatingBar
                              key={i}
                              state={filled ? "full" : half ? "half" : "empty"}
                            />
                          );
                        })}
                        <span className="ml-2 text-sm font-semibold text-purple-200">
                          {active.rating.toFixed(1)}
                        </span>
                      </div>
                      <p className="mt-2 text-[10px] sm:text-xs uppercase tracking-wider text-gray-400">
                        Verified Client
                      </p>
                    </div>
                  </div>

                  {/* Right column: quote */}
                  <div className="text-center md:text-left">
                    <span className="block text-5xl sm:text-6xl md:text-7xl leading-none font-serif text-purple-500/60 mb-2">
                      &ldquo;
                    </span>

                    <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white leading-snug mb-3 md:mb-4">
                      {active.headline}
                    </h3>

                    <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed">
                      {active.quote}
                    </p>

                    <div className="mt-4 md:mt-6 flex flex-wrap gap-2 justify-center md:justify-start">
                      {active.highlights.map((chip) => (
                        <span
                          key={chip}
                          className="px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-[10px] sm:text-xs font-medium bg-white/5 border border-purple-500/30 text-purple-100 hover:bg-purple-600/20 transition"
                        >
                          {chip}
                        </span>
                      ))}
                    </div>

                    <div className="mt-6 md:mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 md:pt-5 border-t border-white/10">
                      <div className="text-center sm:text-left">
                        <p className="text-white font-semibold text-base sm:text-lg">
                          {active.name}
                        </p>
                        <p className="text-xs sm:text-sm text-gray-400">
                          {active.role}
                        </p>
                        <p className="text-[10px] sm:text-xs text-purple-300 mt-0.5">
                          {active.location}
                        </p>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          aria-label="Previous testimonial"
                          onClick={goPrev}
                          className="h-8 w-8 sm:h-10 sm:w-10 rounded-full border border-white/15 bg-white/5 text-white hover:bg-purple-600/20 hover:border-purple-500/60 transition flex items-center justify-center"
                        >
                          <FiChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                        </button>
                        <button
                          type="button"
                          aria-label="Next testimonial"
                          onClick={goNext}
                          className="h-8 w-8 sm:h-10 sm:w-10 rounded-full border border-purple-500/60 bg-purple-600/30 text-white hover:bg-purple-600/50 transition flex items-center justify-center"
                        >
                          <FiChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Client picker row with logos - Centered on mobile */}
          <div className="mt-6 sm:mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3">
            {testimonials.map((t, i) => {
              const isActive = i === activeIndex;
              return (
                <button
                  key={t.name}
                  type="button"
                  onClick={() => setActiveIndex(i)}
                  className={`group relative text-left rounded-xl p-2 sm:p-3 border transition-all duration-300 ${
                    isActive
                      ? "border-purple-500/60 bg-gradient-to-br from-purple-600/25 to-transparent shadow-[0_8px_30px_-10px_rgba(146,52,235,0.5)]"
                      : "border-white/10 bg-white/[0.03] hover:border-purple-500/30 hover:bg-white/[0.06]"
                  }`}
                >
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div
                      className={`h-8 w-8 sm:h-10 sm:w-10 shrink-0 rounded-lg bg-gradient-to-br ${t.accent} flex items-center justify-center p-1 sm:p-1.5 ring-1 ring-white/15 overflow-hidden`}
                    >
                      <Image
                        src={t.logoSrc}
                        alt={`${t.name} logo`}
                        width={32}
                        height={32}
                        className="w-full h-full object-contain rounded"
                      />
                    </div>
                    <div className="min-w-0">
                      <p
                        className={`text-xs sm:text-sm font-semibold truncate ${
                          isActive ? "text-white" : "text-gray-200"
                        }`}
                      >
                        {t.name.split(" ")[0]}
                      </p>
                      <p className="text-[9px] sm:text-[11px] text-gray-400 truncate">
                        {t.location.split(",")[0]}
                      </p>
                    </div>
                  </div>

                  {/* Progress indicator on active */}
                  {isActive && !paused && (
                    <motion.span
                      key={`bar-${activeIndex}`}
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 6, ease: "linear" }}
                      className="absolute left-2 sm:left-3 right-2 sm:right-3 bottom-1 sm:bottom-1.5 h-0.5 rounded-full bg-gradient-to-r from-purple-500 via-pink-400 to-purple-300"
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function RatingBar({ state }: { state: "full" | "half" | "empty" }) {
  return (
    <span className="relative inline-block h-2 w-5 sm:h-2.5 sm:w-6 rounded-full bg-white/10 overflow-hidden">
      <span
        className={`absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-purple-500 to-pink-400 ${
          state === "full" ? "w-full" : state === "half" ? "w-1/2" : "w-0"
        }`}
      />
    </span>
  );
}
