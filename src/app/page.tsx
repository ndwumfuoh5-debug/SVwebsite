import { Navbar } from "./_sections/Navbar";
import { HeroSection } from "./_sections/HeroSection";
import { ThesisSection } from "./_sections/ThesisSection";
import { FundsSection } from "./_sections/FundsSection";
import { AutomotiveFundSection } from "./_sections/AutomotiveFundSection";
import { HealthFundSection } from "./_sections/HealthFundSection";
import { SportsFundSection } from "./_sections/WhyNowSection";
import { ContactSection } from "./_sections/ContactSection";

export default function HomePage() {
  return (
    <div className="bg-white text-[#0A1540] overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <ThesisSection />
      <FundsSection />
      <AutomotiveFundSection />
      <HealthFundSection />
      <SportsFundSection />
      <ContactSection />
    </div>
  );
}
