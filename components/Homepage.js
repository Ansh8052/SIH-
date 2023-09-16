// src/components/Homepage.js

import React from 'react';


function Homepage() {
  return (
    <div className="homepage">
      <div className="hero">
        <h1>Welcome to E-Waste Recycling</h1>
        <p>Join us in the mission to recycle e-waste responsibly for a cleaner planet.</p>
        <button className="cta-button">Learn More</button>
      </div>

      <div className="info-section">
        <h2>Why E-Waste Recycling Matters</h2>
        <p>
          Electronic waste contains hazardous materials that can harm the environment and human health if not disposed of properly.
          By recycling e-waste, we can reduce pollution and recover valuable resources.
        </p>
      </div>

      {/* Add more sections with information and images as needed */}
    </div>
  );
}

export default Homepage;
