(function () {
  const toggle = document.querySelector(".navbar__toggle");
  const menu = document.querySelector(".navbar__menu");

  if (toggle && menu) {
    toggle.addEventListener("click", () => {
      const isOpen = menu.classList.toggle("navbar__menu--open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });
  }

  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
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
})();
