import { Instagram, Mail } from "lucide-react";
import contactIllustration from "@/assets/contact-illustration.svg";
import WaveBackground from "@/components/WaveBackground";

const ContactSection = () => {
  return (
    <section
      id="duvidas"
      className="snap-section relative flex flex-col items-center justify-center overflow-hidden px-4 pb-0 pt-20 md:px-12 md:py-24 lg:px-20"
    >
      <WaveBackground />

      <div className="relative z-10 text-center">
        <h2 data-reveal="text" className="mb-3 text-3xl font-extrabold leading-tight md:mb-4 md:text-5xl lg:text-7xl">
          AINDA TENS
          <br />
          <span className="text-gradient">DÚVIDAS</span>?
        </h2>
        <p
          data-reveal="text"
          className="text-base text-muted-foreground md:text-xl lg:text-2xl"
          style={{ animationDelay: "0.2s" }}
        >
          Contacta-nos
        </p>

        <div
          data-reveal
          className="mt-5 flex items-center justify-center gap-4 md:mt-6 md:gap-6"
          style={{ animationDelay: "0.3s" }}
        >
          <a
            href="mailto:maddevworks@gmail.com"
            className="rounded-full border border-primary/20 bg-primary/10 p-3 transition-colors hover:bg-primary/20"
            aria-label="Email"
          >
            <Mail className="h-6 w-6 text-primary md:h-8 md:w-8" />
          </a>
          <a
            href="https://instagram.com/maddevworks"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-primary/20 bg-primary/10 p-3 transition-colors hover:bg-primary/20"
            aria-label="Instagram"
          >
            <Instagram className="h-6 w-6 text-primary md:h-8 md:w-8" />
          </a>
        </div>
      </div>

      <div
        data-reveal
        className="relative inset-x-0 z-10 mt-8 flex justify-center md:absolute md:bottom-0 md:mt-0"
        style={{ animationDelay: "0.4s" }}
      >
        <img
          src={contactIllustration}
          alt="Contacta-nos"
          className="contact-illustration w-[220px] brightness-95 saturate-75 drop-shadow-[0_30px_90px_rgba(0,0,0,0.55)] sm:w-[260px] md:w-[352px] lg:w-[422px]"
        />
      </div>
    </section>
  );
};

export default ContactSection;
