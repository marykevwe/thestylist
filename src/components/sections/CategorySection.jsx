// public/sections/CategorySection.jsx
import { categories } from "../../data/homeData";

export default function CategorySection() {
  return (
    <section className="bg-brand-50 px-4 py-12 md:py-16">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-['Playfair_Display'] text-brand-900 text-2xl md:text-3xl font-bold mb-2">
          Browse by Service
        </h2>
        <p className="font-['DM_Sans'] text-brand-500 text-sm mb-8">
          Find the perfect look — tap a service to explore pros near you
        </p>

        <div className="grid grid-cols-3 gap-3 md:gap-5">
          {categories.map((cat) => (
            <button
              key={cat.name}
              className="group rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all bg-white border border-brand-100 hover:border-brand-300 text-left"
            >
              {/* Image */}
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src={cat.img}
                  alt={cat.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {/* subtle pink tint on hover */}
                <div className="absolute inset-0 bg-brand-700/0 group-hover:bg-brand-700/10 transition-colors duration-300" />
              </div>

              {/* Label */}
              <div className="px-2 py-2.5 md:px-3 md:py-3 bg-white group-hover:bg-brand-50 transition-colors">
                <p className="font-['DM_Sans'] font-semibold text-xs md:text-sm text-brand-900 text-center group-hover:text-brand-700 transition-colors">
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