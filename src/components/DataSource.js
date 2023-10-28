// src/components/DataSource.js

import React from 'react';
import { useQuery } from 'react-query';
import { GraphQLClient } from 'graphql-request';

const DataSource = () => {
  const endpoint = 'https://api.example.com/graphql';
  const client = new GraphQLClient(endpoint, {
    headers: {
      Authorization: `Bearer ${process.env.JWT_TOKEN}`,
    },
  });

  const fetchStatistics = async () => {
    const query = `
      query {
        statistics {
          users
          distribution
          capabilities
          testimonials
          encryptionStatus
          nodes
          revenue
          investment
        }
      }
    `;

    const data = await client.request(query);
    return data.statistics;
  };

  const { data, isLoading, isError, error } = useQuery('statistics', fetchStatistics);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h2>Elysium Innovations Interactive Dashboard</h2>
      <ul>
        <li>Real-time Analytics</li>
        <li>User Engagement Metrics: {data.users}% Monthly Active Users</li>
        <li>AI Capabilities Utilization: {data.capabilities} Features</li>
      </ul>

      <h3>Real-Time User Statistics Panel</h3>
      <p>Current Number of Users: {data.users}</p>
      <div>Interactive world map highlighting where your users are located</div>

      <h3>AI Capabilities Utilization</h3>
      <div>Real-time graph showing most-used AI features</div>
      <div>Clickable testimonials that pop up when hovering over a feature on the graph</div>

      <h3>Security Metrics</h3>
      <p>Encryption Status: {data.encryptionStatus}</p>
      <p>Number of Nodes: {data.nodes}</p>

      <h3>Financial Overview</h3>
      <div>Pie chart breaking down revenue by service—click to see monthly and yearly stats</div>
      <div>Bar graph showing current investment status towards the $50M Series A goal</div>
    </div>
  );
};

export default DataSource;