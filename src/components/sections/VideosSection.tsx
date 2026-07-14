import { type KeyboardEvent, type PointerEvent, useRef, useState } from "react";
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
  const [scrollProgress, setScrollProgress] = useState(0);

  const updateScrollProgress = () => {
    const track = scrollRef.current;
    if (!track) return;

    const maxScroll = track.scrollWidth - track.clientWidth;
    setScrollProgress(maxScroll > 0 ? (track.scrollLeft / maxScroll) * 100 : 0);
  };

  const syncScrollbar = (nextProgress: number) => {
    const track = scrollRef.current ?? document.querySelector<HTMLDivElement>("#servicos .horizontal-fade-scroll");
    const boundedProgress = Math.min(100, Math.max(0, nextProgress));
    setScrollProgress(boundedProgress);

    if (!track) return;

    const maxScroll = track.scrollWidth - track.clientWidth;
    track.scrollLeft = (maxScroll * boundedProgress) / 100;
  };

  const syncScrollbarFromPointer = (event: PointerEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    const rect = event.currentTarget.getBoundingClientRect();
    syncScrollbar(((event.clientX - rect.left) / rect.width) * 100);
  };

  const handleScrollbarPointerDown = (event: PointerEvent<HTMLDivElement>) => {
    event.currentTarget.setPointerCapture(event.pointerId);
    syncScrollbarFromPointer(event);
  };

  const handleScrollbarPointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (event.buttons !== 1) return;
    syncScrollbarFromPointer(event);
  };

  const handleScrollbarKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const keySteps: Record<string, number> = {
      ArrowLeft: -8,
      ArrowRight: 8,
      PageDown: -18,
      PageUp: 18,
    };

    if (event.key === "Home") {
      event.preventDefault();
      syncScrollbar(0);
      return;
    }

    if (event.key === "End") {
      event.preventDefault();
      syncScrollbar(100);
      return;
    }

    const step = keySteps[event.key];
    if (step === undefined) return;

    event.preventDefault();
    syncScrollbar(scrollProgress + step);
  };

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
            onScroll={updateScrollProgress}
            className="horizontal-fade-scroll video-scroll-track flex gap-3 overflow-x-auto scroll-px-4 pb-4 md:gap-4"
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

          <div className="video-scrollbar-wrap">
            <div
              className="video-scrollbar-shell"
              role="slider"
              tabIndex={0}
              aria-label="Percorrer vídeos"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={Math.round(scrollProgress)}
              onPointerDown={handleScrollbarPointerDown}
              onPointerMove={handleScrollbarPointerMove}
              onKeyDown={handleScrollbarKeyDown}
            >
              <span className="video-scrollbar-fill" style={{ width: `${scrollProgress}%` }} />
              <span className="video-scrollbar-thumb" style={{ left: `${scrollProgress}%` }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideosSection;
