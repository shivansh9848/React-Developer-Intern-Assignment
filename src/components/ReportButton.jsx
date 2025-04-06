import { PDFDownloadLink } from "@react-pdf/renderer";
import BloodReportPDF from "./BloodReportPDF";

const sampleData = {
    RBC: [
        { type: "Angled Cells", count: "4.8 million/μL", percent: "95%" },
        { type: "Borderline Ovalocytes", count: "0.2 million/μL", percent: "4%" },
        { type: "Burr Cells", count: "0.05 million/μL", percent: "1%" },
        { type: "Fragmented Cells", count: "0.01 million/μL", percent: "0.2%" },
        { type: "Ovalocytes", count: "0.02 million/μL", percent: "0.4%" },
        { type: "Rounded RBC", count: "0.03 million/μL", percent: "0.6%" },
        { type: "Teardrops", count: "0.01 million/μL", percent: "0.2%" },
    ],
    WBC: [
        { type: "Neutrophils", count: "3,000/μL", percent: "60%" },
        { type: "Lymphocytes", count: "1,500/μL", percent: "30%" },
        { type: "Monocytes", count: "300/μL", percent: "6%" },
        { type: "Eosinophils", count: "150/μL", percent: "3%" },
        { type: "Basophils", count: "50/μL", percent: "1%" },
    ],
    Platelets: { count: "250,000/μL", percent: "100%" },
};
const patientInfo = {
    name: "John Doe",
    age: "45",
    date: new Date().toLocaleDateString(),
};

const doctorNotes =
    "Patient shows slightly elevated WBC count. Recommend follow-up tests for possible infection. RBC parameters are within normal limits.";


const ReportButton = () => (
    <div className="report-button-container mt-4 fixed bottom-4 right-4">
        <PDFDownloadLink
            document={<BloodReportPDF data={sampleData} patientInfo={patientInfo} doctorNotes={doctorNotes} />}
            fileName="blood_report.pdf"
        >
            {({ loading }) =>
                <button className="cursor-pointer bg-red-500 text-white px-4 py-2 rounded shadow hover:bg-red-400">
                    {loading ? "Generating PDF..." : "Download Report"}
                </button>
            }
        </PDFDownloadLink>
    </div>
);

export default ReportButton;
