import ServiceDetail from "@/app/components/ServiceDetail";

export default function BookingServicePage() {
  return (
    <ServiceDetail
      title="Booking / Appointment Website"
      category="High Demand Real-world Use Case 📅"
      icon="fa-calendar-check"
      color="#3b82f6"
      gradient="from-blue-500 to-cyan-600"
      targetAudience={[
        "Salons & Spas",
        "Doctors & Clinics",
        "Coaches & Consultants",
        "Fitness Trainers",
        "Service Providers",
      ]}
      features={[
        "Interactive Calendar View",
        "Online Booking System",
        "Email/SMS Confirmation",
        "Availability Management",
        "Customer Profiles",
        "Appointment Reminders",
        "Reschedule/Cancel Options",
        "Payment Integration (Optional)",
        "Admin Dashboard",
        "Calendar Sync (Google/Outlook)",
      ]}
      description="Allow customers to book appointments easily online"
      longDescription="Save time and reduce no-shows with an online booking system. I build appointment websites that allow your customers to book services 24/7. With automated reminders, calendar integration, and easy management tools, you'll never miss an appointment again. Perfect for salons, clinics, coaches, and any service-based business."
      price="$449"
      delivery="3-4 weeks"
      benefits={[
        "24/7 Booking Available",
        "Reduce No-Shows Significantly",
        "Save Admin Time",
        "Better Customer Experience",
        "Increased Bookings",
      ]}
      process={[
        "Service & Availability Planning",
        "Calendar Interface Design",
        "Booking System Development",
        "Notification Setup",
        "Testing & Optimization",
        "Staff Training",
      ]}
      technologies={[
        "React / Next.js",
        "Node.js / Express",
        "MongoDB / PostgreSQL",
        "Calendar APIs",
        "Twilio / SendGrid",
      ]}
    />
  );
}
