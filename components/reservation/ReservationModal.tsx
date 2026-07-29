"use client";

import { motion, AnimatePresence } from "framer-motion";

interface Props {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function ReservationModal({
  open,
  onClose,
  children,
}: Props) {
  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="fixed left-1/2 top-1/2 z-[101] w-[95%] max-w-2xl -translate-x-1/2 -translate-y-1/2 rounded-3xl border border-white/10 bg-[#111111] p-10"
            initial={{
              opacity: 0,
              scale: 0.8,
              y: 50,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.8,
              y: 50,
            }}
            transition={{
              duration: 0.4,
              ease: "easeOut",
            }}
          >
            {children}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}