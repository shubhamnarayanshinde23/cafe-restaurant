"use client";

import { motion } from "framer-motion";

const particles = Array.from({ length: 40 }, (_, i) => ({
  id: i,
  size: 2 + (i % 5),
  left: (i * 11.7) % 100,
  top: (i * 19.3) % 100,
  duration: 6 + (i % 6),
  delay: (i % 5) * 0.7,
}));

export default function BackgroundEffects() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">

      {/* Base Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#080808] via-[#111111] to-[#000000]" />

      {/* Ambient Coffee Glow Left */}
      <motion.div
        className="absolute left-[-250px] top-1/3 h-[550px] w-[550px] rounded-full bg-[#8B5E3C]/20 blur-[180px] will-change-transform"
        animate={{
          scale: [1, 1.15, 1],
          x: [-20, 20, -20],
          y: [-15, 15, -15],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Ambient Coffee Glow Right */}
      <motion.div
        className="absolute right-[-220px] bottom-[-100px] h-[650px] w-[650px] rounded-full bg-[#D4A373]/15 blur-[220px] will-change-transform"
        animate={{
          scale: [1.1, 1, 1.1],
          x: [20, -20, 20],
          y: [20, -20, 20],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Center Ambient Light */}
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D4A373]/5 blur-[180px]" />

      {/* Floating Particles */}
      {particles.map((particle) => (
        <motion.span
          key={particle.id}
          className="absolute rounded-full bg-white/30"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.left}%`,
            top: `${particle.top}%`,
          }}
          animate={{
            y: [-25, 25, -25],
            x: [-10, 10, -10],
            opacity: [0.15, 0.8, 0.15],
            scale: [1, 1.6, 1],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: particle.delay,
          }}
        />
      ))}

      {/* Noise Grid */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="h-full w-full bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:70px_70px]" />
      </div>

      {/* Radial Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(0,0,0,0.75)_100%)]" />
    </div>
  );
}