// public/sections/FeaturesSection.jsx
import { businessFeatures } from "../../data/homeData";

export default function FeaturesSection() {
  return (
    <section className="bg-white px-4 py-12 md:py-16">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-['Playfair_Display'] text-[#0e2a1e] text-2xl md:text-3xl font-bold mb-8">
          What HairHobby does for your business
        </h2>

        {/* Horizontal scroll on mobile, 3-col grid on md+ */}
        <div className="flex gap-4 overflow-x-auto pb-3 scrollbar-hide md:grid md:grid-cols-3 md:overflow-visible">
          {businessFeatures.map((feature) => (
            <div
              key={feature.title}
              className="min-w-[240px] md:min-w-0 bg-[#faf9f7] border border-gray-100 rounded-2xl p-6 flex flex-col gap-3 hover:shadow-md transition-shadow"
            >
              <h3 className="font-['Playfair_Display'] text-[#0e2a1e] text-lg font-bold">
                {feature.title}
              </h3>
              <p className="font-['DM_Sans'] text-gray-600 text-sm leading-relaxed flex-1">
                {feature.desc}
              </p>
              <button className="bg-[#0e2a1e] text-white font-semibold text-xs px-5 py-2.5 rounded-full hover:bg-[#1a4a32] transition-colors font-['DM_Sans'] self-start mt-2">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
