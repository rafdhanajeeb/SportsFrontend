import React, { createContext, useState, useEffect, useContext } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);

  // Load user data from localStorage on initialization
  useEffect(() => {
    const storedUserData = localStorage.getItem('userData');
    const storedIsLoggedIn = localStorage.getItem('isLoggedIn');
    if (storedUserData && storedIsLoggedIn === 'true') {
      setUserData(JSON.parse(storedUserData));
      setIsLoggedIn(true);
    }
  }, []);

  // Update localStorage whenever userData or isLoggedIn changes
  useEffect(() => {
    if (isLoggedIn) {
      localStorage.setItem('userData', JSON.stringify(userData));
      localStorage.setItem('isLoggedIn', 'true');
    } else {
      localStorage.removeItem('userData');
      localStorage.setItem('isLoggedIn', 'false');
    }
  }, [userData, isLoggedIn]);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, userData, setUserData }}>
      {children}
    </AuthContext.Provider>
  );
};
