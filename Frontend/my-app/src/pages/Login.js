import { useState } from "react";
import API from "../api/api";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("/users/login", form);
      login(res.data.user, res.data.token);
      navigate("/employees");

    } catch (err) {
      // ❗ FIX: clear old user data so navbar won't show employees/tasks
      localStorage.removeItem("user");
      localStorage.removeItem("token");

      setError(err.response?.data?.message || "Invalid email or password");
    }
  };

  return (
    <div
      className="login-container"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL + "/background.png"})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="login-card">
        <h2>Welcome Back 👋</h2>
        <p className="subtitle">Login to access your dashboard</p>

        {error && <p className="error">{error}</p>}

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email"
            value={form.email}
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
            required
          />

          <input
            type="password"
            placeholder="Enter your password"
            value={form.password}
            onChange={(e) =>
              setForm({ ...form, password: e.target.value })
            }
            required
          />

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}
