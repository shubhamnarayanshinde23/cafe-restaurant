"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ContactCardProps {
  icon: ReactNode;
  title: string;
  value: string;
}

export default function ContactCard({
  icon,
  title,
  value,
}: ContactCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
    >
      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-[#8B5E3C]/20 text-[#D4A373]">
        {icon}
      </div>

      <h3 className="text-xl font-semibold">{title}</h3>

      <p className="mt-3 text-gray-400">{value}</p>
    </motion.div>
  );
}