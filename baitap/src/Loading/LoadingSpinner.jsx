import React, { useState } from "react";
import HashLoader from "react-spinners/HashLoader";
import "./loading.scss";
const LoadingSpinner = () => {
  const [isLoading, setIsloading] = useState(true);
  return (
    <div className="Loading_Spinner">
      <HashLoader
        color={"red"}
        loading={isLoading}
        size={100}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default LoadingSpinner;
