// rightpanel.jsx
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

  // When the thumbnail loads, store its dimensions and the natural image size.
  const handleThumbLoad = (e) => {
    const { width, height, naturalWidth, naturalHeight } = e.target;
    setThumbDims({ width, height });
    setImageNaturalDims({ width: naturalWidth, height: naturalHeight });
  };

  // Compute scaling factor for thumbnail relative to the original image.
  const scaleFactorX = thumbDims.width / imageNaturalDims.width || 1;
  const scaleFactorY = thumbDims.height / imageNaturalDims.height || 1;

  // Compute the viewport bounding box on the thumbnail.
  // This calculation assumes that the center view displays the image at 1:1 relative to the original image.
  // If the center view applies additional scaling, you might need to adjust accordingly.
  const boxLeft = -viewport.x * scaleFactorX;
  const boxTop = -viewport.y * scaleFactorY;
  const boxWidth = (viewport.width / viewport.scale) * scaleFactorX;
  const boxHeight = (viewport.height / viewport.scale) * scaleFactorY;

  return (
    <div className="right-panel relative">
      <div className="hub-view relative">
        
        {/* Thumbnail image */}
        <img
          ref={thumbRef}
          src={image}
          alt="WSI thumbnail"
          onLoad={handleThumbLoad}
          className="w-full object-contain"
        />
        {/* Overlay box representing the center view’s visible area */}
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
