import React from "react";
import { createContext } from "react";
export const CaptainDataContext = createContext();
const CaptainContext = ({ children }) => {
  const [captain, setCaptain] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  const updateCaptain = (captainData) => {
    setCaptain(captainData);
  };

  const value = {
    captain,
    setCaptain,
    error,
    setError,
    loading,
    setLoading,
    updateCaptain,
  };

  return (
    <CaptainDataContext.Provider value={value}>
      {children}
    </CaptainDataContext.Provider>
  );
};

export default CaptainContext;
