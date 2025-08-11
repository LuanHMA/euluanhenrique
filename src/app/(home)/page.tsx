import { Header } from "@/components/layout/header";
import { HeroSection } from "./sections/hero";
import { AboutMeSection } from "./sections/about-me";
import { MyWorksSection } from "./sections/works";
import { OfferSection } from "./sections/offer";

export default function HomePage() {
  return (
    <div className="min-h-screen relative bg-neutral-950">
      <Header/>
      <main>
        <HeroSection/>
        <OfferSection/>
        <MyWorksSection/>
      </main>
    </div>
  );
}