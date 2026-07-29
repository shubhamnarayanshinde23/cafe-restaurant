"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ShoppingCart, Star } from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";

interface MenuCardProps {
  item: {
    id: number;
    category: string;
    name: string;
    description: string;
    price: number;
    rating: number;
    image: string;
  };
}

export default function MenuCard({ item }: MenuCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -12,
        scale: 1.03,
      }}
      transition={{
        duration: 0.35,
      }}
      className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl"
    >
      {/* Glow */}
      <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
        <div className="absolute left-1/2 top-0 h-48 w-48 -translate-x-1/2 rounded-full bg-[#8B5E3C]/20 blur-[90px]" />
      </div>

      {/* Price Badge */}
      <div className="absolute right-5 top-5 z-20 rounded-full bg-[#D4A373] px-4 py-2 font-semibold text-[#111] shadow-lg">
        ₹{item.price}
      </div>

      {/* Image */}
      <div className="relative flex h-72 items-center justify-center overflow-hidden">
        <motion.div
          whileHover={{
            rotate: 8,
            scale: 1.08,
          }}
          transition={{
            duration: 0.4,
          }}
        >
          <Image
            src={item.image}
            alt={item.name}
            width={260}
            height={260}
            className="drop-shadow-[0_25px_40px_rgba(0,0,0,.45)]"
          />
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-8">
        <div className="mb-4 flex items-center gap-2">
          <Star
            size={18}
            className="fill-[#D4A373] text-[#D4A373]"
          />

          <span className="text-sm text-gray-300">
            {item.rating}
          </span>
        </div>

        <h3 className="text-2xl font-bold">
          {item.name}
        </h3>

        <p className="mt-3 leading-7 text-gray-400">
          {item.description}
        </p>
        <MagneticButton
  className="rounded-full bg-[#8B5E3C] px-6 py-3 font-semibold"
>
  Add to Cart
</MagneticButton>
      </div>
    </motion.div>
  );
}