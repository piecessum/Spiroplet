import { Header } from "@/components/site/header";
import { Hero } from "@/components/site/hero";
import { Advantages } from "@/components/site/advantages";
import { WhereToBuy } from "@/components/site/where-to-buy";
import { Etymology, FormatsAndHoles } from "@/components/site/ecosystem";
import { Notes } from "@/components/site/notes";
import { Reviews } from "@/components/site/reviews";
import { About } from "@/components/site/about";
import { Copyright } from "@/components/site/copyright";
import { Footer } from "@/components/site/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <FormatsAndHoles />
        <Etymology />
        <Advantages />
        <Notes />
        <Reviews />
        <About />
        <Copyright />
        <WhereToBuy />
      </main>
      <Footer />
    </>
  );
}
