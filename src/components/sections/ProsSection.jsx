// public/sections/ProsSection.jsx
import { pros } from "../../data/homeData";
import { Star } from "lucide-react";

export default function ProsSection() {
  return (
    <section className="bg-white px-4 py-12 md:py-16">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-['Playfair_Display'] text-[#0e2a1e] text-2xl md:text-3xl font-bold">
            Best Professionals Near You
          </h2>
          <button className="font-['DM_Sans'] text-sm font-semibold text-[#0e2a1e] underline underline-offset-4 hover:text-[#1a4a32] transition-colors shrink-0">
            See All →
          </button>
        </div>

        {/* Horizontal scroll on mobile, 4-col grid on large screens */}
        <div className="flex gap-4 overflow-x-auto pb-3 scrollbar-hide lg:grid lg:grid-cols-4 lg:overflow-visible">
          {pros.map((pro) => (
            <div
              key={pro.name}
              className="min-w-[200px] sm:min-w-[220px] lg:min-w-0 bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer border border-gray-100"
            >
              {/* Image + badge */}
              <div className="relative">
                <img
                  src={pro.img}
                  alt={pro.name}
                  className="w-full h-44 object-cover"
                />
                {pro.badge && (
                  <span className="absolute top-2.5 left-2.5 bg-[#fff8c5] text-[#7a5a00] text-[10px] font-bold px-2.5 py-1 rounded-full font-['DM_Sans'] flex items-center gap-1">
                    ⭐ {pro.badge}
                  </span>
                )}
              </div>

              {/* Info */}
              <div className="p-3.5">
                <p className="font-['Playfair_Display'] font-bold text-[#0e2a1e] text-base leading-tight">
                  {pro.name}
                </p>
                <p className="font-['DM_Sans'] text-gray-500 text-xs mt-1">
                  {pro.location} · {pro.distance}
                </p>
                <div className="flex items-center gap-1 mt-1.5">
                  <Star size={12} className="fill-amber-400 text-amber-400" />
                  <span className="font-['DM_Sans'] text-xs font-semibold text-gray-800">
                    {pro.rating}
                  </span>
                  <span className="font-['DM_Sans'] text-xs text-gray-500">
                    ({pro.reviews})
                    {pro.bookings ? ` · ${pro.bookings} Bookings` : ""}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
