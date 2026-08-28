import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Integrations } from "@/components/sections/Integrations";
import { Features } from "@/components/sections/Features";
import { AISection } from "@/components/sections/AISection";
import { Dashboardlar } from "@/components/sections/Dashboardlar";
import { Hamkorlar } from "@/components/sections/Hamkorlar";
import { CTA } from "@/components/sections/CTA";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Integrations />
        <Dashboardlar />
        <Hamkorlar />
        <Features />
        <AISection />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
