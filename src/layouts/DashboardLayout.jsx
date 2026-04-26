import { Link, NavLink, Outlet } from "react-router-dom";
import { LayoutDashboard, CalendarDays, BriefcaseBusiness, Shield, LogOut, Users, Star } from "lucide-react";
import { useAuth } from "../context/AuthContext";

const roleLinks = {
  client: [
    { to: "/client", label: "Overview", icon: LayoutDashboard },
    { to: "/client/bookings", label: "My Bookings", icon: CalendarDays },
    { to: "/client/reviews", label: "Reviews", icon: Star },
  ],
  professional: [
    { to: "/pro", label: "Overview", icon: LayoutDashboard },
    { to: "/pro/services", label: "Services", icon: BriefcaseBusiness },
    { to: "/pro/bookings", label: "Bookings", icon: CalendarDays },
    { to: "/pro/clients", label: "Clients", icon: Users },
  ],
  admin: [
    { to: "/admin", label: "Overview", icon: Shield },
    { to: "/admin/users", label: "Users", icon: Users },
    { to: "/admin/bookings", label: "Bookings", icon: CalendarDays },
  ],
};

export default function DashboardLayout() {
  const { user, logout } = useAuth();
  const links = roleLinks[user?.role] || [];

  return (
    <div className="min-h-screen bg-slate-100">
      <div className="grid min-h-screen lg:grid-cols-[280px_1fr]">
        <aside className="border-r border-slate-200 bg-white p-6">
          <Link to="/" className="text-2xl font-black text-slate-900">TheStylist.com</Link>
          <div className="mt-8 rounded-3xl bg-slate-50 p-4">
            <p className="text-xs uppercase tracking-[0.25em] text-slate-500">Logged in as</p>
            <h2 className="mt-2 text-lg font-bold text-slate-900">{user?.name}</h2>
            <p className="text-sm capitalize text-brand-700">{user?.role}</p>
          </div>
          <nav className="mt-8 flex flex-col gap-2">
            {links.map(({ to, label, icon: Icon }) => (
              <NavLink
                key={to}
                to={to}
                end={to === `/${user?.role === "professional" ? "pro" : user?.role}`}
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold ${isActive ? "bg-brand-600 text-white" : "text-slate-600 hover:bg-slate-100"}`
                }
              >
                <Icon size={18} /> {label}
              </NavLink>
            ))}
          </nav>
          <button onClick={logout} className="btn-secondary mt-8 w-full"><LogOut size={16} /> Logout</button>
        </aside>
        <section className="p-4 sm:p-6 lg:p-8">
          <Outlet />
        </section>
      </div>
    </div>
  );
}
