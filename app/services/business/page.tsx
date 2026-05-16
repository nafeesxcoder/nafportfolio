import ServiceDetail from "@/app/components/ServiceDetail";

export default function BusinessServicePage() {
  return (
    <ServiceDetail
      title="Business / Company Website"
      category="For Local Businesses & Startups"
      icon="fa-building"
      color="#06b6d4"
      gradient="from-cyan-500 to-blue-600"
      targetAudience={[
        "Local Businesses & Shops",
        "Small to Medium Enterprises (SMEs)",
        "Startups & Agencies",
        "Corporate Companies",
      ]}
      features={[
        "Professional Home Page with Hero Section",
        "About Us / Company Profile Page",
        "Services / Products Showcase",
        "Contact Form with Google Maps",
        "SEO Optimized Structure",
        "Mobile Responsive Design",
        "Fast Loading Speed",
        "Admin Panel for Easy Updates",
      ]}
      description="Establish your online presence and attract more customers globally"
      longDescription="A professional business website is the digital face of your company. It establishes credibility, showcases your services, and helps potential customers find you online. I build modern, fast, and SEO-friendly business websites that convert visitors into leads."
      price="$499"
      delivery="2-3 weeks"
      benefits={[
        "24/7 Online Presence",
        "Increased Brand Credibility",
        "More Customer Leads",
        "Better Search Engine Ranking",
        "Professional Business Image",
      ]}
      process={[
        "Requirement Gathering & Business Analysis",
        "Design Mockups & Client Revisions",
        "Development & Content Integration",
        "Testing & Quality Assurance",
        "Launch & Deployment",
        "Post-Launch Support",
      ]}
      technologies={[
        "React.js / Next.js",
        "Tailwind CSS",
        "Node.js / Express",
        "MongoDB / PostgreSQL",
        "SEO Best Practices",
      ]}
    />
  );
}
