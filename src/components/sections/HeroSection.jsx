import { useState, useEffect, useRef } from "react";
import { Search, ChevronLeft, ChevronRight } from "lucide-react";

// ✅ FIXED PATHS (IMPORTANT: ../../ because file is in components/sections)

// Images
import braids2 from "../../assets/images/braids2.jpg";
import locks1 from "../../assets/images/locks1.jpg";
import lashs1 from "../../assets/images/lashs1.jpg";
import lashs4 from "../../assets/images/lashs4.jpg";
import wihinstall from "../../assets/images/wihinstall.jpg";

const slides = [
  { img: braids2, label: "Braids" },
  { img: locks1, label: "Locs" },
  { img: lashs1, label: "Nail Art" },
  { img: lashs4, label: "Lash Extensions" },
  { img: wihinstall, label: "Wig Installs" },
];

export default function HeroSection() {
  const [query, setQuery] = useState("");
  const [current, setCurrent] = useState(0);
  const timerRef = useRef(null);

  const go = (n) => setCurrent((n + slides.length) % slides.length);

  const resetAuto = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(
      () => setCurrent((c) => (c + 1) % slides.length),
      3800
    );
  };

  useEffect(() => {
    resetAuto();
    return () => clearInterval(timerRef.current);
  }, []);

  const handleNav = (dir) => {
    go(current + dir);
    resetAuto();
  };

  return (
    <section className="relative overflow-hidden h-[520px] bg-brand-900">
      {/* Carousel */}
      <div
        className="flex h-full transition-transform duration-700 ease-[cubic-bezier(0.77,0,0.18,1)]"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide) => (
          <div
            key={slide.label}
            className="relative min-w-full h-full flex-shrink-0"
          >
            <img
              src={slide.img}
              alt={slide.label}
              className="w-full h-full "
            />

            <div className="absolute inset-0 bg-gradient-to-t from-brand-900/85 via-brand-700/30 to-transparent" />

            <span className="absolute bottom-5 left-1/2 -translate-x-1/2 bg-white/15 border border-white/30 text-white text-xs font-medium px-4 py-1.5 rounded-full font-['DM_Sans'] backdrop-blur-sm whitespace-nowrap">
              {slide.label}
            </span>
          </div>
        ))}
      </div>

      {/* Center Content */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-4 pointer-events-none">
        <h1 className="font-['Playfair_Display'] text-white text-3xl sm:text-4xl md:text-5xl font-black leading-tight mb-3 text-center">
          Discover & Book Local <br className="hidden sm:block" />
          Hair Professionals
        </h1>

        <p className="font-['DM_Sans'] text-brand-200 text-base md:text-lg mb-6 max-w-md text-center">
          Connect with top-rated stylists, barbers, and beauty pros near you
        </p>

        {/* Search */}
        <div className="pointer-events-auto flex items-center bg-white rounded-full px-4 md:px-6 py-3 gap-3 w-[92%] max-w-xl shadow-2xl">
          <Search className="text-gray-400 shrink-0" size={20} />

          <input
            type="text"
            placeholder="Service, stylist or salon..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 outline-none text-sm md:text-base text-gray-700 bg-transparent"
          />

          <button className="bg-[#c8f250] text-[#0e2a1e] font-bold text-sm px-5 py-2 rounded-full hover:bg-[#b5df30] transition-colors">
            Search
          </button>
        </div>

        {/* Tags */}
        <div className="pointer-events-auto flex flex-wrap justify-center gap-2 mt-4">
          {["Braids", "Natural Hair", "Locs", "Silk Press", "Nails", "Lashes"].map(
            (tag) => (
              <button
                key={tag}
                className="bg-white/10 hover:bg-white/20 text-white text-xs font-medium px-4 py-1.5 rounded-full border border-white/20"
              >
                {tag}
              </button>
            )
          )}
        </div>
      </div>

      {/* Arrows */}
      <button
        onClick={() => handleNav(-1)}
        className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-white/15 border border-white/30 text-white flex items-center justify-center"
      >
        <ChevronLeft size={20} />
      </button>

      <button
        onClick={() => handleNav(1)}
        className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-white/15 border border-white/30 text-white flex items-center justify-center"
      >
        <ChevronRight size={20} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-3 right-4 z-20 flex gap-1.5">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              go(i);
              resetAuto();
            }}
            className={`h-[7px] rounded-full transition-all ${
              i === current ? "w-5 bg-[#c8f250]" : "w-[7px] bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}