// src/components/EwasteSubmission.js

import React, { useState } from 'react';

function EwasteSubmission() {
  const [ewasteData, setEwasteData] = useState({
    type: '',
    condition: 'New', // Default condition
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEwasteData({
      ...ewasteData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement submission logic here, e.g., make an API request to the backend
    console.log('E-Waste Submission:', ewasteData);
    // Reset the form fields after submission
    setEwasteData({
      type: '',
      condition: 'New',
    });
  };

  return (
    <div className="ewaste-submission">
      <h3>Submit E-Waste</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>E-Waste Type:</label>
          <input
            type="text"
            name="type"
            value={ewasteData.type}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Condition:</label>
          <select name="condition" value={ewasteData.condition} onChange={handleChange}>
            <option value="New">New</option>
            <option value="Used">Used</option>
            <option value="Broken">Broken</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default EwasteSubmission;
