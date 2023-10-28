// src/components/Slide11.js

import React from 'react';
import { useState, useEffect } from 'react';
import { AiOutlineCalendar, AiOutlineDownload } from 'react-icons/ai';

const Slide11 = () => {
  const [meetingAvailability, setMeetingAvailability] = useState([]);
  const [whitepaperDownloaded, setWhitepaperDownloaded] = useState(false);

  useEffect(() => {
    // Fetch meeting availability data from API
    fetch('/api/meeting-availability')
      .then((response) => response.json())
      .then((data) => setMeetingAvailability(data));
  }, []);

  const handleScheduleMeeting = () => {
    // Logic to schedule a meeting
    // ...
  };

  const handleDownloadWhitepaper = () => {
    // Logic to download the whitepaper
    // ...
    setWhitepaperDownloaded(true);
  };

  return (
    <div className="slide">
      <h1 className="slide-title">Ready to Join Us?</h1>
      <ul className="bullet-points">
        <li>
          <AiOutlineCalendar className="bullet-icon" />
          Schedule a Meeting: Availability for next 2 weeks
          <button className="action-button" onClick={handleScheduleMeeting}>
            Schedule Now
          </button>
        </li>
        <li>
          <AiOutlineDownload className="bullet-icon" />
          Download Our Whitepaper: 30 pages of in-depth analysis
          <button
            className={`action-button ${whitepaperDownloaded ? 'disabled' : ''}`}
            onClick={handleDownloadWhitepaper}
            disabled={whitepaperDownloaded}
          >
            {whitepaperDownloaded ? 'Downloaded' : 'Download Now'}
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Slide11;