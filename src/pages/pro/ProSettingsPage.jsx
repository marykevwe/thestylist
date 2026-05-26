// src/pages/pro/ProSettingsPage.jsx

import { useState } from "react";

export default function ProSettingsPage() {
  const [services, setServices] = useState([
    {
      name: "Haircut",
      price: "₦5000",
    },
    {
      name: "Beard Trim",
      price: "₦3000",
    },
  ]);

  const [newService, setNewService] = useState("");
  const [newPrice, setNewPrice] = useState("");

  const addService = () => {
    if (!newService || !newPrice) return;

    setServices([
      ...services,
      {
        name: newService,
        price: newPrice,
      },
    ]);

    setNewService("");
    setNewPrice("");
  };

  return (
    <div className="space-y-6">

      {/* HEADER */}
      <div>
        <h1 className="text-2xl font-black">
          Settings
        </h1>

        <p className="text-sm text-slate-500">
          Manage your profile & services
        </p>
      </div>

      {/* PROFILE */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 space-y-4">

        <h2 className="font-bold text-lg">
          Studio Profile
        </h2>

        <input
          type="text"
          placeholder="Studio Name"
          className="w-full rounded-2xl border p-3"
        />

        <textarea
          placeholder="Studio Description"
          rows={4}
          className="w-full rounded-2xl border p-3"
        />
      </div>

      {/* SERVICES */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 space-y-4">

        <div className="flex items-center justify-between">

          <h2 className="font-bold text-lg">
            Services & Prices
          </h2>
        </div>

        {/* ADD SERVICE */}
        <div className="grid sm:grid-cols-3 gap-3">

          <input
            type="text"
            placeholder="Service Name"
            value={newService}
            onChange={(e) => setNewService(e.target.value)}
            className="rounded-2xl border p-3"
          />

          <input
            type="text"
            placeholder="Price"
            value={newPrice}
            onChange={(e) => setNewPrice(e.target.value)}
            className="rounded-2xl border p-3"
          />

          <button
            onClick={addService}
            className="
              bg-black text-white
              rounded-2xl px-4 py-3
              font-semibold
            "
          >
            Add Service
          </button>
        </div>

        {/* SERVICE LIST */}
        <div className="space-y-3">

          {services.map((service, index) => (
            <div
              key={index}
              className="
                flex items-center justify-between
                rounded-2xl border border-slate-200
                p-4
              "
            >
              <div>
                <h3 className="font-semibold">
                  {service.name}
                </h3>

                <p className="text-sm text-slate-500">
                  {service.price}
                </p>
              </div>

              <button
                className="
                  text-red-500 text-sm font-semibold
                "
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* SAVE */}
      <button
        className="
          bg-black text-white
          px-6 py-3 rounded-2xl
          font-semibold
        "
      >
        Save Changes
      </button>
    </div>
  );
}