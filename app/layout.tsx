import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Footer from "./components/Footer";
import Header from "./components/Header";
import TopContactBar from "./components/TopContactBar";
import { Stars } from "./components/Stars";
import WhatsAppWrapper from "./components/WhatsAppWrapper";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  preload: true,
});

export const viewport: Viewport = {
  themeColor: "#7c3aed",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://uniqueweblayer.com"),

  title: {
    default:
      "Unique Web Layer | Expert Web Development Agency - Business, E-commerce, SaaS, Custom Websites",
    template: "%s | Unique Web Layer",
  },

  description:
    "Unique Web Layer is a full-service web development agency based in India, delivering all types of websites worldwide. We build Business Websites, E-commerce Stores, SaaS Platforms, Portfolio Sites, Real Estate Websites, Restaurant Websites, LMS Portals, Booking Systems, and Custom Web Applications using React, Next.js, Node.js, and MERN Stack. Trusted by clients in USA, UK, Canada, Australia, UAE, and Europe.",

  keywords: [
    // ===== ALL WEBSITE TYPES WE BUILD =====
    "business website development",
    "ecommerce website development",
    "SaaS platform development",
    "portfolio website design",
    "real estate website development",
    "restaurant website development",
    "education LMS website",
    "booking system development",
    "membership website development",
    "landing page development",
    "blog website development",
    "corporate website design",
    "startup website development",
    "agency website design",
    "nonprofit website development",
    "personal portfolio website",
    "freelancer website design",
    "news website development",
    "forum website development",
    "directory website development",
    "job portal development",
    "social media platform development",
    "dating website development",
    "auction website development",
    "classified website development",
    "review website development",
    "wiki website development",
    "Q&A website development",
    "event website development",
    "wedding website development",
    "travel website development",
    "hotel website development",
    "fitness website development",
    "healthcare website development",
    "medical website development",
    "dentist website development",
    "lawyer website development",
    "consulting website development",
    "marketing agency website",
    "digital agency website",
    "creative agency website",
    "design agency website",

    // ===== TECHNOLOGY STACK =====
    "React.js development",
    "Next.js development",
    "Node.js development",
    "MERN stack development",
    "Full stack development",
    "Custom web application development",
    "Progressive web app development",
    "Single page application development",

    // ===== GLOBAL REACH =====
    "web development agency India",
    "hire web developer from India",
    "outsource web development to India",
    "offshore development India",
    "affordable web development worldwide",

    // ===== COUNTRY SPECIFIC (SERVING GLOBAL) =====
    "web developer for USA",
    "web developer for UK",
    "web developer for Canada",
    "web developer for Australia",
    "web developer for UAE",
    "web developer for Europe",
    "web developer for Germany",
    "web developer for France",
    "web developer for Singapore",

    // ===== CLIENT SEARCH INTENT =====
    "best web development agency",
    "top rated web developer",
    "professional website designer",
    "custom website development company",
    "end to end web development services",
    "complete website solutions provider",
  ],

  authors: [{ name: "Unique Web Layer", url: "https://uniqueweblayer.com" }],
  creator: "Unique Web Layer",
  publisher: "Unique Web Layer",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: "https://uniqueweblayer.com",
  },

  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      {
        url: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: ["/favicon.ico"],
  },

  manifest: "/site.webmanifest",

  openGraph: {
    title:
      "Unique Web Layer | Complete Web Development Agency - All Types of Websites",
    description:
      "We build every type of website: Business, E-commerce, SaaS, Portfolio, Real Estate, Restaurant, LMS, Booking Systems & more. Serving clients worldwide from India.",
    url: "https://uniqueweblayer.com",
    siteName: "Unique Web Layer",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Unique Web Layer - Complete Web Development Agency - All Types of Websites",
        type: "image/jpeg",
      },
    ],
    emails: ["info@uniqueweblayer.com"],
    phoneNumbers: ["+918800278502", "+18588791912"],
    countryName: "India",
  },

  twitter: {
    card: "summary_large_image",
    title: "Unique Web Layer | Full-Service Web Development Agency",
    description:
      "Business Websites • E-commerce • SaaS • Portfolio • Real Estate • Restaurant • LMS • Booking Systems • Custom Web Apps",
    images: ["/og-image.jpg"],
    creator: "@uniqueweblayer",
    site: "@uniqueweblayer",
  },

  verification: {
    google: "your-google-verification-code",
  },
};

// Complete JSON-LD Schema for all website types
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Unique Web Layer",
  alternateName: "UWL",
  url: "https://uniqueweblayer.com",
  logo: "https://uniqueweblayer.com/logo.png",
  description:
    "Full-service web development agency building all types of websites. Specializing in Business, E-commerce, SaaS, Portfolio, Real Estate, Restaurant, LMS, and Custom Web Applications.",
  email: "info@uniqueweblayer.com",
  telephone: "+91-8800278502",
  address: {
    "@type": "PostalAddress",
    addressCountry: "IN",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-8800278502",
    contactType: "customer service",
    availableLanguage: ["English", "Hindi"],
    areaServed: [
      "Worldwide",
      "USA",
      "UK",
      "Canada",
      "Australia",
      "UAE",
      "Europe",
    ],
  },
  sameAs: [
    "https://facebook.com/uniqueweblayer",
    "https://instagram.com/uniqueweblayer",
    "https://twitter.com/uniqueweblayer",
    "https://linkedin.com/company/uniqueweblayer",
  ],
  areaServed: "Worldwide",
};

// Service schema for ALL website types we build
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Web Development Services",
  provider: {
    "@type": "Organization",
    name: "Unique Web Layer",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressCountry: "IN",
      },
    },
  },
  areaServed: [
    "Worldwide",
    "USA",
    "UK",
    "Canada",
    "Australia",
    "UAE",
    "Europe",
    "Germany",
    "France",
    "Singapore",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Complete Website Development Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Business Website Development",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "E-commerce Website Development",
        },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "SaaS Platform Development" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Portfolio Website Design" },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Real Estate Website Development",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Restaurant Website Development",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "LMS/Education Website Development",
        },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Booking/Appointment System" },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Membership Website Development",
        },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Landing Page Development" },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Custom Web Application Development",
        },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "React.js Development" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Next.js Development" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Node.js Development" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "MERN Stack Development" },
      },
    ],
  },
};

// ItemList schema for better SEO
const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Website Development Services We Offer",
  numberOfItems: 15,
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Business Website" },
    { "@type": "ListItem", position: 2, name: "E-commerce Website" },
    { "@type": "ListItem", position: 3, name: "SaaS Platform" },
    { "@type": "ListItem", position: 4, name: "Portfolio Website" },
    { "@type": "ListItem", position: 5, name: "Real Estate Website" },
    { "@type": "ListItem", position: 6, name: "Restaurant Website" },
    { "@type": "ListItem", position: 7, name: "LMS Portal" },
    { "@type": "ListItem", position: 8, name: "Booking System" },
    { "@type": "ListItem", position: 9, name: "Membership Website" },
    { "@type": "ListItem", position: 10, name: "Landing Page" },
    { "@type": "ListItem", position: 11, name: "Custom Web App" },
    { "@type": "ListItem", position: 12, name: "Corporate Website" },
    { "@type": "ListItem", position: 13, name: "Startup Website" },
    { "@type": "ListItem", position: 14, name: "News Portal" },
    { "@type": "ListItem", position: 15, name: "Job Portal" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="m-0 p-0">
      <head>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
        />

        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* DNS Prefetch */}
        <link rel="dns-prefetch" href="https://images.unsplash.com" />

        {/* Global SEO Meta Tags */}
        <meta name="author" content="Unique Web Layer" />
        <meta name="copyright" content="Unique Web Layer" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="General" />
        <meta name="geo.region" content="IN" />
        <meta name="geo.placename" content="India" />
        <meta
          name="target_country"
          content="US,GB,CA,AU,AE,DE,FR,SG,Worldwide"
        />
      </head>

      <body className={`${inter.className} antialiased bg-black m-0 p-0`}>
        <Stars />

        <div className="fixed top-0 left-0 w-full z-[100]">
          <TopContactBar />
        </div>

        <div className="fixed top-8 left-0 w-full z-40">
          <Header />
        </div>

        <main className="min-h-screen pt-16 md:pt-28">{children}</main>

        <Footer />
        {/* ✅ WhatsApp Button - Shows on all pages */}
        <WhatsAppWrapper />
      </body>
    </html>
  );
}
