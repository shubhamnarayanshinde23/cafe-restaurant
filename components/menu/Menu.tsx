"use client";

import MenuTabs from "./MenuTabs";
import MenuGrid from "./MenuGrid";
import { useState } from "react";

export default function Menu() {
  const [category, setCategory] = useState("All");

  return (
    <section
      id="menu"
      className="relative overflow-hidden bg-[#090909] py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <span className="rounded-full border border-[#8B5E3C] px-4 py-2 text-sm text-[#D4A373]">
            OUR MENU
          </span>

          <h2 className="mt-6 text-5xl font-bold">
            Crafted For Every Taste
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
            Discover our handcrafted coffees and signature desserts,
            prepared with premium ingredients and exceptional care.
          </p>
        </div>

        <MenuTabs
          category={category}
          setCategory={setCategory}
        />

        <MenuGrid category={category} />
      </div>
    </section>
  );
}