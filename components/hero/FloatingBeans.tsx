"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const beans = [
  { x: -220, y: -140, size: 38, delay: 0 },
  { x: 210, y: -170, size: 30, delay: 0.5 },
  { x: -250, y: 40, size: 34, delay: 1 },
  { x: 230, y: 120, size: 42, delay: 1.5 },
  { x: -120, y: 180, size: 28, delay: 2 },
  { x: 120, y: 210, size: 32, delay: 2.5 },
];

export default function FloatingBeans() {
  return (
    <>
      {beans.map((bean, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{
            left: "50%",
            top: "50%",
            marginLeft: bean.x,
            marginTop: bean.y,
          }}
          animate={{
            y: [-10, 10, -10],
            rotate: [0, 360],
          }}
          transition={{
            duration: 6 + index,
            repeat: Infinity,
            ease: "easeInOut",
            delay: bean.delay,
          }}
        >
          <Image
            src="/images/coffee-bean.png"
            alt="Coffee Bean"
            width={bean.size}
            height={bean.size}
            className="drop-shadow-lg"
          />
        </motion.div>
      ))}
    </>
  );
}