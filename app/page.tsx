import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { MarqueeSection } from "@/components/sections/MarqueeSection";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { UseCasesSection } from "@/components/sections/UseCasesSection";
import { RitualSection } from "@/components/sections/RitualSection";
import { ComparisonSection } from "@/components/sections/ComparisonSection";
import { SocialProofSection } from "@/components/sections/SocialProofSection";
import { OfferSection } from "@/components/sections/OfferSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <MarqueeSection />
        <BenefitsSection />
        <UseCasesSection />
        <RitualSection />
        <ComparisonSection />
        <SocialProofSection />
        <OfferSection />
        <FAQSection />
        <FinalCTASection />
      </main>
      <Footer />
    </>
  );
}
