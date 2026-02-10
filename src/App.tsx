import { useEffect } from "react";
import SiteHeader from "./components/landing/SiteHeader";
import HeroSection from "./components/landing/HeroSection";
// import MetrixSection from "./components/landing/MetrixSection";
import USPSection from "./components/landing/USPSection";
import ProcessSection from "./components/landing/ProcessSection";
import PricingSection from "./components/landing/PricingSection";
import ReviewsSection from "./components/landing/ReviewsSection";
import ContactCtaSection from "./components/landing/ContactCtaSection";
import SiteFooter from "./components/landing/SiteFooter";

function App() {
  useEffect(() => {
    // [data-reveal] 속성을 가진 모든 요소를 찾아서 스크롤 감시
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

  return (
    <div className="min-h-screen bg-gray-500">
      <SiteHeader />
      <main>
        <HeroSection />
        {/* <MetrixSection /> */}
        <USPSection />
        <ProcessSection />
        <PricingSection />
        <ReviewsSection />
        <ContactCtaSection />
      </main>
      <SiteFooter />
    </div>
  );
}

export default App;
