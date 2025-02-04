import { useAuth } from "../../context/AuthContext";
import { useChat } from "../../context/ChatContext";
import { useFetchRecipentUser } from "../../hooks/useFetchRecipent";
import { useRef, useState, useEffect } from "react";
import moment from "moment";
import InputEmoji from "react-input-emoji";

const ChatBox = () => {
  const { user } = useAuth();
  const { currentChat, messages, isMessagesLoading, messagesError, sendTextMessage } = useChat();
  const { recipientUser } = useFetchRecipentUser(currentChat, user);
  const [textMessage, setTextMessage] = useState("");
  const scroll = useRef();

  const handleSendMessage = () => {
    if (textMessage.trim()) {
      sendTextMessage(textMessage, user, currentChat._id);
      setTextMessage("");
    }
  };

  const formatDateTime = (timestamp) => {
    return moment(timestamp).format("DD/MM/YYYY hh:mm A"); // Example: "12/02/2024 03:45 PM"
  };

  useEffect(() => {
    if (scroll.current) {
      scroll.current.scrollTop = scroll.current.scrollHeight;
    }
  }, [messages]);

  if (!recipientUser)
    return (
      <div className="flex-1 bg-gray-900 flex flex-col items-center justify-center text-center">
        <div className="p-4 bg-gray-800 rounded-t-lg w-full border-b border-gray-700 shadow-lg">
          <p className="font-semibold text-gray-200 text-lg">Your Chats</p>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center gap-4 p-8">
          <p className="text-gray-400 text-sm">No chat selected. Choose a conversation to start messaging!</p>
        </div>
      </div>
    );

  return (
    <div className="flex-1 bg-gray-900 flex flex-col">
      <div className="p-4 bg-gray-800 rounded-t-lg border-b border-gray-700 shadow-lg flex items-center gap-4">
        <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center text-white font-semibold">
          {recipientUser?.username?.[0].toUpperCase()}
        </div>
        <p className="font-semibold text-gray-200 text-lg">{recipientUser?.username}</p>
      </div>
      <div className="flex-1 p-4 text-gray-300 overflow-y-auto hidden-scrollbar bg-gray-800 shadow-lg" ref={scroll}>
        {isMessagesLoading ? (
          <p className="text-center text-gray-400">Loading messages...</p>
        ) : messagesError ? (
          <p className="text-center text-red-400">Failed to load messages. Please try again.</p>
        ) : messages.length > 0 ? (
          <div className="space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.senderId === user?._id ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`rounded-lg px-4 py-2 max-w-sm text-sm shadow-md ${
                    message.senderId === user?._id
                      ? "bg-blue-600 text-white"
                      : "bg-gray-700 text-gray-200"
                  }`}
                >
                  <p>{message.text}</p>
                  <p className="text-xs text-gray-400 mt-1 text-right">
                    {formatDateTime(message?.createdAt)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-400">Start chatting with {recipientUser?.username}!</p>
        )}
      </div>
      <div className="p-4 bg-gray-800 border-t border-gray-700 flex items-center gap-4">
        <InputEmoji
          value={textMessage}
          onChange={setTextMessage}
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
