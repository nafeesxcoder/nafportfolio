"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

const Preloader = dynamic(() => import("./Preloader"), {
  ssr: false,
  loading: () => null,
});

export default function PreloaderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4200);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Preloader />;
  }

  return <>{children}</>;
}
