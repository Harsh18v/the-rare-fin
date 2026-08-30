import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import SpecimenGrid from "@/components/SpecimenGrid";
import ShopInfo from "@/components/ShopInfo";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";

export default function Home() {
  return (
    <main className="pb-16 md:pb-0">
      <Nav />
      <Hero />
      <SpecimenGrid />
      <ShopInfo />
      <Services />
      <Footer />
      <StickyCTA />
    </main>
  );
}
