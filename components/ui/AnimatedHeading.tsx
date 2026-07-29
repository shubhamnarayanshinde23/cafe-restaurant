"use client";

import { motion } from "framer-motion";

interface AnimatedHeadingProps {
  text: string;
}

const highlightWords = ["Every", "Cup"];

export default function AnimatedHeading({
  text,
}: AnimatedHeadingProps) {
  const words = text.split(" ");

  return (
    <motion.h1
      initial="hidden"
      animate="visible"
      transition={{
        staggerChildren: 0.1,
      }}
      className="mt-8 text-6xl font-bold leading-tight lg:text-8xl"
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          variants={{
            hidden: {
              opacity: 0,
              y: 50,
              filter: "blur(10px)",
            },
            visible: {
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
            },
          }}
          transition={{
            duration: 0.7,
          }}
          className={`mr-4 inline-block ${
            highlightWords.includes(word)
              ? "bg-gradient-to-r from-[#D4A373] via-[#FFE4B5] to-[#D4A373] bg-clip-text text-transparent"
              : ""
          }`}
        >
          {word}
        </motion.span>
      ))}
    </motion.h1>
  );
}