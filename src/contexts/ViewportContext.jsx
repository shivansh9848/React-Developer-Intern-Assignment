import React, { createContext, useState } from "react";

export const ViewportContext = createContext();

export const ViewportProvider = ({ children }) => {
  const [viewport, setViewport] = useState({
    x: 0,
    y: 0,
    scale: 1,
    width: 0,
    height: 0,
  });

  return (
    <ViewportContext.Provider value={{ viewport, setViewport }}>
      {children}
    </ViewportContext.Provider>
  );
};
