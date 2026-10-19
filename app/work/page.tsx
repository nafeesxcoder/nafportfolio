import Script from "next/script";
import WorkClient from "./WorkClient";
import { pageMeta, breadcrumbSchema, jsonLd } from "../lib/seo";
import { SITE_URL } from "../data/site";
import { projects } from "../data/projects";

export const metadata = pageMeta({
  title: "Our Work — Website, Mobile App & SEO Portfolio",
  description:
    "Portfolio of Unique Web Layer: business websites, e-commerce stores, SaaS platforms, React Native and Flutter apps, and SEO campaigns delivered for clients worldwide.",
  path: "/work",
  keywords: [
    "web development portfolio",
    "mobile app development portfolio",
    "website design case studies",
    "react native app examples",
    "SEO case studies",
  ],
});

const portfolioSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Our Work — Unique Web Layer",
  url: `${SITE_URL}/work`,
  description:
    "Websites, mobile apps and SEO campaigns delivered by Unique Web Layer for clients worldwide.",
  hasPart: projects
    .filter((p) => p.liveLink && p.liveLink !== "#")
    .map((p) => ({
      "@type": "CreativeWork",
      name: p.title,
      description: p.description,
      url: p.liveLink,
      keywords: p.tags.join(", "),
      creator: { "@id": `${SITE_URL}/#organization` },
    })),
};

export default function WorkPage() {
  return (
    <>
      <Script
        id="work-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(portfolioSchema)}
      />
      <Script
        id="work-breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Our Work", path: "/work" },
          ]),
        )}
      />
      <WorkClient />
    </>
  );
}
