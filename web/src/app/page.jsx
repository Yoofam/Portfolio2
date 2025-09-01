"use client";
import { useState } from "react";
import { useTheme } from "../hooks/useTheme";
import {
  projects,
  skills,
  experiences,
  education,
} from "../data/portfolioData";
import Navigation from "../components/Portfolio/Navigation";
import HeroSection from "../components/Portfolio/HeroSection";
import AboutSection from "../components/Portfolio/AboutSection";
import ResumeSection from "../components/Portfolio/ResumeSection";
import PortfolioSection from "../components/Portfolio/PortfolioSection";
import ContactSection from "../components/Portfolio/ContactSection";
import Footer from "../components/Portfolio/Footer";
import AnimatedNameStyles from "../components/Portfolio/AnimatedNameStyles";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home");
  const { isDarkMode, toggleTheme } = useTheme();

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  const downloadCV = () => {
    scrollToSection("cv");
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDarkMode
          ? "bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
          : "bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50"
      }`}
    >
      <Navigation
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        isDarkMode={isDarkMode}
        toggleTheme={toggleTheme}
      />

      <HeroSection
        isDarkMode={isDarkMode}
        scrollToSection={scrollToSection}
        downloadCV={downloadCV}
      />

      <AboutSection isDarkMode={isDarkMode} skills={skills} />

      <ResumeSection
        isDarkMode={isDarkMode}
        experiences={experiences}
        education={education}
      />

      <PortfolioSection isDarkMode={isDarkMode} projects={projects} />

      <ContactSection isDarkMode={isDarkMode} />

      <Footer isDarkMode={isDarkMode} />

      <AnimatedNameStyles />
    </div>
  );
}
