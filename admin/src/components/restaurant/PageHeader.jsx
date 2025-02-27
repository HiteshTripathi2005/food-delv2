import React from "react";
import { useNavigate } from "react-router-dom";

const PageHeader = ({ title, subtitle }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-r from-blue-600 to-teal-500 text-white p-6 rounded-t-lg shadow-lg">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">{title}</h1>
          <p className="text-white/80 mt-1">{subtitle}</p>
        </div>
        <button
          onClick={() => navigate("/")}
          className="bg-white text-blue-600 hover:bg-blue-50 font-medium py-2 px-4 rounded-lg transition duration-200 flex items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-1"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z"
              clipRule="evenodd"
            />
          </svg>
          Back to Dashboard
        </button>
      </div>
    </div>
  );
};

export default PageHeader;
