import React, { createContext, useState, useContext, useCallback } from "react";

// Create AuthContext
const AuthContext = createContext();

// Provide the context to the application
export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [registerInfo, setRegisterInfo] = useState({
    username: "",
    email: "",
    password: "",
    phone: ""

  })


  const updateRegisterInfo = useCallback((info) => {

    setRegisterInfo(info)

  }, [] )

  return (
    <AuthContext.Provider 
    value={{ 
      user,
      registerInfo,
      updateRegisterInfo
    }}
    >

      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use AuthContext
export const useAuth = () => useContext(AuthContext);
