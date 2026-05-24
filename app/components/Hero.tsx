"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Hero() {
  const [stars, setStars] = useState<{ id: number; x: number; y: number }[]>(
    [],
  );

  useEffect(() => {
    // Generate stars along a line
    const generateStars = () => {
      const newStars = [];
      for (let i = 0; i < 30; i++) {
        newStars.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
        });
      }
      setStars(newStars);
    };
    generateStars();
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-black via-purple-900/30 to-black text-white py-8 md:py-12 lg:py-16 overflow-hidden">
      {/* Animated Stars coming from line */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Horizontal line in center */}
        <div className="absolute left-0 right-0 top-1/2 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

        {stars.map((star) => (
          <motion.div
            key={star.id}
            className="absolute w-0.5 h-0.5 bg-white rounded-full"
            initial={{
              x: `${star.x}%`,
              y: "50%",
              opacity: 0,
              scale: 0,
            }}
            animate={{
              y: [`${star.y}%`, `${star.y + (Math.random() - 0.5) * 20}%`],
              opacity: [0, 0.8, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeOut",
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-5 md:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-6">
          {/* Left: Name & Title */}
          <div className="space-y-2">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight"
            >
              NAFEES AHMAD
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center gap-2 flex-wrap"
            >
              <span className="bg-purple-500/20 backdrop-blur-sm text-purple-200 px-3 py-1 rounded-full text-xs font-medium border border-purple-400/30">
                <i className="fas fa-code mr-1 text-xs"></i>MERN STACK DEVELOPER
              </span>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-300 max-w-xl text-sm md:text-base mt-2 leading-relaxed"
            >
              Building scalable full‑stack web apps with modern MERN
              architecture. Passionate about clean UI, REST APIs, and real-world
              solutions.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex gap-3 pt-1"
            >
              <a
                href="https://www.linkedin.com/in/nafeesahmad/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-200 hover:text-white transition bg-white/10 p-1.5 rounded-full w-7 h-7 flex items-center justify-center"
              >
                <i className="fab fa-linkedin-in text-xs"></i>
              </a>
              <a
                href="https://github.com/nafeesahmad"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-200 hover:text-white transition bg-white/10 p-1.5 rounded-full w-7 h-7 flex items-center justify-center"
              >
                <i className="fab fa-github text-xs"></i>
              </a>
            </motion.div>
          </div>

          {/* Right: Contact Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white/10 backdrop-blur-md rounded-xl p-4 md:p-5 w-full lg:w-72 border border-white/20 shadow-xl"
          >
            <div className="flex items-center gap-2 text-white/90 border-b border-white/20 pb-2 mb-2">
              <i className="fas fa-address-card text-purple-300 text-base"></i>
              <h3 className="font-semibold text-base">Contact Info</h3>
            </div>
            <div className="space-y-2 text-xs md:text-sm">
              <div className="flex items-start gap-2">
                <i className="fas fa-phone-alt mt-0.5 text-purple-300 w-4 text-xs"></i>
                <span className="break-all">+92-7420239944</span>
              </div>
              <div className="flex items-start gap-2">
                <i className="fas fa-envelope mt-0.5 text-purple-300 w-4 text-xs"></i>
                <span className="break-all">rafeetashali@gmail.com</span>
              </div>
              <div className="flex items-start gap-2">
                <i className="fas fa-map-marker-alt mt-0.5 text-purple-300 w-4 text-xs"></i>
                <span>Bareilly, Uttar Pradesh, India</span>
              </div>
              <div className="flex gap-3 pt-1 border-t border-white/20 mt-1">
                <a
                  href="https://www.linkedin.com/in/nafeesahmad/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-200 hover:text-white text-xs flex items-center gap-1"
                >
                  <i className="fab fa-linkedin text-xs"></i> LinkedIn
                </a>
                <a
                  href="https://github.com/nafeesahmad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-200 hover:text-white text-xs flex items-center gap-1"
                >
                  <i className="fab fa-github text-xs"></i> GitHub
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
