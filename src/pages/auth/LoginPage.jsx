import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // MOCK USERS (no API)
  const users = [
    { email: "admin@test.com", password: "1234", role: "admin" },
    { email: "pro@test.com", password: "1234", role: "professional" },
    { email: "client@test.com", password: "1234", role: "client" },
  ];

  const handleLogin = (e) => {
    e.preventDefault();

    const user = users.find(
      (u) => u.email === email && u.password === password
    );

    if (!user) {
      alert("Invalid email or password");
      return;
    }

    // save login session
    localStorage.setItem("user", JSON.stringify(user));

    // redirect by role
    switch (user.role) {
      case "admin":
        navigate("/admin");
        break;
      case "professional":
        navigate("/pro");
        break;
      default:
        navigate("/client");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleLogin}
        className="w-full max-w-sm bg-white p-6 rounded-xl shadow"
      >
        <h1 className="text-2xl font-bold mb-4">Login</h1>

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-2 mb-3 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-2 mb-3 rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="w-full bg-black text-white py-2 rounded">
          Login
        </button>

        <div className="text-xs text-gray-500 mt-4">
          <p>Demo accounts:</p>
          <p>admin@test.com / 1234</p>
          <p>pro@test.com / 1234</p>
          <p>client@test.com / 1234</p>
        </div>
      </form>
    </div>
  );
}
