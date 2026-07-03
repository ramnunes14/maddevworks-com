import { useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/intro-logo.png";

interface HeaderProps {
  activeSection: string;
}

const Header = ({ activeSection }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const touchStartY = useRef<number>(0);
  const touchEndY = useRef<number>(0);
  const showLogo = activeSection === "inicio";

  const navItems = [
    { id: "inicio", label: "Início" },
    { id: "servicos", label: "Serviços" },
    { id: "duvidas", label: "Dúvidas" },
  ];

  const allSections = ["inicio", "servicos", "websites", "fotos", "drone", "redes-sociais", "duvidas"];

  const isNavItemActive = (id: string) => {
    if (id === "servicos") {
      return ["servicos", "websites", "fotos", "drone", "redes-sociais"].includes(activeSection);
    }

    return activeSection === id;
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndY.current = e.changedTouches[0].clientY;
    const diff = touchStartY.current - touchEndY.current;
    const threshold = 50;

    if (Math.abs(diff) > threshold) {
      const currentIndex = allSections.indexOf(activeSection);

      if (diff > 0 && currentIndex < allSections.length - 1) {
        scrollToSection(allSections[currentIndex + 1]);
      } else if (diff < 0 && currentIndex > 0) {
        scrollToSection(allSections[currentIndex - 1]);
      } else {
        setIsMenuOpen(false);
      }
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-[110] px-4 py-3 md:px-12 md:py-4 lg:px-20">
        <nav className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="relative h-14 w-14 shrink-0 sm:h-16 sm:w-16 md:h-20 md:w-20 lg:h-24 lg:w-24">
            <img
              src={logo}
              alt="MadDevWorks"
              className={`absolute left-0 top-[58%] h-12 w-auto -translate-y-1/2 object-contain drop-shadow-[0_10px_30px_rgba(0,0,0,0.45)] transition-opacity duration-150 sm:h-14 md:h-16 lg:h-20 ${
                showLogo ? "opacity-100" : "pointer-events-none opacity-0"
              }`}
            />
          </div>

          <ul className="flex items-center gap-3 text-xs sm:gap-5 sm:text-sm md:gap-8">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`nav-link text-sm tracking-wide ${
                    isNavItemActive(item.id) ? "active font-bold" : "font-medium"
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          <button
            className="hidden h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/20 text-foreground transition-transform duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </header>

      {isMenuOpen && (
        <div
          className="fixed inset-0 z-[105] flex flex-col animate-fade-in md:hidden"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className="animate-slide-down rounded-b-3xl border-b border-white/10 bg-slate-950/85 px-6 pb-7 pt-24 shadow-2xl backdrop-blur-2xl">
            <nav className="flex flex-col items-center gap-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`italic transition-all ${
                    isNavItemActive(item.id)
                      ? "text-gradient font-bold text-2xl"
                      : "text-white font-medium text-lg"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>

          <div className="flex-1 bg-transparent" onClick={() => setIsMenuOpen(false)} />
        </div>
      )}
    </>
  );
};

export default Header;
