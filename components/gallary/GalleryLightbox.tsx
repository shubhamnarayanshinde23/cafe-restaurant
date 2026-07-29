"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface Props {
  images: string[];
  current: number;
  open: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export default function GalleryLightbox({
  images,
  current,
  open,
  onClose,
  onNext,
  onPrev,
}: Props) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-lg"
        >
          <button
            onClick={onClose}
            className="absolute right-8 top-8 rounded-full bg-white/10 p-3"
          >
            <X />
          </button>

          <button
            onClick={onPrev}
            className="absolute left-8 rounded-full bg-white/10 p-3"
          >
            <ChevronLeft />
          </button>

          <motion.div
            key={current}
            initial={{
              scale: .9,
              opacity: 0,
            }}
            animate={{
              scale: 1,
              opacity: 1,
            }}
            exit={{
              scale: .9,
              opacity: 0,
            }}
          >
            <Image
              src={images[current]}
              alt=""
              width={1200}
              height={800}
              className="max-h-[80vh] w-auto rounded-2xl object-cover"
            />
          </motion.div>

          <button
            onClick={onNext}
            className="absolute right-8 rounded-full bg-white/10 p-3"
          >
            <ChevronRight />
          </button>

          <div className="absolute bottom-8 text-lg">
            {current + 1} / {images.length}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}