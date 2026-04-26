import { Link } from "react-router-dom";
import { ArrowRight, CalendarCheck2, CreditCard, Search, ShieldCheck, Sparkles, Store } from "lucide-react";
import SectionTitle from "../../components/shared/SectionTitle";
import ProfessionalCard from "../../components/shared/ProfessionalCard";
import { useEffect, useState } from "react";
import { getProfessionals } from "../../api/marketplaceApi";

const stats = [
  { label: "Professionals ready to list", value: "500+" },
  { label: "Service categories", value: "20+" },
  { label: "Client-friendly booking flow", value: "24/7" },
];

export default function HomePage() {
  const [pros, setPros] = useState([]);

  useEffect(() => {
    getProfessionals({ limit: 3 }).then((res) => setPros(res.data.professionals || [])).catch(() => {});
  }, []);

  return (
    <>
      <section className="overflow-hidden py-12 sm:py-16 lg:py-20">
        <div className="page-shell grid items-center gap-10 lg:grid-cols-[1.08fr_0.92fr]">
          <div>
            <span className="pill">Premium beauty marketplace</span>
            <h1 className="mt-6 max-w-3xl text-5xl font-black leading-[1.02] tracking-tight text-slate-900 sm:text-6xl">
              Book your next hair, beauty, nail, or grooming appointment with confidence.
            </h1>
            <p className="section-copy">
              TheStylist.com is built for modern beauty businesses and everyday clients. Discover verified professionals, browse services and prices, choose a time, and manage everything from one sleek platform.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link to="/professionals" className="btn-primary">Explore professionals <ArrowRight size={16} /></Link>
              <Link to="/for-pros" className="btn-secondary">List your business</Link>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {stats.map((item) => (
                <div key={item.label} className="glass p-4">
                  <div className="text-2xl font-black text-slate-900">{item.value}</div>
                  <p className="mt-2 text-sm leading-6 text-slate-500">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="card overflow-hidden p-4 sm:p-5">
            <div className="rounded-[24px] bg-gradient-to-br from-slate-950 via-slate-900 to-brand-700 p-6 text-white sm:p-7">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.32em] text-white/70">Client booking card</p>
                  <h2 className="mt-3 text-2xl font-bold">Glow House Studio</h2>
                </div>
                <div className="rounded-2xl bg-white/10 px-3 py-2 text-sm font-semibold">4.9 ★</div>
              </div>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  ["Knotless braids", "₦25,000"],
                  ["Natural glam makeup", "₦18,000"],
                  ["Frontal installation", "₦15,000"],
                  ["Gel manicure", "₦12,000"],
                ].map(([service, price]) => (
                  <div key={service} className="rounded-3xl bg-white/10 p-4">
                    <p className="text-sm text-white/70">{service}</p>
                    <p className="mt-2 text-xl font-bold">{price}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-3xl bg-white p-4 text-slate-900">
                <div className="flex items-center justify-between text-sm font-semibold text-slate-500">
                  <span>Next available</span>
                  <span>Today</span>
                </div>
                <div className="mt-4 grid grid-cols-3 gap-3 text-center">
                  {['10:00 AM', '12:30 PM', '3:00 PM'].map((slot) => (
                    <div key={slot} className="rounded-2xl border border-slate-200 px-2 py-3 text-sm font-semibold">{slot}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="page-shell">
          <SectionTitle eyebrow="Why users choose TheStylist" title="Built for smooth discovery, booking, and business growth." text="This MVP already gives you the right building blocks for a marketplace-style beauty platform under your own brand." center />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {[
              { icon: Search, title: "Search & discover", text: "Find beauty professionals by service, location, business name, and specialty." },
              { icon: CalendarCheck2, title: "Booking flow", text: "Clients view profiles, choose services, pick times, and confirm appointments." },
              { icon: CreditCard, title: "Ready for payments", text: "You can plug in Paystack, Flutterwave, or Stripe as the next step." },
              { icon: ShieldCheck, title: "Business control", text: "Professionals manage services, clients, appointments, and reviews in one place." },
            ].map(({ icon: Icon, title, text }) => (
              <div key={title} className="card p-7">
                <div className="inline-flex rounded-2xl bg-brand-100 p-3 text-brand-700"><Icon /></div>
                <h3 className="mt-5 text-xl font-bold">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="page-shell grid gap-6 lg:grid-cols-3">
          {[
            { icon: Sparkles, title: "For clients", text: "Search, compare, save time, and book online without the back-and-forth messaging." },
            { icon: Store, title: "For professionals", text: "Showcase services, grow visibility, collect reviews, and organize appointments better." },
            { icon: CalendarCheck2, title: "For your business", text: "Run this as a beauty marketplace with client, pro, and admin dashboards already scaffolded." },
          ].map(({ icon: Icon, title, text }) => (
            <div key={title} className="glass p-7">
              <div className="inline-flex rounded-2xl bg-white p-3 text-brand-700 shadow-sm"><Icon /></div>
              <h3 className="mt-5 text-xl font-bold text-slate-900">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white/70 py-16 lg:py-20">
        <div className="page-shell">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <SectionTitle eyebrow="Featured professionals" title="Profiles styled for a modern marketplace." text="These cards are powered by your backend and can later use real images, availability, and verified business data." />
            <Link to="/professionals" className="btn-secondary">See all professionals</Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {pros.map((pro) => <ProfessionalCard key={pro._id} professional={pro} />)}
          </div>
        </div>
      </section>
    </>
  );
}
