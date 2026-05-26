// src/layouts/AdminLayout.jsx

import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function AdminLayout() {
  const navigate = useNavigate();
  const location = useLocation();

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navItems = [
    {
      name: "Dashboard",
      path: "/admin",
      icon: "🏠",
    },
    {
      name: "Users",
      path: "/admin/users",
      icon: "👥",
    },
    {
      name: "Professionals",
      path: "/admin/pros",
      icon: "💼",
    },
    {
      name: "Bookings",
      path: "/admin/bookings",
      icon: "📅",
    },
    {
      name: "Reviews",
      path: "/admin/reviews",
      icon: "⭐",
    },
    {
      name: "Payments",
      path: "/admin/payments",
      icon: "💳",
    },
    {
      name: "Settings",
      path: "/admin/settings",
      icon: "⚙️",
    },
  ];

  const logout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-slate-100 flex">

      {/* ================= SIDEBAR ================= */}
      <aside
        className={`
          fixed z-50 top-0 left-0 h-screen w-72 bg-white border-r border-slate-200
          transform transition-transform duration-300
          md:translate-x-0
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* LOGO */}
        <div className="h-20 border-b border-slate-200 flex items-center px-6">
          <div>
            <h1 className="text-2xl font-black text-slate-900">
              Admin Panel
            </h1>

            <p className="text-xs text-slate-500">
              Booking Management System
            </p>
          </div>
        </div>

        {/* NAVIGATION */}
        <div className="p-4 space-y-2 overflow-y-auto">

          {navItems.map((item) => {
            const active = location.pathname === item.path;

            return (
              <button
                key={item.path}
                onClick={() => {
                  navigate(item.path);
                  setSidebarOpen(false);
                }}
                className={`
                  w-full flex items-center gap-3 px-4 py-3 rounded-2xl
                  transition-all duration-200
                  ${
                    active
                      ? "bg-black text-white shadow-lg"
                      : "text-slate-600 hover:bg-slate-100"
                  }
                `}
              >
                <span className="text-lg">{item.icon}</span>

                <span className="font-medium text-sm">
                  {item.name}
                </span>
              </button>
            );
          })}
        </div>

        {/* FOOTER */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-slate-200 bg-white">

          <div className="mb-3">
            <p className="font-semibold text-sm text-slate-800">
              Super Admin
            </p>

            <p className="text-xs text-slate-500">
              admin@test.com
            </p>
          </div>

          <button
            onClick={logout}
            className="
              w-full py-3 rounded-2xl
              bg-red-500 text-white font-medium
              hover:bg-red-600 transition
            "
          >
            Logout
          </button>
        </div>
      </aside>

      {/* ================= OVERLAY ================= */}
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
        />
      )}

      {/* ================= MAIN CONTENT ================= */}
      <div className="flex-1 md:ml-72 flex flex-col">

        {/* ================= TOP NAV ================= */}
        <header
          className="
            sticky top-0 z-30
            bg-white/90 backdrop-blur
            border-b border-slate-200
            px-4 md:px-6
            h-16
            flex items-center justify-between
          "
        >
          {/* LEFT */}
          <div className="flex items-center gap-3">

            {/* MOBILE MENU */}
            <button
              onClick={() => setSidebarOpen(true)}
              className="
                md:hidden
                w-10 h-10 rounded-xl
                border border-slate-200
                flex items-center justify-center
              "
            >
              ☰
            </button>

            <div>
              <h2 className="font-bold text-slate-900">
                Admin Dashboard
              </h2>

              <p className="text-xs text-slate-500">
                Manage professionals & bookings
              </p>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-3">

            {/* NOTIFICATION */}
            <button
              className="
                relative w-10 h-10 rounded-xl
                border border-slate-200
                flex items-center justify-center bg-white
              "
            >
              🔔

              <span
                className="
                  absolute top-2 right-2
                  w-2 h-2 rounded-full bg-red-500
                "
              />
            </button>

            {/* PROFILE */}
            <div
              className="
                w-10 h-10 rounded-full
                bg-black text-white
                flex items-center justify-center
                font-bold
              "
            >
              A
            </div>
          </div>
        </header>

        {/* ================= PAGE CONTENT ================= */}
        <main className="flex-1 p-4 md:p-6">
          <Outlet />
        </main>

        {/* ================= FOOTER ================= */}
        <footer
          className="
            bg-white border-t border-slate-200
            px-6 py-4 text-center
          "
        >
          <p className="text-xs text-slate-500">
            © 2026 Booking Platform Admin System
          </p>
        </footer>
      </div>
    </div>
  );
}