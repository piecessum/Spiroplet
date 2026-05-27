import { Header } from "@/components/site/header";
import { Hero } from "@/components/site/hero";
import { Advantages } from "@/components/site/advantages";
import { WhereToBuy } from "@/components/site/where-to-buy";
import { Ecosystem } from "@/components/site/ecosystem";
import { Reviews } from "@/components/site/reviews";
import { About } from "@/components/site/about";
import { Contacts } from "@/components/site/contacts";
import { Footer } from "@/components/site/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Advantages />
        <WhereToBuy />
        <Ecosystem />
        <Reviews />
        <About />
        <Contacts />
      </main>
      <Footer />
    </>
  );
}
