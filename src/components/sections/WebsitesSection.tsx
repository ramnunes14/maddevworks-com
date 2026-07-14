import { ExternalLink } from "lucide-react";
import WaveBackground from "@/components/WaveBackground";

const websites = [
  {
    title: "Survey Madeira",
    description: "Website para serviços especializados de engenharia civil e consultoria técnica.",
    url: "https://surveymadeira.com/",
    image: "/websites/survey-madeira.png",
    alt: "Página inicial do website Survey Madeira",
  },
  {
    title: "Carvão Grill House",
    description: "Website para restaurante com apresentação de marca, menu e reservas.",
    url: "https://www.carvaogrillhouse.com/",
    image: "/websites/carvao-grill-house.png",
    alt: "Página inicial do website Carvão Grill House",
  },
  {
    title: "Carvão Rooftop",
    description: "Website para rooftop com apresentação da marca, menu, reservas e contactos.",
    url: "https://carvaorooftop.pt/",
    image: "/websites/carvao-rooftop.png",
    alt: "Página inicial do website Carvão Rooftop",
  },
];

const WebsitesSection = () => {
  return (
    <section
      id="websites"
      className="snap-section relative flex items-center justify-center overflow-hidden px-4 py-20 md:px-12 md:py-32 lg:px-20"
    >
      <WaveBackground />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-6 md:gap-8">
        <div className="max-w-3xl text-center md:text-left">
          <h2 data-reveal="text" className="mb-3 text-3xl font-extrabold leading-tight md:mb-4 md:text-5xl lg:text-7xl">
            DESENVOLVIMENTO
            <br />
            DE <span className="text-gradient">WEBSITES</span>
          </h2>
          <p
            data-reveal="text"
            className="text-base italic text-muted-foreground md:text-xl lg:text-2xl"
            style={{ animationDelay: "0.2s" }}
          >
            Criamos o site à tua medida
          </p>
        </div>

        <div
          data-reveal
          className="horizontal-fade-scroll flex snap-x snap-mandatory gap-3 overflow-x-auto scroll-px-4 pb-4 md:grid md:grid-cols-3 md:gap-4 md:overflow-visible md:pb-0"
          style={{ animationDelay: "0.4s" }}
        >
          {websites.map((website) => (
            <article
              key={website.title}
              className="w-[84vw] max-w-[360px] flex-none snap-start rounded-lg border border-white/10 bg-white/[0.06] p-3 shadow-2xl backdrop-blur-md md:w-auto md:max-w-none md:p-4"
            >
              <div className="mb-3 aspect-video overflow-hidden rounded-md border border-white/10 bg-slate-950/70">
                {website.image ? (
                  <img
                    src={website.image}
                    alt={website.alt}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                ) : (
                  <div className="h-full p-2">
                    <div className="mb-2 flex gap-1">
                      <span className="h-2 w-2 rounded-full bg-white/30" />
                      <span className="h-2 w-2 rounded-full bg-white/20" />
                      <span className="h-2 w-2 rounded-full bg-white/10" />
                    </div>
                    <div className="space-y-2">
                      <div className="h-3 w-3/4 rounded bg-white/25" />
                      <div className="h-10 rounded bg-white/10 md:h-14" />
                      <div className="grid grid-cols-3 gap-2">
                        <div className="h-6 rounded bg-white/15" />
                        <div className="h-6 rounded bg-white/10" />
                        <div className="h-6 rounded bg-white/15" />
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-base font-bold">{website.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{website.description}</p>
                </div>
                <a
                  href={website.url}
                  className="rounded-full border border-white/10 bg-white/10 p-2 transition-colors hover:bg-white/20"
                  aria-label={`Abrir ${website.title}`}
                  target={website.url.startsWith("http") ? "_blank" : undefined}
                  rel={website.url.startsWith("http") ? "noreferrer" : undefined}
                >
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WebsitesSection;
