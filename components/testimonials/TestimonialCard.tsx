"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

interface Props {
  testimonial: {
    name: string;
    role: string;
    image: string;
    review: string;
    rating: number;
  };
}

export default function TestimonialCard({ testimonial }: Props) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="mx-auto max-w-3xl rounded-[32px] border border-white/10 bg-white/5 p-10 backdrop-blur-xl"
    >
      <div className="flex items-center gap-5">
        <Image
          src={testimonial.image}
          alt={testimonial.name}
          width={70}
          height={70}
          className="rounded-full object-cover"
        />

        <div>
          <h3 className="text-xl font-semibold">
            {testimonial.name}
          </h3>

          <p className="text-gray-400">
            {testimonial.role}
          </p>
        </div>
      </div>

      <div className="mt-8 flex gap-1">
        {Array.from({ length: testimonial.rating }).map((_, index) => (
          <Star
            key={index}
            size={20}
            className="fill-[#D4A373] text-[#D4A373]"
          />
        ))}
      </div>

      <p className="mt-6 text-lg leading-8 text-gray-300">
        "{testimonial.review}"
      </p>
    </motion.div>
  );
}