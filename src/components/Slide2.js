// src/components/Slide2.js

import React from 'react';

const Slide2 = () => {
  const userName = "User's name"; // Replace with actual user's name
  const currentTime = new Date().toLocaleTimeString(); // Get current time

  return (
    <div>
      <h1>Our Mission: To serve 1 million users by 2025.</h1>
      <p>Hello, {userName}, it's {currentTime}.</p>
    </div>
  );
};

export default Slide2;