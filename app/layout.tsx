import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
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

  // ✅ Icons removed to avoid build errors
  // Add actual files to public folder if needed

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
    google: "PASTE_YOUR_GOOGLE_VERIFICATION_CODE",
  },
};

// Organization Schema
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Unique Web Layer",
  alternateName: "UWL",
  url: "https://uniqueweblayer.com",
  logo: "https://uniqueweblayer.com/icon-512.png",
  description: "Professional full-service web development agency.",
  email: "info@uniqueweblayer.com",
  telephone: "+91-7409233994",
  address: {
    "@type": "PostalAddress",
    addressCountry: "IN",
    addressLocality: "New Delhi",
  },
  sameAs: [
    "https://instagram.com/uniqueweblayer",
    "https://www.linkedin.com/in/uniqueweblayer",
    "https://x.com/uniqueweblayer",
  ],
};

// Website Schema
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Unique Web Layer",
  alternateName: "UniqueWebLayer",
  url: "https://uniqueweblayer.com",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://uniqueweblayer.com/search?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

// Service Schema
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Web Development Services",
  provider: {
    "@type": "Organization",
    name: "Unique Web Layer",
  },
  serviceType: "Web Development",
  areaServed: [
    "India",
    "United States",
    "United Kingdom",
    "Canada",
    "Australia",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Web Development Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Business Website",
          price: "499",
          priceCurrency: "USD",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "E-Commerce Website",
          price: "999",
          priceCurrency: "USD",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "SaaS Web Application",
          price: "1499",
          priceCurrency: "USD",
        },
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="m-0 p-0">
      <head>
        {/* Font Awesome CDN - Required for icons */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        />

        {/* Schema Scripts */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(serviceSchema),
          }}
        />

        {/* Preconnect for Performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />

        {/* SEO Meta Tags */}
        <meta name="author" content="Unique Web Layer" />
        <meta name="application-name" content="Unique Web Layer" />
        <meta name="apple-mobile-web-app-title" content="Unique Web Layer" />
        <meta name="geo.region" content="IN" />
        <meta name="geo.placename" content="New Delhi, India" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="msapplication-TileColor" content="#7c3aed" />
      </head>

      <body className={`${inter.className} antialiased bg-black m-0 p-0`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
