import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { getMe, loginUser, registerUser } from "../api/authApi";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("thestylist_token");
    if (!token) return setLoading(false);

    getMe()
      .then((res) => setUser(res.data.user))
      .catch(() => {
        localStorage.removeItem("thestylist_token");
        setUser(null);
      })
      .finally(() => setLoading(false));
  }, []);

  const login = async (payload) => {
    const res = await loginUser(payload);
    localStorage.setItem("thestylist_token", res.data.token);
    setUser(res.data.user);
    return res.data;
  };

  const register = async (payload) => {
    const res = await registerUser(payload);
    localStorage.setItem("thestylist_token", res.data.token);
    setUser(res.data.user);
    return res.data;
  };

  const logout = () => {
    localStorage.removeItem("thestylist_token");
    setUser(null);
  };

  const value = useMemo(() => ({ user, loading, login, register, logout }), [user, loading]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext);
