// src/components/UserDashboard.js

import React, { useState, useEffect } from 'react';


function UserDashboard() {
  // Simulated user data for demonstration
  const [userData, setUserData] = useState({
    username: 'JohnDoe',
    cashpoints: 100, // Replace with actual user cashpoints data
  });

  const [ewasteData, setEwasteData] = useState([]); // User's e-waste submission history

  // Simulated e-waste submission history for demonstration
  useEffect(() => {
    // Replace with actual API request to fetch user's submission history
    const sampleEwasteData = [
      { id: 1, date: '2023-09-15', type: 'Laptop', condition: 'Used', cashpoints: 10 },
      { id: 2, date: '2023-09-14', type: 'Smartphone', condition: 'Broken', cashpoints: 5 },
      // Add more submission history data as needed
    ];
    setEwasteData(sampleEwasteData);
  }, []);

  return (
    <div>
      <h2>Welcome, {userData.username}</h2>
      <div className="cashpoints">
        <p>Your Cashpoints: {userData.cashpoints}</p>
        <button className="cta-button">Redeem Coupons</button>
      </div>

      <div className="ewaste-submission">
        <h3>Submit E-Waste</h3>
        {/* Create a form for e-waste submission */}
        <form>
          <div>
            <label>E-Waste Type:</label>
            <input type="text" name="type" />
          </div>
          <div>
            <label>Condition:</label>
            <select name="condition">
              <option value="New">New</option>
              <option value="Used">Used</option>
              <option value="Broken">Broken</option>
            </select>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>

      <div className="submission-history">
        <h3>Your Submission History</h3>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>E-Waste Type</th>
              <th>Condition</th>
              <th>Cashpoints Earned</th>
            </tr>
          </thead>
          <tbody>
            {ewasteData.map((item) => (
              <tr key={item.id}>
                <td>{item.date}</td>
                <td>{item.type}</td>
                <td>{item.condition}</td>
                <td>{item.cashpoints}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UserDashboard;
