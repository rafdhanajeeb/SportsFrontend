import React from 'react';
import '../styles/LandingPage.css';

const LandingPage = () => {
    return (
        <div className="heroImg">
            <header>
                <div className="topbar">
                    <a href="/index">
                        <img src={require('../images/profile.png')}  alt="Logo" />
                    </a>
                </div>
                <div className="btn">
                    <button>
                        <a href="/signup">Sign Up</a>
                    </button>
                </div>
                <div className="btn2">
                    <button>
                        <a href="/login">Log In</a>
                    </button>
                </div>
            </header>
            <div className="heading">
                <h1><b>Welcome to APIIT Leisure!</b></h1>
                <p>-Connecting Sport Enthusiasts-</p>
            </div>
        </div>
    );
};

export default LandingPage;
