import React, { useEffect, useState } from "react";
import API from "../api/api";
import TaskForm from "../components/TaskForm";
import "../styles/Table.css";

export default function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [employees, setEmployees] = useState([]);
  const [edit, setEdit] = useState(null);

  const loadData = async () => {
    const t = await API.get("/tasks");
    const e = await API.get("/employees");
    setTasks(t.data);
    setEmployees(e.data);
  };

  useEffect(() => {
    loadData();
  }, []);

  const addTask = async (data) => {
    await API.post("/tasks", data);
    setEdit(null);
    loadData();
  };

  const updateTask = async (data) => {
    await API.put(`/tasks/${edit._id}`, data);
    setEdit(null);
    loadData();
  };

  const deleteTask = async (id) => {
    await API.delete(`/tasks/${id}`);
    loadData();
  };

  return (
    <div className="container">
      <h2>Tasks</h2>

      <TaskForm
        employees={employees}
        onSubmit={edit ? updateTask : addTask}
        existing={edit}
      />

      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Employee</th>
            <th>Status</th>
            <th>Due Date</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {tasks.map((task) => (
            <tr key={task._id}>
              <td>{task.title}</td>
              <td>{task.description}</td>
              <td>{task.assignedTo?.name}</td>
              <td>{task.status}</td>
              <td>{task.dueDate?.substring(0, 10)}</td>
              <td>
                <button onClick={() => setEdit(task)}>Edit</button>
                <button onClick={() => deleteTask(task._id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
