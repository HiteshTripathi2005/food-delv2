import React from "react";
import SyncLoader from "react-spinners/SyncLoader";

const LoadingState = ({ color = "#3B82F6", size = 15 }) => {
  return (
    <div className="flex justify-center items-center py-20">
      <SyncLoader color={color} size={size} />
    </div>
  );
};

export default LoadingState;
