import { create } from "zustand";
import axiosInstance from "../utils/axios";
import toast from "react-hot-toast";

export const useItemStore = create((set, get) => ({
  foodItems: [],

  getItems: async (id) => {
    try {
      console.log(id);
      const res = await axiosInstance.get(`/item/restaurant/${id}`);

      console.log(res.data.items);
      set({ foodItems: res.data.items });
    } catch (error) {
      console.error(error);
      set({ foodItems: [] });
    }
  },

  addItems: async (formData) => {
    try {
      const res = await axiosInstance.post("/item/add-item", formData);
      console.log(res.data.item);
      toast.success("Item added successfully");
    } catch (error) {
      console.error(error);
      throw error;
    }
  },

  deleteItem: async (id) => {
    try {
      const res = await axiosInstance.delete(`/item/${id}`);
      console.log(res.data.message);
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
}));

export default useItemStore;
