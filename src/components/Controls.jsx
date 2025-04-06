import {
    useControls,
} from "react-zoom-pan-pinch";
import { ZoomIn, ZoomOut, RotateCcw } from "lucide-react"; // Lucide icons (optional)

const Controls = () => {
    const { zoomIn, zoomOut, resetTransform } = useControls();

    return (
        <div className="absolute top-2 right-2 z-30 flex gap-2 pointer-events-auto">
            <button
                onClick={()=>zoomIn()}
                className="bg-white p-2 rounded shadow hover:bg-gray-100 cursor-pointer"
                title="Zoom In"
            >
                <ZoomIn size={16} />
            </button>
            <button
                onClick={()=>zoomOut()}
                className="bg-white p-2 rounded shadow hover:bg-gray-100 cursor-pointer"
                title="Zoom Out"
            >
                <ZoomOut size={16} />
            </button>
            <button
                onClick={()=>resetTransform()}
                className="bg-white p-2 rounded shadow hover:bg-gray-100 cursor-pointer"
                title="Reset"
            >
                <RotateCcw size={16} />
            </button>
        </div>
    );
};
export default Controls;