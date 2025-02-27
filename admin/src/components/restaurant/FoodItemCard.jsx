import React from "react";

const FoodItemCard = ({ item, onDelete }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition duration-300">
      {item.image && (
        <div className="h-40 overflow-hidden">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <div className="p-4">
        <div className="flex flex-wrap justify-between items-start gap-2">
          <div>
            <h3 className="font-semibold text-base sm:text-lg text-gray-800">
              {item.name}
            </h3>
            <span className="text-xs text-gray-500">{item.category}</span>
          </div>
          <span className="bg-green-100 text-green-800 text-xs sm:text-sm font-medium px-2.5 py-0.5 rounded-full whitespace-nowrap">
            ${item.price.toFixed(2)}
          </span>
        </div>
        <p className="text-gray-600 mt-1 sm:mt-2 text-xs sm:text-sm line-clamp-2">
          {item.description}
        </p>
        <div className="mt-2 flex items-center">
          <span
            className={`inline-block w-2 h-2 rounded-full mr-1 ${
              item.isAvailable ? "bg-green-500" : "bg-red-500"
            }`}
          ></span>
          <span className="text-xs text-gray-600">
            {item.isAvailable ? "Available" : "Not Available"}
          </span>
        </div>
        <div className="mt-3 sm:mt-4 flex justify-between items-center">
          <span className="text-xs text-gray-500">
            Added: {new Date(item.createdAt).toLocaleDateString()}
          </span>
          <button
            onClick={() => onDelete(item._id)}
            className="flex items-center text-red-600 hover:text-red-800 text-xs sm:text-sm font-medium transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3 sm:h-4 sm:w-4 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodItemCard;
