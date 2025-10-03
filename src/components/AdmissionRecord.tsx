import React, { useState } from "react";

const AdmissionRecord = () => {
  const [dropdownOpen, setDropdownOpen] = useState(null);

  const cards = [
    { title: "Total Applications", value: "1250" },
    { title: "Pending", value: "350" },
    { title: "Approved", value: "700" },
    { title: "Rejected", value: "200" },
    { title: "Seats Filled", value: "700/1000" },
  ];

  const applications = [
    { id: "1023457", name: "Aarav Sharma", course: "CSE(BTECH)", status: "Approved", color: "green" },
    { id: "1023489", name: "Ananya Mehta", course: "CSE(BTECH)", status: "Rejected", color: "red" },
    { id: "1023526", name: "Rohan Kapoor", course: "CSE(BTECH)", status: "Pending", color: "purple" },
    { id: "1023562", name: "Priya Nair", course: "CSE(BTECH)", status: "Approved", color: "green" },
    { id: "1023598", name: "Kavya Iyer", course: "CSE(BTECH)", status: "Pending", color: "purple" },
  ];

  const getStatusClass = (color) => {
    const map = {
      green: "bg-green-100 text-green-800",
      red: "bg-red-100 text-red-800",
      purple: "bg-purple-100 text-purple-800",
      yellow: "bg-yellow-100 text-yellow-800",
      cyan: "bg-cyan-100 text-cyan-800",
    };
    return map[color] || "bg-gray-100 text-gray-800";
  };

  const toggleDropdown = (id) => {
    setDropdownOpen(dropdownOpen === id ? null : id);
  };

  return (
    <div className="min-h-screen w-full bg-gray-50 m-0 p-0">
      <div className="w-full px-6 py-6 md:px-8">
        {/* Page Heading */}
        <div className="mb-4">
          <h2 className="text-xl font-bold text-gray-800">Admissions Overview</h2>
        </div>

        {/* Cards */}
        <div className="flex flex-wrap gap-4 mb-8">
          {cards.map((card) => (
            <div key={card.title} className="bg-white p-4 rounded-lg flex-1 min-w-36 shadow-sm border border-gray-100">
              <div className="text-gray-500 text-sm mb-2">{card.title}</div>
              <div className="text-gray-800 text-2xl font-bold">{card.value}</div>
            </div>
          ))}
        </div>

        {/* Table */}
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="px-3 py-3 text-left text-gray-500 text-sm font-medium">ID</th>
                  <th className="px-3 py-3 text-left text-gray-500 text-sm font-medium">Name</th>
                  <th className="px-3 py-3 text-left text-gray-500 text-sm font-medium">Course</th>
                  <th className="px-3 py-3 text-left text-gray-500 text-sm font-medium">Status</th>
                  <th className="px-3 py-3 text-left text-gray-500 text-sm font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {applications.map((app) => (
                  <tr key={app.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-3 py-3 text-gray-800">{app.id}</td>
                    <td className="px-3 py-3 text-gray-800">{app.name}</td>
                    <td className="px-3 py-3 text-gray-800">{app.course}</td>
                    <td className="px-3 py-3">
                      <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${getStatusClass(app.color)}`}>
                        {app.status}
                      </span>
                    </td>
                    <td className="px-3 py-3 relative">
                      <button
                        className="bg-transparent border-0 cursor-pointer text-lg p-1 hover:bg-gray-100 rounded transition-colors"
                        onClick={() => toggleDropdown(app.id)}
                      >
                        ⋮
                      </button>
                      {dropdownOpen === app.id && (
                        <div className="absolute top-full right-0 bg-white border border-gray-200 rounded-md flex flex-col z-10 shadow-lg min-w-20">
                          <button className="px-2.5 py-2 border-0 bg-transparent cursor-pointer text-base hover:bg-gray-50 transition-colors">
                            👁
                          </button>
                          <button className="px-2.5 py-2 border-0 bg-transparent cursor-pointer text-base hover:bg-gray-50 transition-colors">
                            🗑
                          </button>
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center mt-4 text-gray-500 text-sm gap-4">
            <span>Showing 1 to 5 of 1250 results</span>
            <div className="flex gap-2">
              <button className="px-3 py-1.5 border border-gray-200 rounded bg-white cursor-pointer hover:bg-gray-50 transition-colors">
                Previous
              </button>
              <button className="px-3 py-1.5 border border-gray-200 rounded bg-white cursor-pointer hover:bg-gray-50 transition-colors">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdmissionRecord;
