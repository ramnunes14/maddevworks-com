import WaveBackground from "@/components/WaveBackground";

const SocialSection = () => {
  return (
    <section
      id="redes-sociais"
      className="snap-section relative flex items-center justify-center overflow-hidden px-4 py-20 md:px-12 md:py-32 lg:px-20"
    >
      <WaveBackground />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl justify-center">
        <div className="max-w-6xl text-center">
          <h2 data-reveal="text" className="social-section-title font-extrabold">
            GESTÃO DE
            <br />
            <span className="text-gradient">REDES SOCIAIS</span>
          </h2>
          <p
            data-reveal="text"
            className="social-section-copy mt-6 italic text-muted-foreground md:mt-8"
            style={{ animationDelay: "0.2s" }}
          >
            Gerimos e potenciamos
            <br /> as tuas redes sociais
          </p>
        </div>
      </div>
    </section>
  );
};

export default SocialSection;
