import React, { useState, useEffect } from "react";
import "./Home.css"; // Ensure this file exists
import Logo from "../assets/Artboard 1(White).png";


const Home = () => {
  // Set countdown target (30 days from now)
  const [timeLeft, setTimeLeft] = useState(30 * 24 * 60 * 60); // 30 days in seconds

  useEffect(() => {
    if (timeLeft <= 0) return; // Stop when countdown reaches zero

    const interval = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0)); // Decrease time every second
    }, 1000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, [timeLeft]);

  // Convert seconds to days, hours, minutes, seconds
  const formatTime = (seconds) => {
    const days = Math.floor(seconds / (24 * 60 * 60));
    const hours = Math.floor((seconds % (24 * 60 * 60)) / (60 * 60));
    const minutes = Math.floor((seconds % (60 * 60)) / 60);
    const secs = seconds % 60;
    return { days, hours, minutes, secs };
  };

  const { days, hours, minutes, secs } = formatTime(timeLeft);

  return (
    <div className="homepage">
      {/* Header */}
    <div className="header">
        <div className="logo">
            <img src={Logo} alt="Logo" />
        </div>
    </div>



      {/* Main Content */}
      <div className="main-content">
        <h1 className="theme">
          <span className="theme-main">The Tech Renaissance:</span>
          <br />
          <span className="theme-sub">Awakening Potential; Reshaping the Future</span>
        </h1>
        <p className="subtext">
          Join innovators, engineers, and entrepreneurs at the largest Tech Summit in Ekiti as we explore the future of technology, networking, and groundbreaking ideas.
        </p>
        <button className="register-btn"><a href="https://docs.google.com/forms/d/1pBaViC0xxw_Nz-Mvbaw3J5SO4hFVSl9_JzxSbILXd6k"></a>Register</button>
      </div>

      {/* Powered By Section */}
      <div className="powered-section">
        <p className="powered-text">Powered By</p>
        <p className="powered-name">Ola Otesile</p>
        <p className="collab-text">In Collaboration With</p>
        
        {/* Logos Section */}
        <div className="logos">
          <img src="/path-to-logo1.png" alt="Logo 1" className="collab-logo" />
          <img src="/path-to-logo2.png" alt="Logo 2" className="collab-logo" />
        </div>
      </div>

      {/* Countdown Timer */}
      <div className="countdown-box">
        <div className="countdown-timer">
          <span>{days}d</span> : 
          <span>{hours}h</span> : 
          <span>{minutes}m</span> : 
          <span>{secs}s</span>
        </div>
      </div>
    </div>
  );
};

export default Home;
