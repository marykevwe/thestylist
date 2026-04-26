import { useEffect, useState } from "react";
import api from "../../api/axios";
import { formatCurrency, formatDateTime } from "../../utils/format";

export default function ProBookingsPage() {
  const [bookings, setBookings] = useState([]);

  const load = () => api.get("/bookings/professional").then((res) => setBookings(res.data.bookings || []));

  useEffect(() => { load().catch(() => {}); }, []);

  const updateStatus = async (id, status) => {
    await api.put(`/bookings/${id}/status`, { status });
    load();
  };

  return (
    <div>
      <h1 className="text-3xl font-black">Professional bookings</h1>
      <div className="mt-6 space-y-4">
        {bookings.map((item) => (
          <div key={item._id} className="card p-6">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <h2 className="text-xl font-bold">{item.client?.name}</h2>
                <p className="mt-1 text-sm text-slate-500">{item.serviceSnapshot?.name}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {['confirmed', 'completed', 'cancelled'].map((status) => (
                  <button key={status} onClick={() => updateStatus(item._id, status)} className="rounded-xl border border-slate-300 px-3 py-2 text-sm font-semibold capitalize text-slate-700">{status}</button>
                ))}
              </div>
            </div>
            <div className="mt-4 grid gap-3 md:grid-cols-3 text-sm text-slate-600">
              <p><span className="font-semibold text-slate-900">Date:</span> {formatDateTime(item.appointmentDate)}</p>
              <p><span className="font-semibold text-slate-900">Amount:</span> {formatCurrency(item.serviceSnapshot?.price)}</p>
              <p><span className="font-semibold text-slate-900">Status:</span> <span className="capitalize">{item.status}</span></p>
            </div>
          </div>
        ))}
        {!bookings.length && <div className="card p-6 text-slate-500">No bookings yet.</div>}
      </div>
    </div>
  );
}
