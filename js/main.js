(function () {
  const toggle = document.querySelector(".navbar__toggle");
  const menu = document.querySelector(".navbar__menu");

  if (toggle && menu) {
    toggle.addEventListener("click", () => {
      const isOpen = menu.classList.toggle("navbar__menu--open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });
  }

  const yearTargets = document.querySelectorAll("[data-current-year]");
  if (yearTargets.length) {
    const currentYear = new Date().getFullYear();
    yearTargets.forEach((target) => {
      target.textContent = currentYear;
    });
  }

  const video = document.getElementById("heroVideo");
  const soundButton = document.getElementById("soundButton");

  if (video && soundButton) {
    soundButton.addEventListener("click", () => {
      if (video.muted) {
        video.muted = false;
        video.currentTime = 0;
        video.play();
        soundButton.textContent = "Desativar Som";
      } else {
        video.muted = true;
        video.play();
        soundButton.textContent = "Ativar Som";
      }
    });
  }

  const elfsightTarget = document.querySelector("[data-elfsight-app-lazy]");
  if (elfsightTarget) {
    const elfsightSrc =
      elfsightTarget.getAttribute("data-elfsight-src") ||
      "https://elfsightcdn.com/platform.js";
    let scriptLoaded = false;

    const loadElfsight = () => {
      if (scriptLoaded) {
        return;
      }
      scriptLoaded = true;
      const script = document.createElement("script");
      script.src = elfsightSrc;
      script.async = true;
      script.setAttribute("data-lazy-loaded", "true");
      document.head.appendChild(script);
    };

    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              loadElfsight();
              obs.disconnect();
            }
          });
        },
        { rootMargin: "200px" }
      );
      observer.observe(elfsightTarget);
    } else {
      loadElfsight();
    }
  }
})();
