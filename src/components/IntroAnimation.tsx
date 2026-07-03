import { useEffect } from "react";
import introLogo from "@/assets/intro-logo.png";

type IntroAnimationProps = {
  onComplete: () => void;
  onReveal: () => void;
};

const REVEAL_DELAY_MS = 1650;
const COMPLETE_DELAY_MS = 2450;

const IntroAnimation = ({ onComplete, onReveal }: IntroAnimationProps) => {
  useEffect(() => {
    document.documentElement.classList.add("intro-lock");

    const revealTimer = window.setTimeout(onReveal, REVEAL_DELAY_MS);
    const completeTimer = window.setTimeout(onComplete, COMPLETE_DELAY_MS);

    return () => {
      document.documentElement.classList.remove("intro-lock");
      window.clearTimeout(revealTimer);
      window.clearTimeout(completeTimer);
    };
  }, [onComplete, onReveal]);

  return (
    <div className="intro-screen" role="status" aria-label="A carregar MadDevWorks">
      <div className="intro-orb" aria-hidden="true" />
      <img className="intro-logo" src={introLogo} alt="" aria-hidden="true" decoding="async" />
      <span className="sr-only">A carregar MadDevWorks</span>
    </div>
  );
};

export default IntroAnimation;
