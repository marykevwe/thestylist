import { useEffect, useState } from "react";
import StatCard from "../../components/shared/StatCard";
import { getAdminDashboard } from "../../api/marketplaceApi";

export default function AdminDashboard() {
  const [data, setData] = useState({ totalUsers: 0, totalProfessionals: 0, totalBookings: 0, totalRevenue: 0 });

  useEffect(() => {
    getAdminDashboard().then((res) => setData(res.data)).catch(() => {});
  }, []);

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-black">Admin dashboard</h1>
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        <StatCard label="Users" value={data.totalUsers} />
        <StatCard label="Professionals" value={data.totalProfessionals} />
        <StatCard label="Bookings" value={data.totalBookings} />
        <StatCard label="Revenue (NGN)" value={data.totalRevenue} />
      </div>
    </div>
  );
}
