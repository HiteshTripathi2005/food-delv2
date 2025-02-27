import React from "react";

const RestaurantInfoForm = ({
  formData,
  handleInputChange,
  handleImageChange,
  previewImage,
  fileInputRef,
}) => {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold text-gray-800 pb-2 border-b border-gray-200 mb-4">
        Restaurant Information
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Restaurant Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            placeholder="Enter restaurant name"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Phone Number
          </label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            placeholder="Enter phone number"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Cuisine Type
          </label>
          <input
            type="text"
            name="cuisine"
            value={formData.cuisine}
            onChange={handleInputChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            placeholder="e.g., Italian, Indian, Japanese"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Restaurant Image
          </label>
          <div
            onClick={() => fileInputRef.current.click()}
            className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center cursor-pointer hover:bg-gray-50 transition"
          >
            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              onChange={handleImageChange}
              className="hidden"
            />
            {previewImage ? (
              <div className="flex flex-col items-center">
                <img
                  src={previewImage}
                  alt="Preview"
                  className="h-32 object-cover rounded mb-2"
                />
                <span className="text-sm text-blue-600">
                  Click to change image
                </span>
              </div>
            ) : (
              <div className="flex flex-col items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
                <span className="mt-2 text-gray-600">
                  Click to upload image
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantInfoForm;
