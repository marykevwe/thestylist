export default function AdminDashboard() {
  const stats = [
    { label: "Users", value: 120 },
    { label: "Professionals", value: 34 },
    { label: "Bookings", value: 89 },
    { label: "Revenue", value: "₦320K" },
  ];

  return (
    <div className="space-y-6">

      <div>
        <h1 className="text-2xl font-black">Dashboard</h1>
        <p className="text-gray-500 text-sm">Overview of your platform</p>
      </div>

      {/* CARDS */}
      <div className="grid grid-cols-2 gap-3">
        {stats.map((s) => (
          <div key={s.label} className="bg-white p-4 rounded-xl shadow">
            <p className="text-gray-500 text-xs">{s.label}</p>
            <p className="text-xl font-bold">{s.value}</p>
          </div>
        ))}
      </div>

      {/* QUICK ACTIONS */}
      <div className="bg-white p-4 rounded-xl shadow space-y-2">
        <h2 className="font-bold">Quick Actions</h2>

        <button className="w-full bg-black text-white py-2 rounded-lg">
          Add Professional
        </button>

        <button className="w-full border py-2 rounded-lg">
          Create Admin
        </button>
      </div>
    </div>
  );
}