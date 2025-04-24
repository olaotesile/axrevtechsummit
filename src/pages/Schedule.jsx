import React from "react";
import "./Schedule.css";

const Schedule = () => {
  return (
    <div className="schedule-page">
      <h1 className="schedule-title">Schedule of Events</h1>
      <p className="schedule-date">April 26, 2025</p>

      <div className="schedule-container">
        <div className="schedule-item">
          <span className="schedule-time">10:00 – 10:30 AM</span>
          <span className="schedule-event">Guest Arrival & Networking</span>
        </div>
        <div className="schedule-item">
          <span className="schedule-time">10:30 – 10:35 AM</span>
          <span className="schedule-event">Opening by MC (Samuel)</span>
        </div>
        <div className="schedule-item">
          <span className="schedule-time">10:35 – 10:45 AM</span>
          <span className="schedule-event">
            Opening Talk by Host – Ola Otesile
          </span>
        </div>
        <div className="schedule-item">
          <span className="schedule-time">10:45 – 11:15 AM</span>
          <span className="schedule-event">How to Get Started in Tech</span>
        </div>
        <div className="schedule-item">
          <span className="schedule-time">11:15 – 11:45 AM</span>
          <span className="schedule-event">Building a Tech Startup</span>
        </div>
        <div className="schedule-item">
          <span className="schedule-time">11:45 – 12:25 PM</span>
          <span className="schedule-event">
            Interactive Panel Session – Real Talks, Real Takes
          </span>
        </div>
        <div className="schedule-item">
          <span className="schedule-time">12:25 – 12:35 PM</span>
          <span className="schedule-event">Advertisement Break</span>
        </div>
        <div className="schedule-item">
          <span className="schedule-time">12:35 – 1:05 PM</span>
          <span className="schedule-event">
            The Future & Impact of Tech in Nigeria
          </span>
        </div>
        <div className="schedule-item">
          <span className="schedule-time">1:05 – 1:35 PM</span>
          <span className="schedule-event">
            The Power of Community & Learning
          </span>
        </div>
        <div className="schedule-item">
          <span className="schedule-time">1:35 – 1:45 PM</span>
          <span className="schedule-event">Closing Remarks – Ola Otesile</span>
        </div>
        <div className="schedule-item">
          <span className="schedule-time">1:45 – 2:00 PM</span>
          <span className="schedule-event">
            Networking, Mini-Photo Sessions & Departure
          </span>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
