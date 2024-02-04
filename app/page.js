import About from "@/components/About";
import Arrival from "@/components/Arrival";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Testimonial from "@/components/Testimonial";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className="app-container">
        <Navbar />
        <HeroSection />
        <About />
        <Services />
        <Arrival />
      <Testimonial />
      </main>
    </>
  );
}
