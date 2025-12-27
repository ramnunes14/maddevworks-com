import websitesIllustration from "@/assets/websites-illustration.svg";
import WaveBackground from "@/components/WaveBackground";

const WebsitesSection = () => {
  return (
    <section
      id="servicos"
      className="snap-section flex items-center justify-center px-6 md:px-12 lg:px-20 relative overflow-hidden"
    >
      <WaveBackground />

      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center justify-between relative z-10">
        {/* Content */}
        <div className="text-center md:text-left mb-8 md:mb-0 mt-32 md:mt-0">
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-extrabold leading-tight mb-4 opacity-0 animate-fade-in-up">
            DESENVOLVIMENTO
            <br />
            DE <span className="text-gradient">WEBSITES</span>
          </h2>
          <p
            className="text-lg md:text-xl lg:text-2xl text-muted-foreground italic opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            Criamos o site à tua medida
          </p>
        </div>

        {/* Illustration */}
        <div className="mt-16 md:mt-0 opacity-0 animate-fade-in-right" style={{ animationDelay: "0.4s" }}>
          <img
            src={websitesIllustration}
            alt="Desenvolvimento de websites"
            className="w-48 md:w-80 lg:w-[450px] animate-float"
          />
        </div>
      </div>
    </section>
  );
};

export default WebsitesSection;
