"use client";

import { motion } from "framer-motion";
import { Mouse } from "lucide-react";

export default function ScrollIndicator() {
  return (
    <motion.div
      animate={{
        y: [0, 12, 0],
      }}
      transition={{
        repeat: Infinity,
        duration: 1.8,
      }}
      className="absolute bottom-10 left-1/2 -translate-x-1/2"
    >
      <div className="flex flex-col items-center gap-2 text-white/60">
        <Mouse size={22} />
        <span className="text-xs uppercase tracking-[0.3em]">
          Scroll
        </span>
      </div>
    </motion.div>
  );
}