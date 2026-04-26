import { useEffect, useState } from "react";
import api from "../../api/axios";
import { formatDateTime } from "../../utils/format";

export default function AdminBookingsPage() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    api.get("/admin/bookings").then((res) => setBookings(res.data.bookings || [])).catch(() => {});
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-black">Bookings</h1>
      <div className="mt-6 space-y-4">
        {bookings.map((item) => (
          <div key={item._id} className="card p-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-xl font-bold">{item.client?.name} → {item.professional?.businessName}</h2>
                <p className="mt-1 text-sm text-slate-500">{item.serviceSnapshot?.name}</p>
              </div>
              <div className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold capitalize text-slate-700">{item.status}</div>
            </div>
            <p className="mt-4 text-sm text-slate-600">{formatDateTime(item.appointmentDate)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
