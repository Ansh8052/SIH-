// src/components/Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li className="nav-item">
          <Link to="/register">Register</Link>
        </li>
        <li className="nav-item">
          <Link to="/login">Login</Link>
        </li>
        <li className="nav-item">
          <Link to="/submit-ewaste">Submit E-Waste</Link>
        </li>
        <li className="nav-item">
          <Link to="/locate-facility">Locate Facility</Link>
        </li>
        <li className="nav-item">
          <Link to="/about-us">About Us</Link>
        </li>
        <li className="nav-item">
          <Link to="/certification-system">Certificates</Link>
        </li>
        <li className="nav-item">
          <Link to="/educational-content">Educational Content</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
