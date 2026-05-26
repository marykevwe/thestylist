// public/sections/AppSection.jsx

export default function AppSection() {
  return (
    <section className="bg-gradient-to-br from-[#0a1f15] via-[#0e2a1e] to-[#0a1f15] px-4 py-16 md:py-20 text-center">
      {/* Hero image */}
      <div className="max-w-xs mx-auto mb-8 rounded-2xl overflow-hidden shadow-2xl">
        <img
          src="https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&q=80"
          alt="Beautiful nail art"
          className="w-full h-52 object-cover"
        />
      </div>

      <h2 className="font-['Playfair_Display'] text-white text-3xl md:text-4xl font-black mb-3">
        Beauty Done Right
      </h2>
      <p className="font-['DM_Sans'] text-[#a8d5b5] text-sm md:text-base mb-8 max-w-md mx-auto leading-relaxed">
        Search the largest network of pros. Book and manage your next appointment through the HairHobby app.
      </p>

      {/* App store buttons */}
      <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
        <button className="flex items-center gap-3 bg-white text-[#0e2a1e] rounded-xl px-5 py-3 font-['DM_Sans'] hover:bg-gray-100 transition-colors w-44">
          <span className="text-2xl">🍎</span>
          <div className="text-left">
            <p className="text-[10px] text-gray-500 leading-none">Download on the</p>
            <p className="text-sm font-bold leading-tight">App Store</p>
          </div>
        </button>
        <button className="flex items-center gap-3 bg-white text-[#0e2a1e] rounded-xl px-5 py-3 font-['DM_Sans'] hover:bg-gray-100 transition-colors w-44">
          <span className="text-2xl">▶️</span>
          <div className="text-left">
            <p className="text-[10px] text-gray-500 leading-none">GET IT ON</p>
            <p className="text-sm font-bold leading-tight">Google Play</p>
          </div>
        </button>
      </div>
    </section>
  );
}
