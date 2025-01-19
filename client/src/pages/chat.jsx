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
    <>
      {!userChats ? (
        <div className="flex-1 flex flex-col bg-gray-900">
          {/* Welcome Message */}
          <div className="flex flex-col items-center justify-center h-full text-gray-400">
            <h2 className="text-xl font-semibold text-gray-200">Welcome!</h2>
            <p className="text-sm">No chats available.</p>
            <p className="mt-2 text-sm">Start a new conversation to see your chats here.</p>
          </div>
        </div>
      ) : (
        <div className="flex-1 flex flex-col bg-gray-900">
          <div className="p-4 bg-gray-800 border-b border-gray-700">
            <p className="font-semibold text-gray-200">Your Chats</p>
          </div>
          <div className="flex-1 p-4 overflow-y-auto">
            {userChats?.map((chat, index) => {

              return (<div
                key={index}
                className="p-4 bg-gray-800 rounded-md mb-2 text-gray-300"
              >
                <UserChat chat={chat} user={user}/>

              </div>);
              
            }
            )}

          </div>
        </div>
      )}
    </>
  );
}

export default Chat;
