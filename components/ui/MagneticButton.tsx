"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function MagneticButton({
  children,
  className = "",
  onClick,
}: Props) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, {
    stiffness: 180,
    damping: 15,
  });

  const springY = useSpring(y, {
    stiffness: 180,
    damping: 15,
  });

  function handleMove(
    e: React.MouseEvent<HTMLButtonElement>
  ) {
    const rect = e.currentTarget.getBoundingClientRect();

    const offsetX =
      e.clientX - rect.left - rect.width / 2;

    const offsetY =
      e.clientY - rect.top - rect.height / 2;

    x.set(offsetX * 0.2);
    y.set(offsetY * 0.2);
  }

  function handleLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.button
      style={{
        x: springX,
        y: springY,
      }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      whileTap={{ scale: 0.95 }}
      whileHover={{ scale: 1.05 }}
      onClick={onClick}
      className={className}
    >
      {children}
    </motion.button>
  );
}