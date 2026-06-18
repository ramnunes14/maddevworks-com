import { useEffect, useState } from "react";
import Header from "@/components/Header";
import ContactSection from "@/components/sections/ContactSection";
import DroneSection from "@/components/sections/DroneSection";
import HeroSection from "@/components/sections/HeroSection";
import PhotosSection from "@/components/sections/PhotosSection";
import SocialSection from "@/components/sections/SocialSection";
import VideosSection from "@/components/sections/VideosSection";
import WebsitesSection from "@/components/sections/WebsitesSection";

const trackedSections = ["inicio", "servicos", "videos", "fotos", "drone", "redes-sociais", "duvidas"];

const Index = () => {
  const [activeSection, setActiveSection] = useState("inicio");

  useEffect(() => {
    const container = document.getElementById("scroll-container");
    if (!container) return;

    const handleScroll = () => {
      const viewportMiddle = container.scrollTop + window.innerHeight / 2;

      for (const sectionId of trackedSections) {
        const section = document.getElementById(sectionId);
        if (!section) continue;

        const { offsetTop, offsetHeight } = section;
        if (viewportMiddle >= offsetTop && viewportMiddle < offsetTop + offsetHeight) {
          setActiveSection(sectionId);
          break;
        }
      }
    };

    handleScroll();
    container.addEventListener("scroll", handleScroll);

    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main id="scroll-container" className="scroll-container">
      <Header activeSection={activeSection} />
      <HeroSection />
      <WebsitesSection />
      <VideosSection />
      <PhotosSection />
      <DroneSection />
      <SocialSection />
      <ContactSection />
    </main>
  );
};

export default Index;
