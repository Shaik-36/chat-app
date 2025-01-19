import React from "react";
import toast, { Toaster } from "react-hot-toast";
import { useChat } from "../context/ChatContext";
import UserChat from "../components/chat/UserChat";
import { useAuth } from "../context/AuthContext";

function Chat() {
  const { userChats, isUserChatsLoading, userChatsError } = useChat();
  const { user } = useAuth();

  if (isUserChatsLoading) {
    return (
      <div className="flex-1 flex items-center justify-center bg-gray-900">
        <p className="text-gray-400">Loading chats...</p>
      </div>
    );
  }

  if (userChatsError) {
    toast.error("Failed to load chats. Please try again.");
    return (
      <div className="flex-1 flex items-center justify-center bg-gray-900">
        <p className="text-red-400">Error loading chats.</p>
      </div>
    );
  }

  return (
    <div className="flex h-full pt-16">
      <div className="w-1/4 bg-gray-800 border-r border-gray-700">
        <div className="p-4 border-b border-gray-700">
          <h1 className="text-lg font-semibold text-gray-200">Inbox</h1>
          <div className="mt-2 flex gap-4">
            <button className="text-sm text-gray-400 hover:text-white">Archived</button>
            <button className="text-sm text-gray-400 hover:text-white">Unread</button>
          </div>
        </div>
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {userChats?.map((chat, index) => (
            <div
              key={index}
        
            >
              <UserChat chat={chat} user={user} />
            </div>
          ))}
        </div>
      </div>
      <div className="flex-1 bg-gray-900 p-6">
        <div className="p-4 bg-gray-800 border-b border-gray-700">
          <p className="font-semibold text-gray-200">Your Chats</p>
        </div>
        <div className="flex-1 p-4 text-gray-400">
          <p>Select a chat to start messaging.</p>
        </div>
      </div>
    </div>
  );
}

export default Chat;