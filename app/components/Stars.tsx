"use client";

import { useMemo, useEffect, useState } from "react";
import { motion } from "framer-motion";

interface StarProps {
  top: string;
  left: string;
  size: number;
  opacity: number;
  delay: number;
  duration: number;
}

const Star: React.FC<StarProps> = ({
  top,
  left,
  size,
  opacity,
  delay,
  duration,
}) => (
  <motion.div
    className="absolute rounded-full bg-white"
    style={{
      top,
      left,
      width: `${size}px`,
      height: `${size}px`,
      opacity,
    }}
    animate={{
      opacity: [opacity, opacity * 1.5, opacity],
    }}
    transition={{
      duration: duration,
      repeat: Infinity,
      delay: delay,
      ease: "easeInOut",
    }}
  />
);

export const Stars = () => {
  const [isClient, setIsClient] = useState(false);

  // Generate stars - simple and clean like preloader
  const stars = useMemo(() => {
    const starArray = [];
    const starCount = 150;

    for (let i = 0; i < starCount; i++) {
      starArray.push({
        id: i,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        size: Math.random() * 2 + 1, // 1-3px
        opacity: 0.2 + Math.random() * 0.5,
        delay: Math.random() * 5,
        duration: 2 + Math.random() * 3,
      });
    }

    return starArray;
  }, []);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // During hydration, render static stars
  if (!isClient) {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute rounded-full bg-white/30"
            style={{
              top: star.top,
              left: star.left,
              width: `${star.size}px`,
              height: `${star.size}px`,
            }}
          />
        ))}
      </div>
    );
  }

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {stars.map((star) => (
        <Star key={star.id} {...star} />
      ))}
    </div>
  );
};
