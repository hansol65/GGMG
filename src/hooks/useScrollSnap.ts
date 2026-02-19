import { useEffect } from "react";

export const useScrollSnap = (isDisabled: boolean) => {
  useEffect(() => {
    const snapSections = Array.from(
      document.querySelectorAll<HTMLElement>("main > section"),
    ).filter((section) => !section.classList.contains("hero-section"));

    if (snapSections.length === 0) return;

    let isLocked = false;
    let wheelAccumulated = 0;
    const wheelThreshold = 70;
    const scrollDuration = 900;

    const easeInOutQuad = (t: number) =>
      t < 0.5 ? 2 * t * t : 1 - (-2 * t + 2) ** 2 / 2;

    const smoothScrollTo = (targetY: number, onDone: () => void) => {
      const startY = window.scrollY;
      const distance = targetY - startY;
      const startTime = performance.now();

      const step = (now: number) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / scrollDuration, 1);
        const eased = easeInOutQuad(progress);

        window.scrollTo(0, startY + distance * eased);

        if (progress < 1) {
          window.requestAnimationFrame(step);
        } else {
          onDone();
        }
      };
      window.requestAnimationFrame(step);
    };

    const onWheel = (event: WheelEvent) => {
      if (
        isDisabled ||
        isLocked ||
        Math.abs(event.deltaY) <= Math.abs(event.deltaX)
      )
        return;

      wheelAccumulated += event.deltaY;
      if (Math.abs(wheelAccumulated) < wheelThreshold) return;

      const direction = wheelAccumulated > 0 ? 1 : -1;
      wheelAccumulated = 0;

      const firstSnap = snapSections[0];
      if (window.scrollY < firstSnap.offsetTop - 8) {
        const transitionLine =
          firstSnap.offsetTop - Math.min(180, window.innerHeight * 0.2);
        if (
          direction > 0 &&
          window.scrollY + window.innerHeight >= transitionLine
        ) {
          isLocked = true;
          event.preventDefault();
          smoothScrollTo(firstSnap.offsetTop, () => {
            isLocked = false;
          });
        }
        return;
      }

      const focusY = window.scrollY + window.innerHeight * 0.5;
      const currentIndex = snapSections.findIndex(
        (s) => focusY >= s.offsetTop && focusY < s.offsetTop + s.offsetHeight,
      );
      const activeIdx = currentIndex === -1 ? 0 : currentIndex;

      if (
        window.innerWidth < 1025 &&
        snapSections[activeIdx]?.classList.contains("pricing-section")
      )
        return;

      const targetIdx = Math.max(
        0,
        Math.min(snapSections.length - 1, activeIdx + direction),
      );
      if (targetIdx === activeIdx) return;

      isLocked = true;
      event.preventDefault();
      smoothScrollTo(snapSections[targetIdx].offsetTop, () => {
        isLocked = false;
      });
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    return () => window.removeEventListener("wheel", onWheel);
  }, [isDisabled]);
};
