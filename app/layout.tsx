import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Stars } from "./components/Stars";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Unique Web Layer | Business Website Maker & Web Development Services",

  description:
    "Unique Web Layer (uniqueweblayer.com) is a professional web development agency in India. We build business websites, e-commerce stores, landing pages, SaaS platforms, and custom MERN stack applications that are fast, SEO optimized, and high converting.",

  keywords: [
    "Unique Web Layer",
    "uniqueweblayer.com",
    "business website maker",
    "website development services",
    "website developer India",
    "MERN stack developer",
    "React developer",
    "Next.js developer",
    "freelance web developer",
    "ecommerce website maker",
    "landing page developer",
    "SEO optimized websites",
    "web development agency",
    "hire web developer",
  ],

  authors: [{ name: "Unique Web Layer" }],
  creator: "Unique Web Layer",
  publisher: "Unique Web Layer",

  metadataBase: new URL("https://uniqueweblayer.com"),

  openGraph: {
    title: "Unique Web Layer | Business Website Maker",
    description:
      "We build fast, SEO optimized business websites, e-commerce stores & SaaS platforms using MERN Stack & Next.js.",
    url: "https://uniqueweblayer.com",
    siteName: "Unique Web Layer",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Unique Web Layer - Web Development Agency",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Unique Web Layer | Website Development Services",
    description:
      "Professional web development services using React, Node.js, Next.js & MERN Stack.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        {/* Font Awesome */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        />

        {/* Viewport */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* SEO extra boost */}
        <meta name="theme-color" content="#7c3aed" />
        <meta name="author" content="Unique Web Layer" />
      </head>

      <body className={`${inter.className} custom-scrollbar antialiased`}>
        <Stars />
        <div className="relative z-10">
          <Header />
          <main className="min-h-screen pt-20">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
