import { Grid2X2, Heart, MessageCircle } from "lucide-react";
import WaveBackground from "@/components/WaveBackground";

const socialExamples = [
  {
    title: "Calendário de conteúdos",
    icon: Grid2X2,
  },
  {
    title: "Publicações para campanhas",
    icon: Heart,
  },
  {
    title: "Stories e interação",
    icon: MessageCircle,
  },
];

const SocialSection = () => {
  return (
    <section
      id="redes-sociais"
      className="snap-section relative flex items-center justify-center overflow-hidden px-4 py-20 md:px-12 md:py-32 lg:px-20"
    >
      <WaveBackground />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-6 md:gap-8">
        <div className="max-w-3xl text-center lg:text-left">
          <h2 className="mb-3 text-3xl font-extrabold leading-tight opacity-0 animate-fade-in-up md:mb-4 md:text-5xl lg:text-7xl">
            GESTÃO DE
            <br />
            <span className="text-gradient">REDES SOCIAIS</span>
          </h2>
          <p
            className="text-base italic text-muted-foreground opacity-0 animate-fade-in-up md:text-xl lg:text-2xl"
            style={{ animationDelay: "0.2s" }}
          >
            Gerimos e potenciamos
            <br className="hidden md:block" /> as tuas redes sociais
          </p>
        </div>

        <div
          className="horizontal-fade-scroll flex snap-x snap-mandatory gap-3 overflow-x-auto scroll-px-4 pb-4 opacity-0 animate-fade-in-up sm:grid sm:grid-cols-3 sm:overflow-visible sm:pb-0 md:gap-4"
          style={{ animationDelay: "0.4s" }}
        >
          {socialExamples.map(({ title, icon: Icon }, index) => (
            <article
              key={title}
              className="w-[74vw] max-w-[280px] flex-none snap-start rounded-lg border border-white/10 bg-white/[0.06] p-3 shadow-2xl backdrop-blur-md sm:w-auto sm:max-w-none md:p-4"
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/10 md:mb-4 md:h-12 md:w-12">
                <Icon className="h-5 w-5 text-primary" />
              </div>
              <div className="mb-3 aspect-[16/9] rounded-md bg-[linear-gradient(145deg,rgba(226,232,240,0.22),rgba(15,23,42,0.68))] p-3 sm:aspect-[4/5] md:mb-4">
                <div className="mb-3 h-12 rounded bg-white/15 sm:h-24" />
                <div className="space-y-2">
                  <div className="h-2 w-3/4 rounded bg-white/30" />
                  <div className="h-2 w-1/2 rounded bg-white/20" />
                  <div className="h-8 rounded bg-white/10" />
                </div>
              </div>
              <p className="text-sm font-bold leading-snug">
                0{index + 1}. {title}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialSection;
