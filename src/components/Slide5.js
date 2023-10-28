// src/components/Slide5.js

import React from 'react';
import ARPopup from './ARPopup';

const Slide5 = () => {
  return (
    <div>
      <h1>Your Data, Your Control</h1>
      <ul>
        <li>Blockchain Security: 256-bit encryption</li>
        <li>Decentralized Platform: 10,000 nodes</li>
      </ul>
      <ARPopup label="256-bit Encryption" />
    </div>
  );
};

export default Slide5;