// public/sections/AppSection.jsx
import { Smartphone } from "lucide-react";

export default function AppSection() {
  return (
    <section className="bg-brand-900 px-4 py-16 md:py-20 text-center relative overflow-hidden">

      {/* Decorative circles */}
      <div className="absolute -top-16 -left-16 w-64 h-64 bg-brand-800 rounded-full opacity-40" />
      <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-brand-800 rounded-full opacity-30" />

      {/* App mockup image */}
      <div className="relative z-10 max-w-xs mx-auto mb-8 rounded-2xl overflow-hidden ring-4 ring-brand-700 ring-offset-4 ring-offset-brand-900">
        <img
          src="/images/app-preview.jpg"
          alt="HairHobby app preview"
          className="w-full h-52 object-cover"
        />
      </div>

      {/* Badge */}
      <div className="relative z-10 inline-flex items-center gap-2 bg-brand-700 text-brand-100 text-xs font-semibold px-4 py-1.5 rounded-full mb-4 font-dmsans">
        <Smartphone size={13} />
        Available on iOS & Android
      </div>

      <h2 className="relative z-10 font-playfair text-white text-3xl md:text-4xl font-black mb-3">
        Beauty Done Right
      </h2>
      <p className="relative z-10 font-dmsans text-brand-200 text-sm md:text-base mb-8 max-w-md mx-auto leading-relaxed">
        Search the largest network of pros. Book and manage your next appointment through the HairHobby app.
      </p>

      {/* App store buttons */}
     {/* App store buttons */}
<div className="relative z-10 flex flex-col sm:flex-row gap-3 justify-center items-center">
  <button className="flex items-center gap-3 bg-white text-brand-900 rounded-xl px-5 py-3 font-dmsans hover:bg-brand-50 transition-colors w-44">
    {/* Apple logo SVG */}
    <svg viewBox="0 0 24 24" className="w-7 h-7 fill-brand-900" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
    </svg>
    <div className="text-left">
      <p className="text-[10px] text-brand-400 leading-none">Download on the</p>
      <p className="text-sm font-bold leading-tight">App Store</p>
    </div>
  </button>

  <button className="flex items-center gap-3 bg-[#c8f250] text-[#0e2a1e] rounded-xl px-5 py-3 font-dmsans hover:bg-[#b5df30] transition-colors w-44">
    {/* Google Play logo SVG */}
    <svg viewBox="0 0 24 24" className="w-7 h-7" xmlns="http://www.w3.org/2000/svg">
      <path fill="#EA4335" d="M3.18 23.76c.33.18.7.24 1.08.18L13.93 12 10.83 8.9 3.18 23.76z"/>
      <path fill="#FBBC05" d="M20.54 10.27 17.3 8.43l-3.37 3.57 3.37 3.57 3.26-1.85a1.83 1.83 0 0 0 0-3.45z"/>
      <path fill="#4285F4" d="M4.26.06a1.83 1.83 0 0 0-1.08.18L10.83 12l3.1-3.1L4.26.06z"/>
      <path fill="#34A853" d="M3.18.24 10.83 12l3.1-3.1L4.26.06A1.83 1.83 0 0 0 3.18.24z"/>
    </svg>
    <div className="text-left">
      <p className="text-[10px] text-[#0e2a1e]/60 leading-none">GET IT ON</p>
      <p className="text-sm font-bold leading-tight">Google Play</p>
    </div>
  </button>
</div>

    </section>
  );
}