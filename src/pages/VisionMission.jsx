import React, { useEffect, useState } from "react";
import "./VisionMission.css";

const VisionMission = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("vision-mission");
      if (section) {
        const top = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (top < windowHeight * 0.75) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div id="vision-mission" className={`vision-mission ${isVisible ? "visible" : ""}`}>
      <div className="content-container">
        {/* Mission Section (Left) */}
        <div className="section mission">
          <h2 className="section-title">Our Mission</h2>
          <p className="section-text">
            We aim to empower individuals through STEM and technology, creating a
            future where Nigerian innovators shape the world stage. By organizing
            this summit, we provide a launchpad for aspiring tech pioneers.
          </p>
          <button className="read-more-btn">Learn More</button>
        </div>

        {/* Vision Section (Right) */}
        <div className="section vision">
          <h2 className="section-title">Our Vision</h2>
          <p className="section-text">
          To ignite a technological revolution in Nigeria by equipping our generation with the knowledge, skills, and resources needed to solve real-world problems, and position the nation as a leading force in the global tech ecosystem.
          </p>
          <button className="read-more-btn">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default VisionMission;