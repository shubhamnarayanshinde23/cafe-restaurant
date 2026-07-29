"use client";

import GalleryGrid from "./GalleryGrid";



export default function Gallery() {
  return (
    <section
      id="gallery"
      className="relative overflow-hidden bg-[#090909] py-32"
    >
      <div className="absolute left-0 top-0 h-[450px] w-[450px] rounded-full bg-[#8B5E3C]/15 blur-[180px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <span className="rounded-full border border-[#8B5E3C] px-4 py-2 text-sm text-[#D4A373]">
            OUR GALLERY
          </span>

          <h2 className="mt-6 text-5xl font-bold">
            Crafted Moments &
            <br />
            Beautiful Memories
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
            A glimpse into our café, handcrafted drinks,
            artisan desserts, and the moments that make
            Brew Haven unforgettable.
          </p>
        </div>

        <GalleryGrid />
      </div>
    </section>
  );
}