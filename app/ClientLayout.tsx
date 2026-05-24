"use client";

import { useState, useEffect } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import TopContactBar from "./components/TopContactBar";
import Preloader from "./components/Preloader";
import { Stars } from "./components/Stars";
import WhatsAppWrapper from "./components/WhatsAppWrapper";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showPreloader, setShowPreloader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPreloader(false);
    }, 4200);
    return () => clearTimeout(timer);
  }, []);

  if (showPreloader) {
    return <Preloader onComplete={() => setShowPreloader(false)} />;
  }

  return (
    <>
      <Stars />

      {/* TopContactBar */}
      <div className="fixed top-0 left-0 w-full z-[100]">
        <TopContactBar />
      </div>

      {/* Header */}
      <div className="fixed top-8 left-0 w-full z-40">
        <Header />
      </div>

      {/* Main Content */}
      <main className="min-h-screen pt-16 md:pt-28">{children}</main>

      {/* Footer */}
      <Footer />

      {/* WhatsApp Button */}
      <WhatsAppWrapper />
    </>
  );
}
