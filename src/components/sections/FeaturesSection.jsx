// public/sections/FeaturesSection.jsx
import { Rocket, CalendarCheck, Sparkles } from "lucide-react";
import { businessFeatures } from "../../data/homeData";

const icons = [Rocket, CalendarCheck, Sparkles];

export default function FeaturesSection() {
  return (
    <section className="bg-white px-4 py-12 md:py-16">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-playfair text-brand-900 text-2xl md:text-3xl font-bold mb-2">
          What HairHobby does for your business
        </h2>
        <p className="font-dmsans text-brand-400 text-sm mb-8">
          Everything you need to grow, manage, and delight your clients
        </p>

        <div className="flex gap-4 overflow-x-auto pb-3 scrollbar-hide md:grid md:grid-cols-3 md:overflow-visible">
          {businessFeatures.map((feature, i) => {
            const Icon = icons[i];
            return (
              <div
                key={feature.title}
                className="min-w-[240px] md:min-w-0 bg-brand-50 border border-brand-100 rounded-2xl p-6 flex flex-col gap-3 hover:border-brand-300 hover:shadow-sm transition-all group"
              >
                {/* Icon badge */}
                <div className="w-10 h-10 rounded-xl bg-brand-100 group-hover:bg-brand-200 transition-colors flex items-center justify-center">
                  <Icon size={20} className="text-brand-700" />
                </div>

                <h3 className="font-playfair text-brand-900 text-lg font-bold">
                  {feature.title}
                </h3>
                <p className="font-dmsans text-brand-600 text-sm leading-relaxed flex-1">
                  {feature.desc}
                </p>
                <button className="bg-brand-700 hover:bg-brand-900 text-white font-semibold text-xs px-5 py-2.5 rounded-full transition-colors font-dmsans self-start mt-2">
                  Learn More
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}