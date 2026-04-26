import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function LoginPage() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await login(form);
      navigate(data.user.role === "admin" ? "/admin" : data.user.role === "professional" ? "/pro" : "/client");
    } catch (err) {
      setError(err?.response?.data?.message || "Login failed");
    }
  };

  return (
    <section className="py-20">
      <div className="page-shell max-w-xl">
        <div className="card p-8">
          <h1 className="text-3xl font-black">Welcome back</h1>
          <p className="mt-2 text-slate-500">Login to manage bookings, clients, or your business.</p>
          <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
            <div>
              <label className="label">Email</label>
              <input className="input" type="email" value={form.email} onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))} />
            </div>
            <div>
              <label className="label">Password</label>
              <input className="input" type="password" value={form.password} onChange={(e) => setForm((p) => ({ ...p, password: e.target.value }))} />
            </div>
            {error && <div className="rounded-2xl bg-red-50 p-4 text-sm text-red-600">{error}</div>}
            <button className="btn-primary w-full">Login</button>
          </form>
          <p className="mt-6 text-sm text-slate-500">No account yet? <Link to="/register" className="font-semibold text-brand-700">Create one</Link></p>
        </div>
      </div>
    </section>
  );
}
