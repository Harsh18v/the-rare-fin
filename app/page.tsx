import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import SpecimenGrid from "@/components/SpecimenGrid";
import ShopInfo from "@/components/ShopInfo";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";
import AccessoriesGrid from "@/components/AccessoriesGrid";
import { createClient } from "@/lib/supabase/server";

export default async function Home() {
  const supabase = await createClient();

  const { data: fish } = await supabase
    .from("fish")
    .select("*")
    .order("created_at", { ascending: false });

  const { data: accessories } = await supabase
    .from("accessories")
    .select("*")
    .order("created_at", { ascending: false });

  return (
    <main className="bg-black pb-16 md:pb-0">
      <Nav />
      <Hero />
      <SpecimenGrid initialFish={fish ?? []} />
      <AccessoriesGrid initialAccessories={accessories ?? []} />
      <ShopInfo />
      <Services />
      <Footer />
      <StickyCTA />
    </main>
  );
}