import AboutUsSection from "@/src/pages/aboutUs/AboutUsSection";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-20">
      <AboutUsSection />
    </main>
  );
}
