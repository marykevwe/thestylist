import { useEffect, useState } from "react";
import { createService, deleteService, getMyServices } from "../../api/marketplaceApi";
import { formatCurrency } from "../../utils/format";

const initialForm = { name: "", price: "", duration: "", description: "", category: "Hair" };

export default function ProServicesPage() {
  const [services, setServices] = useState([]);
  const [form, setForm] = useState(initialForm);
  const [message, setMessage] = useState("");

  const loadServices = () => getMyServices().then((res) => setServices(res.data.services || []));

  useEffect(() => { loadServices().catch(() => {}); }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createService({ ...form, price: Number(form.price), duration: Number(form.duration) });
      setForm(initialForm);
      setMessage("Service created");
      loadServices();
    } catch (error) {
      setMessage(error?.response?.data?.message || "Failed to create service");
    }
  };

  const handleDelete = async (id) => {
    await deleteService(id);
    loadServices();
  };

  return (
    <div className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
      <div className="card p-6">
        <h1 className="text-2xl font-black">Add service</h1>
        <form className="mt-5 space-y-4" onSubmit={handleSubmit}>
          {[
            ["Service name", "name"],
            ["Price", "price"],
            ["Duration (mins)", "duration"],
          ].map(([label, key]) => (
            <div key={key}>
              <label className="label">{label}</label>
              <input className="input" value={form[key]} onChange={(e) => setForm((p) => ({ ...p, [key]: e.target.value }))} />
            </div>
          ))}
          <div>
            <label className="label">Category</label>
            <select className="input" value={form.category} onChange={(e) => setForm((p) => ({ ...p, category: e.target.value }))}>
              <option>Hair</option><option>Makeup</option><option>Nails</option><option>Barbing</option><option>Spa</option>
            </select>
          </div>
          <div>
            <label className="label">Description</label>
            <textarea className="input min-h-28" value={form.description} onChange={(e) => setForm((p) => ({ ...p, description: e.target.value }))} />
          </div>
          {message && <div className="rounded-2xl bg-brand-50 p-4 text-sm text-brand-700">{message}</div>}
          <button className="btn-primary w-full">Save service</button>
        </form>
      </div>

      <div className="card p-6">
        <h2 className="text-2xl font-black">My services</h2>
        <div className="mt-5 space-y-4">
          {services.map((service) => (
            <div key={service._id} className="rounded-2xl border border-slate-200 p-4">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="font-bold">{service.name}</h3>
                  <p className="mt-1 text-sm text-slate-500">{service.description}</p>
                </div>
                <button onClick={() => handleDelete(service._id)} className="rounded-xl bg-red-50 px-4 py-2 text-sm font-semibold text-red-600">Delete</button>
              </div>
              <div className="mt-3 flex gap-4 text-sm text-slate-600">
                <span>{formatCurrency(service.price)}</span>
                <span>{service.duration} mins</span>
                <span>{service.category}</span>
              </div>
            </div>
          ))}
          {!services.length && <p className="text-slate-500">No services yet.</p>}
        </div>
      </div>
    </div>
  );
}
