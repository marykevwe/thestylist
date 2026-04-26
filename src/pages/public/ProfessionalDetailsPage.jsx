import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { CalendarDays, Clock3, MapPin, MessageSquare, ShieldCheck, Star } from "lucide-react";
import { getProfessionalById, createBooking, createReview } from "../../api/marketplaceApi";
import { formatCurrency, formatDateTime } from "../../utils/format";
import { useAuth } from "../../context/AuthContext";

export default function ProfessionalDetailsPage() {
  const { id } = useParams();
  const { user } = useAuth();
  const [professional, setProfessional] = useState(null);
  const [booking, setBooking] = useState({ serviceId: "", appointmentDate: "" });
  const [review, setReview] = useState({ rating: 5, comment: "" });
  const [message, setMessage] = useState("");

  useEffect(() => {
    getProfessionalById(id).then((res) => {
      setProfessional(res.data.professional);
      if (res.data.professional.services?.length) {
        setBooking((p) => ({ ...p, serviceId: res.data.professional.services[0]._id }));
      }
    });
  }, [id]);

  const selectedService = useMemo(
    () => professional?.services?.find((service) => service._id === booking.serviceId),
    [professional, booking.serviceId]
  );

  if (!professional) return <div className="page-shell py-16">Loading profile...</div>;

  const handleBook = async (e) => {
    e.preventDefault();
    try {
      const res = await createBooking({ professionalId: professional._id, ...booking });
      setMessage(res.data.message || "Booking created successfully");
    } catch (error) {
      setMessage(error?.response?.data?.message || "Booking failed");
    }
  };

  const handleReview = async (e) => {
    e.preventDefault();
    try {
      const res = await createReview({ professionalId: professional._id, ...review });
      setMessage(res.data.message || "Review submitted");
      setReview({ rating: 5, comment: "" });
    } catch (error) {
      setMessage(error?.response?.data?.message || "Review failed");
    }
  };

  return (
    <section className="py-12 sm:py-16">
      <div className="page-shell grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <div className="card overflow-hidden">
            <div className="h-72 bg-gradient-to-br from-slate-950 via-brand-700 to-fuchsia-400" />
            <div className="p-6 sm:p-8">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <div className="pill">Verified business profile</div>
                  <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-900">{professional.businessName}</h1>
                  <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-slate-500">
                    <span className="inline-flex items-center gap-2"><MapPin size={16} /> {professional.location}</span>
                    <span className="inline-flex items-center gap-2"><Star size={16} className="text-amber-500" /> {professional.rating?.toFixed?.(1) || "5.0"} rating</span>
                  </div>
                </div>
                <div className="rounded-3xl bg-slate-50 px-5 py-4 text-right">
                  <p className="text-sm text-slate-500">Starts from</p>
                  <p className="mt-1 text-2xl font-black text-slate-900">{formatCurrency(professional.startingPrice || 0)}</p>
                </div>
              </div>
              <p className="mt-6 max-w-3xl leading-8 text-slate-600">{professional.bio}</p>
            </div>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              [CalendarDays, 'Easy booking', 'Clients can pick a service and time slot online.'],
              [ShieldCheck, 'Trusted flow', 'Designed for smoother scheduling and profile browsing.'],
              [MessageSquare, 'Review system', 'Clients can leave ratings and written feedback.'],
            ].map(([Icon, title, text]) => (
              <div key={title} className="glass p-5">
                <div className="inline-flex rounded-2xl bg-white p-3 text-brand-700 shadow-sm"><Icon size={18} /></div>
                <h3 className="mt-4 font-bold text-slate-900">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 card p-6">
            <h2 className="text-2xl font-bold">Services</h2>
            <div className="mt-5 space-y-4">
              {professional.services?.map((service) => (
                <div key={service._id} className="flex flex-col justify-between gap-4 rounded-3xl border border-slate-200 p-5 sm:flex-row sm:items-center">
                  <div>
                    <h3 className="font-bold text-slate-900">{service.name}</h3>
                    <div className="mt-2 inline-flex items-center gap-2 text-sm text-slate-500"><Clock3 size={15} /> {service.duration} mins</div>
                  </div>
                  <div className="text-right font-semibold text-slate-900">{formatCurrency(service.price)}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 card p-6">
            <h2 className="text-2xl font-bold">Client reviews</h2>
            <div className="mt-5 space-y-4">
              {professional.reviews?.length ? professional.reviews.map((item) => (
                <div key={item._id} className="rounded-3xl border border-slate-200 p-5">
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="font-semibold">{item.client?.name || "Client"}</h3>
                    <span className="rounded-full bg-amber-50 px-3 py-1 text-sm font-semibold text-amber-700">{item.rating}/5</span>
                  </div>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{item.comment}</p>
                  <p className="mt-2 text-xs text-slate-400">{formatDateTime(item.createdAt)}</p>
                </div>
              )) : <p className="text-slate-500">No reviews yet.</p>}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="card p-6">
            <h2 className="text-xl font-bold">Book appointment</h2>
            <form className="mt-5 space-y-4" onSubmit={handleBook}>
              <div>
                <label className="label">Select service</label>
                <select className="input" value={booking.serviceId} onChange={(e) => setBooking((p) => ({ ...p, serviceId: e.target.value }))}>
                  {professional.services?.map((service) => <option key={service._id} value={service._id}>{service.name}</option>)}
                </select>
              </div>
              <div>
                <label className="label">Appointment date & time</label>
                <input type="datetime-local" className="input" value={booking.appointmentDate} onChange={(e) => setBooking((p) => ({ ...p, appointmentDate: e.target.value }))} />
              </div>
              {selectedService && (
                <div className="rounded-3xl bg-slate-50 p-4 text-sm text-slate-600">
                  <div className="flex items-center justify-between gap-3">
                    <span>{selectedService.name}</span>
                    <span className="font-semibold text-slate-900">{formatCurrency(selectedService.price)}</span>
                  </div>
                </div>
              )}
              <button className="btn-primary w-full" disabled={!user}>Book now</button>
              {!user && <p className="text-sm text-slate-500">Login as a client to book.</p>}
            </form>
          </div>

          <div className="card p-6">
            <h2 className="text-xl font-bold">Leave a review</h2>
            <form className="mt-5 space-y-4" onSubmit={handleReview}>
              <div>
                <label className="label">Rating</label>
                <select className="input" value={review.rating} onChange={(e) => setReview((p) => ({ ...p, rating: Number(e.target.value) }))}>
                  {[5,4,3,2,1].map((r) => <option key={r} value={r}>{r}</option>)}
                </select>
              </div>
              <div>
                <label className="label">Comment</label>
                <textarea className="input min-h-28" value={review.comment} onChange={(e) => setReview((p) => ({ ...p, comment: e.target.value }))} />
              </div>
              <button className="btn-secondary w-full" disabled={!user}>Submit review</button>
            </form>
          </div>

          {message && <div className="rounded-3xl bg-brand-50 p-4 text-sm text-brand-700">{message}</div>}
        </div>
      </div>
    </section>
  );
}
