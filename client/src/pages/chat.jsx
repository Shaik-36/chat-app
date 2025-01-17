import React from "react";

function Chat() {
  return (
    <div className="flex-1 flex flex-col">
      {/* Chat Header */}
      <div className="p-4 bg-gray-800 border-b border-gray-700 flex items-center">
        <div className="w-10 h-10 rounded-full bg-gray-500"></div>
        <p className="ml-4 font-semibold text-gray-200">John Doe</p>
      </div>

      {/* Chat Content */}
      <div className="flex-1 p-4 overflow-y-auto bg-gray-900">
        <div className="space-y-4">
          {/* Received Message */}
          <div className="w-fit bg-gray-700 text-gray-300 p-3 rounded-lg">
            What's up?
          </div>
          {/* Sent Message */}
          <div className="w-fit ml-auto bg-blue-600 text-gray-100 p-3 rounded-lg">
            Not much, you?
          </div>
        </div>
      </div>

      {/* Chat Input */}
      <div className="p-4 bg-gray-800 flex items-center gap-2">
        <input
          type="text"
          placeholder="Type a message..."
          className="flex-1 bg-gray-700 p-3 rounded-md text-gray-300 border-none"
        />
        <button className="bg-blue-600 p-3 rounded-md text-white">
          Send
        </button>
      </div>
    </div>
  );
}

export default Chat;
