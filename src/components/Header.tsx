import { useState, useRef } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

interface HeaderProps {
  activeSection: string;
}

const Header = ({ activeSection }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const touchStartY = useRef<number>(0);
  const touchEndY = useRef<number>(0);

  const navItems = [
    { id: "inicio", label: "Início" },
    { id: "servicos", label: "Serviços" },
    { id: "duvidas", label: "Dúvidas" },
  ];

  const allSections = ["inicio", "servicos", "duvidas"];

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
        // Swipe up - go to next section
        scrollToSection(allSections[currentIndex + 1]);
      } else if (diff < 0 && currentIndex > 0) {
        // Swipe down - go to previous section
        scrollToSection(allSections[currentIndex - 1]);
      } else {
        setIsMenuOpen(false);
      }
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-[110] px-6 py-4 md:px-12 lg:px-20">
        <nav className="flex items-center justify-between max-w-7xl mx-auto">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src={logo} 
              alt="MadDevWorks - Constrói o teu site connosco" 
              className="h-20 md:h-26 lg:h-32 w-auto brightness-0 invert"
            />
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`nav-link text-sm tracking-wide ${
                    activeSection === item.id ? "active font-bold" : "font-medium"
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button - toggles between Menu and X */}
          <button
            className="md:hidden text-foreground p-2 transition-transform duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </header>

      {/* Mobile Fullscreen Menu */}
      {isMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 z-[105] flex flex-col animate-fade-in"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Glassmorphism menu section - starts from top */}
          <div className="bg-white/10 backdrop-blur-2xl px-6 pt-28 pb-8 rounded-b-[40px] border-b border-white/20 shadow-2xl animate-slide-down">
            {/* Navigation links */}
            <nav className="flex flex-col items-center gap-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`italic transition-all ${
                    activeSection === item.id 
                      ? "text-gradient font-bold text-3xl" 
                      : "text-white font-medium text-xl"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Transparent overlay for the rest - clicking closes menu */}
          <div 
            className="flex-1 bg-transparent"
            onClick={() => setIsMenuOpen(false)}
          />
        </div>
      )}
    </>
  );
};

export default Header;
