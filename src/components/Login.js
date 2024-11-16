import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { useAuth } from '../context/AuthContext'; // Import the custom hook
import '../styles/Login.css'; // Import external CSS file

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const { setIsLoggedIn, setUserData } = useAuth(); // Access context values
  const navigate = useNavigate();

  // Function to handle form submission
  const handleLogin = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!email || !password) {
      setErrorMessage('Please fill in all fields');
      return;
    }

    const userData = {
      email,
      password,
    };

    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      const result = await response.json();

      if (response.ok) {
        // Login successful, update context and redirect
        setIsLoggedIn(true);
        console.log(result.user);
        setUserData(result.user); // Assuming `result.user` contains the user data
        navigate('/');
        // Optionally, redirect to HomePage or update UI based on the response
        // For example, redirect to HomePage (if using React Router):
        // history.push('/home');
        console.log('Login successful', result);
      } else {
        setErrorMessage(result.message || 'Login failed');
      }
    } catch (error) {
      setErrorMessage('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Welcome Back!</h2>
        <form onSubmit={handleLogin}>
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errorMessage && <span className="error-message">{errorMessage}</span>}

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errorMessage && <span className="error-message">{errorMessage}</span>}

          <button type="submit" className="signInBtn">Log In</button>

          <p className="sign-up">
            New here?{' '} <a href="/signup">Sign In instead</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
