import { CalendarDays, Menu, Scissors, Sparkles, X } from "lucide-react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const links = [
  { label: "Home", to: "/" },
  { label: "Explore", to: "/professionals" },
  { label: "For Pros", to: "/for-pros" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { user, logout } = useAuth();

  const dashboardRoute = user?.role === "admin" ? "/admin" : user?.role === "professional" ? "/pro" : "/client";

  return (
    <header className="sticky top-0 z-40 border-b border-white/60 bg-white/75 backdrop-blur-xl">
      <div className="page-shell flex items-center justify-between gap-4 py-4">
        <Link to="/" className="flex items-center gap-3 text-xl font-black tracking-tight text-slate-900">
          <span className="rounded-2xl bg-brand-600 p-2.5 text-white shadow-lg shadow-brand-200">
            <Scissors size={18} />
          </span>
          <div>
            <div>TheStylist.com</div>
            <div className="text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-400">Book beauty with ease</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-2 rounded-full border border-slate-200/70 bg-white/80 p-2 md:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `rounded-full px-4 py-2 text-sm font-medium transition ${isActive ? "bg-brand-600 text-white" : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <div className="hidden items-center gap-2 rounded-full bg-slate-100 px-3 py-2 text-xs font-semibold text-slate-500 lg:inline-flex">
            <Sparkles size={14} /> Marketplace + booking tools
          </div>
          {user ? (
            <>
              <Link to={dashboardRoute} className="btn-secondary">
                <CalendarDays size={16} /> Dashboard
              </Link>
              <button onClick={logout} className="btn-primary">Logout</button>
            </>
          ) : (
            <>
              <Link to="/login" className="btn-ghost">Login</Link>
              <Link to="/register" className="btn-primary">Get Started</Link>
            </>
          )}
        </div>

        <button className="rounded-2xl border border-slate-200 bg-white p-3 md:hidden" onClick={() => setOpen((v) => !v)}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-100 bg-white/95 backdrop-blur md:hidden">
          <div className="page-shell flex flex-col gap-3 py-5">
            {links.map((link) => (
              <Link key={link.to} to={link.to} className="rounded-2xl px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50" onClick={() => setOpen(false)}>
                {link.label}
              </Link>
            ))}
            {user ? (
              <>
                <Link to={dashboardRoute} className="btn-secondary" onClick={() => setOpen(false)}>Dashboard</Link>
                <button onClick={logout} className="btn-primary">Logout</button>
              </>
            ) : (
              <>
                <Link to="/login" className="btn-secondary" onClick={() => setOpen(false)}>Login</Link>
                <Link to="/register" className="btn-primary" onClick={() => setOpen(false)}>Get Started</Link>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
