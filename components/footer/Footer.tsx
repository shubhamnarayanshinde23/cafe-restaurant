"use client";

import Link from "next/link";
import MagneticButton from "@/components/ui/MagneticButton";
import { motion } from "framer-motion";
import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaCoffee,
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";
import { HiArrowUp } from "react-icons/hi2";

const links = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Menu", href: "#menu" },
  { name: "Gallery", href: "#gallery" },
  { name: "Reservation", href: "#reservation" },
  { name: "Contact", href: "#contact" },
];

const socials = [
  {
    icon: FaInstagram,
    href: "https://instagram.com",
    label: "Instagram",
  },
  {
    icon: FaFacebookF,
    href: "https://facebook.com",
    label: "Facebook",
  },
  {
    icon: FaXTwitter,
    href: "https://x.com",
    label: "X",
  },
  {
    icon: FaYoutube,
    href: "https://youtube.com",
    label: "YouTube",
  },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-black py-20">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-[#8B5E3C]/20 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Brand */}
        <div className="text-center">
          <motion.div
            animate={{
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="inline-flex items-center gap-3"
          >
            <FaCoffee
              size={34}
              className="text-[#D4A373]"
            />

            <h2 className="text-4xl font-bold text-white">
              Brew Haven
            </h2>
          </motion.div>

          <p className="mx-auto mt-6 max-w-xl text-gray-400 leading-8">
            Crafted with passion. Brewed to perfection.
            Every cup tells a story.
          </p>
        </div>

        {/* Social Icons */}
        <div className="mt-12 flex justify-center gap-5">
          {socials.map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.15,
                y: -6,
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-all duration-300 hover:border-[#D4A373] hover:bg-[#8B5E3C]/20 hover:text-[#D4A373]"
              aria-label={label}
            >
              <Icon size={20} />
            </motion.a>
          ))}
        </div>

        {/* Navigation */}
        <div className="mt-14 flex flex-wrap justify-center gap-8">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-gray-300 transition-colors duration-300 hover:text-[#D4A373]"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Newsletter */}
        <div className="mx-auto mt-16 max-w-2xl">
          <h3 className="text-center text-2xl font-semibold text-white">
            Join Our Newsletter
          </h3>

          <p className="mt-3 text-center text-gray-400">
            Subscribe to receive our latest offers, seasonal drinks,
            and exclusive updates.
          </p>

          <div className="mt-8 flex flex-col overflow-hidden rounded-full border border-white/10 bg-white/5 md:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-transparent px-6 py-4 text-white placeholder:text-gray-500 focus:outline-none"
            />

          <MagneticButton
  className="bg-[#8B5E3C] px-8 font-semibold transition hover:bg-[#A47149]"
>
  Subscribe
</MagneticButton>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-20 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-10 md:flex-row">
          <p className="text-sm text-gray-500">
            © 2026 Brew Haven. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 text-white transition-all duration-300 hover:border-[#D4A373] hover:text-[#D4A373]"
          >
            Back to Top
            <HiArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
}