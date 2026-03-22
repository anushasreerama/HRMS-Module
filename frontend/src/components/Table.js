function Table({ columns, data, onDelete }) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white rounded-xl shadow-md overflow-hidden">

        {/* Header */}
        <thead className="bg-blue-600 text-white">
          <tr>
            {columns.map((col, i) => (
              <th key={i} className="px-6 py-3 text-left text-sm font-semibold">
                {col.header}
              </th>
            ))}
            {onDelete && <th className="px-6 py-3">Action</th>}
          </tr>
        </thead>

        {/* Body */}
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan={columns.length + 1} className="text-center py-6">
                No data available
              </td>
            </tr>
          ) : (
            data.map((row, i) => (
              <tr
                key={i}
                className="border-b hover:bg-gray-50 transition"
              >
                {columns.map((col, j) => (
                  <td key={j} className="px-6 py-4 text-sm text-gray-700">
                    {col.accessor(row)}
                  </td>
                ))}

                {/* Delete Button */}
                {onDelete && (
                  <td className="px-6 py-4">
                    <button
                      onClick={() => onDelete(row.id)}
                      className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </td>
                )}
              </tr>
            ))
          )}
        </tbody>

      </table>
    </div>
  );
}

export default Table;