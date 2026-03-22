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
            <h1 className="text-2xl font-medium text-black-700 mb-6">
 Mark Attendance
</h1>

      <div className="bg-white p-6 rounded-xl shadow-md max-w-2xl">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

          {/* Employee ID */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Employee ID
            </label>
            <input
              className="w-full border p-2 rounded"
              placeholder="EMP001"
              onChange={(e) =>
                setForm({ ...form, employee_id: e.target.value })
              }
            />
          </div>

          {/* Date */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Date
            </label>
            <input
              type="date"
              className="w-full border p-2 rounded"
              onChange={(e) =>
                setForm({ ...form, date: e.target.value })
              }
            />
          </div>

          {/* Status */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Status
            </label>
            <select
              className="w-full border p-2 rounded"
              onChange={(e) =>
                setForm({ ...form, status: e.target.value })
              }
            >
              <option>Present</option>
              <option>Absent</option>
            </select>
          </div>

        </div>

        {/* Button */}
        <button
          onClick={handleSubmit}
          className="mt-6 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          Submit
        </button>

      </div>
    </div>
  );
}

export default AttendanceForm;