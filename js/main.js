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
  const playButton = document.getElementById("videoPlayButton");
  let videoLoaded = false;

  const updateSoundButtonLabel = () => {
    if (soundButton && video) {
      soundButton.textContent = video.muted ? "Ativar Som" : "Desativar Som";
    }
  };

  const enableSoundButton = () => {
    if (soundButton) {
      soundButton.disabled = false;
      updateSoundButtonLabel();
    }
  };

  const loadVideoSource = () => {
    if (!video || videoLoaded) {
      return Promise.resolve();
    }

    const source = video.dataset.src;
    if (!source) {
      return Promise.resolve();
    }

    videoLoaded = true;
    return new Promise((resolve) => {
      const handleLoaded = () => {
        video.removeEventListener("loadeddata", handleLoaded);
        resolve();
      };

      video.addEventListener("loadeddata", handleLoaded);
      video.src = source;
      video.load();
    });
  };

  if (playButton && video) {
    playButton.addEventListener("click", async () => {
      playButton.disabled = true;
      playButton.textContent = "A carregar…";

      await loadVideoSource();
      try {
        await video.play();
      } catch (error) {
        console.warn("Não foi possível reproduzir automaticamente o vídeo.", error);
      }

      playButton.classList.add("video-play-toggle--hidden");
      enableSoundButton();
    });
  }

  if (video && soundButton) {
    soundButton.addEventListener("click", () => {
      if (soundButton.disabled) {
        return;
      }

      video.muted = !video.muted;
      video.play();
      updateSoundButtonLabel();
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
