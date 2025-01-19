import { Routes, Route, Navigate } from "react-router-dom";
import Chat from "./pages/chat";
import NavBar from "./components/NavBar";
import Login from "./pages/login";
import Register from "./pages/register";
import { useAuth } from "./context/AuthContext";
import { ChatContextProvider } from "./context/ChatContext";

function App() {
  const { user } = useAuth();

  return (
    <ChatContextProvider user={user}>
      <div className="flex flex-col h-screen bg-gray-900 text-gray-200">
        {user && <NavBar />}
        <div className="flex-1 overflow-hidden">
          <Routes>
            <Route path="/" element={user ? <Chat /> : <Login />} />
            <Route path="/register" element={user ? <Chat /> : <Register />} />
            <Route path="/login" element={user ? <Chat /> : <Login />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </div>
    </ChatContextProvider>
  );
}

export default App;