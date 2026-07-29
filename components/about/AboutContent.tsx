"use client";

import { motion } from "framer-motion";
import { Coffee, Leaf, Award } from "lucide-react";

const features = [
  {
    icon: Coffee,
    title: "Premium Beans",
  },
  {
    icon: Leaf,
    title: "Freshly Roasted",
  },
  {
    icon: Award,
    title: "Award Winning Taste",
  },
];

export default function AboutContent() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 80 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.8 }}
    >
      <span className="rounded-full border border-[#8B5E3C] px-4 py-2 text-sm text-[#D4A373]">
        OUR STORY
      </span>

      <h2 className="mt-8 text-5xl font-bold leading-tight">
        Every Cup Has
        <br />
        A Story.
      </h2>

      <p className="mt-8 text-lg leading-8 text-gray-400">
        For more than two decades, Brew Haven has been
        bringing together exceptional coffee beans,
        passionate baristas, and unforgettable experiences.
        Every cup is brewed with precision and served with
        warmth.
      </p>

      <div className="mt-12 space-y-6">
        {features.map((item) => (
          <div
            key={item.title}
            className="flex items-center gap-5 rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-[#8B5E3C]"
          >
            <item.icon className="h-8 w-8 text-[#D4A373]" />

            <h3 className="text-lg font-semibold">
              {item.title}
            </h3>
          </div>
        ))}
      </div>
    </motion.div>
  );
}