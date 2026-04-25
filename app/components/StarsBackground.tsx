"use client";

import { useEffect, useState } from "react";

interface Star {
  id: number;
  left: string;
  top: string;
  size: number;
  delay: string;
}

export default function StarsBackground() {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const generatedStars: Star[] = Array.from({ length: 150 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: 1 + Math.random() * 2.5,
      delay: `${Math.random() * 8}s`,
    }));
    setStars(generatedStars);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-950 via-slate-900 to-black"></div>

      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute bg-white rounded-full animate-pulse"
          style={{
            left: star.left,
            top: star.top,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: 0.3 + Math.random() * 0.5,
            animationDelay: star.delay,
          }}
        />
      ))}

      <style jsx>{`
        @keyframes pulse {
          0%,
          100% {
            opacity: 0.2;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.3);
          }
        }
        .animate-pulse {
          animation: pulse 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
