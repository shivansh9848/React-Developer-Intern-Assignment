import React from "react";

const bloodReport = {
  RBC: [
    { type: "Angled Cells", count: 222, percent: "67%" },
    { type: "Borderline Ovalocytes", count: 50, percent: "20%" },
    { type: "Burr Cells", count: 87, percent: "34%" },
    { type: "Fragmented Cells", count: 2, percent: "0.12%" },
    { type: "Ovalocytes", count: "-", percent: "-" },
    { type: "Rounded RBC", count: "-", percent: "-" },
    { type: "Teardrops", count: "-", percent: "-" },
  ],
  WBC: [
    { type: "Basophil", count: 222, percent: "67%" },
    { type: "Eosinophil", count: 50, percent: "20%" },
    { type: "Lymphocyte", count: 87, percent: "34%" },
    { type: "Monocyte", count: 2, percent: "0.12%" },
  ],
  Platelets: {
    count: 222,
    percentage: "222",
  },
};

const CellSection = ({ title, data, color }) => (
  <div className={`p-4 rounded-md shadow border-l-4 ${color.bg} ${color.border}`}>
    <h3 className={`text-lg font-semibold mb-2 ${color.text}`}>{title}</h3>
    <div className="space-y-1 text-sm">
      {data.map((item, idx) => (
        <div key={idx} className="flex justify-between text-gray-700">
          <span>{item.type}</span>
          <span>{item.count} ({item.percent})</span>
        </div>
      ))}
    </div>
  </div>
);

const LeftPanel = () => {
  return (
    <div className="bg-white shadow-md p-4 w-full h-full overflow-y-auto rounded-md space-y-4">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">🧪 Detailed Blood Report</h2>

      <CellSection
        title="Red Blood Cells (RBC)"
        data={bloodReport.RBC}
        color={{ bg: "bg-red-50", border: "border-red-400", text: "text-red-800" }}
      />
      <CellSection
        title="White Blood Cells (WBC)"
        data={bloodReport.WBC}
        color={{ bg: "bg-blue-50", border: "border-blue-400", text: "text-blue-800" }}
      />
      <div className="p-4 rounded-md shadow border-l-4 bg-yellow-50 border-yellow-400">
        <h3 className="text-lg font-semibold text-yellow-800 mb-2">Platelets</h3>
        <p className="text-gray-700 text-sm">Count: <span className="font-bold">{bloodReport.Platelets.count}</span></p>
        <p className="text-gray-700 text-sm">Percentage: {bloodReport.Platelets.percentage}</p>
      </div>
    </div>
  );
};

export default LeftPanel;
