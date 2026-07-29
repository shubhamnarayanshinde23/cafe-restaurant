"use client";

import { motion, AnimatePresence } from "framer-motion";
import MenuCard from "./MenuCard";
import { menuItems } from "./menuData";

interface Props {
  category: string;
}

export default function MenuGrid({ category }: Props) {
  const filtered =
    category === "All"
      ? menuItems
      : menuItems.filter(
          (item) => item.category === category
        );

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={category}
        initial={{
          opacity: 0,
          y: 30,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        exit={{
          opacity: 0,
          y: 30,
        }}
        transition={{
          duration: 0.4,
        }}
        className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3"
      >
        {filtered.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{
              opacity: 0,
              y: 60,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: index * 0.1,
              duration: 0.6,
            }}
          >
            <MenuCard item={item} />
          </motion.div>
        ))}
      </motion.div>
    </AnimatePresence>
  );
}