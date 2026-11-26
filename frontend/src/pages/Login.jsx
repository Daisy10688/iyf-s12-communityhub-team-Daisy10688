
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const { login, loading } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setError("");

    try {
      await login(formData.email, formData.password);
      navigate("/feed");
    } catch (err) {
      setError(err.message || "Login failed. Please try again.");
    }
  }

  return (
    <section className="auth-page">
      <div className="auth-card">
        <h1>Welcome Back</h1>
        <p>Log in to reconnect with your MamaCare community.</p>

        {error && (
          <p role="alert" className="auth-error">
            {error}
          </p>
        )}

        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email address</label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <button type="submit" disabled={loading}>
            {loading ? "Logging in..." : "Log in"}
          </button>
        </form>

        <p>
          Don't have an account? <Link to="/register">Create one</Link>
        </p>
      </div>
    </section>
  );
}

