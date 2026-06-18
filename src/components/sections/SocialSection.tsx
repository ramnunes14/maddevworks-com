import { Grid2X2, Heart, MessageCircle } from "lucide-react";
import WaveBackground from "@/components/WaveBackground";

const socialExamples = [
  {
    title: "Calendário de conteúdos",
    icon: Grid2X2,
  },
  {
    title: "Posts para campanhas",
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
      className="snap-section relative flex items-center justify-center overflow-hidden px-6 py-32 md:px-12 lg:px-20"
    >
      <WaveBackground />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-8">
        <div className="max-w-3xl text-center lg:text-left">
          <h2 className="mb-4 text-3xl font-extrabold leading-tight opacity-0 animate-fade-in-up md:text-5xl lg:text-7xl">
            GESTÃO DE
            <br />
            <span className="text-gradient">REDES SOCIAIS</span>
          </h2>
          <p
            className="text-lg italic text-muted-foreground opacity-0 animate-fade-in-up md:text-xl lg:text-2xl"
            style={{ animationDelay: "0.2s" }}
          >
            Gerimos e potencializamos
            <br className="hidden md:block" /> as tuas redes sociais
          </p>
        </div>

        <div
          className="grid gap-4 opacity-0 animate-fade-in-up sm:grid-cols-3"
          style={{ animationDelay: "0.4s" }}
        >
          {socialExamples.map(({ title, icon: Icon }, index) => (
            <article
              key={title}
              className="rounded-lg border border-white/10 bg-white/[0.06] p-4 shadow-2xl backdrop-blur-md"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/10">
                <Icon className="h-5 w-5 text-primary" />
              </div>
              <div className="mb-4 aspect-[4/5] rounded-md bg-[linear-gradient(145deg,rgba(226,232,240,0.22),rgba(15,23,42,0.68))] p-3">
                <div className="mb-3 h-24 rounded bg-white/15" />
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
