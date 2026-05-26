// public/sections/CitiesSection.jsx
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { cities, cityServices } from "../../data/homeData";

export default function CitiesSection() {
  // default first city open, matching StyleSeat behaviour
  const [openCity, setOpenCity] = useState(cities[0]);

  const toggle = (city) => setOpenCity(openCity === city ? null : city);

  return (
    <section className="bg-white px-4 py-12 md:py-16">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-['Playfair_Display'] text-[#0e2a1e] text-2xl md:text-3xl font-bold mb-6">
          Browse popular hair services
        </h2>

        <div className="divide-y divide-gray-100 border-t border-gray-100">
          {cities.map((city) => (
            <div key={city}>
              {/* Accordion header */}
              <button
                onClick={() => toggle(city)}
                className="w-full flex items-center justify-between py-4 text-left group"
              >
                <span className="font-['DM_Sans'] font-semibold text-[#1a1a1a] text-base group-hover:text-[#0e2a1e] transition-colors">
                  {city}
                </span>
                {openCity === city ? (
                  <ChevronUp size={18} className="text-gray-500" />
                ) : (
                  <ChevronDown size={18} className="text-gray-400" />
                )}
              </button>

              {/* Accordion body */}
              {openCity === city && (
                <div className="flex flex-wrap gap-4 pb-4">
                  {cityServices.map((service) => (
                    <a
                      key={service}
                      href="#"
                      className="font-['DM_Sans'] text-sm text-gray-500 hover:text-[#0e2a1e] underline underline-offset-4 transition-colors"
                    >
                      {service}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
