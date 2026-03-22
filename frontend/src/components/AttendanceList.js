import React, { useState } from "react";
import { API } from "../api";
import Table from "./Table";

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

  const columns = [
    { header: "Date", accessor: (row) => row.date },
    { header: "Status", accessor: (row) => row.status },
  ];

  return (
    <div>
            <h1 className="text-2xl font-medium text-black-700 mb-6">
  View Attendance
</h1>
     

      {/* Search Section */}
      <div className="bg-white p-4 rounded-xl shadow-md mb-6 flex gap-4 items-center max-w-xl">

        <input
          className="flex-1 border p-2 rounded"
          placeholder="Enter Employee ID"
          onChange={(e) => setEmployeeId(e.target.value)}
        />

        <button
          onClick={fetchAttendance}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Search
        </button>

      </div>

      {/* Table */}
      <Table columns={columns} data={data} />

    </div>
  );
}

export default AttendanceList;