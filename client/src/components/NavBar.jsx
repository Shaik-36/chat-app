import React from "react";

function NavBar({ isAuthenticated, setIsAuthenticated }) {
  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <div className="w-1/4 bg-gray-800 text-gray-100 p-4 border-r border-gray-700">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-bold">Inbox</h1>
        {isAuthenticated && (
          <button
            onClick={handleLogout}
            className="text-sm bg-red-600 text-white py-1 px-3 rounded-md hover:bg-red-500"
          >
            Logout
          </button>
        )}
      </div>
      {isAuthenticated && (
        <div className="space-y-4">
          {/* Message List */}
          <div className="p-3 bg-gray-700 rounded-md hover:bg-gray-600 cursor-pointer flex items-center">
            <div className="w-10 h-10 rounded-full bg-gray-500 flex-shrink-0"></div>
            <div className="ml-4">
              <p className="font-semibold text-gray-200">John Doe</p>
              <p className="text-sm text-gray-400 truncate">
                Hey! How's it going?
              </p>
            </div>
            <span className="ml-auto text-xs text-gray-400">4m</span>
          </div>
          <div className="p-3 bg-gray-700 rounded-md hover:bg-gray-600 cursor-pointer flex items-center">
            <div className="w-10 h-10 rounded-full bg-gray-500 flex-shrink-0"></div>
            <div className="ml-4">
              <p className="font-semibold text-gray-200">Jane Smith</p>
              <p className="text-sm text-gray-400 truncate">
                Let’s catch up later!
              </p>
            </div>
            <span className="ml-auto text-xs text-gray-400">1h</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default NavBar;
