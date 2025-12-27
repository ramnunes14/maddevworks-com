import heroIllustration from "@/assets/hero-illustration.svg";
import WaveBackground from "@/components/WaveBackground";

const HeroSection = () => {
  return (
    <section
      id="inicio"
      className="snap-section flex flex-col items-center justify-center px-6 md:px-12 lg:px-20 relative overflow-hidden"
    >
      <WaveBackground />

      <div className="flex flex-col items-center justify-center relative z-10 text-center">
        {/* Content */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold leading-tight mb-4 opacity-0 animate-fade-in-up">
            CONSTRÓI O TEU
            <br />
            SITE <span className="text-gradient">CONNOSCO</span>
          </h1>
          <p
            className="text-lg md:text-xl lg:text-2xl text-muted-foreground italic opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            Dá um boost ao teu negócio
          </p>
        </div>

        {/* Illustration */}
        <div
          className="opacity-0 animate-fade-in-up"
          style={{ animationDelay: "0.4s" }}
        >
          <img
            src={heroIllustration}
            alt="Pessoa a trabalhar num computador"
            className="w-64 md:w-80 lg:w-96 animate-float"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
