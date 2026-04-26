import { useEffect, useState } from "react";
import { getMyBookings } from "../../api/marketplaceApi";
import { formatCurrency, formatDateTime } from "../../utils/format";

export default function ClientBookingsPage() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    getMyBookings().then((res) => setBookings(res.data.bookings || [])).catch(() => {});
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-black">My bookings</h1>
      <div className="mt-6 space-y-4">
        {bookings.map((item) => (
          <div key={item._id} className="card p-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-xl font-bold">{item.professional?.businessName}</h2>
                <p className="mt-1 text-sm text-slate-500">{item.serviceSnapshot?.name}</p>
              </div>
              <div className="rounded-full bg-brand-50 px-4 py-2 text-sm font-semibold capitalize text-brand-700">{item.status}</div>
            </div>
            <div className="mt-4 grid gap-3 sm:grid-cols-3 text-sm text-slate-600">
              <p><span className="font-semibold text-slate-900">Date:</span> {formatDateTime(item.appointmentDate)}</p>
              <p><span className="font-semibold text-slate-900">Duration:</span> {item.serviceSnapshot?.duration} mins</p>
              <p><span className="font-semibold text-slate-900">Price:</span> {formatCurrency(item.serviceSnapshot?.price)}</p>
            </div>
          </div>
        ))}
        {!bookings.length && <div className="card p-6 text-slate-500">No bookings found.</div>}
      </div>
    </div>
  );
}
