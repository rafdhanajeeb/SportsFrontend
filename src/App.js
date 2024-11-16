import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import LandingPage from './pages/LandingPage';
import Signup from './components/Signup'; // Assuming you have a Signup page
import Login from './components/Login'; // Assuming you have a Login page

const App = () => {
  return (
     <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} /> 
          <Route path="/home" element={<HomePage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} /> 
          <Route path="/profile" element={<ProfilePage />} /> 
        </Routes>
      </Router>
     </AuthProvider>
      
  );
};

export default App;