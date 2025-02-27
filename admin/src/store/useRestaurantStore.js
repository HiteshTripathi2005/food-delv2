import { create } from "zustand";
import axiosInstance from "../utils/axios";
import { toast } from "react-hot-toast";

const useRestaurantStore = create((set, get) => ({
  loading: false,
  addLoading: false,
  restaurants: [],
  error: null,

  getRestaurants: async () => {
    try {
      set({ loading: true, error: null });
      const res = await axiosInstance.get("/restaurant/restaurants");

      set({ restaurants: res.data });
    } catch (error) {
      console.error("Error in getRestaurants: ", error);
      set({
        error: error.response?.data?.message || "Failed to fetch restaurants",
      });
      toast.error(
        error.response?.data?.message || "Failed to fetch restaurants"
      );
    } finally {
      set({ loading: false });
    }
  },

  addRestaurant: async (restaurantData, navigate) => {
    try {
      set({ addLoading: true, error: null });

      await axiosInstance.post("/restaurant/restaurants", restaurantData);

      navigate("/home");
      toast.success("Restaurant added successfully!");
      return true;
    } catch (error) {
      console.error("Error adding restaurant: ", error);
      set({
        error: error.response?.data?.message || "Failed to add restaurant",
      });
      toast.error(error.response?.data?.message || "Failed to add restaurant");
      return false;
    } finally {
      set({ addLoading: false });
    }
  },

  deleteRestaurant: async (id) => {
    try {
      const res = await axiosInstance.delete(`/restaurant/restaurants/${id}`);
      console.log(res);
      toast.success("Restaurant deleted successfully!");
      return true;
    } catch (error) {
      console.error("Error deleting restaurant: ", error);
      set({
        error: error.response?.data?.message || "Failed to delete restaurant",
      });
      toast.error(
        error.response?.data?.message || "Failed to delete restaurant"
      );
      return false;
    }
  },
}));

export default useRestaurantStore;
