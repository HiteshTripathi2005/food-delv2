import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import "react-toastify/dist/ReactToastify.css";
import { Toaster } from "react-hot-toast";
import SyncLoader from "react-spinners/SyncLoader";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import AddRestaurantPage from "./pages/AddRestaurantPage";
import useAuthStore from "./store/useAuthStore";
import RestaurantPage from "./pages/RestaurantPage";

const App = () => {
  const { user, getUser, loadingUser } = useAuthStore();
  const [authChecked, setAuthChecked] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      await getUser();
      setAuthChecked(true);
    };

    checkAuth();
  }, [getUser]);

  if (loadingUser || !authChecked) {
    return (
      <div className="h-screen flex items-center justify-center">
        <SyncLoader />
      </div>
    );
  }

  return (
    <div>
      <Routes>
        <Route
          path="/login"
          element={user ? <Navigate to={"/home"} /> : <Login />}
        />
        <Route
          path="/register"
          element={user ? <Navigate to={"/home"} /> : <Register />}
        />
        <Route
          path="/home"
          element={user ? <Home /> : <Navigate to={"/login"} />}
        />
        <Route
          path="/add-restaurant"
          element={user ? <AddRestaurantPage /> : <Navigate to={"/login"} />}
        />
        <Route path="/restaurant/:id" element={<RestaurantPage />} />
        <Route path="*" element={<Navigate to={"/login"} />} />
      </Routes>
      <Toaster />
    </div>
  );
};

export default App;
