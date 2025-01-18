import React from "react";

function NavBar() {

  
  return (

    <div className="w-1/4 bg-gray-800 text-gray-100 p-4 border-r border-gray-700 flex flex-col">
      <div className="mb-6">
        <h1 className="text-xl font-bold">Inbox</h1>
        <div className="flex gap-4 mt-4">
          <button className="text-sm text-gray-400 hover:text-white">Archived</button>
          <button className="text-sm text-gray-400 hover:text-white">Unread</button>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto">
        <div className="p-3 bg-gray-700 rounded-md hover:bg-gray-600 flex items-center gap-4 mb-4 cursor-pointer">
          <div className="w-10 h-10 rounded-full bg-gray-500"></div>
          <div>
            <p className="font-semibold text-gray-200">John Doe</p>
            <p className="text-sm text-gray-400">Hey! How's it going?</p>
          </div>
          <span className="ml-auto text-xs text-gray-400">4m</span>
        </div>
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
