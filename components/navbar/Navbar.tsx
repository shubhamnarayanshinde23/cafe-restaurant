"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Coffee, Menu, X } from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Menu", href: "#menu" },
  { name: "Gallery", href: "#gallery" },
  { name: "Reservation", href: "#reservation" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "border-b border-white/10 bg-black/70 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-3"
        >
          <Coffee className="text-[#D4A373]" size={30} />

          <span className="text-2xl font-bold tracking-wide">
            Brew Haven
          </span>
        </motion.div>

        {/* Desktop Menu */}

        <nav className="hidden items-center gap-10 lg:flex">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="relative transition hover:text-[#D4A373]"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* CTA */}

       <MagneticButton
  className="rounded-full bg-[#8B5E3C] px-6 py-3 font-semibold"
>
  Reserve Table
</MagneticButton>

        {/* Mobile */}

        <button
          className="lg:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}

      <motion.div
        initial={false}
        animate={{
          height: open ? "auto" : 0,
          opacity: open ? 1 : 0,
        }}
        className="overflow-hidden bg-black/90 backdrop-blur-xl lg:hidden"
      >
        <div className="flex flex-col gap-6 px-6 py-6">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </motion.div>
    </header>
  );
}