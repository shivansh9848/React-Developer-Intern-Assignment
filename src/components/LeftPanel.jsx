import React from "react";

const bloodReport = {
  RBC: { count: "4.7M/μL", percent: "95%" },
  WBC: {
    total: "6.5K/μL",
    breakdown: [
      { type: "Neutrophils", count: "4.0K", percent: "60%" },
      { type: "Lymphocytes", count: "1.5K", percent: "23%" },
      { type: "Monocytes", count: "0.5K", percent: "10%" },
      { type: "Eosinophils", count: "0.3K", percent: "5%" },
      { type: "Basophils", count: "0.2K", percent: "2%" },
    ]
  },
  Platelets: { count: "250K/μL", status: "Normal" }
};

const LeftPanel = () => {
  return (
    <div className="bg-white shadow-md p-4 w-full h-full overflow-y-auto rounded-md">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">🧪 Blood Report</h2>

      <div className="space-y-3">
        {/* RBC */}
        <div className="bg-red-50 p-3 rounded-md shadow">
          <h3 className="text-sm font-semibold text-red-800">RBC</h3>
          <p className="text-gray-700">Count: <span className="font-bold">{bloodReport.RBC.count}</span></p>
          <p className="text-gray-700">Percent: {bloodReport.RBC.percent}</p>
        </div>

        {/* WBC */}
        <div className="bg-blue-50 p-3 rounded-md shadow">
          <h3 className="text-sm font-semibold text-blue-800">WBC</h3>
          <p className="text-gray-700">Total: <span className="font-bold">{bloodReport.WBC.total}</span></p>
          <div className="mt-2 space-y-1">
            {bloodReport.WBC.breakdown.map((cell, idx) => (
              <div key={idx} className="text-sm flex justify-between text-gray-700">
                <span>{cell.type}</span>
                <span>{cell.count} ({cell.percent})</span>
              </div>
            ))}
          </div>
        </div>

        {/* Platelets */}
        <div className="bg-yellow-50 p-3 rounded-md shadow">
          <h3 className="text-sm font-semibold text-yellow-800">Platelets</h3>
          <p className="text-gray-700">Count: <span className="font-bold">{bloodReport.Platelets.count}</span></p>
          <p className="text-gray-700">Status: {bloodReport.Platelets.status}</p>
        </div>
      </div>
    </div>
  );
};

export default LeftPanel;
