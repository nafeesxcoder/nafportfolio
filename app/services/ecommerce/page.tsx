import ServiceDetail from "@/components/ServiceDetail";

export default function EcommerceServicePage() {
  return (
    <ServiceDetail
      title="E-Commerce Website"
      category="Online Stores & Product Sellers 💰"
      icon="fa-cart-shopping"
      color="#ec4899"
      gradient="from-pink-500 to-rose-600"
      targetAudience={[
        "Online Retailers",
        "Product Sellers",
        "Dropshippers",
        "Brand Owners",
      ]}
      features={[
        "Product Listing with Filters",
        "Shopping Cart System",
        "Secure Payment Gateway",
        "Order Tracking & Management",
        "User Accounts & Profiles",
        "Inventory Management",
        "Admin Dashboard",
      ]}
      description="Sell your products worldwide with a secure and scalable online store"
      longDescription="Launch your online store with a fully functional e-commerce platform. I build secure, scalable, and feature-rich online stores that help you sell products globally. From product listings to payment processing, everything is handled seamlessly."
      price="$999"
      delivery="4-6 weeks"
      benefits={[
        "Sell 24/7 Worldwide",
        "Secure Payment Processing",
        "Automated Order Management",
        "Inventory Tracking",
      ]}
      process={[
        "Product Catalog Planning",
        "UI/UX Design for Store",
        "Development & Integration",
        "Payment Gateway Setup",
        "Testing & Launch",
      ]}
      technologies={[
        "Next.js / React",
        "Node.js / Express",
        "MongoDB / PostgreSQL",
        "Stripe / PayPal API",
      ]}
    />
  );
}
