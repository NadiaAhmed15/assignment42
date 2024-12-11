import React from "react";
import { Routes, Route, Router } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "./Home";
import Features from "./Features";
import Support from "./Support";
import About from "./About";
import './style.css';

const App = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      {/* Navbar */}
      <Navbar />
      
      {/* Main Content */}
      <div className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/support" element={<Support />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
