import React from "react";

function LoginScreen({ setIsAuthenticated }) {
  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  return (
    <div className="flex-1 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-gray-200 mb-6">Welcome to Dark Chat</h1>
      <p className="text-lg text-gray-400 mb-8">Please log in to access your messages.</p>
      <button
        onClick={handleLogin}
        className="px-6 py-2 bg-blue-600 rounded-md text-white hover:bg-blue-500"
      >
        Login
      </button>
    </div>
  );
}

export default LoginScreen;
