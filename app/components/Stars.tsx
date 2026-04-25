"use client";

import { useMemo, useEffect, useState } from "react";

interface StarProps {
  top: string;
  left: string;
  size: number;
  opacity: number;
  delay: string;
  duration: string;
}

const Star: React.FC<StarProps> = ({
  top,
  left,
  size,
  opacity,
  delay,
  duration,
}) => (
  <div
    className="absolute rounded-full bg-white animate-twinkle"
    style={{
      top,
      left,
      width: `${size}px`,
      height: `${size}px`,
      opacity,
      animationDelay: delay,
      animationDuration: duration,
    }}
  />
);

export const Stars = () => {
  const [isClient, setIsClient] = useState(false);

  const stars = useMemo(() => {
    // Fixed stars with deterministic positions (no random)
    // This ensures server and client render the same thing
    return Array.from({ length: 150 }, (_, i) => ({
      id: i,
      top: `${(i * 7.3 + 13) % 100}%`,
      left: `${(i * 11.7 + 23) % 100}%`,
      size: (i % 3) + 1,
      opacity: 0.3 + ((i * 3) % 5) * 0.1,
      delay: `${i % 5}s`,
      duration: `${2 + (i % 4)}s`,
    }));
  }, []);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // During hydration, render nothing
  // After hydration, render stars with animations
  if (!isClient) {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute rounded-full bg-white opacity-50"
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
