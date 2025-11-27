import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav
      style={{
        background: "#222",
        padding: "15px 30px",
        color: "white",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h2>Employee Management</h2>

      <div style={{ display: "flex", gap: "20px" }}>
        {/* 🔹 When NOT logged in → show Login & Register */}
        {!user && (
          <>
            <Link to="/login" style={{ color: "white" }}>
              Login
            </Link>

            <Link to="/register" style={{ color: "white" }}>
              Register
            </Link>
          </>
        )}

        {/* 🔹 When LOGGED IN → show Employees, Tasks, Logout */}
        {user && (
          <>
            <Link to="/employees" style={{ color: "white" }}>
              Employees
            </Link>

            <Link to="/tasks" style={{ color: "white" }}>
              Tasks
            </Link>

            <button
              onClick={logout}
              style={{
                background: "red",
                color: "white",
                padding: "5px 12px",
                borderRadius: "5px",
                border: "none",
              }}
            >
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
}
