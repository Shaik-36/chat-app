import React, { useState } from "react";
import { Link } from "react-router-dom";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    // Add registration logic
    console.log("Registered:", email, password);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <div className="w-1/3 bg-gray-800 p-6 rounded-md shadow-md">
        <h2 className="text-2xl font-bold text-gray-200 mb-4">Register</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-300">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 rounded-md bg-gray-700 text-gray-300"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-300">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 rounded-md bg-gray-700 text-gray-300"
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
