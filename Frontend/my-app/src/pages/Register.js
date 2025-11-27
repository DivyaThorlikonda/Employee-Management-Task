import { useState } from "react";
import API from "../api/api";
import "../styles/Login.css"; // optional if you already use this file

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.post("/users/register", form);
      setMessage("Registration successful! You can now login.");
    } catch (err) {
      setMessage(err.response?.data?.message || "Registration failed");
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
        <h2>Create Account ✨</h2>
        <p className="subtitle">Register to get started</p>

        {/* 🔴 SUCCESS/ERROR MESSAGE */}
        {message && (
          <p
            style={{
              color: message.includes("successful") ? "green" : "red",
              textAlign: "center",
              fontWeight: "600",
              marginBottom: "10px",
            }}
          >
            {message}
          </p>
        )}

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter your name"
            value={form.name}
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
            required
          />

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

          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
}
