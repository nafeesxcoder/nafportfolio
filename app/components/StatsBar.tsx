"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Stars } from "./Stars";
import { FaUsers, FaCode, FaLayerGroup, FaSmile } from "react-icons/fa";

export default function StatsBar() {
  const cardRef = useRef<HTMLDivElement>(null);
  const cardAsideRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true });
  const cardsAsideView = useInView(cardAsideRef, { once: true });

  const cardData = [
    {
      id: 1,
      value: 10,
      suffix: "+",
      title: "Projects Completed",
      description: "Successfully delivered with excellence",
      icon: FaCode,
      color: "from-purple-600 to-purple-800",
    },
    {
      id: 2,
      value: 6,
      suffix: "+",
      title: "Technologies",
      description: "Tech stack mastered",
      icon: FaLayerGroup,
      color: "from-purple-500 to-indigo-600",
    },
    {
      id: 3,
      value: 5,
      suffix: "+",
      title: "Happy Clients",
      description: "Trusted worldwide",
      icon: FaSmile,
      color: "from-pink-500 to-purple-600",
    },
    {
      id: 4,
      value: 100,
      suffix: "%",
      title: "Client Satisfaction",
      description: "Quality guaranteed",
      icon: FaUsers,
      color: "from-purple-600 to-pink-500",
    },
  ];

  return (
    <div className="py-16 bg-gradient-to-b from-black to-black relative z-20 overflow-hidden">
      <div className="px-4 md:px-8 grid grid-cols-1 md:grid-cols-[25%,auto] gap-8 relative">
        {/* Stars Background */}
        <Stars />

        {/* Section Title */}
        <motion.div
          ref={cardAsideRef}
          initial={{ x: -100, opacity: 0 }}
          animate={{
            x: cardsAsideView ? 0 : -100,
            opacity: cardsAsideView ? 1 : 0,
          }}
          transition={{ duration: 0.6 }}
          className="flex justify-center flex-col relative z-10 px-5 md:px-0"
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
            My Achievements
          </h2>
          <p className="text-gray-400 text-sm md:text-base mt-2 flex items-center">
            Numbers that define my journey.
            <span className="ml-2 text-purple-400 text-2xl">&rarr;</span>
          </p>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          ref={cardRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
        >
          {cardData.map((card, index) => (
            <motion.div
              key={card.id}
              className="relative z-10 bg-white/5 backdrop-blur-2xl p-5 min-h-[220px] flex flex-col justify-center rounded-2xl shadow-2xl border border-white/10 hover:border-white/30 transition-all duration-300 group"
              initial={{ y: 400, opacity: 0 }}
              animate={{
                y: isInView ? 0 : 400,
                opacity: isInView ? 1 : 0,
              }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              {/* Icon */}
              <div
                className={`w-14 h-14 rounded-full bg-gradient-to-br ${card.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}
              >
                <card.icon className="text-white text-xl" />
              </div>

              {/* Value Counter */}
              <div className="mb-1">
                <span className="text-3xl md:text-4xl font-bold text-white">
                  {card.value}
                </span>
                <span className="text-2xl md:text-3xl font-bold text-purple-400">
                  {card.suffix}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-base font-semibold text-white mb-1">
                {card.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-xs">{card.description}</p>

              {/* Progress Bar */}
              <div className="w-full h-0.5 bg-gray-800 rounded-full mt-3 overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                  initial={{ width: "0%" }}
                  animate={{ width: isInView ? "100%" : "0%" }}
                  transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
