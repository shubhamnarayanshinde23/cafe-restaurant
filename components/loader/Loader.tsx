"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Coffee } from "lucide-react";
import { useEffect, useState } from "react";

export default function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0D0D0D]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
        >
          <motion.div
            animate={{
              rotate: [0, 8, -8, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          >
            <Coffee
              size={70}
              className="text-[#D4A373]"
            />
          </motion.div>

          <h1 className="mt-8 text-5xl font-bold">
            Brew Haven
          </h1>

          <p className="mt-3 text-gray-400">
            Brewing your perfect coffee...
          </p>

          <div className="mt-10 h-2 w-72 overflow-hidden rounded-full bg-white/10">
            <motion.div
              className="h-full bg-[#D4A373]"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{
                duration: 2,
                ease: "easeInOut",
              }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}