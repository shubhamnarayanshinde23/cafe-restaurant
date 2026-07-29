"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import Steam from "./Steam";
import FloatingBeans from "./FloatingBeans";
import CoffeeScene from "./CoffeeScene";

export default function HeroImage() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement>
  ) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const x =
      (e.clientX - rect.left - rect.width / 2) / 25;

    const y =
      (e.clientY - rect.top - rect.height / 2) / 25;

    setPosition({ x, y });
  };

  const resetPosition = () => {
    setPosition({
      x: 0,
      y: 0,
    });
  };

  return (
    <div
      className="relative flex h-[700px] items-center justify-center"
      onMouseMove={handleMouseMove}
      onMouseLeave={resetPosition}
    >
      {/* Glow */}
      <motion.div
        animate={{
          x: position.x * 0.5,
          y: position.y * 0.5,
        }}
        transition={{
          type: "spring",
          stiffness: 60,
        }}
        className="absolute h-[600px] w-[600px] rounded-full bg-[#8B5E3C]/20 blur-[150px]"
      />

      {/* Floating Coffee Beans */}
      <motion.div
        animate={{
          x: position.x * 1.4,
          y: position.y * 1.4,
        }}
        transition={{
          type: "spring",
          stiffness: 60,
        }}
        className="absolute inset-0"
      >
        <FloatingBeans />
      </motion.div>

      {/* 3D Coffee Scene (Background Layer) */}
      <motion.div
        animate={{
          x: position.x * 0.3,
          y: position.y * 0.3,
        }}
        transition={{
          type: "spring",
          stiffness: 50,
        }}
        className="absolute inset-0 opacity-25"
      >
        <CoffeeScene />
      </motion.div>

      {/* Main Coffee Cup */}
      <motion.div
        animate={{
          x: position.x,
          y: position.y,
          rotateX: -position.y,
          rotateY: position.x,
        }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 15,
        }}
        className="relative z-20"
      >
        <motion.div
          animate={{
            y: [-12, 12, -12],
            rotate: [-1, 1, -1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Steam />

          <Image
            src="/images/coffee-cup.png"
            alt="Coffee Cup"
            width={520}
            height={520}
            priority
            className="drop-shadow-[0_40px_100px_rgba(0,0,0,0.6)]"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}