// src/components/Slide7.js

import React from 'react';

const Slide7 = () => {
  const activateTestimonials = () => {
    // Voice-activated testimonials logic
    console.log('Testimonials activated');
  };

  return (
    <div>
      <h1>AI for Everyone, Everywhere</h1>
      <ul>
        <li>Affordable: Plans start at $9.99/month</li>
        <li>Accessible: Available in 50 countries</li>
      </ul>
      <button onClick={activateTestimonials}>Tell me more</button>
    </div>
  );
};

export default Slide7;