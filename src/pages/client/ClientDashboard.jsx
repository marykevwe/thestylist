import { useEffect, useState } from "react";
import StatCard from "../../components/shared/StatCard";
import { getMyBookings } from "../../api/marketplaceApi";

export default function ClientDashboard() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    getMyBookings().then((res) => setBookings(res.data.bookings || [])).catch(() => {});
  }, []);

  const upcoming = bookings.filter((b) => ["pending", "confirmed"].includes(b.status)).length;
  const completed = bookings.filter((b) => b.status === "completed").length;

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-black">Client dashboard</h1>
      <div className="grid gap-5 md:grid-cols-3">
        <StatCard label="Total bookings" value={bookings.length} />
        <StatCard label="Upcoming" value={upcoming} />
        <StatCard label="Completed" value={completed} />
      </div>
      <div className="card p-6">
        <h2 className="text-xl font-bold">Recent bookings</h2>
        <div className="mt-4 space-y-4">
          {bookings.slice(0, 5).map((item) => (
            <div key={item._id} className="rounded-2xl border border-slate-200 p-4">
              <h3 className="font-semibold">{item.professional?.businessName}</h3>
              <p className="mt-1 text-sm text-slate-500">{item.serviceSnapshot?.name}</p>
              <p className="mt-2 text-sm capitalize text-brand-700">{item.status}</p>
            </div>
          ))}
          {!bookings.length && <p className="text-slate-500">No bookings yet.</p>}
        </div>
      </div>
    </div>
  );
}
