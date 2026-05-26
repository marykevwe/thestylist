// src/pages/admin/AdminSettingsPage.jsx

import { useState } from "react";

export default function AdminSettingsPage() {
  const [settings, setSettings] = useState({
    platformName: "TheStylist",
    adminEmail: "admin@thestylist.com",
    bookingCommission: "10",
    allowNewPros: true,
    maintenanceMode: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setSettings({
      ...settings,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  return (
    <div className="space-y-6">

      {/* HEADER */}
      <div>
        <h1 className="text-2xl font-black text-slate-900">
          Settings
        </h1>

        <p className="text-sm text-slate-500">
          Manage platform configuration & admin controls
        </p>
      </div>

      {/* GENERAL SETTINGS */}
      <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-6 space-y-5">

        <div>
          <h2 className="text-lg font-bold text-slate-900">
            General Settings
          </h2>

          <p className="text-sm text-slate-500">
            Update your platform details
          </p>
        </div>

        {/* PLATFORM NAME */}
        <div>
          <label className="text-sm font-semibold text-slate-700">
            Platform Name
          </label>

          <input
            type="text"
            name="platformName"
            value={settings.platformName}
            onChange={handleChange}
            className="
              mt-2 w-full rounded-2xl border border-slate-200
              bg-slate-50 px-4 py-3 outline-none
              focus:border-black
            "
          />
        </div>

        {/* ADMIN EMAIL */}
        <div>
          <label className="text-sm font-semibold text-slate-700">
            Admin Email
          </label>

          <input
            type="email"
            name="adminEmail"
            value={settings.adminEmail}
            onChange={handleChange}
            className="
              mt-2 w-full rounded-2xl border border-slate-200
              bg-slate-50 px-4 py-3 outline-none
              focus:border-black
            "
          />
        </div>
      </div>

      {/* COMMISSION */}
      <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-6 space-y-5">

        <div>
          <h2 className="text-lg font-bold text-slate-900">
            Booking Commission
          </h2>

          <p className="text-sm text-slate-500">
            Set the percentage taken from each booking payment
          </p>
        </div>

        <div>
          <label className="text-sm font-semibold text-slate-700">
            Commission Percentage (%)
          </label>

          <input
            type="number"
            name="bookingCommission"
            value={settings.bookingCommission}
            onChange={handleChange}
            className="
              mt-2 w-full rounded-2xl border border-slate-200
              bg-slate-50 px-4 py-3 outline-none
              focus:border-black
            "
          />
        </div>
      </div>

      {/* PLATFORM CONTROLS */}
      <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-6 space-y-5">

        <div>
          <h2 className="text-lg font-bold text-slate-900">
            Platform Controls
          </h2>

          <p className="text-sm text-slate-500">
            Control platform behavior
          </p>
        </div>

        {/* ALLOW PROS */}
        <div className="flex items-center justify-between">

          <div>
            <p className="font-semibold text-slate-800">
              Allow New Professionals
            </p>

            <p className="text-sm text-slate-500">
              Enable professionals to join the platform
            </p>
          </div>

          <input
            type="checkbox"
            name="allowNewPros"
            checked={settings.allowNewPros}
            onChange={handleChange}
            className="w-5 h-5"
          />
        </div>

        {/* MAINTENANCE MODE */}
        <div className="flex items-center justify-between">

          <div>
            <p className="font-semibold text-slate-800">
              Maintenance Mode
            </p>

            <p className="text-sm text-slate-500">
              Temporarily disable platform access
            </p>
          </div>

          <input
            type="checkbox"
            name="maintenanceMode"
            checked={settings.maintenanceMode}
            onChange={handleChange}
            className="w-5 h-5"
          />
        </div>
      </div>

      {/* SAVE BUTTON */}
      <button
        className="
          w-full sm:w-auto
          bg-black text-white
          px-6 py-3 rounded-2xl
          font-semibold
          hover:opacity-90 transition
        "
      >
        Save Settings
      </button>
    </div>
  );
}