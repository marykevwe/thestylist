import { useEffect, useState } from "react";
import StatCard from "../../components/shared/StatCard";
import { getProDashboard } from "../../api/marketplaceApi";
import { formatCurrency } from "../../utils/format";

export default function ProDashboard() {
  const [data, setData] = useState({ totalBookings: 0, totalRevenue: 0, totalServices: 0, recentBookings: [] });

  useEffect(() => {
    getProDashboard().then((res) => setData(res.data)).catch(() => {});
  }, []);

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-black">Professional dashboard</h1>
      <div className="grid gap-5 md:grid-cols-3">
        <StatCard label="Bookings" value={data.totalBookings} />
        <StatCard label="Revenue" value={formatCurrency(data.totalRevenue)} />
        <StatCard label="Services" value={data.totalServices} />
      </div>
      <div className="card p-6">
        <h2 className="text-xl font-bold">Recent bookings</h2>
        <div className="mt-4 space-y-4">
          {data.recentBookings?.map((item) => (
            <div key={item._id} className="rounded-2xl border border-slate-200 p-4">
              <h3 className="font-semibold">{item.client?.name}</h3>
              <p className="text-sm text-slate-500">{item.serviceSnapshot?.name}</p>
              <p className="mt-2 text-sm capitalize text-brand-700">{item.status}</p>
            </div>
          ))}
          {!data.recentBookings?.length && <p className="text-slate-500">No recent bookings.</p>}
        </div>
      </div>
    </div>
  );
}
