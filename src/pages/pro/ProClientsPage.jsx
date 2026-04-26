import { useEffect, useState } from "react";
import api from "../../api/axios";

export default function ProClientsPage() {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    api.get("/professionals/dashboard/clients").then((res) => setClients(res.data.clients || [])).catch(() => {});
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-black">Clients</h1>
      <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {clients.map((client) => (
          <div key={client._id} className="card p-5">
            <h2 className="text-xl font-bold">{client.name}</h2>
            <p className="mt-2 text-sm text-slate-500">{client.email}</p>
            <p className="mt-1 text-sm text-slate-500">{client.phone || 'No phone'}</p>
          </div>
        ))}
        {!clients.length && <div className="card p-6 text-slate-500">No clients yet.</div>}
      </div>
    </div>
  );
}
