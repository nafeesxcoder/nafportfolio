import ServiceDetail from "@/components/ServiceDetail";

export default function MembershipServicePage() {
  return (
    <ServiceDetail
      title="Membership Website"
      category="Recurring Income Model 🔐"
      icon="fa-users"
      color="#06b6d4"
      gradient="from-cyan-500 to-blue-600"
      targetAudience={[
        "Content Creators",
        "Coaches & Mentors",
        "Course Creators",
        "Community Builders",
        "Subscription Businesses",
      ]}
      features={[
        "User Registration & Login",
        "Paid Content Access",
        "Multiple Subscription Plans",
        "Member Dashboard",
        "Content Drip Scheduling",
        "Community Forums",
        "Payment Integration",
        "Email Automation",
      ]}
      description="Monetize your content with membership-based platforms"
      longDescription="Create a recurring revenue stream with a membership website. I build platforms where you can offer exclusive content, courses, or community access to paying members. With flexible subscription plans, content dripping, and member management tools, you'll have everything you need to build a successful membership business."
      price="$899"
      delivery="4-5 weeks"
      benefits={[
        "Recurring Monthly Income",
        "Build Loyal Community",
        "Exclusive Content Delivery",
        "Member Insights",
        "Scalable Platform",
      ]}
      process={[
        "Membership Structure Planning",
        "Content Strategy",
        "Platform Development",
        "Payment & Subscription Setup",
        "Testing & Launch",
        "Member Onboarding",
      ]}
      technologies={[
        "Next.js / React",
        "Node.js / Express",
        "PostgreSQL / MongoDB",
        "Stripe / Paddle",
        "SendGrid / Mailchimp",
      ]}
    />
  );
}
