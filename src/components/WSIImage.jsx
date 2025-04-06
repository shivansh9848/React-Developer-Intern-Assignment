import React, { useRef, useState, useEffect } from "react";

const WSIImage = ({ imageSrc, detections }) => {
    const imgRef = useRef(null);
    const [scale, setScale] = useState({ scaleX: 1, scaleY: 1 });

    const updateScale = () => {
        if (imgRef.current) {
            const naturalWidth = imgRef.current.naturalWidth;
            const naturalHeight = imgRef.current.naturalHeight;
            const displayedWidth = imgRef.current.clientWidth;
            const displayedHeight = imgRef.current.clientHeight;
            const scaleX = displayedWidth / naturalWidth;
            const scaleY = displayedHeight / naturalHeight;
            setScale({ scaleX, scaleY });
        }
    };

    // When the image loads, calculate the initial scale
    const handleImageLoad = () => {
        updateScale();
    };

    useEffect(() => {
        // Create a ResizeObserver to observe the image element
        const observer = new ResizeObserver(() => {
            updateScale();
        });
        if (imgRef.current) {
            observer.observe(imgRef.current);
        }
        // Clean up observer on unmount
        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <div className="relative w-full h-full">
            <img
                ref={imgRef}
                src={imageSrc}
                alt="WSI"
                className="w-full h-full object-contain rounded-lg shadow-lg"
                onLoad={handleImageLoad}
            />


            {detections.map(([x_min, y_min, x_max, y_max, label], index) => (
                <div
                    key={index}
                    className="absolute border-2 border-blue-500 text-xs text-white px-1 rounded"
                    style={{
                        left: `${x_min * scale.scaleX}px`,
                        top: `${y_min * scale.scaleY}px`,
                        width: `${(x_max - x_min) * scale.scaleX}px`,
                        height: `${(y_max - y_min) * scale.scaleY}px`,
                    }}
                >
                </div>
            ))}
        </div>
    );
};

export default WSIImage;
