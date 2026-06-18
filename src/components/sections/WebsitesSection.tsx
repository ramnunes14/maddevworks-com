import { ExternalLink } from "lucide-react";
import WaveBackground from "@/components/WaveBackground";

const websites = [
  {
    title: "Website institucional",
    description: "Página rápida, clara e preparada para apresentar serviços.",
    url: "#",
  },
  {
    title: "Landing page",
    description: "Estrutura focada em campanhas e pedidos de contacto.",
    url: "#",
  },
  {
    title: "Portfólio digital",
    description: "Experiência visual para mostrar trabalhos e gerar confiança.",
    url: "#",
  },
];

const WebsitesSection = () => {
  return (
    <section
      id="servicos"
      className="snap-section relative flex items-center justify-center overflow-hidden px-6 py-32 md:px-12 lg:px-20"
    >
      <WaveBackground />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-8">
        <div className="max-w-3xl text-center md:text-left">
          <h2 className="mb-4 text-3xl font-extrabold leading-tight opacity-0 animate-fade-in-up md:text-5xl lg:text-7xl">
            DESENVOLVIMENTO
            <br />
            DE <span className="text-gradient">WEBSITES</span>
          </h2>
          <p
            className="text-lg italic text-muted-foreground opacity-0 animate-fade-in-up md:text-xl lg:text-2xl"
            style={{ animationDelay: "0.2s" }}
          >
            Criamos o site à tua medida
          </p>
        </div>

        <div
          className="grid gap-4 opacity-0 animate-fade-in-up md:grid-cols-3"
          style={{ animationDelay: "0.4s" }}
        >
          {websites.map((website) => (
            <article
              key={website.title}
              className="rounded-lg border border-white/10 bg-white/[0.06] p-4 shadow-2xl backdrop-blur-md"
            >
              <div className="mb-3 rounded-md border border-white/10 bg-slate-950/70 p-2">
                <div className="mb-2 flex gap-1">
                  <span className="h-2 w-2 rounded-full bg-white/30" />
                  <span className="h-2 w-2 rounded-full bg-white/20" />
                  <span className="h-2 w-2 rounded-full bg-white/10" />
                </div>
                <div className="space-y-2">
                  <div className="h-3 w-3/4 rounded bg-white/25" />
                  <div className="h-14 rounded bg-white/10" />
                  <div className="grid grid-cols-3 gap-2">
                    <div className="h-6 rounded bg-white/15" />
                    <div className="h-6 rounded bg-white/10" />
                    <div className="h-6 rounded bg-white/15" />
                  </div>
                </div>
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
