import React, { useState } from "react";
import NavBar from "./components/NavBar";
import Chat from "./pages/chat";
import LoginScreen from "./pages/login";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div className="flex h-screen bg-gray-900 text-gray-200">
      <NavBar
        isAuthenticated={isAuthenticated}
        setIsAuthenticated={setIsAuthenticated}
      />
      {isAuthenticated ? (
        <Chat />
      ) : (
        <LoginScreen setIsAuthenticated={setIsAuthenticated} />
      )}
    </div>
  );
}

export default App;
