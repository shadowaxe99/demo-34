// src/components/Slide8.js

import React from 'react';
import Milestone from './Milestone';

const Slide8 = () => {
  return (
    <div className="slide">
      <h1 className="slide-title">A Compelling Vision for the Future</h1>
      <p className="slide-text">Our Vision for 2030: Reach 10 million users</p>
      <ul className="slide-bullet-points">
        <li>Seamless Integration of AI into Daily Life: 500+ services</li>
        <li>A People-Led AI Revolution: 2 million user-contributions</li>
      </ul>
      <div className="slide-interactive-element">
        <h2 className="milestone-title">Interactive Roadmap</h2>
        <div className="milestone-container">
          <Milestone
            title="Milestone 1"
            description="Launch AI-powered personal assistant"
          />
          <Milestone
            title="Milestone 2"
            description="Expand AI capabilities to healthcare industry"
          />
          <Milestone
            title="Milestone 3"
            description="Integrate AI into transportation systems"
          />
          <Milestone
            title="Milestone 4"
            description="Establish AI research institute"
          />
          <Milestone
            title="Milestone 5"
            description="Achieve global AI adoption"
          />
        </div>
      </div>
    </div>
  );
};

export default Slide8;