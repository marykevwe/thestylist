// public/sections/BusinessBanner.jsx

export default function BusinessBanner() {
  return (
    <section className="bg-[#faf9f7] px-4 py-12 md:py-16">
      <div className="max-w-5xl mx-auto">
        {/* Banner card */}
        <div className="bg-gradient-to-br from-[#e8f5ff] to-[#d0e8ff] rounded-3xl px-6 py-8 md:px-10 md:py-10 flex flex-col sm:flex-row items-center gap-6 overflow-hidden relative">
          {/* Text */}
          <div className="flex-1">
            <h2 className="font-['Playfair_Display'] text-[#0e2a1e] text-2xl md:text-3xl font-bold mb-3 leading-snug">
              Set up your business <br className="hidden md:block" />
              on HairHobby
            </h2>
            <p className="font-['DM_Sans'] text-gray-600 text-sm md:text-base mb-6 max-w-sm">
              Join the largest network of clients searching for top hair professionals.
            </p>
            <button className="bg-[#0e2a1e] text-white font-semibold text-sm px-6 py-3 rounded-full hover:bg-[#1a4a32] transition-colors font-['DM_Sans']">
              Learn More
            </button>
          </div>

          {/* Image */}
          <div className="shrink-0">
            <img
              src="https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=300&q=80"
              alt="Professional stylist"
              className="w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 rounded-full object-cover shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
