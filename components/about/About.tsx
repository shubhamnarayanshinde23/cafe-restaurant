"use client";

import AboutContent from "./AboutContent";
import AboutImage from "./AboutImage";

export default function About() {
  return (
    <section
      id="about"
      className="relative bg-[#0B0B0B] py-28 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-[#8B5E3C]/10 blur-[180px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-20 lg:grid-cols-2">
          <AboutImage />
          <AboutContent />
        </div>
      </div>
    </section>
  );
}