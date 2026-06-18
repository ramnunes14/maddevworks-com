import WaveBackground from "@/components/WaveBackground";

const photos = [
  "Fotografia de produto",
  "Sessão para redes sociais",
  "Fotografia de espaço",
  "Fotografia de equipa",
  "Detalhes para website",
  "Conteúdo para campanhas",
];

const PhotosSection = () => {
  return (
    <section
      id="fotos"
      className="snap-section relative flex items-center justify-center overflow-hidden px-6 py-32 md:px-12 lg:px-20"
    >
      <WaveBackground />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-8">
        <div className="max-w-3xl text-center lg:text-left">
          <h2 className="mb-4 text-3xl font-extrabold leading-tight opacity-0 animate-fade-in-up md:text-5xl lg:text-7xl">
            PRODUÇÃO DE <span className="text-gradient">FOTOS</span>
          </h2>
          <p
            className="text-lg italic text-muted-foreground opacity-0 animate-fade-in-up md:text-xl lg:text-2xl"
            style={{ animationDelay: "0.2s" }}
          >
            Fotos tiradas por nós para websites, redes sociais e campanhas.
          </p>
        </div>

        <div className="relative opacity-0 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          <div className="horizontal-fade-scroll flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory">
            {photos.map((photo, index) => (
              <article
                key={photo}
                className="w-[78vw] flex-none snap-start overflow-hidden rounded-lg border border-white/10 bg-white/[0.06] shadow-2xl backdrop-blur-md sm:w-[360px] lg:w-[380px]"
              >
                <div
                  className={`aspect-[4/3] ${
                    index % 3 === 0
                      ? "bg-[linear-gradient(135deg,rgba(226,232,240,0.42),rgba(51,65,85,0.52)),radial-gradient(circle_at_70%_25%,rgba(255,255,255,0.45),transparent_20%)]"
                      : index % 3 === 1
                        ? "bg-[linear-gradient(145deg,rgba(148,163,184,0.48),rgba(15,23,42,0.76)),radial-gradient(circle_at_25%_75%,rgba(255,255,255,0.34),transparent_24%)]"
                        : "bg-[linear-gradient(160deg,rgba(241,245,249,0.34),rgba(30,41,59,0.72)),radial-gradient(circle_at_50%_35%,rgba(255,255,255,0.38),transparent_22%)]"
                  }`}
                />
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhotosSection;
