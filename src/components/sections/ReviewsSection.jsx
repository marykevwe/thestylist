// public/sections/ReviewsSection.jsx
import { reviews } from "../../data/homeData";
import { Star } from "lucide-react";

export default function ReviewsSection() {
  return (
    <section className="bg-[#faf9f7] px-4 py-12 md:py-16">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-['Playfair_Display'] text-[#0e2a1e] text-2xl md:text-3xl font-bold mb-8">
          What people are saying
        </h2>

        {/* Horizontal scroll on mobile, 3-col grid on md+ */}
        <div className="flex gap-4 overflow-x-auto pb-3 scrollbar-hide md:grid md:grid-cols-3 md:overflow-visible">
          {reviews.map((review) => (
            <div
              key={review.handle}
              className="min-w-[270px] md:min-w-0 bg-[#f0ebff] rounded-2xl p-6 flex flex-col gap-2"
            >
              {/* Stars */}
              <div className="flex gap-0.5">
                {Array.from({ length: review.stars }).map((_, i) => (
                  <Star key={i} size={14} className="fill-[#5b3fa0] text-[#5b3fa0]" />
                ))}
              </div>

              <p className="font-['Playfair_Display'] font-bold text-[#0e2a1e] text-base">
                {review.title}
              </p>
              <p className="font-['DM_Sans'] text-gray-600 text-sm leading-relaxed flex-1">
                {review.body}
              </p>
              <p className="font-['DM_Sans'] text-gray-400 text-xs mt-1">{review.handle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
