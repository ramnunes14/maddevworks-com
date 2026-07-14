import { useCallback, useEffect, useRef, useState } from "react";
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
  const touchStartRef = useRef({ x: 0, y: 0, sectionIndex: 0 });

  const handleIntroReveal = useCallback(() => {
    setIsIntroRevealed(true);
  }, []);

  const handleIntroComplete = useCallback(() => {
    setShowIntro(false);
  }, []);

  useEffect(() => {
    const container = document.getElementById("scroll-container");
    if (!container) return;

    const sections = trackedSections
      .map((sectionId) => document.getElementById(sectionId))
      .filter((section): section is HTMLElement => Boolean(section));
    const mobileSnapQuery = window.matchMedia("(max-width: 767px)");

    const handleScroll = () => {
      const viewportMiddle = container.scrollTop + window.innerHeight / 2;

      for (const section of sections) {
        const { offsetTop, offsetHeight } = section;
        if (viewportMiddle >= offsetTop && viewportMiddle < offsetTop + offsetHeight) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    const getClosestSectionIndex = () => {
      let closestIndex = 0;
      let closestDistance = Number.POSITIVE_INFINITY;

      sections.forEach((section, index) => {
        const distance = Math.abs(container.scrollTop - section.offsetTop);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      return closestIndex;
    };

    const snapToSection = (index: number, behavior: ScrollBehavior = "smooth") => {
      const section = sections[Math.max(0, Math.min(index, sections.length - 1))];
      if (!section) return;

      container.scrollTo({ top: section.offsetTop, behavior });
      window.setTimeout(() => {
        handleScroll();
      }, behavior === "smooth" ? 520 : 0);
    };

    const handleTouchStart = (event: TouchEvent) => {
      if (!mobileSnapQuery.matches) return;

      const touch = event.touches[0];
      touchStartRef.current = { x: touch.clientX, y: touch.clientY, sectionIndex: getClosestSectionIndex() };
    };

    const handleTouchEnd = (event: TouchEvent) => {
      if (!mobileSnapQuery.matches) return;

      const touch = event.changedTouches[0];
      const deltaX = touch.clientX - touchStartRef.current.x;
      const deltaY = touchStartRef.current.y - touch.clientY;

      if (Math.abs(deltaY) < 26 || Math.abs(deltaX) > Math.abs(deltaY) * 0.85) {
        return;
      }

      snapToSection(touchStartRef.current.sectionIndex + (deltaY > 0 ? 1 : -1));
    };

    const observer =
      "IntersectionObserver" in window
        ? new IntersectionObserver(
            (entries) => {
              for (const entry of entries) {
                if (entry.isIntersecting) {
                  entry.target.classList.add("section-visible");
                }
              }
            },
            {
              root: container,
              threshold: 0.28,
              rootMargin: "0px 0px -8% 0px",
            },
          )
        : null;

    if (observer) {
      sections.forEach((section) => observer.observe(section));
    } else {
      sections.forEach((section) => section.classList.add("section-visible"));
    }

    document.getElementById("inicio")?.classList.add("section-visible");
    handleScroll();
    container.addEventListener("scroll", handleScroll);
    container.addEventListener("touchstart", handleTouchStart, { passive: true });
    container.addEventListener("touchend", handleTouchEnd, { passive: true });

    return () => {
      container.removeEventListener("scroll", handleScroll);
      container.removeEventListener("touchstart", handleTouchStart);
      container.removeEventListener("touchend", handleTouchEnd);
      observer?.disconnect();
    };
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
