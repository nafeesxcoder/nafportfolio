/**
 * Central company configuration for Unique Web Layer.
 * Edit this file to change company-wide details (name, contact, stats, socials).
 * Every page, the header, the footer, the sitemap and the SEO schema read from here.
 */

export const SITE_URL = "https://uniqueweblayer.com";

export const company = {
  name: "Unique Web Layer",
  legalName: "Unique Web Layer",
  tagline: "Web & Mobile App Development Company",
  shortPitch:
    "We design, build and rank websites and mobile apps for businesses in every country — remote-first, delivered online.",
  founded: "2020",
  email: "info@uniqueweblayer.com",
  phone: "+917409233994",
  phoneDisplay: "+91 74092 33994",
  whatsapp: "917409233994",
  address: {
    street: "A-2/111 New Kondli",
    city: "New Delhi",
    region: "Delhi",
    postalCode: "110096",
    country: "IN",
    countryName: "India",
  },
  hours: "Mon – Sat, 09:00 – 19:00 (IST) · Global time zones covered",
  social: {
    github: "https://github.com/uniqueweblayer",
    linkedin: "https://www.linkedin.com/company/uniqueweblayer/",
    twitter: "https://x.com/uniqueweblayer",
    instagram: "https://instagram.com/uniqueweblayer",
    facebook: "https://facebook.com/uniqueweblayer",
  },
};

/**
 * ⚠️ EDIT THESE TO YOUR REAL NUMBERS before going live.
 * They appear on the home page, the about page and in the hero.
 * Claiming figures you can't back up damages trust (and can hurt you with clients).
 */
export const stats = [
  { value: 120, suffix: "+", label: "Projects Delivered" },
  { value: 60, suffix: "+", label: "Clients Worldwide" },
  { value: 20, suffix: "+", label: "Countries Served" },
  { value: 100, suffix: "%", label: "Remote Delivery" },
];

/** Engagement models — how a client can work with the company. */
export const engagementModels = [
  {
    title: "Fixed-Price Project",
    icon: "fa-file-signature",
    description:
      "Clear scope, fixed cost, fixed timeline. Best for websites, landing pages and app MVPs where requirements are already defined.",
    bestFor: ["Websites", "Landing pages", "App MVPs"],
  },
  {
    title: "Dedicated Developer",
    icon: "fa-user-gear",
    description:
      "Hire a developer or a small squad monthly. They work in your time zone, join your stand-ups and report to your project manager.",
    bestFor: ["Long-running products", "Agency white-label", "Scaling teams"],
  },
  {
    title: "Monthly Retainer",
    icon: "fa-rotate",
    description:
      "Ongoing design, development, SEO and maintenance on a monthly plan. Ideal once a product is live and needs continuous improvement.",
    bestFor: ["SEO growth", "Maintenance", "Feature releases"],
  },
];

/** Delivery process — shown on the home page and the /process page. */
export const processSteps = [
  {
    step: "01",
    title: "Discovery & Requirements",
    icon: "fa-comments",
    description:
      "A call to understand your business, your customers and the result you need. We write the scope, the feature list and the success metrics before any code is written.",
    deliverable: "Scope document + timeline",
  },
  {
    step: "02",
    title: "UI/UX Design",
    icon: "fa-pen-ruler",
    description:
      "Wireframes first, then a full visual design for every screen — desktop, tablet and mobile. You approve the design before development starts.",
    deliverable: "Figma design + approval",
  },
  {
    step: "03",
    title: "Development",
    icon: "fa-code",
    description:
      "Built in weekly sprints with a staging link you can open at any time. Clean, documented, version-controlled code on React, Next.js, Node.js, React Native or Flutter.",
    deliverable: "Staging build every week",
  },
  {
    step: "04",
    title: "Testing & QA",
    icon: "fa-bug-slash",
    description:
      "Cross-browser, cross-device and performance testing. Core Web Vitals, accessibility basics, form validation, payment flows and security checks.",
    deliverable: "QA report + fixes",
  },
  {
    step: "05",
    title: "Launch & SEO Setup",
    icon: "fa-rocket",
    description:
      "Deployment, domain and SSL, analytics, Search Console, sitemap, schema markup and on-page SEO so the site starts ranking from day one.",
    deliverable: "Live site + SEO baseline",
  },
  {
    step: "06",
    title: "Support & Growth",
    icon: "fa-headset",
    description:
      "Post-launch support, monitoring, backups and monthly improvements. Optional SEO retainer to keep growing traffic and leads.",
    deliverable: "Support plan + reports",
  },
];

/** Technology stack — grouped, used on /technologies and the home page. */
export const techStack = [
  {
    group: "Frontend",
    icon: "fa-laptop-code",
    items: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript (ES6+)",
      "Tailwind CSS",
      "Redux / Zustand",
      "Framer Motion",
    ],
  },
  {
    group: "Mobile Apps",
    icon: "fa-mobile-screen",
    items: [
      "React Native",
      "Flutter",
      "Expo",
      "Dart",
      "Android (Play Store)",
      "iOS (App Store)",
      "Push Notifications",
    ],
  },
  {
    group: "Backend & APIs",
    icon: "fa-server",
    items: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "GraphQL",
      "Socket.io",
      "JWT / OAuth",
      "Python (FastAPI)",
    ],
  },
  {
    group: "Databases",
    icon: "fa-database",
    items: ["MongoDB", "PostgreSQL", "MySQL", "Firebase", "Supabase", "Redis"],
  },
  {
    group: "Cloud & DevOps",
    icon: "fa-cloud",
    items: [
      "AWS",
      "Vercel",
      "Hostinger VPS",
      "Cloudflare",
      "Docker",
      "GitHub Actions",
      "Nginx",
    ],
  },
  {
    group: "SEO & Analytics",
    icon: "fa-chart-line",
    items: [
      "Technical SEO",
      "Schema / JSON-LD",
      "Google Search Console",
      "GA4",
      "Core Web Vitals",
      "Ahrefs / SEMrush",
      "Local & International SEO",
    ],
  },
];

/** Industries served — shown on the home page and /industries. */
export const industries = [
  {
    name: "Startups & SaaS",
    icon: "fa-rocket",
    description:
      "MVPs, dashboards, subscription billing and investor-ready product sites built fast without technical debt.",
  },
  {
    name: "E-Commerce & Retail",
    icon: "fa-cart-shopping",
    description:
      "Online stores with payment gateways, inventory, multi-currency checkout and conversion-focused product pages.",
  },
  {
    name: "Real Estate",
    icon: "fa-building",
    description:
      "Property listings, map search, agent portals, lead capture and CRM integration for brokers and developers.",
  },
  {
    name: "Healthcare & Clinics",
    icon: "fa-stethoscope",
    description:
      "Appointment booking, patient portals, tele-consult flows and HIPAA-conscious data handling.",
  },
  {
    name: "Logistics & Transport",
    icon: "fa-truck-fast",
    description:
      "Shipment tracking, fleet dashboards, driver apps and quote calculators for transport operators.",
  },
  {
    name: "Restaurants & Food",
    icon: "fa-utensils",
    description:
      "Online menus, table reservation, food ordering apps and delivery integrations.",
  },
  {
    name: "Education & LMS",
    icon: "fa-graduation-cap",
    description:
      "Course platforms, video lessons, quizzes, certificates and student progress tracking.",
  },
  {
    name: "Professional Services",
    icon: "fa-briefcase",
    description:
      "Law firms, accountants, consultants and agencies — authority sites that bring qualified enquiries.",
  },
];

/** Reasons to choose the company — kept company-voiced, not personal. */
export const differentiators = [
  {
    title: "One Team for Web, App & SEO",
    icon: "fa-layer-group",
    description:
      "Website, mobile app and search rankings handled by the same team, so your brand, data and content stay consistent across every platform.",
  },
  {
    title: "Built for Every Country",
    icon: "fa-earth-americas",
    description:
      "Multi-currency, multi-language, local payment gateways, time-zone aware support and country-specific SEO — we ship for clients on every continent.",
  },
  {
    title: "Fixed Quotes, No Surprises",
    icon: "fa-receipt",
    description:
      "You get the scope, the price and the delivery date in writing before we start. Change requests are quoted separately, never billed silently.",
  },
  {
    title: "Performance & Core Web Vitals",
    icon: "fa-gauge-high",
    description:
      "Sites built for 90+ Lighthouse scores: image optimisation, code splitting, caching and server-side rendering as standard, not as an upsell.",
  },
  {
    title: "Code You Actually Own",
    icon: "fa-code-branch",
    description:
      "Full source code, repository access and documentation handed over at launch. No lock-in, no hidden page builders, no licence traps.",
  },
  {
    title: "Support After Launch",
    icon: "fa-headset",
    description:
      "Every project includes post-launch support, and optional monthly plans cover updates, backups, monitoring and continuous SEO.",
  },
];
