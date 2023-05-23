import Footer from "@/src/components/layout/Footer";
import HomeHeroSection from "@/src/pages/home/HomeHeroSection";
import ServicesSection from "@/src/pages/home/ServicesSection";
import SponsorshipSection from "@/src/pages/home/SponsorshipSection";

export default function Home() {
  return (
    <main>
      <HomeHeroSection />
      <ServicesSection />
      <SponsorshipSection />
      <Footer />
    </main>
  );
}
