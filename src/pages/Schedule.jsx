import React from "react";
import "./Schedule.css";

const Schedule = () => {
  return (
    <div className="schedule-page">
      <h1 className="schedule-title">Schedule of Events</h1>
      <p className="schedule-date">April 13, 2025</p>
      
      <div className="schedule-container">
        <div className="schedule-item">
          <span className="schedule-time">9:30 – 10:00 AM</span>
          <span className="schedule-event">Guest Arrival & Registration</span>
        </div>
        <div className="schedule-item">
          <span className="schedule-time">10:00 – 10:10 AM</span>
          <span className="schedule-event">Opening Ceremony & Welcome Speech</span>
        </div>
        <div className="schedule-item">
          <span className="schedule-time">10:10 – 10:40 AM</span>
          <span className="schedule-event">The Future & Impact of Tech in Nigeria</span>
        </div>
        <div className="schedule-item">
          <span className="schedule-time">10:40 – 11:10 AM</span>
          <span className="schedule-event">How to Get Started in Tech</span>
        </div>
        <div className="schedule-item">
          <span className="schedule-time">11:10 – 11:40 AM</span>
          <span className="schedule-event">The Future of Tech: AI, Web3 & Beyond</span>
        </div>
        <div className="schedule-item">
          <span className="schedule-time">11:40 AM – 12:10 PM</span>
          <span className="schedule-event">Panel Discussion: Ask the Experts</span>
        </div>
        <div className="schedule-item">
          <span className="schedule-time">12:10 – 12:40 PM</span>
          <span className="schedule-event">Pitch Your Idea Competition</span>
        </div>
        <div className="schedule-item">
          <span className="schedule-time">12:40 – 1:10 PM</span>
          <span className="schedule-event">Building a Tech Startup</span>
        </div>
        <div className="schedule-item">
          <span className="schedule-time">1:10 – 1:40 PM</span>
          <span className="schedule-event">The Power of Community & Learning</span>
        </div>
        <div className="schedule-item">
          <span className="schedule-time">1:40 – 2:00 PM</span>
          <span className="schedule-event">Closing Keynote & Call to Action</span>
        </div>
      </div>
    </div>
  );
};

export default Schedule;