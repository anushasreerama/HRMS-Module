import React, { useState } from "react";
import { API } from "../api";

function EmployeeForm({ refresh }) {
  const [form, setForm] = useState({
    employee_id: "",
    name: "",
    email: "",
    department: "",
  });

  const handleSubmit = async () => {
    try {
      await API.post("/employees", form);
      alert("Employee Added");
      refresh();
    } catch (err) {
      alert(err.response?.data?.detail || "Error");
    }
  };

  return (
    <div>
      <h3>Add Employee</h3>
      <input placeholder="Employee ID" onChange={(e) => setForm({...form, employee_id: e.target.value})} />
      <input placeholder="Name" onChange={(e) => setForm({...form, name: e.target.value})} />
      <input placeholder="Email" onChange={(e) => setForm({...form, email: e.target.value})} />
      <input placeholder="Department" onChange={(e) => setForm({...form, department: e.target.value})} />
      <button onClick={handleSubmit}>Add</button>
    </div>
  );
}

export default EmployeeForm;