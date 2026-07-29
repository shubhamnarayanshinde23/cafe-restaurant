"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Specials() {
  return (
    <section className="relative overflow-hidden bg-[#0D0D0D] py-32">

      {/* Background Glow */}
      <div className="absolute right-0 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-[#8B5E3C]/20 blur-[180px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-20 px-6 lg:grid-cols-2 lg:px-8">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
        >
          <span className="rounded-full border border-[#8B5E3C] px-4 py-2 text-sm text-[#D4A373]">
            TODAY'S SPECIAL
          </span>

          <h2 className="mt-8 text-5xl font-bold leading-tight lg:text-6xl">
            Signature
            <br />
            Caramel Latte
          </h2>

          <p className="mt-8 max-w-lg text-lg leading-8 text-gray-400">
            Smooth espresso blended with creamy milk,
            handcrafted caramel syrup and finished with
            beautiful latte art.
          </p>

          <div className="mt-8 flex items-center gap-5">
            <span className="text-5xl font-bold text-[#D4A373]">
              ₹279
            </span>

            <span className="text-2xl text-gray-500 line-through">
              ₹349
            </span>
          </div>

          <button className="mt-10 flex items-center gap-3 rounded-full bg-[#8B5E3C] px-8 py-4 font-semibold transition hover:bg-[#A47149]">
            Order Now
            <ArrowRight size={20} />
          </button>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="relative flex justify-center"
        >
          <motion.div
            animate={{
              y: [-12, 12, -12],
            }}
            transition={{
              repeat: Infinity,
              duration: 5,
            }}
          >
            <Image
              src="/images/menu/latte.png"
              alt="Latte"
              width={520}
              height={520}
              className="drop-shadow-[0_40px_80px_rgba(0,0,0,.5)]"
            />
          </motion.div>

          {/* Discount Badge */}
          <motion.div
            animate={{
              scale: [1, 1.08, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
            }}
            className="absolute right-10 top-10 rounded-full bg-[#D4A373] px-6 py-6 text-center text-black"
          >
            <p className="text-3xl font-bold">20%</p>
            <p className="text-sm font-medium">OFF</p>
          </motion.div>
        </motion.div>

      </div>

    </section>
  );
}