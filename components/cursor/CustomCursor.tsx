"use client";

import {
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springX = useSpring(mouseX, {
    stiffness: 450,
    damping: 35,
  });

  const springY = useSpring(mouseY, {
    stiffness: 450,
    damping: 35,
  });

  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const enter = () => setHovering(true);
    const leave = () => setHovering(false);

    window.addEventListener("mousemove", move);

    const interactive = document.querySelectorAll(
      "button, a, input, textarea, select"
    );

    interactive.forEach((el) => {
      el.addEventListener("mouseenter", enter);
      el.addEventListener("mouseleave", leave);
    });

    return () => {
      window.removeEventListener("mousemove", move);

      interactive.forEach((el) => {
        el.removeEventListener("mouseenter", enter);
        el.removeEventListener("mouseleave", leave);
      });
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      style={{
        x: springX,
        y: springY,
      }}
      className="pointer-events-none fixed left-0 top-0 z-[9999]"
    >
      {/* Outer Glow */}
      <motion.div
        animate={{
          scale: hovering ? 2.6 : 1.5,
          opacity: hovering ? 0.45 : 0.25,
        }}
        transition={{
          type: "spring",
          stiffness: 250,
          damping: 20,
        }}
        className="absolute -left-5 -top-5 h-10 w-10 rounded-full bg-[#D4A373] blur-2xl"
      />

      {/* Outer Ring */}
      <motion.div
        animate={{
          scale: hovering ? 1.8 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
        }}
        className="absolute -left-3 -top-3 h-6 w-6 rounded-full border border-[#D4A373]"
      />

      {/* Inner Dot */}
      <motion.div
        animate={{
          scale: hovering ? 0.7 : 1,
        }}
        transition={{
          type: "spring",
        }}
        className="h-2.5 w-2.5 rounded-full bg-[#D4A373]"
      />
    </motion.div>
  );
}