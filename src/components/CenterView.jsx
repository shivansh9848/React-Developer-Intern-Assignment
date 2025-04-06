import React, { useState, useEffect, useContext, useRef } from "react";
import {
    TransformWrapper,
    TransformComponent,
} from "react-zoom-pan-pinch";
import { ViewportContext } from "@/contexts/ViewportContext";
import WSIImage from "./WSIImage";
import image1 from "@/assets/images/image1.png";
import outputData from "@/assets/output.json";
import Controls from "./Controls";

const CenterView = () => {
    const [detections, setDetections] = useState([]);
    const { setViewport } = useContext(ViewportContext);
    const containerRef = useRef(null);

    useEffect(() => {
        try {
            const f = JSON.parse(
                outputData.inference_results.replace(/'/g, '"')
            );
            setDetections(f.output.detection_results);
        } catch (err) {
            console.error("Parsing error:", err);
        }
    }, []);

    const updateViewport = (state) => {
        if (containerRef.current) {
            const { clientWidth, clientHeight } = containerRef.current;
            setViewport({
                x: state.positionX,
                y: state.positionY,
                scale: state.scale,
                width: clientWidth,
                height: clientHeight,
            });
        }
    };

    return (
        <div ref={containerRef} className="w-full h-full relative">
          <TransformWrapper
            initialScale={0.8}
            minScale={0.5}
            maxScale={5}
            initialPositionX={100}
            initialPositionY={100}
            minPositionX={-200}
            maxPositionX={200}
            minPositionY={-100}
            maxPositionY={100}
            wheel={{ disabled: false, step: 0.000001 }}
            limitToBounds={false}
            zoomAnimation={{ disabled: false }}
            alignmentAnimation={{ disabled: true }}
            zoomAnimationDuration={1000}
            onPanningStop={({ state }) => updateViewport(state)}
            onZoomStop={({ state }) => updateViewport(state)}
          >
            <Controls />
      
            <TransformComponent>
              <div className="relative bg-gray-200 w-full h-full">
                <WSIImage imageSrc={image1} detections={detections} />
              </div>
            </TransformComponent>
          </TransformWrapper>
        </div>
      );
      
};

export default CenterView;
