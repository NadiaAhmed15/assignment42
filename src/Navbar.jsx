import React from "react";
import { Link } from "react-router-dom";
import './style.css';

const Navbar = () => {
  return (
    <header className="header">
      <div className="logo">Company Name</div>
      <nav>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/features">Features</Link></li>
          <li><Link to="/support">Support</Link></li>
          <li><Link to="/about">About</Link></li> {/* Updated path */}

        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
