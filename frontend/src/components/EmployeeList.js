import React, { useEffect, useState } from "react";
import { API } from "../api";
import Table from "./Table";

function EmployeeList() {
  const [employees, setEmployees] = useState([]);

  const fetchEmployees = async () => {
    const res = await API.get("/employees");
    setEmployees(res.data);
  };

  const deleteEmployee = async (id) => {
    await API.delete(`/employees/${id}`);
    fetchEmployees();
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  const columns = [
    { header: "Employee ID", accessor: (row) => row.employee_id },
    { header: "Name", accessor: (row) => row.name },
    { header: "Email", accessor: (row) => row.email },
    { header: "Department", accessor: (row) => row.department },
  ];

  return (
    <div>
            <h1 className="text-2xl font-medium text-black-700 mb-6">
  Employees
</h1>
      

      <Table
        columns={columns}
        data={employees}
        onDelete={deleteEmployee}
      />
    </div>
  );
}

export default EmployeeList;