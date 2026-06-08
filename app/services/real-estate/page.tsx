import ServiceDetail from "@/components/ServiceDetail";

export default function RealEstateServicePage() {
  return (
    <ServiceDetail
      title="Real Estate Website"
      category="Popular Among Foreign Clients 🏢"
      icon="fa-home"
      color="#ef4444"
      gradient="from-red-500 to-orange-600"
      targetAudience={[
        "Property Dealers",
        "Real Estate Agents",
        "Property Management Companies",
        "Builders & Developers",
        "Rental Agencies",
      ]}
      features={[
        "Property Listings",
        "Advanced Search Filters",
        "Map Integration",
        "Property Details Page",
        "Agent Profiles",
        "Contact Forms",
        "Mortgage Calculator",
        "Virtual Tours (Optional)",
        "Saved Properties",
        "Admin Dashboard",
      ]}
      description="Showcase properties with advanced search and attract serious buyers"
      longDescription="Help buyers find their dream property with a professional real estate website. I build feature-rich real estate platforms with advanced search, map integration, and detailed property listings. Whether you're selling, renting, or managing properties, your website will attract serious buyers and streamline your business."
      price="$649"
      delivery="4-5 weeks"
      benefits={[
        "Attract Serious Buyers",
        "Showcase Properties Beautifully",
        "Easy Property Management",
        "Better Search Experience",
        "Generate More Leads",
      ]}
      process={[
        "Property Database Planning",
        "Design & Filter Development",
        "Map Integration",
        "Property Entry & Testing",
        "Launch & Training",
        "Marketing Support",
      ]}
      technologies={[
        "Next.js / React",
        "Node.js / Express",
        "MongoDB / PostgreSQL",
        "Google Maps API",
        "Cloudinary for Images",
      ]}
    />
  );
}
