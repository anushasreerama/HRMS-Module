import React, { useState } from "react";

// Layout & Dashboard
import Layout from "./components/Layout";
import Dashboard from "./components/Dashboard";

// Employee
import EmployeeForm from "./components/EmployeeForm";
import EmployeeList from "./components/EmployeeList";

// Attendance
import AttendanceForm from "./components/AttendanceForm";
import AttendanceList from "./components/AttendanceList";

function App() {
  const [view, setView] = useState("dashboard");

  return (
    <Layout setView={setView}>
      {view === "dashboard" && <Dashboard setView={setView} />}

      {view === "addEmployee" && <EmployeeForm />}
      {view === "listEmployee" && <EmployeeList />}

      {view === "addAttendance" && <AttendanceForm />}
      {view === "listAttendance" && <AttendanceList />}
    </Layout>
  );
}

export default App;