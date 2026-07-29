import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import Menu from "@/components/menu/Menu";
import Specials from "@/components/specials/Specials";
import Gallery from "@/components/gallary/Gallery"
import Reservation from "@/components/reservation/Reservation";
import Testimonials from "@/components/testimonials/Testimonials";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";
import Loader from "@/components/loader/Loader";
import SmoothScroll from "@/components/smooth-scroll/SmoothScroll";
import Reveal from "@/components/animations/Reveal";
import MouseSpotlight from "@/components/cursor/MouseSpotlight";

export default function Home() {
  return (
   <>
  <Loader />
  <SmoothScroll />
  <MouseSpotlight />

  <main className="relative min-h-screen overflow-x-hidden bg-[#0D0D0D] text-white">
    <Navbar />
    <Hero />
    <Reveal>
      <About />
    </Reveal>
    <Reveal>
      <Menu />
    </Reveal>
    <Reveal>
      <Specials />
    </Reveal>
    <Reveal>
      <Gallery />
    </Reveal>
    <Reveal>
      <Reservation />
    </Reveal>
    <Reveal>
      <Testimonials />
    </Reveal>
    <Reveal>
      <Contact />
    </Reveal>
    <Footer />
  </main>
</>
  );
}