import React, { createContext, useState, useContext } from 'react';

// Create Context
const AuthContext = createContext();

// Create a custom hook to use the auth context
export const useAuth = () => {
  return useContext(AuthContext);
};

// Create a Provider component
export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, userData, setUserData }}>
      {children}
    </AuthContext.Provider>
  );
};
