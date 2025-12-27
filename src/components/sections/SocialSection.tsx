import socialIllustration from "@/assets/social-illustration.svg";
import WaveBackground from "@/components/WaveBackground";

const SocialSection = () => {
  return (
    <section 
      className="snap-section flex items-center px-6 md:px-12 lg:px-20 relative overflow-hidden"
    >
      <WaveBackground />

      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center justify-between relative z-10">
        {/* Content */}
        <div className="text-center md:text-left mb-8 md:mb-0 -mt-32 md:mt-0">
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-extrabold leading-tight mb-4 opacity-0 animate-fade-in-up">
            GESTÃO DE
            <br />
            <span className="text-gradient">REDES SOCIAIS</span>
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground italic opacity-0 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Gerimos e potencializamos<br className="hidden md:block" /> as tuas redes sociais
          </p>
        </div>
      </div>

      {/* Illustration - positioned to edge of screen, lower on mobile */}
      <div className="opacity-0 animate-fade-in-right absolute right-0 top-[55%] md:top-1/2 -translate-y-1/2 -mr-6 md:-mr-12 lg:-mr-20 z-10" style={{ animationDelay: "0.4s" }}>
        <img 
          src={socialIllustration} 
          alt="Gestão de redes sociais"
          className="w-80 md:w-[400px] lg:w-[550px] animate-float"
        />
      </div>
    </section>
  );
};

export default SocialSection;
