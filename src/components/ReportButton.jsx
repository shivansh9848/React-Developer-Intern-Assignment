import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const ReportButton = () => {
  const handleReportClick = async () => {
    const input = document.getElementById("report-content");

    if (!input) {
      alert("No report content found.");
      return;
    }

    const canvas = await html2canvas(input);
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");
    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("blood_report.pdf");
  };

  return (
    <div className="fixed bottom-4 right-4">
      <button
        onClick={handleReportClick}
        className="bg-red-600 text-white px-6 py-2 rounded-lg shadow hover:bg-red-700 transition cursor-pointer"
      >
        📄 Generate Report
      </button>
    </div>
  );
};

export default ReportButton;
