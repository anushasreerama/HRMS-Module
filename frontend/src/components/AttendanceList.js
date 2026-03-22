import React, { useState } from "react";
import { API } from "../api";

function AttendanceList() {
  const [employeeId, setEmployeeId] = useState("");
  const [data, setData] = useState([]);

  const fetchAttendance = async () => {
    try {
      const res = await API.get(`/attendance/${employeeId}`);
      setData(res.data);
    } catch {
      alert("No records found");
    }
  };

  return (
    <div>
      <h3>View Attendance</h3>
      <input placeholder="Employee ID" onChange={(e) => setEmployeeId(e.target.value)} />
      <button onClick={fetchAttendance}>Search</button>

      {data.length > 0 && (
        <table border="1">
          <thead>
            <tr>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {data.map((d, i) => (
              <tr key={i}>
                <td>{d.date}</td>
                <td>{d.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default AttendanceList;