"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";

export default function MouseSpotlight() {
  const mouseX = useMotionValue(-300);
  const mouseY = useMotionValue(-300);

  const x = useSpring(mouseX, {
    stiffness: 120,
    damping: 20,
  });

  const y = useSpring(mouseY, {
    stiffness: 120,
    damping: 20,
  });

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();

    mouseX.set(e.clientX - rect.left - 250);
    mouseY.set(e.clientY - rect.top - 250);
  }

  return (
    <div
      onMouseMove={handleMove}
      className="absolute inset-0 overflow-hidden"
    >
      <motion.div
        style={{
          x,
          y,
        }}
        className="pointer-events-none absolute h-[500px] w-[500px] rounded-full bg-[#C58A45]/15 blur-[130px]"
      />
    </div>
  );
}