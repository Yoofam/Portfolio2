import React from "react";

// Import your components
import Navigation from "../components/Portfolio/Navigation";
import HeroSection from "../components/Portfolio/HeroSection";
import AboutSection from "../components/Portfolio/AboutSection";
import PortfolioSection from "../components/Portfolio/PortfolioSection";
import ResumeSection from "../components/Portfolio/ResumeSection";
import ContactSection from "../components/Portfolio/ContactSection";
import Footer from "../components/Portfolio/Footer";

function App() {
  return (
    <div className="bg-gray-50 min-h-screen text-gray-900">
      <Navigation />

      <main>
        <HeroSection />
        <AboutSection />
        <PortfolioSection />
        <ResumeSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}

export default App;
