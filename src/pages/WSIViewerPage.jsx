import Header from "@/components/Header.jsx";
import LeftPanel from "@/components/LeftPanel.jsx";
import CenterView from "@/components/CenterView.jsx";
import RightPanel from "@/components/RightPanel.jsx";
import ReportButton from "@/components/ReportButton.jsx";
export default function WSIViewerPage() {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="grid grid-cols-12 w-full flex-grow">
          <div className="col-span-3 bg-gray-100 p-4">
            <LeftPanel />
          </div>
          <div className="col-span-7 p-4 overflow-hidden">
            <CenterView />
          </div>
          <div className="col-span-2 bg-gray-100 p-4">
            <RightPanel />
          </div>
        </div>
        <ReportButton />
      </div>
    );
  }
  
 