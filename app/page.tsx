import { NavBar } from "@/components/navbar";
import { Hero } from "@/components/sections/hero";
import { Overview } from "@/components/sections/about";
import { Masterplan } from "@/components/sections/masterplan";
import { LocationMap } from "@/components/sections/location-map";
import { Incentives } from "@/components/sections/incentives";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black">
      <NavBar />
      <Hero />
      <Overview />
      <Masterplan />
      <LocationMap />
      <Incentives />
      <Footer />
    </main>
  );
}
