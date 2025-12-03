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
    const dataSrc = video.getAttribute("data-src");
    const connection =
      navigator.connection ||
      navigator.mozConnection ||
      navigator.webkitConnection;
    const prefersReducedMotion = window.matchMedia
      ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
      : false;
    const isDataSaver =
      !!connection &&
      (connection.saveData ||
        /2g/.test((connection.effectiveType || "").toLowerCase()));
    const shouldLoadOnInteraction = prefersReducedMotion || isDataSaver;

    const loadVideoSource = () => {
      if (!dataSrc || video.dataset.loaded === "true") {
        return;
      }
      video.src = dataSrc;
      video.dataset.loaded = "true";
      video.load();
    };

    const scheduleVideoLoad = () => {
      if ("requestIdleCallback" in window) {
        requestIdleCallback(() => loadVideoSource(), { timeout: 1200 });
      } else {
        window.setTimeout(() => loadVideoSource(), 600);
      }
    };

    if (!shouldLoadOnInteraction) {
      if ("IntersectionObserver" in window) {
        const observer = new IntersectionObserver(
          (entries, obs) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                scheduleVideoLoad();
                obs.disconnect();
              }
            });
          },
          { rootMargin: "0px 0px 160px 0px" }
        );
        observer.observe(video);
      } else {
        scheduleVideoLoad();
      }
    } else {
      video.removeAttribute("autoplay");
      soundButton.textContent = "Reproduzir vídeo";
      soundButton.setAttribute(
        "aria-label",
        "Carregar e reproduzir o vídeo"
      );
    }

    soundButton.addEventListener("click", () => {
      if (!video.dataset.loaded) {
        loadVideoSource();
      }

      if (shouldLoadOnInteraction && video.paused) {
        video.muted = false;
        video
          .play()
          .then(() => {
            soundButton.textContent = "Desativar Som";
          })
          .catch(() => {
            soundButton.textContent = "Ativar Som";
          });
        return;
      }

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
