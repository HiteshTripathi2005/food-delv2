import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useRestaurantStore from "../store/useRestaurantStore";
import useAuthStore from "../store/useAuthStore";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import RestaurantList from "../components/RestaurantList";

const Home = () => {
  const { restaurants, loading, getRestaurants, deleteRestaurant } =
    useRestaurantStore();
  const { logout } = useAuthStore();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const navigate = useNavigate();

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this restaurant?")) {
      console.log("Deleting restaurant with ID: ", id);
      deleteRestaurant(id);
    }
  };

  const handleLogout = () => {
    logout();
  };

  useEffect(() => {
    getRestaurants();
  }, []);

  useEffect(() => {
    if (restaurants) {
      setFilteredRestaurants(
        restaurants.filter(
          (restaurant) =>
            restaurant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            restaurant.cuisine.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }
  }, [searchTerm, restaurants]);

  return (
    <div className="bg-gray-50 min-h-screen">
      <Header
        title="Restaurant Management"
        subtitle="Manage your restaurant portfolio in one place"
        buttonText="Add New Restaurant"
        buttonPath="/add-restaurant"
        onLogout={handleLogout}
      />

      <div className="container mx-auto px-4 py-8">
        <SearchBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          placeholder="Search by restaurant name or cuisine..."
        />

        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold text-gray-800">
              Your Restaurants
            </h2>
            {restaurants && (
              <p className="text-gray-500">
                Showing {filteredRestaurants.length} of {restaurants.length}{" "}
                restaurants
              </p>
            )}
          </div>

          <RestaurantList
            loading={loading}
            restaurants={restaurants}
            filteredRestaurants={filteredRestaurants}
            onDelete={handleDelete}
            searchTerm={searchTerm}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
