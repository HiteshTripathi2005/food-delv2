import React, { useState } from "react";
import { Link } from "react-router-dom";
import useAuthStore from "../store/useAuthStore";
import toast from "react-hot-toast"; // Add this import

const Login = () => {
  const { login } = useAuthStore();
  const [isLoading, setIsLoading] = useState(false);
  // Remove error state as we'll use toast instead

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  console.log("login page rendered");

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    // No need to clear error state anymore
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    // Simple validation
    if (!data.email || !data.password) {
      toast.error("Email and password are required");
      return;
    }

    setIsLoading(true);
    try {
      await login(data);
      // Toast success is already handled in the auth store
    } catch (err) {
      // In case there's an error not caught by the store
      toast.error(err?.response?.data?.message || "Login failed");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 to-amber-100 px-4 py-12">
      <div className="max-w-md w-full bg-white rounded-xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl">
        {/* Logo/Icon Section */}
        <div className="flex justify-center pt-8">
          <div className="h-20 w-20 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 flex items-center justify-center shadow-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </div>
        </div>

        <div className="px-8 pt-6 pb-8 text-center">
          <h1 className="text-3xl font-extrabold mb-2 text-gray-800">
            Admin Portal
          </h1>
          <p className="text-amber-600 mb-6 font-medium">
            Sign in to manage your food delivery service
          </p>
        </div>

        <form onSubmit={handleLogin} className="px-8 pt-2 pb-8 mb-4 space-y-6">
          {/* Remove error display div since we're using toast */}

          <div className="space-y-2">
            <label
              htmlFor="email"
              className="text-sm font-medium text-gray-700 block text-left"
            >
              Email Address
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </div>
              <input
                id="email"
                type="email"
                placeholder="your@email.com"
                name="email"
                value={data.email}
                onChange={handleChange}
                className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <label
              htmlFor="password"
              className="text-sm font-medium text-gray-700 block text-left"
            >
              Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <input
                id="password"
                type="password"
                placeholder="••••••••"
                name="password"
                value={data.password}
                onChange={handleChange}
                className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className={`w-full py-3 px-4 rounded-lg text-white font-semibold text-base shadow-md ${
              isLoading
                ? "bg-amber-400 cursor-not-allowed"
                : "bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 transform hover:-translate-y-0.5 transition-all"
            }`}
          >
            {isLoading ? "Signing in..." : "Sign in"}
          </button>

          {/* New section for registration link */}
          <div className="pt-4 text-center space-y-4">
            <div className="text-sm text-gray-600">
              <span className="font-medium text-amber-600">Secure Access</span>{" "}
              • Admin Panel
            </div>

            <div className="pt-2 border-t border-gray-100">
              <p className="mt-4 text-sm text-gray-600">
                New to our platform?{" "}
                <Link
                  to="/register"
                  className="font-medium text-amber-600 hover:text-amber-700 transition-colors hover:underline"
                >
                  Create an account
                </Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
