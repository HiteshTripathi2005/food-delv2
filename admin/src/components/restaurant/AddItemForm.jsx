import React from "react";

const AddItemForm = ({ newItem, handleInputChange, handleSubmit }) => {
  return (
    <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border border-gray-100">
      <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-gray-800 flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 sm:h-5 sm:w-5 mr-2 text-blue-500"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
            clipRule="evenodd"
          />
        </svg>
        Add New Item
      </h2>
      <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Food Name
          </label>
          <input
            type="text"
            name="name"
            value={newItem.name}
            onChange={handleInputChange}
            placeholder="Enter food name"
            className="p-2 sm:p-3 border border-gray-300 text-sm sm:text-base rounded-md w-full focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Category
          </label>
          <input
            type="text"
            name="category"
            value={newItem.category}
            onChange={handleInputChange}
            placeholder="E.g. Pizza, Burger, Salad"
            className="p-2 sm:p-3 border border-gray-300 text-sm sm:text-base rounded-md w-full focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Price ($)
          </label>
          <input
            type="number"
            name="price"
            value={newItem.price}
            onChange={handleInputChange}
            placeholder="0.00"
            className="p-2 sm:p-3 border border-gray-300 text-sm sm:text-base rounded-md w-full focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            required
            step="0.01"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Description
          </label>
          <textarea
            name="description"
            value={newItem.description}
            onChange={handleInputChange}
            placeholder="Describe the food item"
            rows="2"
            className="p-2 sm:p-3 border border-gray-300 text-sm sm:text-base rounded-md w-full focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Image
          </label>
          <input
            type="file"
            name="image"
            onChange={handleInputChange}
            accept="image/*"
            className="p-2 sm:p-3 border border-gray-300 text-sm sm:text-base rounded-md w-full focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
          />
          {newItem.image && (
            <p className="mt-1 text-sm text-gray-500">
              Selected file: {newItem.image.name}
            </p>
          )}
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            name="isAvailable"
            checked={newItem.isAvailable}
            onChange={handleInputChange}
            id="isAvailable"
            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
          />
          <label
            htmlFor="isAvailable"
            className="ml-2 block text-sm text-gray-700"
          >
            Available for order
          </label>
        </div>
        <button
          type="submit"
          className="mt-2 w-full bg-blue-600 text-white px-4 py-2 sm:py-3 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition transform hover:-translate-y-0.5 text-sm sm:text-base font-medium"
        >
          Add to Menu
        </button>
      </form>
    </div>
  );
};

export default AddItemForm;
