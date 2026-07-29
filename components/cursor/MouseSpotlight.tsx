"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export default function MouseSpotlight() {
  const mouseX = useMotionValue(-500);
  const mouseY = useMotionValue(-500);

  const x = useSpring(mouseX, {
    stiffness: 120,
    damping: 20,
  });

  const y = useSpring(mouseY, {
    stiffness: 120,
    damping: 20,
  });

  useEffect(() => {
    function handleMove(e: MouseEvent) {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    }

    window.addEventListener("mousemove", handleMove);

    return () =>
      window.removeEventListener("mousemove", handleMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-0 h-[500px] w-[500px] rounded-full"
      style={{
        x,
        y,
        translateX: "-50%",
        translateY: "-50%",
        background:
          "radial-gradient(circle, rgba(212,163,115,0.18) 0%, rgba(212,163,115,0.08) 35%, transparent 70%)",
        filter: "blur(40px)",
      }}
    />
  );
}