/* eslint-disable react/prop-types */
import { useEffect, useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

// Stars Component
interface StarProps {
  top: string;
  left: string;
  size: number;
  opacity: number;
}

const Star = ({ top, left, size, opacity }: StarProps) => (
  <div
    className="absolute rounded-full bg-white"
    style={{
      top,
      left,
      width: `${size}px`,
      height: `${size}px`,
      opacity,
    }}
  />
);

const StarsBg = () => {
  const stars = useMemo(() => {
    return Array.from({ length: 100 }, (_, i) => ({
      id: i,
      top: `${(i * 7.3 + 13) % 100}%`,
      left: `${(i * 11.7 + 23) % 100}%`,
      size: (i % 2) + 1,
      opacity: 0.5 + (i % 5) * 0.1,
    }));
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {stars.map((star) => (
        <Star
          key={star.id}
          top={star.top}
          left={star.left}
          size={star.size}
          opacity={star.opacity}
        />
      ))}
    </div>
  );
};

export default function Preloader({ onComplete }: { onComplete?: () => void }) {
  const [isVisible, setIsVisible] = useState(true);
  const [step, setStep] = useState(1);
  const [welcomeText, setWelcomeText] = useState("");
  const [companyText, setCompanyText] = useState("");

  const welcomeMsg = "Welcome to";
  const companyMsg = "Unique Web Layer";

  // Step 1: Type "Welcome to"
  useEffect(() => {
    if (step === 1) {
      let i = 0;
      const timer = setInterval(() => {
        if (i <= welcomeMsg.length) {
          setWelcomeText(welcomeMsg.slice(0, i));
          i++;
        } else {
          clearInterval(timer);
          setTimeout(() => setStep(2), 400);
        }
      }, 70);
      return () => clearInterval(timer);
    }
  }, [step]);

  // Step 2: Type company name
  useEffect(() => {
    if (step === 2) {
      let i = 0;
      const timer = setInterval(() => {
        if (i <= companyMsg.length) {
          setCompanyText(companyMsg.slice(0, i));
          i++;
        } else {
          clearInterval(timer);
        }
      }, 60);
      return () => clearInterval(timer);
    }
  }, [step]);

  // Splash duration
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => {
        if (onComplete) onComplete();
      }, 400);
    }, 4200);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 flex flex-col items-center justify-center z-[9999] overflow-hidden"
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
        >
          {/* Original Purple Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/30 to-black" />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-purple-950/20 via-transparent to-black/30" />

          {/* Purple Radial Glow - Original */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at center, rgba(147,51,234,0.2) 0%, transparent 70%)",
            }}
          />

          {/* Stars Background */}
          <StarsBg />

          {/* White Rotating Loader with Logo Inside */}
          <div className="relative z-10 mb-6">
            <div className="relative w-24 h-24">
              {/* Rotating Ring - White */}
              <motion.div
                className="w-full h-full rounded-full border-4 border-white/30"
                animate={{ rotate: 360 }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              >
                <div className="w-full h-full rounded-full border-t-4 border-white border-r-4" />
              </motion.div>

              {/* Pulsing Ring - White */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-white/40"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0, 0.5],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Center Logo */}
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  src="/favicon.png"
                  alt="Logo"
                  width={60}
                  height={60}
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>

          {/* White Bouncing Dots Loader */}
          <div className="relative z-10 flex gap-2 mb-8">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="w-2 h-2 bg-white/70 rounded-full"
                animate={{
                  y: [0, -10, 0],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 0.6,
                  repeat: Infinity,
                  delay: i * 0.15,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>

          {/* White Text Content */}
          <div className="relative z-10 text-center">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-white/80 text-lg sm:text-xl tracking-wide"
            >
              {welcomeText}
              {step === 1 && (
                <span className="animate-pulse inline-block w-0.5 h-4 bg-white/50 ml-1" />
              )}
            </motion.p>

            {step === 2 && (
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-3 text-white text-3xl sm:text-4xl md:text-5xl font-bold"
              >
                {companyText.split("").map((char, index) => (
                  <span
                    key={index}
                    className={`inline-block ${
                      char === " " ? "mx-1" : ""
                    } text-white`}
                  >
                    {char}
                  </span>
                ))}
                {companyText.length < companyMsg.length && (
                  <span className="animate-pulse inline-block w-0.5 h-7 bg-white/50 ml-1" />
                )}
              </motion.h1>
            )}
          </div>

          {/* White Progress Bar */}
          <motion.div
            className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-white/50 via-white to-white/50"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 4.2 }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
