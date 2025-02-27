import React from "react";

const AddressForm = ({ address, handleAddressChange }) => {
  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-800 pb-2 border-b border-gray-200 mb-4">
        Address Details
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Street Address
          </label>
          <input
            type="text"
            name="street"
            value={address.street}
            onChange={handleAddressChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            placeholder="Enter street address"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-2">City</label>
          <input
            type="text"
            name="city"
            value={address.city}
            onChange={handleAddressChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            placeholder="Enter city"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            State/Province
          </label>
          <input
            type="text"
            name="state"
            value={address.state}
            onChange={handleAddressChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            placeholder="Enter state"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Zip/Postal Code
          </label>
          <input
            type="text"
            name="zipCode"
            value={address.zipCode}
            onChange={handleAddressChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            placeholder="Enter zip code"
            required
          />
        </div>
        <div className="md:col-span-2">
          <label className="block text-gray-700 font-medium mb-2">
            Country
          </label>
          <input
            type="text"
            name="country"
            value={address.country}
            onChange={handleAddressChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            placeholder="Enter country"
            required
          />
        </div>
      </div>
    </div>
  );
};

export default AddressForm;
