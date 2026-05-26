// public/HomePage.jsx
// ─────────────────────────────────────────────
// This is your public home page.
// It imports each section from ./sections/
// and the layout components from ../layout/
// ─────────────────────────────────────────────

import HeroSection     from "../../components/sections/HeroSection";
import CategorySection from "../../components/sections/CategorySection";
import ProsSection     from "../../components/sections/ProsSection";
import BusinessBanner  from "../../components/sections/BusinessBanner";
import FeaturesSection from "../../components/sections/FeaturesSection";
import AppSection      from "../../components/sections/AppSection";
import ReviewsSection  from "../../components/sections/ReviewsSection";
import CitiesSection   from "../../components/sections/CitiesSection";


export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
     

     
      <main className="flex-1">
        <HeroSection />
        <CategorySection />
        <ProsSection />
        <BusinessBanner />
        <FeaturesSection />
        <AppSection />
        <ReviewsSection />
        <CitiesSection />
      </main>

      {/* ── Footer ── */}
   
    </div>
  );
}
