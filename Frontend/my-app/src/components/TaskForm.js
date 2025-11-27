import React, { useEffect, useState } from "react";
import "../styles/Form.css";

export default function TaskForm({ employees, onSubmit, existing }) {
  const [form, setForm] = useState({
    title: "",
    description: "",
    assignedTo: "",
    status: "Pending",
    dueDate: "",
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
        name="title"
        placeholder="Title"
        value={form.title}
        onChange={handleChange}
        required
      />

      <input
        name="description"
        placeholder="Description"
        value={form.description}
        onChange={handleChange}
      />

      <select
        name="assignedTo"
        value={form.assignedTo}
        onChange={handleChange}
        required
      >
        <option value="">Assign Employee</option>
        {employees.map((emp) => (
          <option key={emp._id} value={emp._id}>
            {emp.name}
          </option>
        ))}
      </select>

      <select name="status" value={form.status} onChange={handleChange}>
        <option>Pending</option>
        <option>In Progress</option>
        <option>Completed</option>
      </select>

      <input
        type="date"
        name="dueDate"
        value={form.dueDate}
        onChange={handleChange}
      />

      <button type="submit">{existing ? "Update" : "Add"} Task</button>
    </form>
  );
}
