import HomeHeroSection from "@/src/pages/home/HomeHeroSection";
import ServicesSection from "@/src/pages/home/ServicesSection";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <HomeHeroSection />
      <ServicesSection />
    </main>
  );
}
