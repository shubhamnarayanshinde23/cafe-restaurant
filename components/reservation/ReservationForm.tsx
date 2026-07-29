"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ReservationForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    setLoading(true);

    await new Promise((resolve) =>
      setTimeout(resolve, 2000)
    );

    setLoading(false);
    setSuccess(true);
  }

  return (
    <AnimatePresence mode="wait">
      {!success ? (
        <motion.form
          key="form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="space-y-5"
        >
          <h2 className="text-4xl font-bold">
            Reserve Your Table
          </h2>

          <input
            required
            placeholder="Full Name"
            className="w-full rounded-xl border border-white/10 bg-white/5 p-4 outline-none focus:border-[#D4A373]"
          />

          <input
            required
            type="email"
            placeholder="Email"
            className="w-full rounded-xl border border-white/10 bg-white/5 p-4 outline-none focus:border-[#D4A373]"
          />

          <select
            required
            className="w-full rounded-xl border border-white/10 bg-white/5 p-4 outline-none"
          >
            <option>2 Guests</option>
            <option>4 Guests</option>
            <option>6 Guests</option>
            <option>8 Guests</option>
          </select>

          <input
            required
            type="date"
            className="w-full rounded-xl border border-white/10 bg-white/5 p-4 outline-none"
          />

          <input
            required
            type="time"
            className="w-full rounded-xl border border-white/10 bg-white/5 p-4 outline-none"
          />

          <button
            disabled={loading}
            className="flex w-full items-center justify-center rounded-xl bg-[#8B5E3C] py-4 font-semibold transition hover:bg-[#A47149] disabled:opacity-60"
          >
            {loading ? (
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  repeat: Infinity,
                  duration: 1,
                  ease: "linear",
                }}
                className="h-6 w-6 rounded-full border-2 border-white border-t-transparent"
              />
            ) : (
              "Reserve Now"
            )}
          </button>
        </motion.form>
      ) : (
        <motion.div
          key="success"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="py-14 text-center"
        >
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
            }}
            className="text-7xl"
          >
            ☕
          </motion.div>

          <h2 className="mt-6 text-3xl font-bold">
            Reservation Confirmed
          </h2>

          <p className="mt-4 text-gray-400">
            Thank you! We'll contact you shortly.
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}