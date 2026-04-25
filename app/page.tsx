import HeroSection from "./components/HeroSection";
import StatsBar from "./components/StatsBar";
import ProjectsSection from "./components/ProjectsSection";
import ServicesSection from "./components/ServicesSection";
// import AboutSection from "./components/AboutSection";
// import ContactSection from "./components/ContactSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section - First Screen */}
      <HeroSection />

      {/* Stats Bar - Trust Indicators */}
      <StatsBar />

      {/* Work/Projects Section */}
      <ProjectsSection />

      {/* Services Section*/}
      {<ServicesSection />}

      {/* About Section */}
      {/* <AboutSection /> */}

      {/* Contact Section */}
      {/* <ContactSection /> */}
    </main>
  );
}
