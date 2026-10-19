/**
 * PORTFOLIO PROJECTS
 * ------------------------------------------------------------------
 * HOW TO ADD A NEW PROJECT (3 steps):
 *   1. Put the screenshot in the /public folder, e.g. public/myproject.png
 *   2. Copy any block below and paste it at the TOP of the `projects` array
 *   3. Change: id, title, category, type, description, image, tags, liveLink
 *
 * `type` controls the filter buttons on the /work page:
 *   "web" = website | "app" = mobile app | "seo" = SEO / growth work
 *
 * Set `featured: true` to also show the project on the home page.
 * `image: ""` shows a placeholder card until you add a screenshot.
 * ------------------------------------------------------------------
 */

export type ProjectType = "web" | "app" | "seo";

export interface Project {
  id: number;
  title: string;
  category: string;
  type: ProjectType;
  description: string;
  image: string;
  tags: string[];
  liveLink: string;
  color: string;
  featured?: boolean;
  /** Optional extras shown on the card — safe to leave out. */
  client?: string;
  country?: string;
  result?: string;
}

export const projects: Project[] = [
  /* ============================================================
   * 4 EMPTY TEMPLATES — add your image + link here
   * (delete this comment block once all four are filled in)
   * ============================================================ */
  {
    id: 101,
    title: "Project Title 1",
    category: "Mobile App",
    type: "app",
    description:
      "Short description of the app — what it does, who it is for and the main features you built.",
    image: "", // e.g. "/myapp.png"  → put the file in /public
    tags: ["React Native", "Node.js", "MongoDB", "Firebase"],
    liveLink: "#", // e.g. "https://play.google.com/store/apps/details?id=..."
    color: "#06b6d4",
    client: "Client name",
    country: "United States",
    result: "e.g. 10k+ downloads in 3 months",
  },
  {
    id: 102,
    title: "Project Title 2",
    category: "Mobile App",
    type: "app",
    description:
      "Short description of the app — what it does, who it is for and the main features you built.",
    image: "",
    tags: ["Flutter", "Dart", "Firebase", "Stripe"],
    liveLink: "#",
    color: "#8b5cf6",
    client: "Client name",
    country: "United Kingdom",
    result: "e.g. 4.8★ average store rating",
  },
  {
    id: 103,
    title: "Project Title 3",
    category: "Web Development",
    type: "web",
    description:
      "Short description of the website — the business, the problem and what you delivered.",
    image: "",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    liveLink: "#",
    color: "#10b981",
    client: "Client name",
    country: "Canada",
    result: "e.g. 2.3x more enquiries after launch",
  },
  {
    id: 104,
    title: "Project Title 4",
    category: "SEO & Growth",
    type: "seo",
    description:
      "Short description of the SEO project — starting position, work done and the ranking result.",
    image: "",
    tags: ["Technical SEO", "On-Page SEO", "Schema", "GA4"],
    liveLink: "#",
    color: "#84cc16",
    client: "Client name",
    country: "Australia",
    result: "e.g. page 1 for 25+ keywords in 5 months",
  },

  /* ============================================================
   * LIVE PROJECTS
   * ============================================================ */
  {
    id: 1,
    title: "Timex Media",
    category: "Web Development",
    type: "web",
    description:
      "Modern media solutions platform with a high-performance React architecture, custom animations and a fully responsive marketing site.",
    image: "/timex-media.png",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion", "Vercel"],
    liveLink: "https://timex-media.vercel.app",
    color: "#06b6d4",
    featured: true,
  },
  {
    id: 2,
    title: "Timex Solution Inc",
    category: "Enterprise Solution",
    type: "web",
    description:
      "Enterprise service provider website with service showcases, client portals and a complete business solutions catalogue.",
    image: "/timexsolution.png",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    liveLink: "https://timexsolutioninc.com",
    color: "#8b5cf6",
    featured: true,
  },
  {
    id: 3,
    title: "Cal Coast Logistics",
    category: "Logistics Platform",
    type: "web",
    description:
      "Logistics and supply-chain platform with real-time shipment tracking, scheduling and fleet management dashboards.",
    image: "/calcoast.png",
    tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
    liveLink: "https://calcoastlogistics.com/",
    color: "#10b981",
    country: "United States",
    featured: true,
  },
  {
    id: 4,
    title: "DTL Connect",
    category: "Blockchain",
    type: "web",
    description:
      "Digital trade platform connecting businesses globally with smart-contract integration and secure document exchange.",
    image: "/dtl.png",
    tags: ["Vue.js", "Django", "Web3", "Redis"],
    liveLink: "https://dtlparking.vercel.app/",
    color: "#f59e0b",
    featured: true,
  },
  {
    id: 5,
    title: "Aish Signs & Graphics",
    category: "Printing & Signage",
    type: "web",
    description:
      "Signage and large-format printing company website covering event decor, vehicle wraps and business signage with an enquiry pipeline.",
    image: "/asih.png",
    tags: ["Next.js", "Tailwind CSS", "EmailJS", "Responsive"],
    liveLink: "https://aishsigns.com/",
    color: "#ef4444",
    country: "United States",
  },
  {
    id: 6,
    title: "All American Transport Inc",
    category: "Transport & Analytics",
    type: "web",
    description:
      "Transport operator platform with an analytics dashboard, interactive data visualisation and load management views.",
    image: "/allamericans.png",
    tags: ["React", "Python", "D3.js", "FastAPI"],
    liveLink: "https://allammericans.vercel.app/",
    color: "#3b82f6",
    country: "United States",
  },
  {
    id: 7,
    title: "A-1 Income Tax Services",
    category: "Financial Services",
    type: "web",
    description:
      "Tax and wealth advisory website with service pages, lead forms and on-page SEO built for local search visibility.",
    image: "/a1onetax.png",
    tags: ["Next.js", "Tailwind CSS", "Contact Form", "SEO"],
    liveLink: "https://a1onetax-hnph.vercel.app/",
    color: "#ec4899",
    country: "United States",
  },
  {
    id: 8,
    title: "Lovepreet Chandi Real Estate",
    category: "Real Estate",
    type: "web",
    description:
      "Real estate agent website with property listings, smooth page transitions and a mobile-first responsive layout.",
    image: "/lovepreet.png",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
    liveLink: "https://lovepreet-v8xb.vercel.app",
    color: "#14b8a6",
    country: "Canada",
  },
  {
    id: 9,
    title: "SMS Construction",
    category: "Construction",
    type: "web",
    description:
      "Construction company website presenting projects, services and safety credentials with a quote-request workflow.",
    image: "/smsconstruction.png",
    tags: ["Next.js", "Tailwind CSS", "Responsive", "SEO"],
    liveLink: "https://sms-construction.vercel.app/",
    color: "#f97316",
  },
  {
    id: 10,
    title: "Spitfire",
    category: "24/7 Services",
    type: "web",
    description:
      "Round-the-clock service brand site built for speed, with clear service tiers and an always-on contact flow.",
    image: "/Spitfire.png",
    tags: ["Next.js", "Tailwind CSS", "SEO", "Responsive"],
    liveLink: "https://spitfire-theta.vercel.app/",
    color: "#a855f7",
  },
];

export const projectFilters: { label: string; value: "all" | ProjectType }[] = [
  { label: "All Work", value: "all" },
  { label: "Websites", value: "web" },
  { label: "Mobile Apps", value: "app" },
  { label: "SEO & Growth", value: "seo" },
];

export const featuredProjects = projects.filter((p) => p.featured);
