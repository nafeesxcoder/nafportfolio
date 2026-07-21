import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import ClientLayout from "./ClientLayout";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  preload: true,
  display: "swap",
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
    "Unique Web Layer is a full-service web development agency based in India, delivering Business Websites, E-commerce Stores, SaaS Platforms, Portfolio Sites, Real Estate Websites, Restaurant Websites, LMS Portals, Booking Systems, and Custom Web Applications worldwide.",

  keywords: [
    "business website development",
    "ecommerce website development",
    "SaaS platform development",
    "portfolio website design",
    "real estate website development",
    "restaurant website development",
    "web development agency India",
    "React.js development",
    "Next.js development",
    "MERN stack development",
  ],

  authors: [
    {
      name: "Unique Web Layer",
      url: "https://uniqueweblayer.com",
    },
  ],

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
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon-16x16.png",
  },

  openGraph: {
    title: "Unique Web Layer | Complete Web Development Agency",
    description:
      "We build Business, E-commerce, SaaS, Portfolio, Real Estate, Restaurant, LMS, Booking Systems & Custom Web Apps worldwide.",
    url: "https://uniqueweblayer.com",
    siteName: "Unique Web Layer",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Unique Web Layer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Unique Web Layer | Web Development Agency",
    description:
      "Business Websites • SaaS • E-commerce • Portfolio • Booking Systems • Custom Web Apps",
    images: ["/og-image.jpg"],
    creator: "@uniqueweblayer",
  },

  verification: {
    google: "YOUR_ACTUAL_VERIFICATION_CODE", // Replace with actual code
  },
};

// Schema Objects (same as before)
const organizationSchema = {
  /* ... */
};
const websiteSchema = {
  /* ... */
};
const serviceSchema = {
  /* ... */
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="m-0 p-0">
      <head>
        {/* Font Awesome CDN */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        />

        {/* Preconnect for Performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />

        {/* Extra Meta Tags */}
        <meta name="author" content="Unique Web Layer" />
        <meta name="application-name" content="Unique Web Layer" />
        <meta name="apple-mobile-web-app-title" content="Unique Web Layer" />
        <meta name="geo.region" content="IN" />
        <meta name="geo.placename" content="New Delhi, India" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="msapplication-TileColor" content="#7c3aed" />
      </head>

      <body className={`${inter.className} antialiased bg-black m-0 p-0`}>
        {/* Schema Scripts using Next.js Script component */}
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <Script
          id="website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
        <Script
          id="service-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(serviceSchema),
          }}
        />

        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
