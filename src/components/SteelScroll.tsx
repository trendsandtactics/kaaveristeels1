"use client";

export default function SteelScroll() {
  return (
    <section
      id="steel-scroll-section"
      className="relative w-full h-[100vh] overflow-hidden"
    >
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/sequence.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-[1]" />

      {/* Content */}
      <div className="absolute inset-0 z-10 flex items-center">
        <div className="max-w-7xl mx-auto w-full px-6 md:px-12">

          <h2 className="font-heading text-4xl md:text-6xl text-white font-bold leading-tight max-w-xl">
            Building India&apos;s Future
          </h2>

          <button className="mt-8 px-8 py-4 bg-yellow-500 text-black font-bold text-sm md:text-lg uppercase tracking-wider rounded-sm hover:scale-105 transition duration-300">
            Explore Our Products
          </button>

        </div>
      </div>
    </section>
  );
}
