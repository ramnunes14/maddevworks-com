import heroIllustration from "@/assets/hero-illustration.svg";
import WaveBackground from "@/components/WaveBackground";

const HeroSection = () => {
  return (
    <section
      id="inicio"
      className="snap-section relative flex flex-col items-center justify-center overflow-hidden px-4 pb-12 pt-24 md:px-12 md:py-24 lg:px-20"
    >
      <WaveBackground />

      <div className="relative z-10 flex flex-col items-center justify-center text-center">
        <div className="mb-6 md:mb-8">
          <h1 className="mb-3 text-[2.45rem] font-extrabold leading-[1.05] opacity-0 animate-fade-in-up sm:text-5xl md:mb-4 md:text-5xl lg:text-7xl">
            CONSTRÓI A TUA
            <br />
            PRESENÇA ONLINE
            <br />
            <span className="text-gradient">CONNOSCO</span>
          </h1>
          <p
            className="text-base italic text-muted-foreground opacity-0 animate-fade-in-up md:text-xl lg:text-2xl"
            style={{ animationDelay: "0.2s" }}
          >
            Dá um impulso ao teu negócio
          </p>
        </div>

        <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          <img
            src={heroIllustration}
            alt="Pessoa a trabalhar num computador"
            className="w-52 animate-float brightness-95 saturate-75 drop-shadow-[0_28px_80px_rgba(0,0,0,0.55)] sm:w-60 md:w-80 lg:w-96"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
