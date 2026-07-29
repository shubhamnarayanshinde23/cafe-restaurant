"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const beans = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  left: (i * 9.5) % 100,
  top: (i * 21) % 100,
  size: 26 + (i % 5) * 8,
  duration: 18 + (i % 6) * 3,
  delay: i * 0.7,
}));

export default function FloatingBeans() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">

      {beans.map((bean) => (
        <motion.div
          key={bean.id}
          className="absolute opacity-20"
          style={{
            left: `${bean.left}%`,
            top: `${bean.top}%`,
            width: bean.size,
            height: bean.size,
          }}
          animate={{
            y: [-30, 30, -30],
            x: [-15, 15, -15],
            rotate: [0, 360],
            scale: [1, 1.1, 1],
}}
          transition={{
            duration: bean.duration,
            repeat: Infinity,
            ease: "linear",
            delay: bean.delay,
          }}
        >
          <Image
            src="/images/coffee-bean.png"
            alt="Coffee Bean"
            fill
            className="object-contain"
          />
        </motion.div>
      ))}
    </div>
  );
}