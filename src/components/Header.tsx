import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

interface HeaderProps {
  activeSection: string;
}

const Header = ({ activeSection }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: "inicio", label: "Início" },
    { id: "servicos", label: "Serviços" },
    { id: "duvidas", label: "Dúvidas" },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4 md:px-12 lg:px-20">
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

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <Menu size={24} />
          </button>
        </nav>
      </header>

      {/* Mobile Fullscreen Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 z-[100] flex flex-col">
          {/* Glassmorphism header section with bottom radius */}
          <div className="bg-[hsl(222_47%_12%/0.95)] backdrop-blur-xl px-6 pt-4 pb-10 rounded-b-[40px] border-b border-primary/20">
            {/* Top row with logo and close button - same positioning as header */}
            <div className="flex items-center justify-between max-w-7xl mx-auto mb-8">
              <img 
                src={logo} 
                alt="MadDevWorks" 
                className="h-20 w-auto brightness-0 invert"
              />
              <button
                onClick={() => setIsMenuOpen(false)}
                className="text-white p-2"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>

            {/* Navigation links */}
            <nav className="flex flex-col items-center gap-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`italic transition-all ${
                    activeSection === item.id 
                      ? "text-[#1565C0] font-bold text-3xl" 
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
