import React from "react";
import EmployeeForm from "./components/EmployeeForm";
import EmployeeList from "./components/EmployeeList";
import AttendanceForm from "./components/AttendanceForm";
import AttendanceList from "./components/AttendanceList";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>HRMS Lite</h1>

      <EmployeeForm refresh={() => window.location.reload()} />
      <EmployeeList />

      <hr />

      <AttendanceForm />
      <AttendanceList />
    </div>
  );
}

export default App;