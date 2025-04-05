import React, { Component, useState, useEffect } from "react";
import image1 from "@/assets/images/image1.png";
import { TransformWrapper, TransformComponent, useControls } from "react-zoom-pan-pinch";
import WSIImage from "./WSIImage";
import outputData from "@/assets/output.json";
const Controls = () => {
    const { zoomIn, zoomOut, resetTransform } = useControls();

    return (
        <div className="tools">
            <button onClick={() => zoomIn()}>+</button>
            <button onClick={() => zoomOut()}>-</button>
            <button onClick={() => resetTransform()}>x</button>
        </div>
    );
};

const CenterView = () => {
    const [detections, setDetections] = useState([]);
    useEffect(() => {
        try {
            const f=JSON.parse(outputData.inference_results.replace(/'/g, '"'));
            setDetections(f.output.detection_results);
        } catch (err) {
            console.error("Parsing error:", err);
        }
    }, []);
    return (
        <TransformWrapper
            initialScale={1}
            initialPositionX={200}
            initialPositionY={100}
        >
                <>
                    <Controls />
                    <TransformComponent>
                        <div className="relative bg-gray-200 p-4 w-full h-full overflow-hidden">
                            <WSIImage imageSrc={image1} detections={detections} />
                        </div>
                    </TransformComponent>
                </>
        </TransformWrapper>
    );
};

export default CenterView;