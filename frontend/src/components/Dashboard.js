import { FaUserPlus, FaUsers, FaClipboardCheck, FaChartBar } from "react-icons/fa";
function Dashboard({ setView }) {
  const cards = [
    {
      title: "Add Employee",
      view: "addEmployee",
      icon: <FaUserPlus size={28} className="text-blue-600" />,
    },
    {
      title: "View Employees",
      view: "listEmployee",
      icon: <FaUsers size={28} className="text-green-600" />,
    },
    {
      title: "Mark Attendance",
      view: "addAttendance",
      icon: <FaClipboardCheck size={28} className="text-purple-600" />,
    },
    {
      title: "View Attendance",
      view: "listAttendance",
      icon: <FaChartBar size={28} className="text-orange-600" />,
    },
  ];

  return (
    <div>
      <h1 className="text-2xl font-medium text-black-700 mb-6">
  Dashboard
</h1>

      <div className="grid md:grid-cols-2 gap-6">
        {cards.map((c, i) => (
          <div
            key={i}
            onClick={() => setView(c.view)}
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg hover:scale-[1.03] transition cursor-pointer flex items-center gap-4"
          >
            {/* Icon */}
            <div className="bg-gray-100 p-3 rounded-lg">
              {c.icon}
            </div>

            {/* Text */}
            <h2 className="text-base font-medium text-black-600">
  {c.title}
</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;