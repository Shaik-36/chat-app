import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";
import toast, { Toaster } from 'react-hot-toast';



function Register() {
  const {
    registerInfo,
    updateRegisterInfo,
    registerUser,
    isRegisterLoading,
    registerError,
  } = useAuth();
  const [formErrors, setFormErrors] = useState({});
  const navigate = useNavigate();


  // Handle Vaildations
  const validateForm = () => {
    const errors = {};

    if (!registerInfo.username || registerInfo.username.trim() === "") {
      errors.username = "Username is required.";
    }
    if (!registerInfo.email || registerInfo.email.trim() === "") {
      errors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(registerInfo.email)) {
      errors.email = "Please enter a valid email address.";
    }
    if (!registerInfo.password || registerInfo.password.trim() === "") {
      errors.password = "Password is required.";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };


  // Register User
  const handleRegister = async (e) => {

    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      await registerUser(registerInfo);

    } catch (error) {
      console.error("Registration failed:", error);
    }
  };



  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <Toaster />
      <div className="w-1/3 bg-gray-800 p-6 rounded-md shadow-md">
        <h2 className="text-2xl font-bold text-gray-200 mb-4">Register</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-300">Name</label>
            <input
              type="text"
              value={registerInfo.username || ""}
              onChange={(e) =>
                updateRegisterInfo({ ...registerInfo, username: e.target.value })
              }
              className="w-full p-3 rounded-md bg-gray-700 text-gray-300"
              placeholder="Enter your username"
            />
            {formErrors.username && (
              <p className="text-red-500 text-sm mt-1">{formErrors.username}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-300">Email</label>
            <input
              type="email"
              value={registerInfo.email || ""}
              onChange={(e) =>
                updateRegisterInfo({ ...registerInfo, email: e.target.value })
              }
              className="w-full p-3 rounded-md bg-gray-700 text-gray-300"
              placeholder="Enter your email"
            />
            {formErrors.email && (
              <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-300">Password</label>
            <input
              type="password"
              value={registerInfo.password || ""}
              onChange={(e) =>
                updateRegisterInfo({ ...registerInfo, password: e.target.value })
              }
              className="w-full p-3 rounded-md bg-gray-700 text-gray-300"
              placeholder="Enter your password"
            />
            {/* Display error message */}
            {registerError && ( <p className="text-red-500 text-sm mt-2"> {registerError}</p> )}
          </div>
          <button
            type="button"
            className="w-full bg-blue-600 py-2 rounded-md text-gray-100"
            onClick={handleRegister}
          >
            {isRegisterLoading ? "Registering User..." : "Register"}
          </button>
        </form>

        <p className="text-sm text-gray-400 mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-400 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;