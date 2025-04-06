# 🌜 Blood Report Viewer

A modern and interactive medical Whole Slide Image Viewer built using **React** and **Tailwind css**, featuring image zoom/pan capabilities, styled data panels, and **PDF report generation** using `@react-pdf/renderer`.

## 🔍 Features

- 🗉️ **High-resolution image viewer** with zoom and pan using `react-zoom-pan-pinch`
- 📊 **Interactive left panel** displaying detailed blood report data
- 📃 **PDF generation** of the blood report for download/printing
- 🧠 Real-time viewport tracking for better UX
- 🎨 Clean and responsive UI built with Tailwind CSS and Lucide Icons

---

## 📁 Project Structure

```
src/
├── assets/            # Images and static assets
├── components/
│   ├── CenterView.jsx     # Image viewer with zoom/pan
│   ├── LeftPanel.jsx      # Report panel showing RBC, WBC, Platelets
│   ├── ReportButton.jsx   # PDF report generator button
│   ├── Header.jsx         # App header with branding and timestamp
│   ├── BloodReportPDF.jsx # PDF document layout using @react-pdf/renderer
│   └── WSIImage.jsx       # Internal image + annotation logic
├── contexts/
│   └── ViewportContext.js # Shared state for zoom/pan viewport
├── App.jsx
└── main.jsx
```

---

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/shivansh9848/React-Developer-Intern-Assignment.git
cd blood-report-viewer
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

Open your browser at `http://localhost:5173` to view the app.

---

## 🧪 Sample Data

- **RBC Types:** Angled Cells, Ovalocytes, Burr Cells, etc.
- **WBC Types:** Neutrophils, Lymphocytes, etc.
- **Platelets:** Count and Percentage
- Includes realistic mock patient info and diagnosis results.

---

## 📄 PDF Generation

Click the **"Report"** button to generate and download a printable PDF summary of the blood report. The PDF includes:

- Structured sections (RBC, WBC, Platelets)
- Patient Info (Name, Age, Gender, Report Date, etc.)
- Clean, medical-friendly layout using React PDF

---

## 🛠️ Built With

- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [@react-pdf/renderer](https://react-pdf.org/)
- [react-zoom-pan-pinch](https://www.npmjs.com/package/react-zoom-pan-pinch)
- [Lucide Icons](https://lucide.dev/)

---


