import React from "react";
import { useNavigate } from "react-router-dom";

const EmptyState = ({
  title = "No data available",
  description = "No data to display",
  showAddButton = false,
  addButtonPath = "/",
  addButtonText = "Add New",
  icon,
}) => {
  const navigate = useNavigate();

  return (
    <div className="text-center py-16 bg-gray-50 rounded-lg border-2 border-dashed border-gray-200">
      {icon || (
        <svg
          className="mx-auto h-16 w-16 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
          />
        </svg>
      )}
      <h3 className="mt-4 text-lg font-medium text-gray-900">{title}</h3>
      <p className="mt-2 text-gray-500 max-w-sm mx-auto">{description}</p>
      {showAddButton && (
        <div className="mt-6">
          <button
            onClick={() => navigate(addButtonPath)}
            className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
          >
            <svg
              className="-ml-1 mr-2 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                clipRule="evenodd"
              />
            </svg>
            {addButtonText}
          </button>
        </div>
      )}
    </div>
  );
};

export default EmptyState;
