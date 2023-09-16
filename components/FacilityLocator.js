// src/components/FacilityLocator.js

import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

function FacilityLocator() {
  const [map, setMap] = useState(null);
  const [center, setCenter] = useState({ lat: 0, lng: 0 }); // Default center
  const [markers, setMarkers] = useState([]);

  const mapContainerStyle = {
    width: '100%',
    height: '400px',
  };

  const onLoad = (map) => {
    setMap(map);
  };

  const onUnmount = () => {
    setMap(null);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    // Implement a geocoding API request here to get lat/lng based on user input
    // For simplicity, let's assume we have coordinates in this example
    const newCenter = { lat: 48.8566, lng: 2.3522 }; // Paris coordinates
    setCenter(newCenter);
    // Implement logic to fetch nearby facility coordinates and set them as markers
    const facilityMarkers = [
      { id: 1, name: 'Recycle Center 1', lat: 48.8588443, lng: 2.2943506 },
      { id: 2, name: 'Recycle Center 2', lat: 48.8609497, lng: 2.3263041 },
      // Add more facility coordinates as needed
    ];
    setMarkers(facilityMarkers);
  };

  return (
    <div className="facility-locator">
      <h3>Find Nearby Facilities</h3>
      <form onSubmit={handleSearch}>
        <input type="text" placeholder="Enter Location" />
        <button type="submit">Search</button>
      </form>
      <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={center}
          zoom={12}
          onLoad={onLoad}
          onUnmount={onUnmount}
        >
          {markers.map((marker) => (
            <Marker
              key={marker.id}
              position={{ lat: marker.lat, lng: marker.lng }}
              title={marker.name}
            />
          ))}
        </GoogleMap>
      </LoadScript>
    </div>
  );
}

export default FacilityLocator;
