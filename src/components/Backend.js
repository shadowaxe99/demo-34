// src/components/Backend.js

import React from 'react';
import { useWebSocket } from 'react-use-websocket';
import { useQuery } from 'react-query';
import { getRealTimeStatistics } from './DataSource';

const Backend = () => {
  const { lastMessage } = useWebSocket('wss://api.example.com/realtime');

  const { data: statistics } = useQuery('realTimeStatistics', getRealTimeStatistics);

  return (
    <div>
      <h1>Backend Component</h1>
      <p>Last Message: {lastMessage}</p>
      <p>Real-Time Statistics: {statistics}</p>
    </div>
  );
};

export default Backend;