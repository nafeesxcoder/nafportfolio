import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientLayout from "./ClientLayout";

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
    default: "Unique Web Layer | Expert Web Development Agency",
    template: "%s | Unique Web Layer",
  },
  description:
    "Unique Web Layer is a full-service web development agency based in India, delivering all types of websites worldwide. We build Business Websites, E-commerce Stores, SaaS Platforms, Portfolio Sites, Real Estate Websites, Restaurant Websites, LMS Portals, Booking Systems, and Custom Web Applications using React, Next.js, Node.js, and MERN Stack.",
  keywords: [
    "business website development",
    "ecommerce website development",
    "SaaS platform development",
    "portfolio website design",
    "real estate website development",
    "restaurant website development",
    "web development agency India",
    "hire web developer from India",
    "React.js development",
    "Next.js development",
    "MERN stack development",
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
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: ["/favicon.ico"],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Unique Web Layer | Complete Web Development Agency",
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
        alt: "Unique Web Layer - Complete Web Development Agency",
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

// JSON-LD Structured Data
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Unique Web Layer",
  alternateName: "UWL",
  url: "https://uniqueweblayer.com",
  logo: "https://uniqueweblayer.com/icon-512.png",
  description:
    "Full-service web development agency building all types of websites.",
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="m-0 p-0">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
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
        <meta name="application-name" content="Unique Web Layer" />
        <meta name="apple-mobile-web-app-title" content="Unique Web Layer" />
      </head>

      <body className={`${inter.className} antialiased bg-black m-0 p-0`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
