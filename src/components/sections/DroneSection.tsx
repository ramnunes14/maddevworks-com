import { useRef } from "react";
import { Play } from "lucide-react";
import HorizontalScrollBar from "@/components/HorizontalScrollBar";
import WaveBackground from "@/components/WaveBackground";

type DroneShot = {
  title: string;
  video?: string;
};

const droneShots = [
  {
    title: "Filmagem aérea de espaços",
    video: "/videos/drone-01.mp4",
  },
  {
    title: "Drone para imobiliário",
    video: "/videos/drone-02.mp4",
  },
  { title: "Planos cinematográficos" },
] satisfies DroneShot[];

const DroneSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="drone"
      className="snap-section relative flex items-center justify-center overflow-hidden px-4 py-20 md:px-12 md:py-32 lg:px-20"
    >
      <WaveBackground />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-6 md:gap-8">
        <div className="max-w-3xl text-center lg:text-left">
          <h2 data-reveal="text" className="mb-3 text-3xl font-extrabold leading-tight md:mb-4 md:text-5xl lg:text-7xl">
            FILMAGENS DE <span className="text-gradient">DRONE</span>
          </h2>
          <p
            data-reveal="text"
            className="text-base italic text-muted-foreground md:text-xl lg:text-2xl"
            style={{ animationDelay: "0.2s" }}
          >
            Captação aérea para dar escala, contexto e impacto aos projetos
          </p>
        </div>

        <div data-reveal className="relative" style={{ animationDelay: "0.4s" }}>
          <div
            ref={scrollRef}
            className="horizontal-fade-scroll media-scroll-track flex gap-3 overflow-x-auto scroll-px-4 pb-4 md:gap-4"
          >
            {droneShots.map((shot) => (
              <article
                key={shot.title}
                className="group w-[84vw] max-w-[380px] flex-none overflow-hidden rounded-lg border border-white/10 bg-white/[0.06] shadow-2xl backdrop-blur-md sm:w-[520px] sm:max-w-none lg:w-[560px]"
              >
                <div className="relative aspect-video bg-slate-950">
                  {shot.video ? (
                    <video
                      src={shot.video}
                      title={shot.title}
                      className="h-full w-full object-cover"
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="metadata"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(226,232,240,0.32),rgba(15,23,42,0.72)),radial-gradient(circle_at_68%_24%,rgba(255,255,255,0.42),transparent_22%)]">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/25 bg-black/30 backdrop-blur transition-transform group-hover:scale-110">
                          <Play className="ml-1 h-5 w-5 fill-white text-white" />
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>

          <HorizontalScrollBar trackRef={scrollRef} label="Percorrer drones" />
        </div>
      </div>
    </section>
  );
};

export default DroneSection;
