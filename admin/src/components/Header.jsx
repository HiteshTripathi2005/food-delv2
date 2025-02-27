import React from "react";
import { useNavigate } from "react-router-dom";

const Header = ({ title, subtitle, buttonText, buttonPath, onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
  };

  return (
    <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold">{title}</h1>
            <p className="mt-2 text-blue-100">{subtitle}</p>
          </div>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <button
              onClick={handleLogout}
              className="bg-transparent text-white hover:bg-blue-700 font-medium py-2 px-4 rounded-lg transition duration-200 flex items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>
              Logout
            </button>

            {buttonText && (
              <button
                className="bg-white text-blue-600 hover:bg-blue-50 font-medium py-2 px-6 rounded-lg shadow-md transition duration-200 flex items-center"
                onClick={() => navigate(buttonPath)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                </svg>
                {buttonText}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
