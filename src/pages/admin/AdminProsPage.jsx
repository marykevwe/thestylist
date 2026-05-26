import { useState } from "react";

export default function AdminProsPage() {
  const [pros, setPros] = useState([
    {
      id: 1,
      name: "Elite Barber",
      studio: "Elite Studio",
      services: ["Haircut", "Beard"],
      price: "₦5000",
    },
  ]);

  const [open, setOpen] = useState(false);

  const [form, setForm] = useState({
    name: "",
    studio: "",
    serviceInput: "",
    services: [],
    price: "",
  });

  const [errors, setErrors] = useState({});

  // -------------------------
  // INPUT HANDLER
  // -------------------------
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // -------------------------
  // ADD SERVICE TAG
  // -------------------------
  const addService = () => {
    if (!form.serviceInput.trim()) return;

    setForm({
      ...form,
      services: [...form.services, form.serviceInput.trim()],
      serviceInput: "",
    });
  };

  const removeService = (index) => {
    const updated = form.services.filter((_, i) => i !== index);
    setForm({ ...form, services: updated });
  };

  // -------------------------
  // VALIDATION
  // -------------------------
  const validate = () => {
    const newErrors = {};

    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.studio.trim()) newErrors.studio = "Studio is required";
    if (form.services.length === 0)
      newErrors.services = "Add at least one service";
    if (!form.price.trim()) newErrors.price = "Price is required";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // -------------------------
  // SUBMIT
  // -------------------------
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    const newPro = {
      id: Date.now(),
      name: form.name,
      studio: form.studio,
      services: form.services,
      price: form.price,
    };

    setPros([...pros, newPro]);

    // reset
    setForm({
      name: "",
      studio: "",
      serviceInput: "",
      services: [],
      price: "",
    });

    setErrors({});
    setOpen(false);
  };

  return (
    <div className="space-y-4">

      {/* HEADER */}
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-black">Professionals</h1>

        <button
          onClick={() => setOpen(true)}
          className="bg-black text-white px-4 py-2 rounded-lg"
        >
          + Add Pro
        </button>
      </div>

      {/* LIST */}
      <div className="space-y-3">
        {pros.map((p) => (
          <div
            key={p.id}
            className="bg-white p-4 rounded-xl shadow space-y-2"
          >
            <div className="flex justify-between">
              <p className="font-bold">{p.name}</p>
              <span className="text-xs bg-black text-white px-2 py-1 rounded">
                {p.price}
              </span>
            </div>

            <p className="text-sm text-gray-500">{p.studio}</p>

            <div className="flex flex-wrap gap-2">
              {p.services.map((s, i) => (
                <span
                  key={i}
                  className="text-xs bg-gray-100 px-2 py-1 rounded"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* ---------------- MODAL ---------------- */}
      {open && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center p-4 z-50">
          <div className="bg-white w-full max-w-md rounded-xl p-4 space-y-3">

            <h2 className="text-lg font-bold">Add Professional</h2>

            {/* NAME */}
            <div>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Full Name"
                className="w-full border p-2 rounded"
              />
              {errors.name && (
                <p className="text-red-500 text-xs">{errors.name}</p>
              )}
            </div>

            {/* STUDIO */}
            <div>
              <input
                name="studio"
                value={form.studio}
                onChange={handleChange}
                placeholder="Studio Name"
                className="w-full border p-2 rounded"
              />
              {errors.studio && (
                <p className="text-red-500 text-xs">{errors.studio}</p>
              )}
            </div>

            {/* SERVICES */}
            <div>
              <div className="flex gap-2">
                <input
                  value={form.serviceInput}
                  onChange={(e) =>
                    setForm({ ...form, serviceInput: e.target.value })
                  }
                  placeholder="Add service"
                  className="flex-1 border p-2 rounded"
                />

                <button
                  onClick={addService}
                  className="bg-gray-200 px-3 rounded"
                >
                  Add
                </button>
              </div>

              <div className="flex flex-wrap gap-2 mt-2">
                {form.services.map((s, i) => (
                  <span
                    key={i}
                    className="text-xs bg-gray-100 px-2 py-1 rounded flex items-center gap-2"
                  >
                    {s}
                    <button onClick={() => removeService(i)}>x</button>
                  </span>
                ))}
              </div>

              {errors.services && (
                <p className="text-red-500 text-xs">{errors.services}</p>
              )}
            </div>

            {/* PRICE */}
            <div>
              <input
                name="price"
                value={form.price}
                onChange={handleChange}
                placeholder="Price (e.g ₦5000)"
                className="w-full border p-2 rounded"
              />
              {errors.price && (
                <p className="text-red-500 text-xs">{errors.price}</p>
              )}
            </div>

            {/* ACTIONS */}
            <div className="flex gap-2 pt-2">
              <button
                onClick={() => setOpen(false)}
                className="flex-1 border py-2 rounded"
              >
                Cancel
              </button>

              <button
                onClick={handleSubmit}
                className="flex-1 bg-black text-white py-2 rounded"
              >
                Save
              </button>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}