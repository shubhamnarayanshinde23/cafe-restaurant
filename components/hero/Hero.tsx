"use client";

import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";
import BackgroundEffects from "./BackgroundEffects";
import ScrollIndicator from "./ScrollIndicator";
import FloatingBeans from "./FloatingBeans";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative z-10 min-h-screen overflow-hidden bg-[#0D0D0D] pt-20"
    >
      {/* Background Effects */}
      <BackgroundEffects />
      <FloatingBeans />

      {/* Hero Content */}
      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl items-center px-6 lg:px-8">
        <div className="grid w-full grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <HeroContent />
          <HeroImage />
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="relative z-10">
        <ScrollIndicator />
      </div>
    </section>
  );
}