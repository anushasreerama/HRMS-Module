import React, { useState } from "react";
import { API } from "../api";

function EmployeeForm() {
  const [form, setForm] = useState({
    employee_id: "",
    name: "",
    email: "",
    department: "",
  });

  const [message, setMessage] = useState("");

  const handleSubmit = async () => {
    try {
      await API.post("/employees", form);

      setMessage("✅ Employee added successfully");

      // Clear form
      setForm({
        employee_id: "",
        name: "",
        email: "",
        department: "",
      });

    } catch (err) {
      setMessage(err.response?.data?.detail || "Error");
    }
  };

  return (
    <div className="max-w-md bg-white p-6 rounded-xl shadow">
            <h1 className="text-2xl font-medium text-black-700 mb-6">
  Add Employee
</h1>

      {message && (
        <p className="mb-3 text-green-600 font-semibold">{message}</p>
      )}

      {["employee_id", "name", "email", "department"].map((field) => (
        <input
          key={field}
          value={form[field]}
          placeholder={field}
          className="w-full p-2 border mb-3 rounded"
          onChange={(e) =>
            setForm({ ...form, [field]: e.target.value })
          }
        />
      ))}

      <button
        onClick={handleSubmit}
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
      >
        Submit
      </button>
    </div>
  );
}

export default EmployeeForm;