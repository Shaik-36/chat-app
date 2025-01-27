import React, { useState } from "react";
import { useChat } from "../../context/ChatContext";
import { useAuth } from "../../context/AuthContext"; // Importing user context to get the current user

const PotentialChats = () => {
  const { potentialChats, createChat } = useChat();
  const { user } = useAuth(); // Assuming `user` contains the current logged-in user's data
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleSearchChange = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);
    if (query) {
      const filtered = potentialChats.filter((u) =>
        u.username.toLowerCase().includes(query)
      );
      setFilteredUsers(filtered);
    } else {
      setFilteredUsers(potentialChats);
    }
  };

  const handleUserSelect = async (selectedUser) => {
    setSearchQuery(selectedUser.username);
    setFilteredUsers([]);
    setShowDropdown(false);

    // Use `createChat` with the logged-in user's ID and the selected user's ID
    try {
      await createChat(user._id, selectedUser._id);
      console.log("Chat created successfully with user:", selectedUser);
    } catch (error) {
      console.error("Error creating chat:", error);
    }
  };

  const handleFocus = () => {
    setFilteredUsers(potentialChats);
    setShowDropdown(true);
  };

  const handleBlur = () => {
    // Delay hiding the dropdown to allow click selection
    setTimeout(() => setShowDropdown(false), 200);
  };

  return (
    <div className="bg-slate-600 shadow-md rounded-lg p-4 relative">
      <label htmlFor="search-users" className="block text-white font-medium mb-2">
        Search User:
      </label>
      <input
        id="search-users"
        type="text"
        className="w-full p-2 bg-gray-700 text-white rounded-md"
        placeholder="Type to search users..."
        value={searchQuery}
        onChange={handleSearchChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      {showDropdown && filteredUsers.length > 0 && (
        <ul className="absolute z-10 w-full bg-gray-800 text-white rounded-md mt-2 shadow-lg max-h-60 overflow-y-auto hidden-scrollbar">
          {filteredUsers.map((u) => (
            <li
              key={u.id}
              className="p-2 hover:bg-gray-700 cursor-pointer"
              onClick={() => handleUserSelect(u)}
            >
              {u.username}
            </li>
          ))}
        </ul>
      )}
      {showDropdown && filteredUsers.length === 0 && (
        <p className="absolute z-10 w-full bg-gray-800 text-gray-400 rounded-md mt-2 shadow-lg p-2">
          No users found.
        </p>
      )}
    </div>
  );
};

export default PotentialChats;
