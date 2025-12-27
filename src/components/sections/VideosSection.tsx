import videosIllustration from "@/assets/videos-illustration.svg";
import WaveBackground from "@/components/WaveBackground";

const VideosSection = () => {
  return (
    <section className="snap-section flex items-center justify-center px-6 md:px-12 lg:px-20 relative overflow-hidden">
      <WaveBackground />

      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center justify-between relative z-10">
        {/* Content */}
        <div className="text-center md:text-left mb-8 md:mb-0 order-1">
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-extrabold leading-tight mb-4 opacity-0 animate-fade-in-up">
            PRODUÇÃO DE <span className="text-gradient">VÍDEOS E FOTOS</span>
          </h2>
          <p
            className="text-lg md:text-xl lg:text-2xl text-muted-foreground italic opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            Vídeos com storytelling e fotos de qualidade
          </p>
        </div>

        {/* Illustration */}
        <div className="opacity-0 animate-fade-in-right order-2" style={{ animationDelay: "0.4s" }}>
          <img
            src={videosIllustration}
            alt="Produção de vídeos e fotos"
            className="w-64 md:w-80 lg:w-[450px] animate-float"
          />
        </div>
      </div>
    </section>
  );
};

export default VideosSection;
