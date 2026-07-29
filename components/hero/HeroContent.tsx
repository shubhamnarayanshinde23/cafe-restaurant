"use client";

import { motion } from "framer-motion";
import AnimatedHeading from "@/components/ui/AnimatedHeading";
import MagneticButton from "@/components/ui/MagneticButton";

export default function HeroContent() {
  return (
    <div>

      <motion.span
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: .6 }}
        className="inline-flex rounded-full border border-[#8B5E3C] px-5 py-2 text-sm text-[#D4A373]"
      >
        ☕ Premium Coffee Since 1998
      </motion.span>

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: .2 }}
        className="mt-8 font-heading text-6xl font-bold leading-tight lg:text-8xl"
      >
        Crafting
        <br />
        Every Cup
        <br />
        With Passion
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: .4 }}
        className="mt-8 max-w-xl text-lg leading-8 text-gray-300"
      >
        Discover handcrafted coffee made from the world's
        finest beans, roasted with passion and served with
        unforgettable flavor.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: .6 }}
        className="mt-10 flex flex-wrap gap-5"
      >
     <div className="mt-10 flex gap-6">
 <MagneticButton
  className="rounded-full bg-[#8B5E3C] px-8 py-4 font-semibold text-white transition hover:bg-[#A47149]"
>
  Order Now
</MagneticButton>

  <button className="rounded-full border border-white/20 px-8 py-4 backdrop-blur-md transition-all hover:border-[#D4A373] hover:bg-white/5">
    Explore Menu
  </button>
</div>
      </motion.div>

      <div className="mt-16 flex gap-12">
        <div>
          <h2 className="text-3xl font-bold">5000+</h2>
          <p className="text-gray-400">Happy Customers</p>
        </div>

        <div>
          <h2 className="text-3xl font-bold">20+</h2>
          <p className="text-gray-400">Coffee Blends</p>
        </div>

        <div>
          <h2 className="text-3xl font-bold">4.9★</h2>
          <p className="text-gray-400">Average Rating</p>
        </div>
      </div>

    </div>
  );
}