import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ClientsTicker from "@/components/ClientsTicker";
import Experience from "@/components/Experience";
import Services from "@/components/Services";
import Work from "@/components/Work";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <div className="accent-strip" />
      <About />
      <ClientsTicker />
      <Experience />
      <Services />
      <Work />
      <Education />
      <Contact />
      <Footer />
      <ScrollReveal />
    </>
  );
}
