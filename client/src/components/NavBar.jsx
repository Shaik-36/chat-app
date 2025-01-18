import React from "react";
import { useAuth } from "../context/authContext";

function NavBar() {
  const { user, logoutUser } = useAuth();

  // If no user is logged in, render nothing
  if (!user) {
    return null;
  }

  return (
    <div className="w-1/4 bg-gray-800 text-gray-100 p-4 border-r border-gray-700 flex flex-col">
      {/* Header section */}
      <div className="mb-6 flex justify-between items-center">
        <h1 className="text-xl font-bold">Inbox ({user.username})</h1>
        <button
          className="text-sm text-gray-400 hover:text-white px-4 py-2 border border-gray-400 rounded-md transition-colors duration-200 hover:bg-gray-700 hover:border-gray-700"
          onClick={logoutUser}
        >
          Logout
        </button>
      </div>

      {/* Navigation buttons */}
      <div className="flex gap-4 mt-4">
        <button className="text-sm text-gray-400 hover:text-white">Archived</button>
        <button className="text-sm text-gray-400 hover:text-white">Unread</button>
      </div>

      {/* Messages panel */}
      <div className="flex-1 overflow-y-auto mt-4">
        {/* Message 1 */}
        <div className="p-3 bg-gray-700 rounded-md hover:bg-gray-600 flex items-center gap-4 mb-4 cursor-pointer">
          <div className="w-10 h-10 rounded-full bg-gray-500"></div>
          <div>
            <p className="font-semibold text-gray-200">John Doe</p>
            <p className="text-sm text-gray-400">Hey! How's it going?</p>
          </div>
          <span className="ml-auto text-xs text-gray-400">4m</span>
        </div>

        {/* Message 2 */}
        <div className="p-3 bg-gray-700 rounded-md hover:bg-gray-600 flex items-center gap-4 cursor-pointer">
          <div className="w-10 h-10 rounded-full bg-gray-500"></div>
          <div>
            <p className="font-semibold text-gray-200">Jane Smith</p>
            <p className="text-sm text-gray-400">Let’s catch up later!</p>
          </div>
          <span className="ml-auto text-xs text-gray-400">1h</span>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
