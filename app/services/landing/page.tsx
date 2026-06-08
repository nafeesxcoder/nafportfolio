import ServiceDetail from "@/components/ServiceDetail";

export default function LandingPageServicePage() {
  return (
    <ServiceDetail
      title="Landing Page"
      category="Marketing Focused Site 🎯"
      icon="fa-bullseye"
      color="#f59e0b"
      gradient="from-orange-500 to-red-600"
      targetAudience={[
        "Ad Campaigns",
        "Product Launches",
        "Event Promotions",
        "Lead Generation",
      ]}
      features={[
        "Single Page Design",
        "Attention-Grabbing Hero Section",
        "Clear CTA Buttons",
        "Lead Capture Forms",
        "Analytics Integration",
        "Fast Loading Speed",
      ]}
      description="Convert visitors into paying customers with high-performing landing pages"
      longDescription="A landing page is designed with one goal in mind - conversion. I create high-converting landing pages that turn traffic into customers."
      price="$199"
      delivery="1-2 weeks"
      benefits={[
        "Higher Conversion Rates",
        "Better ROI on Ads",
        "Fast Loading Speed",
      ]}
      process={[
        "Goal Definition",
        "Design & Development",
        "Testing & Optimization",
        "Launch & Analytics Setup",
      ]}
      technologies={[
        "React / HTML/CSS",
        "Tailwind CSS",
        "JavaScript",
        "Google Analytics",
      ]}
    />
  );
}
