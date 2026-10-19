/**
 * SEO helpers — JSON-LD schema builders and shared metadata pieces.
 * Everything here feeds Google's understanding that the company serves clients worldwide.
 */

import type { Metadata } from "next";
import { SITE_URL, company } from "../data/site";
import { services } from "../data/services";
import { countries } from "../data/countries";

/**
 * Canonical URL for a page.
 *
 * NOTE ON hreflang: this site serves one English version to every country, so
 * hreflang tags are not applicable. Listing en-US, en-GB, en-AU … all pointing at
 * the SAME url does nothing for rankings — Google only uses hreflang when separate
 * language or region versions of a page actually exist. Geographic relevance here
 * comes from the /web-development-company/<country> pages instead.
 *
 * If you ever add translated versions (e.g. /de/ or /ar/), add them under
 * `languages` below and the tags become meaningful.
 */
export const hreflangAlternates = (path = "") => {
  const url = `${SITE_URL}${path}`;
  return {
    canonical: url,
  };
};

/** Build page metadata with worldwide-friendly defaults. */
export function pageMeta({
  title,
  description,
  path = "",
  keywords = [],
  image = "/og/default.jpg",
}: {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  /** Share card. Pre-rendered files live in /public/og — see README. */
  image?: string;
}): Metadata {
  const url = `${SITE_URL}${path}`;
  return {
    title,
    description,
    keywords,
    alternates: hreflangAlternates(path),
    openGraph: {
      title,
      description,
      url,
      siteName: company.name,
      type: "website",
      images: [{ url: image, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

/** Every country we serve, in schema.org format. */
const areaServedWorldwide = [
  { "@type": "Place", name: "Worldwide" },
  ...countries.map((c) => ({ "@type": "Country", name: c.name })),
];

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: company.name,
  legalName: company.legalName,
  url: SITE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}/logo.png`,
    width: 512,
    height: 512,
  },
  image: `${SITE_URL}/og/default.jpg`,
  description: company.shortPitch,
  foundingDate: company.founded,
  email: company.email,
  telephone: company.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: company.address.street,
    addressLocality: company.address.city,
    addressRegion: company.address.region,
    postalCode: company.address.postalCode,
    addressCountry: company.address.country,
  },
  areaServed: areaServedWorldwide,
  knowsLanguage: ["en", "hi"],
  sameAs: Object.values(company.social),
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: company.phone,
      email: company.email,
      contactType: "sales",
      areaServed: "Worldwide",
      availableLanguage: ["English", "Hindi"],
    },
    {
      "@type": "ContactPoint",
      email: company.email,
      contactType: "customer support",
      areaServed: "Worldwide",
      availableLanguage: ["English", "Hindi"],
    },
  ],
};

export const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${SITE_URL}/#business`,
  name: company.name,
  url: SITE_URL,
  image: `${SITE_URL}/og/default.jpg`,
  priceRange: "$$",
  telephone: company.phone,
  email: company.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: company.address.street,
    addressLocality: company.address.city,
    addressRegion: company.address.region,
    postalCode: company.address.postalCode,
    addressCountry: company.address.country,
  },
  areaServed: areaServedWorldwide,
  serviceType: [
    "Web Development",
    "Mobile App Development",
    "Search Engine Optimization",
    "UI/UX Design",
    "Custom Software Development",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Web, App & SEO Services",
    itemListElement: services.map((s) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: s.name,
        description: s.description,
        url: `${SITE_URL}/services/${s.slug}`,
        serviceType: s.category,
        areaServed: "Worldwide",
        provider: { "@id": `${SITE_URL}/#organization` },
      },
    })),
  },
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: company.name,
  description: company.shortPitch,
  publisher: { "@id": `${SITE_URL}/#organization` },
  inLanguage: "en",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${SITE_URL}/work?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

export const breadcrumbSchema = (
  items: { name: string; path: string }[],
) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: item.name,
    item: `${SITE_URL}${item.path}`,
  })),
});

export const faqSchema = (faqs: { question: string; answer: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
});

export const serviceSchema = (slug: string) => {
  const s = services.find((x) => x.slug === slug);
  if (!s) return null;
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: s.name,
    serviceType: s.category,
    description: s.description,
    url: `${SITE_URL}/services/${s.slug}`,
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: areaServedWorldwide,
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: `${SITE_URL}/contact`,
      availableLanguage: ["English", "Hindi"],
    },
    offers: {
      "@type": "Offer",
      price: s.price.replace(/[^0-9]/g, "") || undefined,
      priceCurrency: "USD",
      url: `${SITE_URL}/services/${s.slug}`,
      availability: "https://schema.org/InStock",
    },
  };
};

/** Small helper component props for inline JSON-LD. */
export const jsonLd = (data: unknown) => ({
  __html: JSON.stringify(data),
});
