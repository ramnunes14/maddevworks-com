import contactIllustration from "@/assets/contact-illustration.svg";
import WaveBackground from "@/components/WaveBackground";
import { Mail, Instagram } from "lucide-react";

const ContactSection = () => {
  return (
    <section 
      id="duvidas" 
      className="snap-section flex flex-col items-center justify-center px-6 md:px-12 lg:px-20 relative overflow-hidden"
    >
      <WaveBackground />

      {/* Content - centered vertically */}
      <div className="relative z-10 text-center">
        <h2 className="text-3xl md:text-5xl lg:text-7xl font-extrabold leading-tight mb-4 opacity-0 animate-fade-in-up">
          AINDA TENS
          <br />
          <span className="text-gradient">DÚVIDAS</span>?
        </h2>
        <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground opacity-0 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          Contacta-nos
        </p>
        
        {/* Contact Icons */}
        <div className="flex items-center justify-center gap-6 mt-6 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          <a 
            href="mailto:maddevworks@gmail.com" 
            className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
            aria-label="Email"
          >
            <Mail className="w-6 h-6 md:w-8 md:h-8 text-primary" />
          </a>
          <a 
            href="https://instagram.com/maddevworks" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="w-6 h-6 md:w-8 md:h-8 text-primary" />
          </a>
        </div>
      </div>

      {/* Illustration - absolutely positioned at bottom */}
      <div className="absolute bottom-0 inset-x-0 flex justify-center opacity-0 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
        <img 
          src={contactIllustration} 
          alt="Contacta-nos"
          className="w-[282px] md:w-[352px] lg:w-[422px] animate-float"
        />
      </div>
    </section>
  );
};

export default ContactSection;
