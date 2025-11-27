import React, { useEffect, useState } from "react";
import "../styles/Form.css";

export default function EmployeeForm({ onSubmit, existing }) {
  const [form, setForm] = useState({
    name: "",
    position: "",
    salary: "",
    department: "",
  });

  useEffect(() => {
    if (existing) setForm(existing);
  }, [existing]);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <form
      className="form"
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(form);
      }}
    >
      <input
        name="name"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
        required
      />
      <input
        name="position"
        placeholder="Position"
        value={form.position}
        onChange={handleChange}
        required
      />
      <input
        name="salary"
        placeholder="Salary"
        value={form.salary}
        onChange={handleChange}
        required
      />
      <input
        name="department"
        placeholder="Department"
        value={form.department}
        onChange={handleChange}
        required
      />

      <button type="submit">{existing ? "Update" : "Add"} Employee</button>
    </form>
  );
}
