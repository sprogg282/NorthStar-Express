import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { DepartmentsSection } from "@/components/sections/departments-section";
import { PartnershipSection } from "@/components/sections/partnership-section";
import { ApplySection } from "@/components/sections/apply-section";
import { PortalSection } from "@/components/sections/portal-section";
import { TosSection } from "@/components/sections/tos-section";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24 flex-grow">
        <HeroSection />
        <AboutSection />
        <DepartmentsSection />
        <PartnershipSection />
        <ApplySection />
        <PortalSection />
        <TosSection />
      </main>
      <Footer />
    </>
  );
}
