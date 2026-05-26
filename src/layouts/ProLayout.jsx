// src/layouts/ProLayout.jsx

import { Outlet, NavLink, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  CalendarDays,
  Users,
  BriefcaseBusiness,
  Star,
  Settings,
  LogOut,
  Menu,
  X,
} from "lucide-react";

import { useState } from "react";

export default function ProLayout() {
  const navigate = useNavigate();

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const links = [
    {
      to: "/pro",
      label: "Dashboard",
      icon: LayoutDashboard,
    },
    {
      to: "/pro/services",
      label: "Services",
      icon: BriefcaseBusiness,
    },
    {
      to: "/pro/bookings",
      label: "Bookings",
      icon: CalendarDays,
    },
    {
      to: "/pro/clients",
      label: "Clients",
      icon: Users,
    },
    {
      to: "/pro/reviews",
      label: "Reviews",
      icon: Star,
    },
    {
      to: "/pro/settings",
      label: "Settings",
      icon: Settings,
    },
  ];

  const logout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-slate-100 flex">

      {/* MOBILE OVERLAY */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* SIDEBAR */}
      <aside
        className={`
          fixed lg:static top-0 left-0 z-50
          h-screen w-72 bg-white border-r border-slate-200
          transition-transform duration-300
          flex flex-col
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0
        `}
      >

        {/* HEADER */}
        <div className="h-20 border-b border-slate-200 flex items-center justify-between px-6">

          <div>
            <h1 className="text-2xl font-black">
              Pro Panel
            </h1>

            <p className="text-xs text-slate-500">
              Manage your studio
            </p>
          </div>

          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden"
          >
            <X size={22} />
          </button>
        </div>

        {/* PROFILE */}
        <div className="p-6">
          <div className="bg-slate-50 rounded-3xl border border-slate-200 p-5">

            <div className="flex items-center gap-3">

              <div
                className="
                  w-12 h-12 rounded-full
                  bg-black text-white
                  flex items-center justify-center
                  font-bold
                "
              >
                P
              </div>

              <div>
                <h2 className="font-bold text-slate-900">
                  Elite Studio
                </h2>

                <p className="text-sm text-slate-500">
                  Professional Account
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* NAV */}
        <nav className="flex-1 px-4 space-y-2 overflow-y-auto">

          {links.map(({ to, label, icon: Icon }) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/pro"}
              onClick={() => setSidebarOpen(false)}
              className={({ isActive }) =>
                `
                flex items-center gap-3
                rounded-2xl px-4 py-3
                text-sm font-semibold transition

                ${
                  isActive
                    ? "bg-black text-white shadow-lg"
                    : "text-slate-600 hover:bg-slate-100"
                }
                `
              }
            >
              <Icon size={18} />

              {label}
            </NavLink>
          ))}
        </nav>

        {/* FOOTER */}
        <div className="p-4 border-t border-slate-200">

          <button
            onClick={logout}
            className="
              w-full flex items-center justify-center gap-2
              rounded-2xl bg-red-500
              py-3 text-white font-semibold
            "
          >
            <LogOut size={18} />

            Logout
          </button>
        </div>
      </aside>

      {/* MAIN */}
      <div className="flex-1 flex flex-col">

        {/* TOP BAR */}
        <header
          className="
            sticky top-0 z-30
            h-16 bg-white border-b border-slate-200
            px-4 sm:px-6
            flex items-center justify-between
          "
        >

          <div className="flex items-center gap-3">

            <button
              onClick={() => setSidebarOpen(true)}
              className="
                lg:hidden
                w-10 h-10 rounded-xl border
                flex items-center justify-center
              "
            >
              <Menu size={20} />
            </button>

            <div>
              <h2 className="font-bold">
                Professional Dashboard
              </h2>

              <p className="text-xs text-slate-500">
                Manage your services & bookings
              </p>
            </div>
          </div>

          <div
            className="
              w-10 h-10 rounded-full
              bg-black text-white
              flex items-center justify-center font-bold
            "
          >
            P
          </div>
        </header>

        {/* PAGE */}
        <main className="flex-1 p-4 sm:p-6">
          <Outlet />
        </main>

        {/* FOOTER */}
        <footer className="bg-white border-t border-slate-200 px-6 py-4 text-center">
          <p className="text-xs text-slate-500">
            © 2026 TheStylist Professional Platform
          </p>
        </footer>
      </div>
    </div>
  );
}