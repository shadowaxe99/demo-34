// src/components/RealTimeUserStatisticsPanel.js

import React from 'react';
import { useState, useEffect } from 'react';
import { useSubscription } from 'react-apollo';
import { WebSocketLink } from '@apollo/client/link/ws';
import { split } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import { getMainDefinition } from 'apollo-utilities';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { gql } from 'apollo-boost';

const RealTimeUserStatisticsPanel = () => {
  const [currentUsers, setCurrentUsers] = useState(0);
  const [userDistribution, setUserDistribution] = useState([]);
  const [mostUsedFeatures, setMostUsedFeatures] = useState([]);
  const [encryptionStatus, setEncryptionStatus] = useState('Secure');
  const [activeNodes, setActiveNodes] = useState(0);
  const [revenueStream, setRevenueStream] = useState([]);
  const [investmentStatus, setInvestmentStatus] = useState(0);

  const wsLink = new WebSocketLink({
    uri: 'wss://api.example.com/graphql',
    options: {
      reconnect: true,
    },
  });

  const httpLink = new HttpLink({
    uri: 'https://api.example.com/graphql',
  });

  const link = split(
    ({ query }) => {
      const definition = getMainDefinition(query);
      return (
        definition.kind === 'OperationDefinition' &&
        definition.operation === 'subscription'
      );
    },
    wsLink,
    httpLink
  );

  const client = new ApolloClient({
    link,
    cache: new InMemoryCache(),
  });

  const CURRENT_USERS_SUBSCRIPTION = gql`
    subscription {
      currentUsers
    }
  `;

  const USER_DISTRIBUTION_SUBSCRIPTION = gql`
    subscription {
      userDistribution {
        country
        count
      }
    }
  `;

  const MOST_USED_FEATURES_SUBSCRIPTION = gql`
    subscription {
      mostUsedFeatures {
        feature
        count
      }
    }
  `;

  const ENCRYPTION_STATUS_SUBSCRIPTION = gql`
    subscription {
      encryptionStatus
    }
  `;

  const ACTIVE_NODES_SUBSCRIPTION = gql`
    subscription {
      activeNodes
    }
  `;

  const REVENUE_STREAM_SUBSCRIPTION = gql`
    subscription {
      revenueStream {
        service
        amount
      }
    }
  `;

  const INVESTMENT_STATUS_SUBSCRIPTION = gql`
    subscription {
      investmentStatus
    }
  `;

  useSubscription(CURRENT_USERS_SUBSCRIPTION, {
    onSubscriptionData: ({ subscriptionData }) => {
      setCurrentUsers(subscriptionData.data.currentUsers);
    },
  });

  useSubscription(USER_DISTRIBUTION_SUBSCRIPTION, {
    onSubscriptionData: ({ subscriptionData }) => {
      setUserDistribution(subscriptionData.data.userDistribution);
    },
  });

  useSubscription(MOST_USED_FEATURES_SUBSCRIPTION, {
    onSubscriptionData: ({ subscriptionData }) => {
      setMostUsedFeatures(subscriptionData.data.mostUsedFeatures);
    },
  });

  useSubscription(ENCRYPTION_STATUS_SUBSCRIPTION, {
    onSubscriptionData: ({ subscriptionData }) => {
      setEncryptionStatus(subscriptionData.data.encryptionStatus);
    },
  });

  useSubscription(ACTIVE_NODES_SUBSCRIPTION, {
    onSubscriptionData: ({ subscriptionData }) => {
      setActiveNodes(subscriptionData.data.activeNodes);
    },
  });

  useSubscription(REVENUE_STREAM_SUBSCRIPTION, {
    onSubscriptionData: ({ subscriptionData }) => {
      setRevenueStream(subscriptionData.data.revenueStream);
    },
  });

  useSubscription(INVESTMENT_STATUS_SUBSCRIPTION, {
    onSubscriptionData: ({ subscriptionData }) => {
      setInvestmentStatus(subscriptionData.data.investmentStatus);
    },
  });

  return (
    <div>
      <h2>Real-Time User Statistics Panel</h2>
      <p>Current Number of Users: {currentUsers}</p>
      <div>
        <h3>User Distribution</h3>
        <ul>
          {userDistribution.map((data) => (
            <li key={data.country}>
              {data.country}: {data.count}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3>AI Capabilities Utilization</h3>
        <ul>
          {mostUsedFeatures.map((data) => (
            <li key={data.feature}>
              {data.feature}: {data.count}
            </li>
          ))}
        </ul>
      </div>
      <p>Encryption Status: {encryptionStatus}</p>
      <p>Number of Nodes: {activeNodes}</p>
      <div>
        <h3>Financial Overview</h3>
        <ul>
          {revenueStream.map((data) => (
            <li key={data.service}>
              {data.service}: {data.amount}
            </li>
          ))}
        </ul>
      </div>
      <p>Investment Tracker: {investmentStatus}</p>
    </div>
  );
};

export default RealTimeUserStatisticsPanel;