"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import ReservationModal from "./ReservationModal";
import ReservationForm from "./ReservationForm";
import MagneticButton from "@/components/ui/MagneticButton";

export default function Reservation() {
  const [open, setOpen] = useState(false);

  return (
    <section
      id="reservation"
      className="relative overflow-hidden bg-[#0B0B0B] py-32"
    >
      {/* Background Glow */}
      <div className="absolute left-0 top-1/2 h-[550px] w-[550px] -translate-y-1/2 rounded-full bg-[#8B5E3C]/20 blur-[180px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-20 px-6 lg:grid-cols-2 lg:px-8">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="rounded-full border border-[#8B5E3C] px-4 py-2 text-sm text-[#D4A373]">
            BOOK A TABLE
          </span>

          <h2 className="mt-8 text-5xl font-bold leading-tight lg:text-6xl">
            Reserve Your
            <br />
            Coffee Experience
          </h2>

          <p className="mt-8 max-w-lg text-lg leading-8 text-gray-400">
            Whether it's a casual coffee break or a special
            celebration, reserve your table and let us make
            every visit memorable.
          </p>

          {/* Reserve Button */}
         <MagneticButton
  onClick={() => setOpen(true)}
  className="mt-10 rounded-full bg-[#8B5E3C] px-8 py-4 font-semibold text-white transition hover:bg-[#A47149]"
>
  Reserve Table
</MagneticButton>

          {/* Floating Coffee Cup */}
          <motion.div
            animate={{ y: [-12, 12, -12] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="mt-12"
          >
            <Image
              src="/images/coffee-cup.png"
              alt="Coffee Cup"
              width={420}
              height={420}
              className="drop-shadow-[0_35px_60px_rgba(0,0,0,.5)]"
            />
          </motion.div>
        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl"
        >
          <h3 className="mb-6 text-3xl font-bold">
            Why Reserve?
          </h3>

          <ul className="space-y-5 text-gray-400">
            <li>☕ Freshly brewed premium coffee</li>
            <li>🍰 Exclusive desserts & seasonal specials</li>
            <li>🪑 Comfortable indoor & outdoor seating</li>
            <li>🎉 Perfect for meetings & celebrations</li>
            <li>📶 Free high-speed Wi-Fi</li>
          </ul>
        </motion.div>
      </div>

      {/* Reservation Modal */}
      <ReservationModal
        open={open}
        onClose={() => setOpen(false)}
      >
        <ReservationForm />
      </ReservationModal>
    </section>
  );
}