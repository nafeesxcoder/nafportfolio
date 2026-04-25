import ServiceDetail from "@/app/components/ServiceDetail";

export default function SaaSservicePage() {
  return (
    <ServiceDetail
      title="SaaS / Web App"
      category="Premium Level (High Price) 💎"
      icon="fa-cloud"
      color="#a855f7"
      gradient="from-purple-500 to-pink-600"
      targetAudience={[
        "Startups & Entrepreneurs",
        "Tech Companies",
        "Software Providers",
        "B2B Businesses",
        "Innovation Labs",
      ]}
      features={[
        "User Authentication (Login/Signup)",
        "User Dashboard",
        "Subscription Plans",
        "Payment Integration",
        "API Integrations",
        "Data Visualization",
        "Admin Panel",
        "Email Notifications",
        "Analytics Dashboard",
        "Scalable Architecture",
      ]}
      description="Build scalable web applications with secure backend systems"
      longDescription="Turn your software idea into reality with a professional SaaS web application. I build scalable, secure, and feature-rich web apps that can handle thousands of users. From user authentication to payment processing and data analytics, your SaaS platform will be enterprise-ready and built for growth."
      price="$1499"
      delivery="6-10 weeks"
      benefits={[
        "Scalable Architecture",
        "Recurring Revenue Model",
        "Enterprise Ready",
        "Secure & Reliable",
        "User Analytics",
      ]}
      process={[
        "Product Requirements Planning",
        "Architecture Design",
        "Development & API Integration",
        "Subscription Setup",
        "Security Testing",
        "Launch & Scaling",
      ]}
      technologies={[
        "Next.js / React",
        "Node.js / Express",
        "PostgreSQL / MongoDB",
        "Redis / RabbitMQ",
        "AWS / Google Cloud",
        "Stripe / LemonSqueezy",
      ]}
    />
  );
}
