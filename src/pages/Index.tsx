import { useState, useEffect } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/sections/HeroSection";
import WebsitesSection from "@/components/sections/WebsitesSection";
import VideosSection from "@/components/sections/VideosSection";
import SocialSection from "@/components/sections/SocialSection";
import ContactSection from "@/components/sections/ContactSection";

const Index = () => {
  const [activeSection, setActiveSection] = useState("inicio");

  useEffect(() => {
    const container = document.getElementById("scroll-container");
    if (!container) return;

    const handleScroll = () => {
      const sections = ["inicio", "servicos", "duvidas"];
      const scrollPosition = container.scrollTop + window.innerHeight / 2;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main id="scroll-container" className="scroll-container">
      <Header activeSection={activeSection} />
      <HeroSection />
      <WebsitesSection />
      <VideosSection />
      <SocialSection />
      <ContactSection />
    </main>
  );
};

export default Index;
