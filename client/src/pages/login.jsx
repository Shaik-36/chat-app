import React from "react";
import {useAuth} from "../context/AuthContext.jsx"
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';

function Login() {
    const {
        loginUser,
        LoginError,
        loginInfo,
        updateLoginInfo,
        isLoginLoading,
    } = useAuth();

    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault(); // Prevent form submission
        await loginUser();
    };

    return (
        <div className="flex items-center justify-center h-screen bg-gray-900">
          <Toaster />
            <div className="w-1/3 bg-gray-800 p-6 rounded-md shadow-md">
                <h2 className="text-2xl font-bold text-gray-200 mb-4">Login</h2>
                <form onSubmit={handleLogin}>
                    <div className="mb-4">
                        <label className="block text-gray-300">Email</label>
                        <input
                            type="email"
                            value={loginInfo.email}
                            onChange={(e) =>
                                updateLoginInfo({ ...loginInfo, email: e.target.value })
                            }
                            className="w-full p-3 rounded-md bg-gray-700 text-gray-300"
                            placeholder="Enter your email"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-300">Password</label>
                        <input
                            type="password"
                            value={loginInfo.password}
                            onChange={(e) =>
                                updateLoginInfo({ ...loginInfo, password: e.target.value })
                            }
                            className="w-full p-3 rounded-md bg-gray-700 text-gray-300"
                            placeholder="Enter your password"
                            required
                        />
                    </div>
                    {/* Display error message */}
                    {LoginError && (
                        <p className="text-red-500 text-sm mb-4"> {LoginError}</p>
                    )}
                    <button
                        type="submit"
                        className="w-full bg-blue-600 py-2 rounded-md text-gray-100"
                        disabled={isLoginLoading}
                    >
                        {isLoginLoading ? "Logging In..." : "Login"}
                    </button>
                </form>
                <p className="text-sm text-gray-400 mt-4">
                    Don't have an account?{" "}
                    <Link to="/register" className="text-blue-400 hover:underline">
                        Register
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default Login;
