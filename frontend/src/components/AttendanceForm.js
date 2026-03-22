import React, { useState } from "react";
import { API } from "../api";

function AttendanceForm() {
  const [form, setForm] = useState({
    employee_id: "",
    date: "",
    status: "Present",
  });

  const handleSubmit = async () => {
    try {
      await API.post("/attendance", form);
      alert("Attendance marked");
    } catch (err) {
      alert(err.response?.data?.detail || "Error");
    }
  };

  return (
    <div>
      <h3>Mark Attendance</h3>
      <input placeholder="Employee ID" onChange={(e) => setForm({...form, employee_id: e.target.value})} />
      <input type="date" onChange={(e) => setForm({...form, date: e.target.value})} />
      
      <select onChange={(e) => setForm({...form, status: e.target.value})}>
        <option>Present</option>
        <option>Absent</option>
      </select>

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default AttendanceForm;