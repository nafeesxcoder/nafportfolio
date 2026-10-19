import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import ClientLayout from "./ClientLayout";
import { SITE_URL, company } from "./data/site";
import {
  organizationSchema,
  professionalServiceSchema,
  websiteSchema,
  hreflangAlternates,
  jsonLd,
} from "./lib/seo";

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
  metadataBase: new URL(SITE_URL),

  title: {
    default:
      "Unique Web Layer | Web & Mobile App Development Company — Worldwide",
    template: "%s | Unique Web Layer",
  },

  description:
    "Unique Web Layer is a web and mobile app development company serving clients in every country. We build websites, React Native and Flutter apps, SaaS platforms and custom MERN software — plus SEO that ranks them. Remote delivery, fixed quotes, worldwide support.",

  keywords: [
    "web development company",
    "mobile app development company",
    "website development services worldwide",
    "react native app development company",
    "flutter app development company",
    "MERN stack development company",
    "Next.js development company",
    "SEO services company",
    "international SEO agency",
    "hire web developers offshore",
    "custom software development company",
    "ecommerce website development",
    "SaaS development company",
    "web design company for startups",
  ],

  authors: [{ name: company.name, url: SITE_URL }],
  creator: company.name,
  publisher: company.name,
  applicationName: company.name,
  category: "Technology",

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

  alternates: hreflangAlternates(""),

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon-16x16.png",
  },

  openGraph: {
    title: "Unique Web Layer | Web & Mobile App Development Company",
    description:
      "Websites, Android & iOS apps, SaaS platforms and SEO — delivered online to clients in every country.",
    url: SITE_URL,
    siteName: company.name,
    locale: "en_US",
    alternateLocale: ["en_GB", "en_CA", "en_AU", "en_IN", "en_SG", "en_AE"],
    type: "website",
    images: [
      {
        url: "/og/default.jpg",
        width: 1200,
        height: 630,
        alt: "Unique Web Layer — Web & Mobile App Development Company",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Unique Web Layer | Web & Mobile App Development Company",
    description:
      "Websites • Mobile Apps • SaaS • E-Commerce • SEO — built for businesses worldwide.",
    images: ["/og/default.jpg"],
    creator: "@uniqueweblayer",
  },

  // Add your Search Console code here once you have it, e.g.:
  // verification: { google: "abc123..." },
};

/**
 * suppressHydrationWarning on <html> is required: the inline script below sets
 * data-theme before React hydrates, so the server HTML and the first client
 * render differ by that one attribute. This is the supported pattern for
 * no-flash theme switching — do not remove it.
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="m-0 p-0" suppressHydrationWarning>
      <head>
        {/*
          Applies the saved theme before first paint. Without this the page
          renders dark for a frame and then flips, which looks broken.
        */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('uwl_theme');if(!t){t=window.matchMedia('(prefers-color-scheme: light)').matches?'light':'dark';}document.documentElement.setAttribute('data-theme',t);}catch(e){document.documentElement.setAttribute('data-theme','dark');}})();`,
          }}
        />

        {/* Font Awesome CDN */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
        />

        {/* Preconnect for Performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* Global reach signals — no single-country lock */}
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="target" content="all" />
        <meta name="audience" content="all" />
        <meta name="language" content="English" />
        <meta name="rating" content="general" />
        <meta name="apple-mobile-web-app-title" content={company.name} />
        <meta name="format-detection" content="telephone=no" />
        <meta name="msapplication-TileColor" content="#7c3aed" />
      </head>

      <body className={`${inter.className} antialiased bg-black m-0 p-0`}>
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonLd(organizationSchema)}
        />
        <Script
          id="business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonLd(professionalServiceSchema)}
        />
        <Script
          id="website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonLd(websiteSchema)}
        />

        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
