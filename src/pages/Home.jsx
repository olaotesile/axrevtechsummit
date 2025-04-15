import React, { useState, useEffect } from "react";
import "./Home.css";
import Logo from "../assets/Artboard 1(White).png";
import Logo1 from "../assets/download-removebg-preview (1).png";
import Logo2 from "../assets/amobern-logo-nobg.png";
import backgroundImage from "../assets/axrev refined image.png";

const Home = () => {
  const calculateTimeLeft = () => {
    const targetDate = new Date("2025-04-26T00:00:00");
    const now = new Date();
    const difference = Math.max(0, Math.floor((targetDate - now) / 1000));
    return difference;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    if (timeLeft <= 0) return;

    const interval = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft]);

  const formatTime = (seconds) => {
    const days = Math.floor(seconds / (24 * 60 * 60));
    const hours = Math.floor((seconds % (24 * 60 * 60)) / (60 * 60));
    const minutes = Math.floor((seconds % (60 * 60)) / 60);
    const secs = seconds % 60;
    return { days, hours, minutes, secs };
  };

  const { days, hours, minutes, secs } = formatTime(timeLeft);

  return (
    <div
      className="homepage"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      {/* Navigation Header */}
      <div className="nav-header">
        <div className="nav-logo">
          <img src={Logo} alt="Logo" />
        </div>
        <ul className="nav-links">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#schedule">Schedule</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <a
          href="https://docs.google.com/forms/d/1pBaViC0xxw_Nz-Mvbaw3J5SO4hFVSl9_JzxSbILXd6k"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="nav-register-btn">Register</button>
        </a>
      </div>

      <div className="big-div" style={{position: 'absolute', zIndex: 5}}>
        {/* Main Content */}
        <div className="main-content">
          <h1 className="theme">
            <span className="theme-main">The Tech Renaissance:</span>
            <br />
            <span className="theme-sub">
              Awakening Potential; Reshaping the Future
            </span>
          </h1>
          <p className="subtext">
            Join innovators, engineers, and entrepreneurs at the largest Tech
            Summit in Ekiti as we explore the future of technology, networking,
            and groundbreaking ideas.
          </p>
          <a
            href="https://docs.google.com/forms/d/1pBaViC0xxw_Nz-Mvbaw3J5SO4hFVSl9_JzxSbILXd6k"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="register-btn">Register</button>
          </a>
        </div>

        {/* Powered By Section */}
        <div className="powered-section">
          <p className="powered-text">Hosted By</p>
          <p className="powered-name">Ola Otesile</p>
          <p className="collab-text">In Collaboration With</p>

          <div className="logos">
            <img src={Logo1} alt="Logo 1" className="collab-logo" />
            <img src={Logo2} alt="Logo 2" className="collab-logo" />
          </div>
        </div>

        {/* Countdown Timer */}
        <div className="countdown-box">
          <div className="countdown-timer">
            <span>{days}d</span> :<span>{hours}h</span> :<span>{minutes}m</span>{" "}
            :<span>{secs}s</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
