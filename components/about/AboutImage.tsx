"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutImage() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -80 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.8 }}
      className="relative"
    >
      {/* Main Image */}
      <div className="overflow-hidden rounded-[30px]">
        <Image
          src="/images/about-coffee.png"
          alt="Coffee Shop"
          width={700}
          height={900}
          className="transition duration-700 hover:scale-105"
        />
      </div>

      {/* Floating Card */}
      <motion.div
        animate={{ y: [-8, 8, -8] }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
        className="absolute -bottom-10 -right-8 rounded-3xl border border-white/10 bg-white/10 px-8 py-6 backdrop-blur-xl"
      >
        <h2 className="text-4xl font-bold text-[#D4A373]">
          20+
        </h2>

        <p className="mt-2 text-sm text-gray-300">
          Years of Brewing Excellence
        </p>
      </motion.div>
    </motion.div>
  );
}