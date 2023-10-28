// src/components/Slide4.js

import React from 'react';
import { useState } from 'react';
import { AiOutlinePlayCircle } from 'react-icons/ai';
import { BsFillPersonFill } from 'react-icons/bs';
import { RiUserShared2Fill } from 'react-icons/ri';
import { FaUserFriends } from 'react-icons/fa';
import { GiNetworkBars } from 'react-icons/gi';

const Slide4 = () => {
  const [demo, setDemo] = useState('');

  const handleDemoClick = (demo) => {
    setDemo(demo);
  };

  return (
    <div className="slide">
      <h1 className="slide-title">The Automation Station</h1>
      <ul className="slide-bullet-points">
        <li>Discover 200+ AI Capabilities</li>
        <li>User-Developer Bridge: Connect with 500+ developers</li>
      </ul>
      <div className="slide-interactive-element">
        <div className="demo-icons">
          <div className={`demo-icon ${demo === 'demo1' ? 'active' : ''}`} onClick={() => handleDemoClick('demo1')}>
            <AiOutlinePlayCircle className="demo-icon-svg" />
            <span className="demo-icon-label">Demo 1</span>
          </div>
          <div className={`demo-icon ${demo === 'demo2' ? 'active' : ''}`} onClick={() => handleDemoClick('demo2')}>
            <BsFillPersonFill className="demo-icon-svg" />
            <span className="demo-icon-label">Demo 2</span>
          </div>
          <div className={`demo-icon ${demo === 'demo3' ? 'active' : ''}`} onClick={() => handleDemoClick('demo3')}>
            <RiUserShared2Fill className="demo-icon-svg" />
            <span className="demo-icon-label">Demo 3</span>
          </div>
          <div className={`demo-icon ${demo === 'demo4' ? 'active' : ''}`} onClick={() => handleDemoClick('demo4')}>
            <FaUserFriends className="demo-icon-svg" />
            <span className="demo-icon-label">Demo 4</span>
          </div>
          <div className={`demo-icon ${demo === 'demo5' ? 'active' : ''}`} onClick={() => handleDemoClick('demo5')}>
            <GiNetworkBars className="demo-icon-svg" />
            <span className="demo-icon-label">Demo 5</span>
          </div>
        </div>
        {demo && (
          <div className="demo-video">
            <video src={`demos/${demo}.mp4`} controls autoPlay />
          </div>
        )}
      </div>
    </div>
  );
};

export default Slide4;