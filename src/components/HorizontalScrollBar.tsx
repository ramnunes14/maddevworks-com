import { type KeyboardEvent, type PointerEvent, type RefObject, useEffect, useState } from "react";

type HorizontalScrollBarProps = {
  label: string;
  trackRef: RefObject<HTMLDivElement>;
};

const HorizontalScrollBar = ({ label, trackRef }: HorizontalScrollBarProps) => {
  const [scrollProgress, setScrollProgress] = useState(0);

  const updateScrollProgress = () => {
    const track = trackRef.current;
    if (!track) return;

    const maxScroll = track.scrollWidth - track.clientWidth;
    setScrollProgress(maxScroll > 0 ? (track.scrollLeft / maxScroll) * 100 : 0);
  };

  const syncScrollbar = (nextProgress: number) => {
    const track = trackRef.current;
    const boundedProgress = Math.min(100, Math.max(0, nextProgress));
    setScrollProgress(boundedProgress);

    if (!track) return;

    const maxScroll = track.scrollWidth - track.clientWidth;
    track.scrollLeft = (maxScroll * boundedProgress) / 100;
  };

  const syncScrollbarFromPointer = (event: PointerEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();

    const rect = event.currentTarget.getBoundingClientRect();
    syncScrollbar(((event.clientX - rect.left) / rect.width) * 100);
  };

  const handleScrollbarPointerDown = (event: PointerEvent<HTMLDivElement>) => {
    event.currentTarget.setPointerCapture(event.pointerId);
    syncScrollbarFromPointer(event);
  };

  const handleScrollbarPointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (event.buttons !== 1) return;
    syncScrollbarFromPointer(event);
  };

  const handleScrollbarKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const keySteps: Record<string, number> = {
      ArrowLeft: -8,
      ArrowRight: 8,
      PageDown: -18,
      PageUp: 18,
    };

    if (event.key === "Home") {
      event.preventDefault();
      syncScrollbar(0);
      return;
    }

    if (event.key === "End") {
      event.preventDefault();
      syncScrollbar(100);
      return;
    }

    const step = keySteps[event.key];
    if (step === undefined) return;

    event.preventDefault();
    syncScrollbar(scrollProgress + step);
  };

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    updateScrollProgress();
    track.addEventListener("scroll", updateScrollProgress, { passive: true });
    window.addEventListener("resize", updateScrollProgress);

    return () => {
      track.removeEventListener("scroll", updateScrollProgress);
      window.removeEventListener("resize", updateScrollProgress);
    };
  }, [trackRef]);

  return (
    <div className="media-scrollbar-wrap">
      <div
        className="media-scrollbar-shell"
        role="slider"
        tabIndex={0}
        aria-label={label}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(scrollProgress)}
        onPointerDown={handleScrollbarPointerDown}
        onPointerMove={handleScrollbarPointerMove}
        onKeyDown={handleScrollbarKeyDown}
      >
        <span className="media-scrollbar-fill" style={{ width: `${scrollProgress}%` }} />
        <span className="media-scrollbar-thumb" style={{ left: `${scrollProgress}%` }} />
      </div>
    </div>
  );
};

export default HorizontalScrollBar;
