import WaveBackground from "@/components/WaveBackground";

const photos = [
  { src: "/photos/portfolio-01.webp", title: "Entrada exterior", alt: "Entrada exterior de moradia moderna com porta em madeira e vasos" },
  { src: "/photos/portfolio-02.webp", title: "Escadas interiores", alt: "Escadas interiores brancas com guarda em vidro e reflexos" },
  { src: "/photos/portfolio-03.webp", title: "Closet", alt: "Closet branco com pavimento em madeira e arrumação aberta" },
  { src: "/photos/portfolio-04.webp", title: "Jardim privado", alt: "Jardim privado junto a fachada moderna com janelas amplas" },
  { src: "/photos/portfolio-05.webp", title: "Fachada e jardim", alt: "Fachada contemporânea com jardim e vegetação exterior" },
  { src: "/photos/portfolio-06.webp", title: "Garagem coberta", alt: "Garagem coberta com estrutura metálica e sombras geométricas" },
  { src: "/photos/portfolio-07.webp", title: "Quarto luminoso", alt: "Quarto vazio com pavimento em madeira e porta de varanda" },
  { src: "/photos/portfolio-08.webp", title: "Quarto com varanda", alt: "Quarto branco com ar condicionado e acesso a varanda" },
  { src: "/photos/portfolio-09.webp", title: "Casa de banho", alt: "Casa de banho em pedra clara com duche em vidro e lavatórios" },
  { src: "/photos/portfolio-10.webp", title: "Lavatórios duplos", alt: "Bancada de casa de banho com dois lavatórios e espelho grande" },
  { src: "/photos/portfolio-11.webp", title: "Roupeiros", alt: "Roupeiros brancos embutidos com puxadores metalicos" },
  { src: "/photos/portfolio-12.webp", title: "Hall interior", alt: "Hall interior minimalista com paredes brancas e pavimento em madeira" },
  { src: "/photos/portfolio-13.webp", title: "Duche em vidro", alt: "Casa de banho compacta com espelho redondo e duche em vidro" },
  { src: "/photos/portfolio-14.webp", title: "Quarto estreito", alt: "Quarto estreito com porta de varanda e ar condicionado" },
  { src: "/photos/portfolio-15.webp", title: "Cozinha branca", alt: "Cozinha branca minimalista com forno, placa e armários superiores" },
  { src: "/photos/portfolio-16.webp", title: "Cozinha aberta", alt: "Cozinha aberta branca vista a partir da bancada" },
  { src: "/photos/portfolio-17.webp", title: "Detalhe da cozinha", alt: "Detalhe de cozinha branca com micro-ondas, lava-loiça e bancada" },
  { src: "/photos/portfolio-18.webp", title: "Lavandaria", alt: "Zona de lavandaria com máquina de lavar e termoacumulador" },
  { src: "/photos/portfolio-19.webp", title: "Sala e cozinha", alt: "Sala vazia com pavimento em madeira e cozinha ao fundo" },
  { src: "/photos/portfolio-20.webp", title: "Zona social", alt: "Zona social vazia com pavimento em madeira e cozinha branca" },
  { src: "/photos/portfolio-21.webp", title: "Varanda com vista", alt: "Varanda comprida com guarda em vidro e vista para o mar" },
  { src: "/photos/portfolio-22.webp", title: "Varanda panorâmica", alt: "Varanda panorâmica com vista para o mar e edifícios envolventes" },
  { src: "/photos/portfolio-23.webp", title: "Piscina infinita", alt: "Piscina infinita com espreguiçadeiras, palmeiras e vista para o oceano" },
  { src: "/photos/portfolio-24.webp", title: "Piscina e jardim", alt: "Piscina exterior com jardim tropical e vista para o mar" },
  { src: "/photos/portfolio-25.webp", title: "Condomínio", alt: "Condomínio moderno com jardim, fonte e edifícios residenciais" },
];

const PhotosSection = () => {
  return (
    <section
      id="fotos"
      className="snap-section relative flex items-center justify-center overflow-hidden px-4 py-20 md:px-12 md:py-32 lg:px-20"
    >
      <WaveBackground />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-6 md:gap-8">
        <div className="max-w-3xl text-center lg:text-left">
          <h2 data-reveal="text" className="mb-3 text-3xl font-extrabold leading-tight md:mb-4 md:text-5xl lg:text-7xl">
            PRODUÇÃO DE <span className="text-gradient">FOTOS</span>
          </h2>
          <p
            data-reveal="text"
            className="text-base italic text-muted-foreground md:text-xl lg:text-2xl"
            style={{ animationDelay: "0.2s" }}
          >
            Fotografias captadas por nós para websites, redes sociais e campanhas
          </p>
        </div>

        <div data-reveal className="relative" style={{ animationDelay: "0.4s" }}>
          <div className="horizontal-fade-scroll flex snap-x snap-mandatory gap-3 overflow-x-auto scroll-px-4 pb-4 md:gap-4">
            {photos.map((photo, index) => (
              <article
                key={photo.src}
                className="group relative w-[84vw] max-w-[360px] flex-none snap-start overflow-hidden rounded-lg border border-white/10 bg-white/[0.06] shadow-2xl backdrop-blur-md sm:w-[360px] sm:max-w-none lg:w-[380px]"
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="aspect-[4/3] h-full w-full object-cover transition duration-500 group-hover:scale-105 md:aspect-video"
                  loading={index < 3 ? "eager" : "lazy"}
                />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent px-4 pb-4 pt-14">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-white/90">
                    {photo.title}
                  </h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhotosSection;
