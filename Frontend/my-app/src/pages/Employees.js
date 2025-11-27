import React, { useEffect, useState } from "react";
import API from "../api/api";
import EmployeeForm from "../components/EmployeeForm";
import "../styles/Table.css";

export default function Employees() {
  const [employees, setEmployees] = useState([]);
  const [edit, setEdit] = useState(null);

  const getEmployees = async () => {
    const res = await API.get("/employees");
    setEmployees(res.data);
  };

  useEffect(() => {
    getEmployees();
  }, []);

  const addEmployee = async (data) => {
    await API.post("/employees", data);
    setEdit(null);
    getEmployees();
  };

  const updateEmployee = async (data) => {
    await API.put(`/employees/${edit._id}`, data);
    setEdit(null);
    getEmployees();
  };

  const deleteEmployee = async (id) => {
    await API.delete(`/employees/${id}`);
    getEmployees();
  };

  return (
    <div className="container">
      <h2>Employees</h2>

      <EmployeeForm
        onSubmit={edit ? updateEmployee : addEmployee}
        existing={edit}
      />

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Position</th>
            <th>Salary</th>
            <th>Department</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {employees.map((emp) => (
            <tr key={emp._id}>
              <td>{emp.name}</td>
              <td>{emp.position}</td>
              <td>{emp.salary}</td>
              <td>{emp.department}</td>
              <td>
                <button onClick={() => setEdit(emp)}>Edit</button>
                <button onClick={() => deleteEmployee(emp._id)}>
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
