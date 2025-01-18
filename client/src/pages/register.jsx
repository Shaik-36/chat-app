import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/authContext";

function Register() {
  // Access `registerInfo` and `updateRegisterInfo` from the AuthContext
  const { registerInfo, updateRegisterInfo } = useAuth();

  const handleRegister = () => {
    // Add registration logic

  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
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
          </div>
          <div className="mb-4">
            <label className="block text-gray-300">Phone Number (Optional)</label>
            <input
              type="tel"
              value={registerInfo.phone || ""}
              onChange={(e) =>
                updateRegisterInfo({ ...registerInfo, phone: e.target.value })
              }
              className="w-full p-3 rounded-md bg-gray-700 text-gray-300"
              placeholder="Enter your phone number"
            />
          </div>
          <button
            type="button"
            className="w-full bg-blue-600 py-2 rounded-md text-gray-100"
            onClick={handleRegister}
          >
            Register
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
