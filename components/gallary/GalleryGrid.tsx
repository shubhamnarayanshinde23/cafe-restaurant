"use client";

import { motion } from "framer-motion";
import GalleryItem from "./GalleryItem";
import { galleryImages } from "./galleryData";

export default function GalleryGrid() {
  return (
    <div className="mt-20 columns-1 gap-6 space-y-6 md:columns-2 xl:columns-3">
      {galleryImages.map((item, index) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: index * 0.08,
          }}
          className="mb-6 break-inside-avoid"
        >
          <GalleryItem {...item} />
        </motion.div>
      ))}
    </div>
  );
}