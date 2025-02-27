import React from "react";
import FoodItemCard from "./FoodItemCard";

const FoodItemsList = ({ foodItems = [], handleDelete }) => {
  const items = Array.isArray(foodItems) ? foodItems : [];

  return (
    <div className="w-full lg:w-2/3 order-1 lg:order-2">
      <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-gray-800 flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 sm:h-5 sm:w-5 mr-2 text-green-500"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
          <path
            fillRule="evenodd"
            d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
            clipRule="evenodd"
          />
        </svg>
        Current Menu Items ({items.length})
      </h2>

      {items.length === 0 ? (
        <div className="text-center p-6 bg-gray-50 rounded-lg border border-dashed border-gray-300">
          <p className="text-gray-500 text-sm sm:text-base">
            No food items added yet. Create your first menu item!
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          {items.map((item) => (
            <FoodItemCard key={item._id} item={item} onDelete={handleDelete} />
          ))}
        </div>
      )}
    </div>
  );
};

export default FoodItemsList;
