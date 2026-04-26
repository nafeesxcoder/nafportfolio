import HeroSection from "./components/HeroSection";
import StatsBar from "./components/StatsBar";
import ProjectsSection from "./components/ProjectsSection";
import ServicesSection from "./components/ServicesSection";
import WhyChooseMe from "./components/WhyChooseMe";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Contact from "./contact/page";

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

      <WhyChooseMe />

      {/* About Section */}
      {<About />}

      <Testimonials />

      {/* Contact Section */}
      {<Contact />}
    </main>
  );
}
