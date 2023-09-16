
// src/App.js

import React from 'react';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import './App.css'; // Import your global styles if you have them
import Homepage from './components/Homepage';
import UserDashboard from './components/UserDashboard';
import Register from './components/Register';
import Login from './components/Login';
import EwasteSubmission from './components/EwasteSubmission';
import FacilityLocator from './components/FacilityLocator';
import AboutUs from './components/AboutUs';
import Navbar from './components/Navbar'; // Create a Navbar component for navigation
import EducationalContent from './components/EducationalContent';
import Config from "./components/Config";
import Header from "./components/Header";
import Main from "./components/Main";
import "./style.css";

function App() {
  window.document.title =
  Config.Name + ": Claim / Verify Certificates powered by Sandru";

  return (
    
    <BrowserRouter>
    <div className="app">

      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/dashboard" element={<UserDashboard />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/submit-ewaste" element={<EwasteSubmission />} />
        <Route path="/locate-facility" element={<FacilityLocator />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/ educational-content" element={< EducationalContent />} />

      </Routes>
      <Header Config={Config} />
      <Main Config={Config} />
    </div>
  </BrowserRouter>
  );
}

export default App;

