"use client";

import dynamic from "next/dynamic";

// Dynamically import with no SSR to avoid hydration issues
const WhatsAppFloat = dynamic(
  () => import("./WhatsAppFloat").then((mod) => mod.WhatsAppFloat),
  { ssr: false },
);

export default function WhatsAppWrapper() {
  return (
    <WhatsAppFloat
      phoneNumber="+917409233994"
      message="Hello! I need help with web development. Can you assist me?"
      position="bottom-right"
      pulseAnimation={true}
    />
  );
}
