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
    id: "P123456",
    name: "John Doe",
    gender: "Male",
    birthDate: "1985-07-24",
    contact: {
        phone: "+1-555-123-4567",
        email: "johndoe@example.com"
    },
    address: {
        line: ["123 Main St"],
        city: "Anytown",
        state: "CA",
        postalCode: "90210",
        country: "USA"
    },
    maritalStatus: "Married",
    language: "English",
    race: "Caucasian",
    ethnicity: "Non-Hispanic",
    bloodType: "O+"
};

const ReportButton = () => (
    <div className="report-button-container mt-4 fixed bottom-4 right-4">
        <PDFDownloadLink
            document={<BloodReportPDF data={sampleData} patientInfo={patientInfo} />}
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
