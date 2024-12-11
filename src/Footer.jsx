import React from "react";
import { Link } from "react-router-dom";
import './style.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h3>Features</h3>
        <Link to="/features">Cool stuff</Link>
        <Link to="/features">Random feature</Link>
        <Link to="/features">Team feature</Link>
      </div>
      <div className="footer-section">
        <h3>Support</h3>
        <Link to="/support">Support</Link>
        <Link to="/support">Support name</Link>
      </div>
      <div className="footer-section">
        <h3>About</h3>
        <Link to="/about">Team</Link>
        <Link to="/about">Locations</Link>
      </div>
    </footer>
  );
};

export default Footer;
