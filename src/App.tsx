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
import { useContactModal } from "./hooks/useContactModal";
import { useRevealObserver } from "./hooks/useRevealObserver";
import { useScrollSnap } from "./hooks/useScrollSnap";

function App() {
  const { isOpen, open, close } = useContactModal();

  useRevealObserver();
  useScrollSnap(isOpen);

  return (
    <div className="min-h-screen">
      <SiteHeader onOpenContact={open} />
      <main>
        <HeroSection onOpenContact={open} />
        <MetricsSection />
        <USPSection1 />
        <USPSection2 />
        <USPSection3 />
        <USPSection4 />
        <USPSection5 />
        <USPSection6 />
        <ProcessSection />
        <PricingSection onOpenContact={open} />
        <ContactCtaSection onOpenContact={open} />
      </main>
      <SiteFooter />

      {isOpen && (
        <div
          className="fixed inset-0 z-[100] overflow-y-auto bg-black/85 px-4 py-8 md:py-10"
          onClick={close}
        >
          <div
            className="flex min-h-full items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <ContactFormPanel onClose={close} />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
