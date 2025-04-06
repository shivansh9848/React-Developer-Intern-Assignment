import React, { useContext, useRef, useEffect, useState } from "react";
import image from "@/assets/images/image1.png";
import { ViewportContext } from "@/contexts/ViewportContext";

const RightPanel = () => {
  const patient = {
    id: "1234",
    bloodType: "O+",
  };

  const { viewport } = useContext(ViewportContext);
  const thumbRef = useRef(null);
  const [thumbDims, setThumbDims] = useState({ width: 0, height: 0 });
  const [imageNaturalDims, setImageNaturalDims] = useState({ width: 0, height: 0 });

  const handleThumbLoad = (e) => {
    const { width, height, naturalWidth, naturalHeight } = e.target;
    setThumbDims({ width, height });
    setImageNaturalDims({ width: naturalWidth, height: naturalHeight });
  };

  const scaleFactorX = thumbDims.width / imageNaturalDims.width || 1;
  const scaleFactorY = thumbDims.height / imageNaturalDims.height || 1;

 
  const boxLeft = -viewport.x * scaleFactorX;
  const boxTop = -viewport.y * scaleFactorY;
  const boxWidth = (viewport.width / viewport.scale) * scaleFactorX;
  const boxHeight = (viewport.height / viewport.scale) * scaleFactorY;

  return (
    <div className="right-panel relative">
      <div className="hub-view relative">
        
        <img
          ref={thumbRef}
          src={image}
          alt="WSI thumbnail"
          onLoad={handleThumbLoad}
          className="w-full object-contain"
        />
        <div
          className="absolute border-2 border-blue-500 pointer-events-none"
          style={{
            left: `${boxLeft}px`,
            top: `${boxTop}px`,
            width: `${boxWidth}px`,
            height: `${boxHeight}px`,
          }}
        />
      </div>
      <div className="patient-info mt-2">
        <p>Patient ID: {patient.id}</p>
        <p>Blood Type: {patient.bloodType}</p>
      </div>
    </div>
  );
};

export default RightPanel;
