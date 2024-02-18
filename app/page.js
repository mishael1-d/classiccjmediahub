import About from "@/components/About";
import Arrival from "@/components/Arrival";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Testimonial from "@/components/Testimonial";
import Image from "next/image";

export default function Home() {
  return (
    <>
        <Navbar />
      <main className="app-container">
        <HeroSection />
        <About />
        <Services />
        <Arrival />
        <Testimonial />
        <Contact />
      </main>
      <footer className="app-container">
        <Footer />
      </footer>
    </>
  );
}
