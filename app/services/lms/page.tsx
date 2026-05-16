import ServiceDetail from "@/app/components/ServiceDetail";

export default function LMSServicePage() {
  return (
    <ServiceDetail
      title="Education / LMS Website"
      category="Trending Niche 🎓"
      icon="fa-graduation-cap"
      color="#14b8a6"
      gradient="from-teal-500 to-emerald-600"
      targetAudience={[
        "Coaching Centers",
        "Online Teachers",
        "Course Creators",
        "Schools & Academies",
        "Corporate Training",
      ]}
      features={[
        "Course Management System",
        "Video Lessons",
        "Student Dashboard",
        "Quiz & Assessment System",
        "Progress Tracking",
        "Certificate Generation",
        "Discussion Forums",
        "Payment Integration",
        "Instructor Profiles",
        "Analytics & Reports",
      ]}
      description="Create and sell online courses with a powerful learning platform"
      longDescription="Launch your own online learning platform and start selling courses today. I build complete Learning Management Systems (LMS) that allow you to create, manage, and sell courses online. With video lessons, quizzes, student progress tracking, and certification, your students will have an engaging learning experience."
      price="$799"
      delivery="4-6 weeks"
      benefits={[
        "Passive Income Stream",
        "Reach Global Students",
        "Scalable Platform",
        "Track Student Progress",
        "Build Authority",
      ]}
      process={[
        "Course Structure Planning",
        "Platform Design",
        "Development & Integration",
        "Content Upload",
        "Testing & Launch",
        "Marketing Setup",
      ]}
      technologies={[
        "Next.js / React",
        "Node.js / Express",
        "MongoDB / PostgreSQL",
        "Video Hosting (Vimeo/Youtube)",
        "Payment Gateways",
      ]}
    />
  );
}
