import ServiceDetail from "@/app/components/ServiceDetail";

export default function BlogServicePage() {
  return (
    <ServiceDetail
      title="Blog / Content Website"
      category="For Bloggers & Content Creators 📝"
      icon="fa-blog"
      color="#10b981"
      gradient="from-emerald-500 to-teal-600"
      targetAudience={[
        "Bloggers & Writers",
        "Content Creators",
        "News Portals",
        "Magazines",
        "Affiliate Marketers",
      ]}
      features={[
        "Article Publishing System",
        "Categories & Tags Management",
        "Commenting System",
        "Search Functionality",
        "Related Posts Section",
        "Newsletter Integration",
        "SEO Optimized Structure",
        "Social Sharing Buttons",
        "Author Profiles",
        "Analytics Dashboard",
      ]}
      description="Grow your audience and rank on Google with SEO-friendly blogs"
      longDescription="Start your blogging journey with a professional, fast, and SEO-friendly blog website. I build content-focused platforms that help you rank on Google, grow your audience, and monetize your content. With easy-to-use content management, you can focus on writing while your blog handles the technical side perfectly."
      price="$299"
      delivery="2-3 weeks"
      benefits={[
        "Better Google Rankings",
        "Grow Email List Fast",
        "Monetize Your Content",
        "Build Loyal Community",
        "Establish Authority",
      ]}
      process={[
        "Blog Structure Planning",
        "Design & Layout Creation",
        "Development & CMS Setup",
        "SEO Configuration",
        "Content Migration",
        "Launch & Growth Strategy",
      ]}
      technologies={[
        "Next.js / WordPress",
        "Tailwind CSS",
        "MDX / Markdown",
        "Prisma / MongoDB",
        "Google AdSense Ready",
      ]}
    />
  );
}
