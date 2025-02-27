import React from "react";
import { IoMdArrowRoundBack } from "react-icons/io";

const Header = ({ id, handleGoBack }) => {
  return (
    <header className="mb-6 sm:mb-8 border-b pb-3 sm:pb-4">
      <button
        onClick={handleGoBack}
        className="flex items-center text-blue-600 hover:text-blue-800 mb-3 transition-colors group"
      >
        <IoMdArrowRoundBack className="mr-2 text-xl group-hover:-translate-x-1 transition-transform" />
        <span className="text-sm font-medium">Back to restaurants</span>
      </button>

      <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 break-words">
        Restaurant <span className="text-blue-600">#{id}</span>
      </h1>
      <p className="text-gray-600 mt-1 sm:mt-2 text-sm sm:text-base">
        Add and manage food items for your restaurant
      </p>
    </header>
  );
};

export default Header;
