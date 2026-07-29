"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Search } from "lucide-react";

interface Props {
  image: string;
  title: string;
  height: string;
}

export default function GalleryItem({
  image,
  title,
  height,
}: Props) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className={`group relative overflow-hidden rounded-[28px] ${height}`}
    >
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover transition duration-700 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-black/20 transition duration-500 group-hover:bg-black/50" />

      <div className="absolute inset-0 flex items-center justify-center opacity-0 transition duration-500 group-hover:opacity-100">
        <div className="rounded-full bg-white/10 p-5 backdrop-blur-xl">
          <Search className="text-white" size={28} />
        </div>
      </div>

      <div className="absolute bottom-6 left-6">
        <h3 className="text-xl font-semibold text-white">
          {title}
        </h3>
      </div>
    </motion.div>
  );
}