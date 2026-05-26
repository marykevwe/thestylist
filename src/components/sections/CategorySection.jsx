// public/sections/CategorySection.jsx
import { categories } from "../../data/homeData";

export default function CategorySection() {
  return (
    <section className="bg-[#faf9f7] px-4 py-12 md:py-16">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-['Playfair_Display'] text-[#0e2a1e] text-2xl md:text-3xl font-bold mb-8">
          Browse by Service
        </h2>

        {/* 3-col on mobile, up to 3-col on desktop (matching StyleSeat grid) */}
        <div className="grid grid-cols-3 gap-3 md:gap-5">
          {categories.map((cat) => (
            <button
              key={cat.name}
              className="group rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow bg-white text-left"
            >
              {/* Image */}
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src={cat.img}
                  alt={cat.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              {/* Label */}
              <div className="px-2 py-2.5 md:px-3 md:py-3">
                <p className="font-['DM_Sans'] font-semibold text-xs md:text-sm text-[#1a1a1a] text-center">
                  {cat.name}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
