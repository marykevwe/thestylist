import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { cities, cityServices } from "../../data/homeData";

export default function CitiesSection() {
  const [openCity, setOpenCity] = useState(cities[0]);
  const toggle = (city) => setOpenCity(openCity === city ? null : city);

  return (
    <section className="bg-brand-50 px-4 py-12 md:py-16">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-playfair text-brand-900 text-2xl md:text-3xl font-bold mb-2">
          Browse popular hair services
        </h2>

        <p className="font-dmsans text-brand-400 text-sm mb-8">
          Explore top-rated pros by city and service
        </p>

        <div className="divide-y divide-brand-100 border-t border-brand-100">
          {cities.map((city) => {
            const isOpen = openCity === city;

            return (
              <div key={city}>
                <button
                  onClick={() => toggle(city)}
                  className={`w-full flex items-center justify-between py-4 text-left group transition-colors ${
                    isOpen ? "text-brand-700" : "text-brand-900"
                  }`}
                >
                  <span className="font-dmsans font-semibold text-base group-hover:text-brand-700 transition-colors">
                    {city}
                  </span>

                  {isOpen ? (
                    <ChevronUp size={18} className="text-brand-500" />
                  ) : (
                    <ChevronDown size={18} className="text-brand-300" />
                  )}
                </button>

                {isOpen && (
                  <div className="flex flex-wrap gap-3 pb-5">
                    {cityServices.map((service) => {
                      const label = `${service} in ${city}`;

                      return (
                        <a
                          key={`${city}-${service}`}
                          href="#"
                          className="font-dmsans text-sm text-brand-600 hover:text-brand-900 underline underline-offset-4 transition-colors"
                        >
                          {label}
                        </a>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}