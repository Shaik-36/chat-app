import { Routes, Route, Navigate } from "react-router-dom";
import Chat from "./pages/chat";
import NavBar from "./components/NavBar";
import Login from "./pages/login";
import Register from "./pages/register";
import { useAuth } from "./context/authContext";

function App() {

  const {user} = useAuth()
  return (
    <div className="flex h-screen bg-gray-900 text-gray-200">
      <NavBar />
      <div className="flex-1 flex flex-col">
        <Routes>

          <Route path="/" element={user          ? <Chat /> : <Login />} />
          <Route path="/register" element={ user ? <Chat /> : <Register />} />
          <Route path="/login" element={user     ? <Chat /> : <Login />} />

          <Route path="*" element={<Navigate to="/" />} />
          
        </Routes>
      </div>
    </div>
  );
}

export default App;

