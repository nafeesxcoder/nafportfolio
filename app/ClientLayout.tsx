"use client";

import { useState, useEffect } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import TopContactBar from "./components/TopContactBar";
import Preloader from "./components/Preloader";
import { Stars } from "./components/Stars";
import WhatsAppWrapper from "./components/WhatsAppWrapper";
import ClientChatBot from "./components/ClientChatBot";
import ScrollToTop from "./components/ScrollToTop";

/**
 * IMPORTANT (SEO): the page content is always rendered. The preloader sits on top
 * as an overlay and fades out. Previously the children were only mounted after a
 * 3 second timer, which meant Google — and the user's first paint — saw an empty
 * page. Never gate `children` behind the preloader again.
 */
export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showPreloader, setShowPreloader] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Show the intro animation once per browser session only.
    let alreadySeen = false;
    try {
      alreadySeen = sessionStorage.getItem("uwl_intro_seen") === "1";
    } catch {
      alreadySeen = false;
    }

    if (alreadySeen) {
      setShowPreloader(false);
      return;
    }

    const timer = setTimeout(() => {
      setShowPreloader(false);
      try {
        sessionStorage.setItem("uwl_intro_seen", "1");
      } catch {
        /* private mode — just skip remembering it */
      }
    }, 1400);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Overlay only — it never blocks the content underneath from rendering */}
      {mounted && showPreloader && (
        <Preloader onComplete={() => setShowPreloader(false)} />
      )}

      <Stars />

      {/* TopContactBar — desktop only */}
      <div className="fixed top-0 left-0 w-full z-[100] hidden md:block">
        <TopContactBar />
      </div>

      {/* Header — fixed on both mobile and desktop */}
      <div className="fixed top-0 md:top-8 left-0 w-full z-40">
        <Header />
      </div>

      {/* Main content — mobile: header height, desktop: contact bar + header */}
      <main className="min-h-screen pt-16 md:pt-28">{children}</main>

      <Footer />
      <WhatsAppWrapper />
      <ScrollToTop />

      {mounted && <ClientChatBot />}
    </>
  );
}
