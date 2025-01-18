import React from "react";


function Chat() {
  return (
    <div className="flex-1 flex flex-col bg-gray-900">
      <div className="p-4 bg-gray-800 border-b border-gray-700 flex items-center gap-4">
        <div className="w-10 h-10 bg-gray-500 rounded-full"></div>
        <p className="font-semibold text-gray-200">John Doe</p>
      </div>
      <div className="flex-1 p-4 overflow-y-auto">
        <div className="space-y-4">
          <div className="w-fit bg-gray-700 text-gray-300 p-3 rounded-lg">
            What's up?
          </div>
          <div className="text-right">
            <div className="w-fit bg-blue-600 text-gray-100 p-3 rounded-lg ml-auto">
              Not much, you?
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 bg-gray-800 flex items-center gap-2">
        <input
          type="text"
          placeholder="Type a message..."
          className="flex-1 p-3 bg-gray-700 rounded-md text-gray-300 border-none"
        />
        <button className="p-3 bg-blue-600 rounded-md text-gray-100">
          <i className="fas fa-paper-plane"></i>
        </button>
      </div>
    </div>
  );
}

export default Chat;
