import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { InstituteSection } from "@/components/sections/institute-section";
import { GoalsSection } from "@/components/sections/goals-section";
import { ColorsSection } from "@/components/sections/colors-section";
import { BecoSection } from "@/components/sections/beco-section";
import { ContactSection } from "@/components/sections/contact-section";

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <InstituteSection />
        <GoalsSection />
        <ColorsSection />
        <BecoSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
