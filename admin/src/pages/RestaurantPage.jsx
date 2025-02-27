import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useItemStore from "../store/useItemStore";
import Header from "../components/restaurant/Header";
import AddItemForm from "../components/restaurant/AddItemForm";
import FoodItemsList from "../components/restaurant/FoodItemsList";

const RestaurantPage = () => {
  const { getItems, addItems, foodItems, deleteItem } = useItemStore();
  const { id } = useParams();
  const navigate = useNavigate();

  const [newItem, setNewItem] = useState({
    name: "",
    price: "",
    description: "",
    category: "",
    image: null,
    isAvailable: true,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === "file") {
      setNewItem((prev) => ({
        ...prev,
        [name]: files[0],
      }));
    } else {
      setNewItem((prev) => ({
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", newItem.name);
    formData.append("price", newItem.price);
    formData.append("description", newItem.description);
    formData.append("category", newItem.category);
    formData.append("isAvailable", newItem.isAvailable);
    formData.append("restaurant", id);
    if (newItem.image) {
      formData.append("image", newItem.image);
    }

    try {
      const addedItem = await addItems(formData);
    } catch (error) {
      console.error("Error adding item:", error);
    }
  };

  const handleDelete = (itemId) => {
    console.log("Delete item:", itemId);
    deleteItem(itemId);
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    getItems(id);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
      <Header id={id} handleGoBack={handleGoBack} />

      <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
        {/* Add New Item Form */}
        <div className="w-full lg:w-1/3 order-2 lg:order-1">
          <AddItemForm
            newItem={newItem}
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}
          />
        </div>

        {/* Food Items List */}
        <FoodItemsList foodItems={foodItems} handleDelete={handleDelete} />
      </div>
    </div>
  );
};

export default RestaurantPage;
