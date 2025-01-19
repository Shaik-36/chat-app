import React, { createContext, useState, useContext, useCallback, useEffect } from "react";
import { baseURL, postRequest } from "../utils/services";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';

// Create AuthContext
const AuthContext = createContext();

// Provide the context to the application
export const AuthContextProvider = ({ children }) => {


  const [user, setUser] = useState(null);

  // Register Loading and Error
  const [registerError, setRegisterError] = useState(null);
  const [isRegisterLoading, setIsRegisterLoading] = useState(false);

  // Login Loading and Error
  const [LoginError, setLoginError] = useState(null);
  const [isLoginLoading, setIsLoginLoading] = useState(false);


  // Register Info
  const [registerInfo, setRegisterInfo] = useState({
    username: "",
    email: "",
    password: "",
  });

  // Login Info
  const [loginInfo, setLoginInfo] = useState({
    email:"",
    password: ""
  })


  // Check for the User in Local Storage
  useEffect(() => {

    const user = localStorage.getItem("User")
    setUser(JSON.parse(user))
    
  }, [])
  
  const navigate = useNavigate();


  // Update Register Info
  const updateRegisterInfo = useCallback((info) => {
    setRegisterInfo(info);
  }, []);


  // Update Login Info
  const updateLoginInfo = useCallback((info) => {
    setLoginInfo(info);
  }, []);


// Register User
const registerUser = useCallback(async (e) => {

  // Set Loading
  setIsRegisterLoading(true);
  setRegisterError(null);

  const response = await postRequest(
      `${baseURL}/users/register`,
      JSON.stringify(registerInfo)
  );

  setIsRegisterLoading(false);

  if (response.error) {
    toast.error(response.message);
    return setRegisterError(response.message);
  }


  // Save user data and redirect to login page
  localStorage.setItem("User", JSON.stringify(response));
  setUser(response);
  toast.success('Registration Successfull');
  // navigate("/login"); // Redirect to login page
}, [registerInfo, navigate]);

// Login User
const loginUser = useCallback(async () => {
  setIsLoginLoading(true);
  setLoginError(null); // Reset previous errors

  const response = await postRequest(
      `${baseURL}/users/login`,
      JSON.stringify(loginInfo)
  );

  setIsLoginLoading(false);

  if (response.error) {
    toast.error(response.message);
    return setLoginError(response.message)  
  }



  // Save user data and redirect on successful login
  localStorage.setItem("User", JSON.stringify(response));
  setTimeout(() => {
    toast.success("Login Successful");
  }, 500);
  setUser(response); // Redirect to dashboard after 1 second



}, [loginInfo, navigate]);

  // Logout User
  const logoutUser = useCallback(() => {
    localStorage.removeItem("User")
    
    setTimeout(() => {
      toast.success('Logged Out Successfully!');
    }, 500);
    setUser(null)
  },[loginInfo])


  return (
    <AuthContext.Provider
      value={{
        user,
        registerInfo,
        updateRegisterInfo,
        registerUser,
        isRegisterLoading,
        registerError,
        logoutUser,
        loginUser,
        LoginError,
        loginInfo,
        updateLoginInfo,
        isLoginLoading
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use AuthContext
export const useAuth = () => { return useContext(AuthContext)};
