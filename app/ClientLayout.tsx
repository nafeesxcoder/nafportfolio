"use client";

import { useState, useEffect, useRef } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import TopContactBar from "./components/TopContactBar";
import Preloader from "./components/Preloader";
import { Stars } from "./components/Stars";
import WhatsAppWrapper from "./components/WhatsAppWrapper";
import ClientChatBot from "./components/ClientChatBot";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showPreloader, setShowPreloader] = useState(true);
  const [mounted, setMounted] = useState(false);
  const aiSupportRef = useRef<any>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPreloader(false);
    }, 3000);

    if (aiSupportRef.current) {
      (window as any).__AI_SUPPORT_REF__ = aiSupportRef.current;
      window.dispatchEvent(new Event("aiSupportReady"));
    }

    return () => clearTimeout(timer);
  }, []);

  // Set mounted to true after component mounts (hydration fix)
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      {showPreloader && (
        <Preloader onComplete={() => setShowPreloader(false)} />
      )}

      {!showPreloader && (
        <>
          <Stars />

          {/* TopContactBar - Hidden on mobile, visible on desktop */}
          <div className="fixed top-0 left-0 w-full z-[100] hidden md:block">
            <TopContactBar />
          </div>

          {/* Header - Fixed at top for both mobile and desktop */}
          {/* On desktop: top-8 (below TopContactBar), On mobile: top-0 */}
          <div className="fixed top-0 md:top-8 left-0 w-full z-40">
            <Header />
          </div>

          {/* Main Content - Adjust padding based on device */}
          {/* Mobile: pt-16 (header height), Desktop: pt-28 (TopContactBar + header) */}
          <main className="min-h-screen pt-16 md:pt-28">{children}</main>

          <Footer />
          <WhatsAppWrapper />

          {/* AI ChatBot - Only show after mounted to avoid hydration issues */}
          {mounted && <ClientChatBot />}
        </>
      )}
    </>
  );
}
