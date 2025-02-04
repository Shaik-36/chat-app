import React from "react";
import { useAuth } from "../context/AuthContext";
import Notification from "./chat/Notification";

function NavBar() {
  const { user, logoutUser } = useAuth();

  if (!user) return null;

  return (
    <div className="h-16 bg-gray-800 text-gray-100 shadow-md flex items-center fixed top-0 left-0 w-full z-50 px-6">
      <div className="flex justify-between w-full ">
        <h1 className="text-lg font-bold">Inbox ({user.username})</h1>
        <div className="gap-4 mx-6 space-x-8">
          <Notification />
        <button
          className="text-sm text-gray-400 hover:text-white px-4 py-2 border border-gray-400 rounded transition duration-200 hover:bg-gray-700"
          onClick={logoutUser}
        >
          Logout
        </button>
        </div>
        
      </div>
    </div>
  );
}

export default NavBar;