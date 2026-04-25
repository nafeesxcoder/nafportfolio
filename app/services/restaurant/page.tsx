import ServiceDetail from "@/app/components/ServiceDetail";

export default function RestaurantServicePage() {
  return (
    <ServiceDetail
      title="Restaurant / Food Website"
      category="Easy + Fast Projects 🍔"
      icon="fa-utensils"
      color="#f97316"
      gradient="from-orange-500 to-amber-600"
      targetAudience={[
        "Restaurants & Cafes",
        "Food Trucks",
        "Bars & Pubs",
        "Bakeries",
        "Fast Food Chains",
      ]}
      features={[
        "Menu Display with Prices",
        "Online Ordering System",
        "Table Reservation",
        "Location & Hours",
        "Google Maps Integration",
        "Photo Gallery",
        "Customer Reviews",
        "Delivery Integration",
        "Special Offers Section",
        "Mobile Optimized",
      ]}
      description="Increase orders with a modern and mobile-friendly website"
      longDescription="Get more customers and increase orders with a stunning restaurant website. I build modern, mouth-watering websites for restaurants, cafes, and food businesses. With online ordering, table reservations, and beautiful menu displays, your customers can easily discover your food and place orders from anywhere."
      price="$349"
      delivery="2-3 weeks"
      benefits={[
        "Increase Online Orders",
        "Attract More Customers",
        "Showcase Your Menu Beautifully",
        "Easy Reservation Management",
        "Mobile Ordering Ready",
      ]}
      process={[
        "Menu & Service Planning",
        "Design & Gallery Setup",
        "Ordering System Development",
        "Payment Integration",
        "Testing & Launch",
        "Staff Training",
      ]}
      technologies={[
        "React / Next.js",
        "Tailwind CSS",
        "Node.js / Express",
        "MongoDB / PostgreSQL",
        "Stripe / PayPal",
      ]}
    />
  );
}
