import React, { useState } from 'react';
import '../styles/HomePage.css'; // Import the CSS file for styles
import { useAuth } from '../context/AuthContext';

const HomePage = () => {
  const { isLoggedIn, userData, setIsLoggedIn, setUserData } = useAuth(); 
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleLogout = () => {
  // Clear user data and log out
  setUserData(null);
  setIsLoggedIn(false);
  
  // Clear data from localStorage
  localStorage.removeItem('userData');
  localStorage.setItem('isLoggedIn', 'false');
  
  alert('Logged out successfully!');
};

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div>
      <div className="navbar">
        <div className="logo">
          <a href="/index">
            <img src={require('../images/AL.png')} alt="Logo" />
          </a>
        </div>
        <div className="menu">
          <a href="/home">Home</a>
          <a href="#news">News</a>
          <a href="#calendar">Calendar</a>
          <a href="/booking">Booking</a>
        </div>
        
        <div className="profile">
          {isLoggedIn && userData ? (
            <div className="profile-dropdown">
              <img 
                src={require('../images/profile.png')} 
                alt="Profile" 
                onClick={toggleDropdown} 
                className="profile-img"
              />
              {isDropdownOpen && (
                <div className="dropdown-menu">
                  <a href="/profile">Edit {userData.name}</a>
                  <button onClick={handleLogout}>Logout</button>
                </div>
              )}
            </div>
          ) : (
            <div className="menu">
              <a href="/login" className="login-btn">Login</a>
              <a href="/signup" className="signup-btn">Signup</a>
            </div>
          )}
        </div>
      </div>

      <main>
        <div className="sport-groups">
        <h2>Sport Groups</h2>
        <div className="sport-cards">
            <div className="card">
                <img src={require('../images/Chess.png')} alt="Chess" />
                <p>Chess</p>
            </div>
            <div className="card">
                <img src={require('../images/Basketball.png')} alt="Basketball" />
                <p>Basketball</p>
            </div>
            <div className="card">
                <img src={require('../images/Checkers.png')} alt="Checkers" />
                <p>Checkers</p>
            </div>
            <div className="card">
                <img src={require('../images/Tennis.png')} alt="Tennis" />
                <p>Tennis</p>
            </div>
            <div className="card">
                <img src={require('../images/Carrom.png')} alt="Carrom" />
                <p>Carrom</p>
            </div>
            <div className="card">
                <img src={require('../images/Cricket.png')} alt="Cricket" />
                <p>Cricket</p>
            </div>
            <div className="card">
                <img src={require('../images/Netball.png')} alt="Netball" />
                <p>Netball</p>
            </div>
            <div className="card">
                <img src={require('../images/Football.png')} alt="Football" />
                <p>Football</p>
            </div>
            <div className="card">
                <img src={require('../images/Badminton.png')} alt="Badminton" />
                <p>Badminton</p>
            </div>
            <div className="card">
                <img src={require('../images/squash.png')} alt="Squash" />
                <p>Squash</p>
            </div>
        </div>
</div>


        {/* <section className="training-videos">
          <h2>Training Videos</h2>
          <div className="video-cards"> 
            <div className="videos">
                <video src="../vdos/chess.mp4" controls></video>
                <p>Learn the basics of Chess, including opening strategies and tactics. Perfect for beginners!</p>
                <a href="https://youtu.be/AshEhLcPHqU?si=odbxILcl74a-XnyM">CLICK</a>
            </div>

            <div className="videos">
                <video src="../vdos/basketball.mp4" controls></video>
                <p>This video covers essential Basketball techniques, from dribbling to shooting drills.</p>
                <a href="https://youtu.be/GYGzu9afduQ?si=qIgIoTPLiHYaxkop">CLICK</a>
            </div>

            <div className="videos">
                <video src="../vdos/checkers.mp4" controls></video>
                <p>Master your Checkers gameplay with these strategic tips and tricks.</p>
                <a href="https://youtu.be/qKEoPnrTziE?si=5Er4cGYtIU7ikqGp">CLICK</a>
            </div>

            <div className="videos">
                <video src="../vdos/Tennis.mp4" controls></video>
                <p>Improve your Tennis serve, volley, and footwork with expert guidance in this video.</p>
                <a href="https://youtu.be/1NDXZpbw3qA?si=thxpoMKtwdJ4p46z">CLICK</a>
            </div>

            <div className="videos">
                <video src="../vdos/carrom.mp4" controls></video>
                <p>Learn how to play Carrom and improve your skill level with professional tips.</p>
                <a href="https://youtu.be/dgMA90Mj5jA?si=T5SSgy9Pk9DxQdUI">CLICK</a>
            </div>

            <div className="videos">
                <video src="../vdos/cricket.mp4" controls></video>
                <p>Cricket basics: Batting techniques, bowling tips, and game strategies explained.</p>
                <a href="https://youtu.be/KcNAG6gemEA?si=klNSBq7FM3AAz_RI">CLICK</a>
            </div>

            <div className="videos">
                <video src="../vdos/Netball.mp4" controls></video>
                <p>Improve your Netball shooting, passing, and team strategies with this comprehensive guide.</p>
                <a href="https://youtu.be/XIHqHouUHoY?si=FpalLNyrP-VZillX">CLICK</a>
            </div>

            <div className="videos">
                <video src="../vdos/football.mp4" controls></video>
                <p>Football fundamentals: Passing, shooting, and positioning explained in detail.</p>
                <a href="https://youtu.be/bQT3MP5Moq8?si=CWnlXUF64G7w7GOX">CLICK</a>
            </div>

            <div className="videos">
                <video src="../vdos/badminton.mp4" controls></video>
                <p>Elevate your Badminton skills with footwork drills, serving techniques, and more.</p>
                <a href="https://youtu.be/2cnbHARo8nI?si=UptcIC_unIhw2pD5">CLICK</a>
            </div>

            <div className="videos">
                <video src="../vdos/squash.mp4" controls></video>
                <p>Elevate your Squash skills with footwork drills, serving techniques, and more.</p>
                <a href="https://youtu.be/6QeinR2zjbA?si=uMJXHYpW2Pqn5jbj">CLICK</a>
            </div>
            </div>

        </section> */}

        <section className="personal-coaches">
        <h2>Personal Coaches</h2>
        <div className="coach-box-container">
            <div className="coach-box">
            <p><b>John Doe</b></p>
            <p>Expert in Football and Basketball. Available for individual and group coaching sessions.</p>
            <a href="https://www.chess.com/coaches">Book a session with John</a>
            </div>
            <div className="coach-box">
            <p><b>Jane Smith</b></p>
            <p>Specialized in Tennis and Cricket. Offering personal training sessions for all levels.</p>
            <a href="/book-coach/jane-smith">Book a session with Jane</a>
            </div>
            <div className="coach-box">
            <p><b>Mark Turner</b></p>
            <p>Football, Basketball, and Netball coach. Available for team coaching.</p>
            <a href="/book-coach/mark-turner">Book a session with Mark</a>
            </div>
            <div className="coach-box">
            <p><b>Lisa Clark</b></p>
            <p>Cricket and Tennis expert. Offering private coaching sessions.</p>
            <a href="/book-coach/lisa-clark">Book a session with Lisa</a>
            </div>
            <div className="coach-box">
            <p><b>Lisa Clark</b></p>
            <p>Cricket and Tennis expert. Offering private coaching sessions.</p>
            <a href="/book-coach/lisa-clark">Book a session with Lisa</a>
            </div>
            <div className="coach-box">
            <p><b>Lisa Clark</b></p>
            <p>Cricket and Tennis expert. Offering private coaching sessions.</p>
            <a href="/book-coach/lisa-clark">Book a session with Lisa</a>
            </div>
            <div className="coach-box">
            <p><b>Jane Smith</b></p>
            <p>Specialized in Tennis and Cricket. Offering personal training sessions for all levels.</p>
            <a href="/book-coach/jane-smith">Book a session with Jane</a>
            </div>
            <div className="coach-box">
            <p><b>Mark Turner</b></p>
            <p>Football, Basketball, and Netball coach. Available for team coaching.</p>
            <a href="/book-coach/mark-turner">Book a session with Mark</a>
            </div>
            <div className="coach-box">
            <p><b>Jane Smith</b></p>
            <p>Specialized in Tennis and Cricket. Offering personal training sessions for all levels.</p>
            <a href="/book-coach/jane-smith">Book a session with Jane</a>
            </div>
            <div className="coach-box">
            <p><b>Mark Turner</b></p>
            <p>Football, Basketball, and Netball coach. Available for team coaching.</p>
            <a href="/book-coach/mark-turner">Book a session with Mark</a>
            </div>
        </div>
        </section>

      </main>

      <div className="footer">
        <button>Complaint</button>
        <button>Requests</button>
        <button>Feedback</button>
      </div>
    </div>
  );
};

export default HomePage;
