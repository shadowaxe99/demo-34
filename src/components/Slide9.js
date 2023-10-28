// src/components/Slide9.js

import React from 'react';
import PieChart from './PieChart';

const Slide9 = () => {
  return (
    <div className="slide">
      <h1 className="slide-title">Be a Part of the Revolution</h1>
      <ul className="bullet-points">
        <li>Investment Opportunities: $50M in Series A</li>
        <li>Strategic Partnerships: 20+ industry leaders</li>
      </ul>
      <div className="interactive-element">
        <PieChart data={investmentAllocationData} />
      </div>
    </div>
  );
};

export default Slide9;