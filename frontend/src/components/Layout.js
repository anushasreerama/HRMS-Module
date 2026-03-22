function Layout({ children, setView }) {
  return (
    <div className="flex min-h-screen">

      {/* Sidebar */}
      <div className="w-64 bg-blue-700 text-white p-5 space-y-4">
        <h2 className="text-2xl font-bold mb-6">HRMS</h2>

        <button onClick={() => setView("dashboard")} className="block w-full text-left hover:bg-blue-600 p-2 rounded">
          Dashboard
        </button>

        <button onClick={() => setView("listEmployee")} className="block w-full text-left hover:bg-blue-600 p-2 rounded">
          Employees
        </button>

        <button onClick={() => setView("addAttendance")} className="block w-full text-left hover:bg-blue-600 p-2 rounded">
          Mark Attendance
        </button>

        <button onClick={() => setView("listAttendance")} className="block w-full text-left hover:bg-blue-600 p-2 rounded">
          View Attendance
        </button>
      </div>

      {/* Main */}
<div className="flex-1 bg-gray-100 p-8">
  {children}
</div>
    </div>
  );
}

export default Layout;