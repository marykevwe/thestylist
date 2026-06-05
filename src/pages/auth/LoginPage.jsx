import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Mail, Lock, LogIn } from "lucide-react";

const MOCK_USERS = [
  { email: "admin@test.com", password: "1234", role: "admin" },
  { email: "pro@test.com", password: "1234", role: "professional" },
  { email: "client@test.com", password: "1234", role: "client" },
];

export default function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");

    const user = MOCK_USERS.find(
      (u) => u.email === email && u.password === password
    );

    if (!user) {
      setError("Invalid email or password. Try a demo account below.");
      return;
    }

    localStorage.setItem("user", JSON.stringify(user));

    switch (user.role) {
      case "admin": navigate("/admin"); break;
      case "professional": navigate("/pro"); break;
      default: navigate("/client");
    }
  };

  const fillDemo = (demoEmail) => {
    setEmail(demoEmail);
    setPassword("1234");
    setError("");
  };

  return (
    <div className="min-h-screen bg-brand-900 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-sm bg-white rounded-2xl p-8 shadow-2xl">

        {/* Logo */}
        <div className="text-center mb-6">
          <h1 className="font-['Playfair_Display'] text-brand-700 text-3xl font-black">
            HairHobby
          </h1>
          <p className="text-brand-800 text-sm mt-1 font-['DM_Sans']">
            Welcome back — sign in to continue
          </p>
        </div>

        {/* Error */}
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 text-sm rounded-lg px-4 py-3 mb-4 font-['DM_Sans']">
            {error}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-brand-900 uppercase tracking-wider mb-1.5 font-['DM_Sans']">
              Email
            </label>
            <div className="relative">
              <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-brand-300" />
              <input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full border-[1.5px] border-brand-200 focus:border-brand-700 rounded-xl pl-9 pr-4 py-3 text-sm outline-none transition-colors font-['DM_Sans'] text-gray-800 placeholder-gray-400"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-brand-900 uppercase tracking-wider mb-1.5 font-['DM_Sans']">
              Password
            </label>
            <div className="relative">
              <Lock size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-brand-300" />
              <input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full border-[1.5px] border-brand-200 focus:border-brand-700 rounded-xl pl-9 pr-4 py-3 text-sm outline-none transition-colors font-['DM_Sans'] text-gray-800"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-brand-700 hover:bg-brand-800 text-white font-bold py-3 rounded-xl transition-colors font-['DM_Sans'] mt-2"
          >
            <LogIn size={16} />
            Sign In
          </button>
        </form>

        {/* Demo accounts */}
        <div className="my-5 flex items-center gap-3">
          <div className="flex-1 h-px bg-brand-100" />
          <span className="text-xs text-brand-300 font-['DM_Sans']">demo accounts</span>
          <div className="flex-1 h-px bg-brand-100" />
        </div>

        <div className="bg-brand-50 rounded-xl p-4 space-y-2">
          <p className="text-xs font-bold text-brand-900 font-['DM_Sans'] mb-1">
            Click to fill credentials
          </p>
          {MOCK_USERS.map((u) => (
            <button
              key={u.email}
              onClick={() => fillDemo(u.email)}
              className="w-full flex items-center justify-between text-left px-3 py-2 rounded-lg hover:bg-brand-100 transition-colors group"
            >
              <span className="text-xs text-brand-800 font-['DM_Sans']">{u.email}</span>
              <span className="text-xs font-semibold text-brand-600 capitalize font-['DM_Sans'] group-hover:text-brand-800">
                {u.role}
              </span>
            </button>
          ))}
        </div>

        <p className="text-center text-sm text-gray-500 mt-5 font-['DM_Sans']">
          No account?{" "}
          <Link to="/register" className="text-brand-700 font-semibold hover:text-brand-900">
            Sign up free
          </Link>
        </p>
      </div>
    </div>
  );
}