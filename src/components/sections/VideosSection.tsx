import WaveBackground from "@/components/WaveBackground";

const reels = [
  "/videos/reel-01.mp4",
  "/videos/reel-02.mp4",
  "/videos/reel-03.mp4",
  "/videos/reel-04.mp4",
  "/videos/reel-05.mp4",
  "/videos/reel-06.mp4",
  "/videos/reel-07.mp4",
  "/videos/reel-08.mp4",
  "/videos/reel-09.mp4",
];

const VideosSection = () => {
  return (
    <section
      id="videos"
      className="snap-section relative flex items-center justify-center overflow-hidden px-4 py-20 md:px-12 md:py-32 lg:px-20"
    >
      <WaveBackground />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-6 md:gap-8">
        <div className="max-w-3xl text-center lg:text-left">
          <h2 className="mb-3 text-3xl font-extrabold leading-tight opacity-0 animate-fade-in-up md:mb-4 md:text-5xl lg:text-7xl">
            PRODUÇÃO DE <span className="text-gradient">VÍDEOS</span>
          </h2>
          <p
            className="text-base italic text-muted-foreground opacity-0 animate-fade-in-up md:text-xl lg:text-2xl"
            style={{ animationDelay: "0.2s" }}
          >
            Reels e vídeos com storytelling para destacar a tua marca.
          </p>
        </div>

        <div className="relative opacity-0 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          <div className="horizontal-fade-scroll flex snap-x snap-mandatory gap-3 overflow-x-auto scroll-px-4 pb-4 md:gap-4">
            {reels.map((reel, index) => (
              <article
                key={reel}
                className="group w-[62vw] max-w-[240px] flex-none snap-start overflow-hidden rounded-lg border border-white/10 bg-white/[0.06] shadow-2xl backdrop-blur-md sm:w-[300px] sm:max-w-none lg:w-[300px]"
              >
                <video
                  src={reel}
                  className="aspect-[9/14] h-full w-full bg-slate-950 object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload={index < 3 ? "metadata" : "none"}
                />
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideosSection;
