"use client";

const tabs = [
  "All",
  "Espresso",
  "Latte",
  "Mocha",
  "Cold Brew",
  "Dessert",
];

interface Props {
  category: string;
  setCategory: (value: string) => void;
}

export default function MenuTabs({
  category,
  setCategory,
}: Props) {
  return (
    <div className="mt-16 flex flex-wrap justify-center gap-4">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setCategory(tab)}
          className={`rounded-full px-6 py-3 transition-all duration-300 ${
            category === tab
              ? "bg-[#8B5E3C] text-white"
              : "border border-white/10 bg-white/5 hover:border-[#D4A373]"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}