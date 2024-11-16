import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext'; // Assuming you have this context set up
import '../styles/ProfilePage.css';

const ProfilePage = () => {
  const { userData } = useAuth(); // Access user data from AuthContext
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  // Set initial values based on userData
  const [fullName, setFullName] = useState(userData?.name || ''); 
  const [companyEmail, setCompanyEmail] = useState(userData?.email || ''); 
  const [username, setUsername] = useState(userData?.name || ''); // Assuming username is the same as name or set separately
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  // Log userData to check if it is available
  useEffect(() => {
    console.log('userdata from ProfilePage:', userData);
    if (userData) {
      setFullName(userData.name);
      setCompanyEmail(userData.email);
      setUsername(userData.name); // You can change this if the username is different
    }
  }, [userData]); // Re-run this effect whenever userData changes

  const handleSaveNewPassword = () => {
    if (oldPassword && newPassword) {
      alert('Password updated successfully!');
    } else {
      alert('Please fill in both old and new password fields.');
    }
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const handleJoinGroup = (sport) => {
    alert(`Joining ${sport} group...`);
  };

  const handleExitGroup = (sport) => {
    alert(`Exiting ${sport} group...`);
  };

  return (
    <div>
      <div className="header-background">
        <h1>My Profile</h1>
      </div>

      <div className="navbar">
        <div className="logo">
          <a href="/index">
            <img src={require('../images/AL.png')}  alt="Logo" />
          </a>
        </div>
        <div className="menu">
          <a href="/home">Home</a>
          <a href="#news">News</a>
          <a href="#calendar">Calendar</a>
          <a href="/booking">Booking</a>
        </div>
        <div className="profile">
          <div className="profile-dropdown">
              <img 
                src={require('../images/profile.png')} 
                alt="Profile" 
                onClick={toggleDropdown} 
                className="profile-img"
              />
              {isDropdownOpen && (
                <div className="dropdown-menu">
                  <a href="/">Back Home</a>
                </div>
              )}
            </div>
        </div>
      </div>

      <div className="container">
        <div className="section" id="personalInfo">
          <h2>Personal Information</h2>
          <div className="profile-image-container">
            <img src="Images/profile.png" alt="User Profile" />
            <div>
              <label htmlFor="fullName">Full Name</label>
              <input type="text" id="fullName" value={fullName} readOnly />

              <label htmlFor="companyEmail">Company Email</label>
              <input type="email" id="companyEmail" value={companyEmail} readOnly />

              <label htmlFor="securityQuestion">Security Question</label>
              <select id="securityQuestion">
                <option value="pet">What was the name of your first pet?</option>
                <option value="city">What city were you born in?</option>
                <option value="school">What was the name of your primary school?</option>
              </select>
            </div>
          </div>
        </div>

        <div className="section" id="loginCredentials">
          <h2>Login Credentials</h2>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" value={username} readOnly />

          <label htmlFor="oldPassword">Old Password</label>
          <input
            type="password"
            id="oldPassword"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
            placeholder="Enter Old Password"
          />

          <label htmlFor="newPassword">New Password</label>
          <input
            type="password"
            id="newPassword"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder="Enter New Password"
          />
          <button onClick={handleSaveNewPassword}>Save New Password</button>
        </div>

        <div className="section" id="editSportInterests">
          <h2>Edit Sport Interests</h2>
          <div id="sportsList">
            {['Basketball', 'Soccer'].map((sport) => (
              <div key={sport}>
                <p>{sport}</p>
                <div className="button-group">
                  <button onClick={() => handleJoinGroup(sport)}>Join Group</button>
                  <button onClick={() => handleExitGroup(sport)}>Exit Group</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="footer">
        <button>Complaint</button>
        <button>Requests</button>
        <button>Feedback</button>
      </div>
    </div>
  );
};

export default ProfilePage;
