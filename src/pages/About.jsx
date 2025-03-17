import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="about-section">
      <h2 className="about-title">About</h2>
      <div className="about-content">
        <p className="about-text">
          The <strong>Tech Renaissance Summit</strong> is an initiative launched by <strong>Ola Otesile </strong>  
           to revolutionize Nigeria’s tech landscape. This event is designed to empower aspiring technologists, engineers,  
          and entrepreneurs with the knowledge, mentorship, and opportunities needed to drive innovation.

          <br /> <br />

          The summit brings together industry leaders, investors, and visionaries to spark discussions,  
          forge collaborations, and inspire the next generation of problem-solvers.  
          Nigeria stands on the brink of a technological revolution, and this summit serves as the launchpad  
          for individuals who will reshape the nation’s future through STEM and innovation.
        </p>
      </div>
    </section>
  );
};

export default About;
