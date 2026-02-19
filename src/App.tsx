import { useEffect, useState } from "react";
import SiteHeader from "./components/landing/SiteHeader";
import HeroSection from "./components/landing/HeroSection";
import USPSection1 from "./components/landing/USPSection1";
import USPSection2 from "./components/landing/USPSection2";
import USPSection3 from "./components/landing/USPSection3";
import USPSection4 from "./components/landing/USPSection4";
import USPSection5 from "./components/landing/USPSection5";
import USPSection6 from "./components/landing/USPSection6";
import ProcessSection from "./components/landing/ProcessSection";
import PricingSection from "./components/landing/PricingSection";
import ContactCtaSection from "./components/landing/ContactCtaSection";
import SiteFooter from "./components/landing/SiteFooter";
import MetricsSection from "./components/landing/MetricsSection";
import ContactFormPanel from "./components/ContactFormPanel";

function App() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const openContactModal = () => setIsContactModalOpen(true);
  const closeContactModal = () => setIsContactModalOpen(false);

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const allSections = Array.from(
      document.querySelectorAll<HTMLElement>("main > section"),
    );
    const snapSections = allSections.filter(
      (section) => !section.classList.contains("hero-section"),
    );
    const firstSnapSection = snapSections[0];

    if (snapSections.length === 0) {
      return;
    }

    let isLocked = false;
    let animationFrameId: number | null = null;
    let wheelAccumulated = 0;
    const wheelThreshold = 70;
    const scrollDuration = 900;

    const easeInOutQuad = (t: number) => {
      return t < 0.5 ? 2 * t * t : 1 - ((-2 * t + 2) ** 2) / 2;
    };

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
          animationFrameId = window.requestAnimationFrame(step);
          return;
        }

        onDone();
      };

      animationFrameId = window.requestAnimationFrame(step);
    };

    const getCurrentSectionIndex = () => {
      const focusY = window.scrollY + window.innerHeight * 0.5;
      const index = snapSections.findIndex((section) => {
        const top = section.offsetTop;
        const bottom = top + section.offsetHeight;
        return focusY >= top && focusY < bottom;
      });
      return index === -1 ? 0 : index;
    };

    const isPricingSection = (section: HTMLElement | undefined) => {
      return Boolean(section?.classList.contains("pricing-section"));
    };

    const onWheel = (event: WheelEvent) => {
      if (isContactModalOpen) {
        event.preventDefault();
        return;
      }

      if (Math.abs(event.deltaY) <= Math.abs(event.deltaX)) {
        return;
      }

      if (firstSnapSection && window.scrollY < firstSnapSection.offsetTop - 8) {
        return;
      }

      if (isLocked) {
        event.preventDefault();
        return;
      }

      wheelAccumulated += event.deltaY;

      if (Math.abs(wheelAccumulated) < wheelThreshold) {
        return;
      }

      const direction = wheelAccumulated > 0 ? 1 : -1;
      wheelAccumulated = 0;

      const currentIndex = getCurrentSectionIndex();
      const currentSection = snapSections[currentIndex];

      // On tablet/mobile, keep native scrolling behavior inside pricing section.
      if (window.innerWidth < 1025 && isPricingSection(currentSection)) {
        return;
      }

      const targetIndex = Math.max(
        0,
        Math.min(snapSections.length - 1, currentIndex + direction),
      );

      if (targetIndex === currentIndex) {
        return;
      }

      isLocked = true;
      event.preventDefault();

      smoothScrollTo(snapSections[targetIndex].offsetTop, () => {
        isLocked = false;
      });
    };

    window.addEventListener("wheel", onWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", onWheel);
      if (animationFrameId !== null) {
        window.cancelAnimationFrame(animationFrameId);
      }
    };
  }, [isContactModalOpen]);

  useEffect(() => {
    if (!isContactModalOpen) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeContactModal();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [isContactModalOpen]);

  return (
    <div className="min-h-screen">
      <SiteHeader onOpenContact={openContactModal} />
      <main>
        <HeroSection onOpenContact={openContactModal} />
        <MetricsSection />
        <USPSection1 />
        <USPSection2 />
        <USPSection3 />
        <USPSection4 />
        <USPSection5 />
        <USPSection6 />
        <ProcessSection />
        <PricingSection onOpenContact={openContactModal} />
        <ContactCtaSection onOpenContact={openContactModal} />
      </main>
      <SiteFooter />

      {isContactModalOpen && (
        <div
          className="fixed inset-0 z-[100] overflow-y-auto bg-black/85 px-4 py-8 md:py-10"
          onClick={closeContactModal}
        >
          <div
            className="flex min-h-full items-center justify-center"
            onClick={(event) => event.stopPropagation()}
          >
            <ContactFormPanel onClose={closeContactModal} />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
