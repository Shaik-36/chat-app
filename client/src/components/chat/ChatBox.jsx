import { useAuth } from "../../context/AuthContext";
import { useChat } from "../../context/ChatContext";
import { useFetchRecipentUser } from "../../hooks/useFetchRecipent";
import { useState } from "react";
import { format } from "date-fns"; // Ensure date-fns is installed
import InputEmoji from "react-input-emoji";

const ChatBox = () => {
  const { user } = useAuth();
  const { currentChat, messages, isMessagesLoading, messagesError, sendMessage } = useChat();
  const { recipientUser } = useFetchRecipentUser(currentChat, user);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      sendMessage({ text: newMessage, senderId: user.id, chatId: currentChat.id });
      setNewMessage("");
    }
  };

  const formatTime = (timestamp) => {
    return format(new Date(timestamp), "hh:mm a"); // Formats time as "03:45 PM"
  };

  if (!recipientUser)
    return (
      <div className="flex-1 bg-gray-900 flex flex-col items-center justify-center text-center">
        {/* Empty State Header */}
        <div className="p-4 bg-gray-800 rounded-t-lg w-full border-b border-gray-700 shadow-lg">
          <p className="font-semibold text-gray-200 text-lg">Your Chats</p>
        </div>

        {/* Empty State Content */}
        <div className="flex-1 flex flex-col items-center justify-center gap-4 p-8">
          <p className="text-gray-400 text-sm">No chat selected. Choose a conversation to start messaging!</p>
        </div>
      </div>
    );

  return (
    <div className="flex-1 bg-gray-900 flex flex-col">
      {/* Chat Header */}
      <div className="p-4 bg-gray-800 rounded-t-lg border-b border-gray-700 shadow-lg flex items-center gap-4">
        <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center text-white font-semibold">
          {recipientUser?.username?.[0].toUpperCase()}
        </div>
        <p className="font-semibold text-gray-200 text-lg">{recipientUser?.username}</p>
      </div>

      {/* Chat Content */}
      <div
        className="flex-1 p-4 text-gray-300 overflow-y-auto hidden-scrollbar bg-gray-800 shadow-lg"
      >
        {isMessagesLoading ? (
          <p className="text-center text-gray-400">Loading messages...</p>
        ) : messagesError ? (
          <p className="text-center text-red-400">Failed to load messages. Please try again.</p>
        ) : messages.length > 0 ? (
          <div className="space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${
                  message.senderId === user?._id ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`rounded-lg px-4 py-2 max-w-sm text-sm shadow-md ${
                    message.senderId === user?._id
                      ? "bg-blue-600 text-white" // Sent messages (right side)
                      : "bg-gray-700 text-gray-200" // Received messages (left side)
                  }`}
                >
                  <p>{message.text}</p>
                  <p className="text-xs text-gray-400 mt-1 text-right">
                    {formatTime(message?.createdAt)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-400">Start chatting with {recipientUser?.username}!</p>
        )}
      </div>

      {/* Send Message Input */}
      <div className="p-4 bg-gray-800 border-t border-gray-700 flex items-center gap-4">
        <InputEmoji
          value={newMessage}
          onChange={setNewMessage}
          cleanOnEnter
          onEnter={handleSendMessage}
          placeholder="Type a message..."
          borderColor="#4A5568"
          fontFamily="inherit"
        />
        <button
          onClick={handleSendMessage}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatBox;
