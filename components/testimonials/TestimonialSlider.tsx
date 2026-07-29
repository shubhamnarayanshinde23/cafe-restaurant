"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import TestimonialCard from "./TestimonialCard";
import { testimonials } from "./testimonialData";

export default function TestimonialSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -60 }}
          transition={{ duration: 0.5 }}
        >
          <TestimonialCard
            testimonial={testimonials[current]}
          />
        </motion.div>
      </AnimatePresence>

      <div className="mt-10 flex justify-center gap-3">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-3 rounded-full transition-all ${
              current === index
                ? "w-10 bg-[#D4A373]"
                : "w-3 bg-gray-600"
            }`}
          />
        ))}
      </div>
    </>
  );
}