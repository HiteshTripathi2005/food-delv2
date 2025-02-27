import React from "react";
import RestaurantCard from "./RestaurantCard";
import EmptyState from "./EmptyState";
import LoadingState from "./LoadingState";

const RestaurantList = ({
  loading,
  restaurants,
  filteredRestaurants,
  onDelete,
  searchTerm,
}) => {
  if (loading) {
    return <LoadingState />;
  }

  if (!restaurants || restaurants.length === 0) {
    return (
      <EmptyState
        title="No restaurants yet"
        description="Get started by creating your first restaurant listing."
        showAddButton={true}
        addButtonPath="/add-restaurant"
        addButtonText="Add Restaurant"
      />
    );
  }

  if (filteredRestaurants.length === 0) {
    return (
      <div className="text-center py-10 bg-gray-50 rounded-lg">
        <p className="text-gray-600">
          No restaurants match your search. Try different keywords.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredRestaurants.map((restaurant) => (
        <RestaurantCard
          key={restaurant._id}
          restaurant={restaurant}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default RestaurantList;
