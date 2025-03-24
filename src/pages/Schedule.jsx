import React from "react";
import "./Schedule.css";

const Schedule = () => {
  return (
    <div className="schedule-page">
    <h1 className="schedule-title">Schedule of Events</h1>
    <p className="schedule-date">April 12, 2025</p>
  
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
        <span className="schedule-time">10:40 – 10:45 AM</span>
        <span className="schedule-event">Q&A Session</span>
      </div>
      <div className="schedule-item">
        <span className="schedule-time">10:45 – 11:15 AM</span>
        <span className="schedule-event">How to Get Started in Tech</span>
      </div>
      <div className="schedule-item">
        <span className="schedule-time">11:15 – 11:20 AM</span>
        <span className="schedule-event">Q&A Session</span>
      </div>
      <div className="schedule-item">
        <span className="schedule-time">11:20 – 11:50 AM</span>
        <span className="schedule-event">The Future of Tech: AI, Web3 & Beyond</span>
      </div>
      <div className="schedule-item">
        <span className="schedule-time">11:50 – 11:55 AM</span>
        <span className="schedule-event">Q&A Session</span>
      </div>
      <div className="schedule-item">
        <span className="schedule-time">11:55 AM – 12:25 PM</span>
        <span className="schedule-event">Interactive Session: Ask & Debate Questions</span>
      </div>
      <div className="schedule-item">
        <span className="schedule-time">12:25 – 12:55 PM</span>
        <span className="schedule-event">Building a Tech Startup</span>
      </div>
      <div className="schedule-item">
        <span className="schedule-time">12:55 – 1:00 PM</span>
        <span className="schedule-event">Q&A Session</span>
      </div>
      <div className="schedule-item">
        <span className="schedule-time">1:00 – 1:30 PM</span>
        <span className="schedule-event">The Power of Community & Learning</span>
      </div>
      <div className="schedule-item">
        <span className="schedule-time">1:30 – 1:35 PM</span>
        <span className="schedule-event">Q&A Session</span>
      </div>
      <div className="schedule-item">
        <span className="schedule-time">1:35 – 1:55 PM</span>
        <span className="schedule-event">Closing Keynote & Call to Action</span>
      </div>
      <div className="schedule-item">
        <span className="schedule-time">1:55 – 2:15 PM</span>
        <span className="schedule-event">Photo Session & Networking</span>
      </div>
    </div>
</div>

  
  );
};

export default Schedule;