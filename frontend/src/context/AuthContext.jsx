
import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

const API_URL =
  import.meta.env.VITE_API_URL || "http://localhost:5000/api";

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("mamcare_user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const [token, setToken] = useState(() =>
    localStorage.getItem("mamcare_token")
  );

  const [loading, setLoading] = useState(false);

  async function sendAuthRequest(endpoint, userData) {
    setLoading(true);

    try {
      const response = await fetch(`${API_URL}/auth/${endpoint}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Authentication failed.");
      }

      if (!data.user || !data.token) {
        throw new Error("The server returned an invalid response.");
      }

      setUser(data.user);
      setToken(data.token);

      localStorage.setItem("mamcare_user", JSON.stringify(data.user));
      localStorage.setItem("mamcare_token", data.token);

      return data;
    } finally {
      setLoading(false);
    }
  }

  function register(name, email, password) {
    return sendAuthRequest("register", {
      name,
      email,
      password,
    });
  }

  function login(email, password) {
    return sendAuthRequest("login", {
      email,
      password,
    });
  }

  function logout() {
    setUser(null);
    setToken(null);

    localStorage.removeItem("mamcare_user");
    localStorage.removeItem("mamcare_token");
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        loading,
        isAuthenticated: Boolean(user && token),
        register,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used inside an AuthProvider.");
  }

  return context;
}
