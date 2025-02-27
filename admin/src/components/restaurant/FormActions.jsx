import React from "react";
import { useNavigate } from "react-router-dom";

const FormActions = () => {
  const navigate = useNavigate();

  return (
    <div className="mt-8 pt-6 border-t border-gray-200">
      <div className="flex justify-end space-x-4">
        <button
          type="button"
          onClick={() => navigate("/")}
          className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-3 px-6 rounded-lg transition duration-200"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg shadow-md hover:shadow-lg transition duration-200"
        >
          Add Restaurant
        </button>
      </div>
    </div>
  );
};

export default FormActions;
