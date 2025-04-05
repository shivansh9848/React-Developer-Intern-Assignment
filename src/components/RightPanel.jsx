import image from "@/assets/images/image1.png"; // Path to your thumbnail image
const RightPanel=()=> {
    const patient = {
      id: "1234",
      bloodType: "O+",
    };
  
    return (
      <div className="right-panel">
        <div className="hub-view">
          {/* A smaller thumbnail or scaled version of the WSI */}
          <img src={image} alt="WSI thumbnail" />
          {/* Indicate viewport bounding box or pointer here */}
        </div>
        <div className="patient-info">
          <p>Patient ID: {patient.id}</p>
          <p>Blood Type: {patient.bloodType}</p>
        </div>
      </div>
    );
  }
  export default RightPanel;