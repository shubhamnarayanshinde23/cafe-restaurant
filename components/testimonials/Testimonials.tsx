"use client";

import TestimonialSlider from "./TestimonialSlider";

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-[#090909] py-32"
    >
      <div className="absolute right-0 top-0 h-[450px] w-[450px] rounded-full bg-[#8B5E3C]/15 blur-[180px]" />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8 text-center">
        <span className="rounded-full border border-[#8B5E3C] px-4 py-2 text-sm text-[#D4A373]">
          TESTIMONIALS
        </span>

        <h2 className="mt-6 text-5xl font-bold">
          Loved by Coffee Lovers
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
          Hear what our customers have to say about their
          experience at Brew Haven.
        </p>

        <div className="mt-20">
          <TestimonialSlider />
        </div>
      </div>
    </section>
  );
}