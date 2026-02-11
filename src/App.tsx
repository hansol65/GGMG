import { useEffect } from "react";
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

function App() {
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

  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main>
        <HeroSection />
        <MetricsSection />
        <USPSection1 />
        <USPSection2 />
        <USPSection3 />
        <USPSection4 />
        <USPSection5 />
        <USPSection6 />
        <ProcessSection />
        <PricingSection />
        <ContactCtaSection />
      </main>
      <SiteFooter />
    </div>
  );
}

export default App;
