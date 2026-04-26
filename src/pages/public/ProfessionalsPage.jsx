import { useEffect, useMemo, useState } from "react";
import ProfessionalCard from "../../components/shared/ProfessionalCard";
import SectionTitle from "../../components/shared/SectionTitle";
import { getProfessionals } from "../../api/marketplaceApi";
import { Filter, Search } from "lucide-react";

const categories = ["All", "Braids", "Makeup", "Barbing", "Nails", "Lashes", "Spa"];

export default function ProfessionalsPage() {
  const [pros, setPros] = useState([]);
  const [filters, setFilters] = useState({ search: "", location: "", category: "All" });

  useEffect(() => {
    getProfessionals({ search: filters.search, location: filters.location })
      .then((res) => setPros(res.data.professionals || []))
      .catch(() => {});
  }, [filters.search, filters.location]);

  const filteredPros = useMemo(() => {
    if (filters.category === "All") return pros;
    return pros.filter((pro) => `${pro.businessName} ${pro.bio}`.toLowerCase().includes(filters.category.toLowerCase()));
  }, [pros, filters.category]);

  return (
    <section className="py-12 sm:py-16">
      <div className="page-shell">
        <div className="card overflow-hidden p-6 sm:p-8">
          <SectionTitle eyebrow="Marketplace" title="Find beauty professionals near you" text="Search by business name, location, or service keyword, then open a profile to book and review." />
          <div className="mt-8 grid gap-4 xl:grid-cols-[1.2fr_0.9fr_0.7fr_auto]">
            <div className="relative">
              <Search className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input className="input pl-11" placeholder="Search for braids, makeup, nails, barber..." value={filters.search} onChange={(e) => setFilters((p) => ({ ...p, search: e.target.value }))} />
            </div>
            <input className="input" placeholder="Enter location" value={filters.location} onChange={(e) => setFilters((p) => ({ ...p, location: e.target.value }))} />
            <div className="flex items-center gap-2 overflow-auto rounded-2xl border border-slate-200 bg-white px-3 py-2 xl:px-2">
              <Filter size={16} className="shrink-0 text-slate-400" />
              <select className="w-full bg-transparent text-sm font-medium text-slate-700 outline-none" value={filters.category} onChange={(e) => setFilters((p) => ({ ...p, category: e.target.value }))}>
                {categories.map((item) => <option key={item}>{item}</option>)}
              </select>
            </div>
            <button className="btn-primary">Search</button>
          </div>
          <div className="mt-5 flex flex-wrap gap-3">
            {categories.map((item) => (
              <button
                key={item}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${filters.category === item ? "bg-brand-600 text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"}`}
                onClick={() => setFilters((p) => ({ ...p, category: item }))}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8 flex items-center justify-between gap-4">
          <p className="text-sm text-slate-500">Showing <span className="font-semibold text-slate-900">{filteredPros.length}</span> professionals</p>
          <div className="rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-500 shadow-sm">Marketplace demo data</div>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredPros.map((pro) => <ProfessionalCard key={pro._id} professional={pro} />)}
        </div>
      </div>
    </section>
  );
}
