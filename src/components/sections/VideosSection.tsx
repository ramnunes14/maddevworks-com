import { useRef } from "react";
import HorizontalScrollBar from "@/components/HorizontalScrollBar";
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
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="servicos"
      className="snap-section videos-section relative flex items-center justify-center overflow-hidden px-4 py-20 md:px-12 md:py-24 lg:px-20"
    >
      <WaveBackground />

      <div className="videos-layout relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-6 md:gap-7">
        <div className="max-w-3xl text-center lg:text-left">
          <h2 data-reveal="text" className="videos-section-title mb-3 text-3xl font-extrabold leading-tight md:mb-4 md:text-5xl lg:text-6xl xl:text-7xl">
            PRODUÇÃO DE <span className="text-gradient">VÍDEOS</span>
          </h2>
          <p
            data-reveal="text"
            className="videos-section-copy text-base italic text-muted-foreground md:text-xl lg:text-2xl"
            style={{ animationDelay: "0.2s" }}
          >
            Reels e vídeos com narrativa para destacar a tua marca
          </p>
        </div>

        <div data-reveal className="relative" style={{ animationDelay: "0.4s" }}>
          <div
            ref={scrollRef}
            className="horizontal-fade-scroll media-scroll-track flex gap-3 overflow-x-auto scroll-px-4 pb-4 md:gap-4"
          >
            {reels.map((reel, index) => (
              <article
                key={reel}
                className="video-reel-card group flex-none overflow-hidden rounded-lg border border-white/10 bg-white/[0.06] shadow-2xl backdrop-blur-md"
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

          <HorizontalScrollBar trackRef={scrollRef} label="Percorrer vídeos" />
        </div>
      </div>
    </section>
  );
};

export default VideosSection;
