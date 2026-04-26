import { Link } from "react-router-dom";
import { MapPin, Star } from "lucide-react";
import { formatCurrency } from "../../utils/format";

export default function ProfessionalCard({ professional }) {
  return (
    <div className="card overflow-hidden">
      <div className="h-52 bg-gradient-to-br from-brand-100 via-pink-50 to-purple-50" />
      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-xl font-bold text-slate-900">{professional.businessName}</h3>
            <p className="mt-1 text-sm text-slate-500">{professional.user?.name}</p>
          </div>
          <div className="flex items-center gap-1 rounded-full bg-amber-50 px-3 py-1 text-sm font-semibold text-amber-700">
            <Star size={14} fill="currentColor" /> {professional.rating?.toFixed?.(1) || "5.0"}
          </div>
        </div>
        <p className="mt-4 line-clamp-3 text-sm leading-6 text-slate-600">{professional.bio}</p>
        <div className="mt-4 flex items-center gap-2 text-sm text-slate-500"><MapPin size={15} /> {professional.location}</div>
        <p className="mt-4 text-sm text-slate-600">Starting from <span className="font-semibold text-slate-900">{formatCurrency(professional.startingPrice || 0)}</span></p>
        <Link to={`/professionals/${professional._id}`} className="btn-primary mt-5 w-full">View profile</Link>
      </div>
    </div>
  );
}
