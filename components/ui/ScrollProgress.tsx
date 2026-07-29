"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 20,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed left-0 top-0 z-[9999] h-[4px] w-full origin-left bg-gradient-to-r from-[#8B5E3C] via-[#D4A373] to-[#FFE5B4] shadow-[0_0_20px_rgba(212,163,115,0.8)]"
    />
  );
}