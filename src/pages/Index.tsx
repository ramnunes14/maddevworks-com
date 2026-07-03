import { useCallback, useEffect, useState } from "react";
import Header from "@/components/Header";
import IntroAnimation from "@/components/IntroAnimation";
import ContactSection from "@/components/sections/ContactSection";
import DroneSection from "@/components/sections/DroneSection";
import HeroSection from "@/components/sections/HeroSection";
import PhotosSection from "@/components/sections/PhotosSection";
import SocialSection from "@/components/sections/SocialSection";
import VideosSection from "@/components/sections/VideosSection";
import WebsitesSection from "@/components/sections/WebsitesSection";

const trackedSections = ["inicio", "servicos", "websites", "fotos", "drone", "redes-sociais", "duvidas"];

const prefersReducedMotion = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const Index = () => {
  const [activeSection, setActiveSection] = useState("inicio");
  const [playIntro] = useState(() => !prefersReducedMotion());
  const [isIntroRevealed, setIsIntroRevealed] = useState(() => !playIntro);
  const [showIntro, setShowIntro] = useState(playIntro);

  const handleIntroReveal = useCallback(() => {
    setIsIntroRevealed(true);
  }, []);

  const handleIntroComplete = useCallback(() => {
    setShowIntro(false);
  }, []);

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
    <>
      {showIntro && <IntroAnimation onComplete={handleIntroComplete} onReveal={handleIntroReveal} />}

      <Header activeSection={activeSection} />

      <main
        id="scroll-container"
        className={`scroll-container ${
          playIntro ? (isIntroRevealed ? "intro-content-visible" : "intro-content-hidden") : ""
        }`}
        aria-hidden={playIntro && !isIntroRevealed}
      >
        <HeroSection />
        <VideosSection />
        <WebsitesSection />
        <PhotosSection />
        <DroneSection />
        <SocialSection />
        <ContactSection />
      </main>
    </>
  );
};

export default Index;
