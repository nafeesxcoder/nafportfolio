import ServiceDetail from "@/components/ServiceDetail";

export default function PortfolioServicePage() {
  return (
    <ServiceDetail
      title="Portfolio Website"
      category="For Developers & Creatives 🎨"
      icon="fa-user-astronaut"
      color="#8b5cf6"
      gradient="from-purple-600 to-indigo-600"
      targetAudience={[
        "Freelance Developers",
        "UI/UX Designers",
        "Photographers & Artists",
        "Creative Professionals",
      ]}
      features={[
        "Projects & Work Showcase",
        "Skills & Expertise Section",
        "About Me / Bio",
        "Contact Form",
        "Testimonials Section",
        "Resume/CV Download",
      ]}
      description="Showcase your work professionally and attract global clients"
      longDescription="A portfolio website is your digital resume. I create stunning, modern portfolio websites that highlight your best projects and skills."
      price="$349"
      delivery="2-3 weeks"
      benefits={[
        "Stand Out from Competition",
        "Attract High-Quality Clients",
        "Build Personal Brand",
      ]}
      process={[
        "Content & Project Collection",
        "Design Concept Creation",
        "Development & Animation",
        "Launch & Promotion",
      ]}
      technologies={[
        "Next.js / React",
        "Tailwind CSS",
        "Framer Motion",
        "Vercel Deployment",
      ]}
    />
  );
}
