(function () {
  const headerToggle = document.querySelector('.header__toggle');
  const primaryNav = document.getElementById('primary-navigation');

  if (headerToggle && primaryNav) {
    const closeMenu = () => {
      primaryNav.classList.remove('nav--open');
      headerToggle.setAttribute('aria-expanded', 'false');
    };

    headerToggle.addEventListener('click', () => {
      const isOpen = primaryNav.classList.toggle('nav--open');
      headerToggle.classList.toggle('is-active', isOpen);
      headerToggle.setAttribute('aria-expanded', String(isOpen));
    });

    primaryNav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', closeMenu);
    });
  }

  const yearTargets = document.querySelectorAll('[data-current-year]');
  if (yearTargets.length) {
    const currentYear = new Date().getFullYear();
    yearTargets.forEach((target) => {
      target.textContent = currentYear;
    });
  }

  const video = document.getElementById('heroVideo');
  const soundButton = document.getElementById('soundButton');

  const headerElement = document.querySelector('.header');
  const handleHeaderBg = () => {
    if (!headerElement) {
      return;
    }
    headerElement.classList.toggle('header--scrolled', window.scrollY > 30);
  };
  handleHeaderBg();
  window.addEventListener('scroll', handleHeaderBg);

  if (video && soundButton) {
    const dataSrc = video.getAttribute('data-src');
    const connection =
      navigator.connection ||
      navigator.mozConnection ||
      navigator.webkitConnection;
    const prefersReducedMotion = window.matchMedia
      ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
      : false;
    const isDataSaver =
      !!connection &&
      (connection.saveData ||
        /2g/.test((connection.effectiveType || '').toLowerCase()));
    const shouldLoadOnInteraction = prefersReducedMotion || isDataSaver;

    const ensureVideoPlaying = () => {
      video
        .play()
        .catch(() => {
          /* ignore */
        });
    };

    const loadVideoSource = () => {
      if (!dataSrc || video.dataset.loaded === 'true') {
        return;
      }
      video.src = dataSrc;
      video.dataset.loaded = 'true';
      video.load();
      ensureVideoPlaying();
    };

    const scheduleVideoLoad = () => {
      if ('requestIdleCallback' in window) {
        requestIdleCallback(() => loadVideoSource(), { timeout: 1200 });
      } else {
        window.setTimeout(() => loadVideoSource(), 600);
      }
    };

    if (!shouldLoadOnInteraction) {
      if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver(
          (entries, obs) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                scheduleVideoLoad();
                obs.disconnect();
              }
            });
          },
          { rootMargin: '0px 0px 160px 0px' }
        );
        observer.observe(video);
      } else {
        scheduleVideoLoad();
      }
    } else {
      video.removeAttribute('autoplay');
      soundButton.textContent = 'Reproduzir vídeo';
      soundButton.setAttribute(
        'aria-label',
        'Carregar e reproduzir o vídeo'
      );
    }

    soundButton.addEventListener('click', () => {
      if (!video.dataset.loaded) {
        loadVideoSource();
      }

      if (shouldLoadOnInteraction && video.paused) {
        video.muted = false;
        video
          .play()
          .then(() => {
            soundButton.textContent = 'Desativar Som';
          })
          .catch(() => {
            soundButton.textContent = 'Ativar Som';
          });
        return;
      }

      if (video.muted) {
        video.muted = false;
        video.currentTime = 0;
        video.play();
        soundButton.textContent = 'Desativar Som';
      } else {
        video.muted = true;
        video.play();
        soundButton.textContent = 'Ativar Som';
      }
    });
  }

  const heroHeading = document.getElementById('hero-heading');
  if (heroHeading) {
    const trimmedText = heroHeading.textContent.trim();
    if (trimmedText) {
      const words = trimmedText.split(/\s+/);
      if (words.length) {
        const lastWord = words.pop();
        const baseText = words.join(' ');
        const fullText = baseText ? `${baseText} ${lastWord}` : lastWord;
        const typingDelay = 60;
        const deletingDelay = 35;
        const pauseFull = 1500;
        const pauseDelete = 700;
        const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

        const typeText = (text, startFrom = 0) =>
          new Promise((resolve) => {
            if (startFrom >= text.length) {
              resolve();
              return;
            }
            let current = startFrom;
            heroHeading.textContent = text.slice(0, current);
            const interval = setInterval(() => {
              if (current < text.length) {
                current += 1;
                heroHeading.textContent = text.slice(0, current);
              }
              if (current === text.length) {
                clearInterval(interval);
                resolve();
              }
            }, typingDelay);
          });

        const deleteToBase = () =>
          new Promise((resolve) => {
            const targetLength = baseText.length;
            const interval = setInterval(() => {
              heroHeading.textContent = heroHeading.textContent.slice(0, -1);
              if (heroHeading.textContent.length <= targetLength) {
                clearInterval(interval);
                resolve();
              }
            }, deletingDelay);
          });

        (async function runHeadingLoop() {
          while (true) {
            heroHeading.textContent = '';
            await typeText(fullText);
            await delay(pauseFull);
            await deleteToBase();
            await delay(pauseDelete);
            await typeText(fullText, baseText.length);
            await delay(pauseFull);
          }
        })();
      }
    }
  }

  const animatedSections = document.querySelectorAll('.animated-section');
  if (animatedSections.length) {
    const sectionObserver = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    animatedSections.forEach((section) => sectionObserver.observe(section));
  }

  const elfsightTarget = document.querySelector('[data-elfsight-app-lazy]');
  if (elfsightTarget) {
    const elfsightSrc =
      elfsightTarget.getAttribute('data-elfsight-src') ||
      'https://elfsightcdn.com/platform.js';
    let scriptLoaded = false;

    const loadElfsight = () => {
      if (scriptLoaded) {
        return;
      }
      scriptLoaded = true;
      const script = document.createElement('script');
      script.src = elfsightSrc;
      script.async = true;
      script.setAttribute('data-lazy-loaded', 'true');
      document.head.appendChild(script);
    };

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              loadElfsight();
              obs.disconnect();
            }
          });
        },
        { rootMargin: '200px' }
      );
      observer.observe(elfsightTarget);
    } else {
      loadElfsight();
    }
  }
})();
