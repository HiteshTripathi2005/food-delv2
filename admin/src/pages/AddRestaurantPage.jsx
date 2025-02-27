import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import useRestaurantStore from "../store/useRestaurantStore";

// Import components
import PageHeader from "../components/restaurant/PageHeader";
import RestaurantInfoForm from "../components/restaurant/RestaurantInfoForm";
import AddressForm from "../components/restaurant/AddressForm";
import FormActions from "../components/restaurant/FormActions";

const AddRestaurantPage = () => {
  const navigate = useNavigate();
  const { addRestaurant } = useRestaurantStore();
  const fileInputRef = useRef(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    cuisine: "",
    image: "",
    address: {
      street: "",
      city: "",
      state: "",
      zipCode: "",
      country: "",
    },
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      address: { ...formData.address, [name]: value },
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, image: file });
      // Create a preview URL
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newData = new FormData();
    newData.append("name", formData.name);
    newData.append("phone", formData.phone);
    newData.append("cuisine", formData.cuisine);
    newData.append("image", formData.image);
    newData.append("address", JSON.stringify(formData.address));

    addRestaurant(newData, navigate);
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <PageHeader
        title="Add New Restaurant"
        subtitle="Enter the details to register a new restaurant"
      />

      <div className="bg-white rounded-b-lg shadow-lg p-8">
        <form onSubmit={handleSubmit}>
          <RestaurantInfoForm
            formData={formData}
            handleInputChange={handleInputChange}
            handleImageChange={handleImageChange}
            previewImage={previewImage}
            fileInputRef={fileInputRef}
          />

          <AddressForm
            address={formData.address}
            handleAddressChange={handleAddressChange}
          />

          <FormActions />
        </form>
      </div>
    </div>
  );
};

export default AddRestaurantPage;
