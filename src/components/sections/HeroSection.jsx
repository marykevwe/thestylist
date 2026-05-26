// public/sections/HeroSection.jsx
import { useState } from "react";
import { Search } from "lucide-react";

export default function HeroSection() {
  const [query, setQuery] = useState("");

  return (
    <section className="bg-gradient-to-br from-[#0a1f15] via-[#0e2a1e] to-[#0a1f15] px-4 py-16 md:py-24 text-center">
      {/* Heading */}
      <h1 className="font-['Playfair_Display'] text-white text-3xl sm:text-4xl md:text-5xl font-black leading-tight mb-4">
        Discover & Book Local <br className="hidden sm:block" />
        Hair Professionals
      </h1>
      <p className="font-['DM_Sans'] text-[#a8d5b5] text-base md:text-lg mb-8 max-w-md mx-auto">
        Connect with top-rated stylists, barbers, and beauty pros near you
      </p>

      {/* Search bar */}
      <div className="flex items-center bg-white rounded-full px-4 md:px-6 py-3 md:py-4 gap-3 max-w-xl mx-auto shadow-2xl">
        <Search className="text-gray-400 shrink-0" size={20} />
        <input
          type="text"
          placeholder="Service, stylist or salon..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-1 outline-none text-sm md:text-base text-gray-700 font-['DM_Sans'] bg-transparent placeholder-gray-400"
        />
        <button className="bg-[#c8f250] text-[#0e2a1e] font-bold text-sm px-5 py-2 rounded-full hover:bg-[#b5df30] transition-colors font-['DM_Sans'] shrink-0">
          Search
        </button>
      </div>

      {/* Quick tags */}
      <div className="flex flex-wrap justify-center gap-2 mt-6">
        {["Braids", "Natural Hair", "Locs", "Silk Press", "Nails"].map((tag) => (
          <button
            key={tag}
            className="bg-white/10 hover:bg-white/20 text-white text-xs font-medium px-4 py-1.5 rounded-full transition-colors font-['DM_Sans'] border border-white/20"
          >
            {tag}
          </button>
        ))}
      </div>
    </section>
  );
}
