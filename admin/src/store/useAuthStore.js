import { create } from "zustand";
import axiosInstance from "../utils/axios";
import toast from "react-hot-toast";

const useAuthStore = create((set, get) => ({
  user: null,
  loadingUser: false,

  getUser: async () => {
    try {
      set({ loadingUser: true });
      const res = await axiosInstance.get("/auth/getuser");

      set({ user: res.data.user });
    } catch (error) {
      console.error("Error in getUser: ", error);
    } finally {
      set({ loadingUser: false });
    }
  },

  login: async (data) => {
    try {
      const res = await axiosInstance.post("/auth/login", data);
      toast.success("Logged in successfully");
      set({ user: res.data.user });
    } catch (error) {
      console.error("Error in login: ", error);
      toast.error(error.response.data.message || "An error occurred");
    }
  },

  register: async (data) => {
    try {
      const res = await axiosInstance.post("/auth/register", data);
      toast.success("Registered successfully");
      set({ user: res.data.user });
    } catch (error) {
      console.error("Error in register: ", error);
      toast.error(error.response.data.message || "An error occurred");
    }
  },

  logout: async () => {
    try {
      await axiosInstance.post("/auth/logout");
      set({ user: null });
      toast.success("Logged out successfully");
    } catch (error) {
      console.error("Error in logout: ", error);
      toast.error(error.response.data.message || "An error occurred");
    }
  },
}));

export default useAuthStore;
