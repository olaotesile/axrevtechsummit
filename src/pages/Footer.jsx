import React from "react";
import "./Footer.css";
import { FaDiscord, FaInstagram, FaEnvelope } from "react-icons/fa"; // Importing icons

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="venue">Venue: Federal University Oye Ekiti, Ikole Campus, Ekiti State, Nigeria</p>
        <p className="contact">Phone: +234 913 713 4948</p>
        <div className="social-icons">
          <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
            <FaDiscord className="icon discord" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="icon instagram" />
          </a>
          <a href="mailto:axrevtechsummit@gmail.com">
            <FaEnvelope className="icon gmail" />
          </a>
        </div>
        <p className="copyright">© 2025 Axrev Tech Summit. All rights reserved. <br /><a href="https://olaotesile.vercel.app" target="_blank" rel="noopener noreferrer">olaotesile.vercel.app</a></p>
      </div>
    </footer>
  );
};

export default Footer;
