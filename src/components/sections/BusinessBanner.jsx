// public/sections/BusinessBanner.jsx

export default function BusinessBanner() {
  return (
    <section className="bg-brand-50 px-4 py-12 md:py-16">
      <div className="max-w-5xl mx-auto">
        <div className="bg-brand-700 rounded-3xl px-6 py-8 md:px-10 md:py-10 flex flex-col sm:flex-row items-center gap-6 overflow-hidden relative">

          {/* Decorative circle */}
          <div className="absolute -top-10 -right-10 w-48 h-48 bg-brand-600 rounded-full opacity-40" />
          <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-brand-800 rounded-full opacity-30" />

          {/* Text */}
          <div className="flex-1 relative z-10">
            <span className="inline-block bg-[#c8f250] text-[#0e2a1e] text-xs font-bold px-3 py-1 rounded-full mb-3 font-dmsans">
              For Professionals
            </span>
            <h2 className="font-playfair text-white text-2xl md:text-3xl font-bold mb-3 leading-snug">
              Set up your business <br className="hidden md:block" />
              on HairHobby
            </h2>
            <p className="font-dmsans text-brand-200 text-sm md:text-base mb-6 max-w-sm">
              Join the largest network of clients searching for top hair professionals.
            </p>
            <button className="bg-[#c8f250] text-[#0e2a1e] font-bold text-sm px-6 py-3 rounded-full hover:bg-[#b5df30] transition-colors font-dmsans">
              Learn More
            </button>
          </div>

          {/* Image */}
          <div className="shrink-0 relative z-10">
            <div className="w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 rounded-full overflow-hidden ring-4 ring-brand-500 ring-offset-2 ring-offset-brand-700">
              <img
                src="/images/pro-banner.jpg"
                alt="Professional stylist"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}