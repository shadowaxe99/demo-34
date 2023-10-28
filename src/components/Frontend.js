// src/components/Frontend.js

import React, { useState, useEffect } from 'react';
import * as d3 from 'd3';

const Frontend = () => {
  const [currentUsers, setCurrentUsers] = useState(0);
  const [userDistribution, setUserDistribution] = useState([]);
  const [mostUsedFeatures, setMostUsedFeatures] = useState([]);
  const [userTestimonials, setUserTestimonials] = useState([]);
  const [encryptionStatus, setEncryptionStatus] = useState('Secure');
  const [activeNodes, setActiveNodes] = useState(0);
  const [revenueData, setRevenueData] = useState([]);
  const [investmentStatus, setInvestmentStatus] = useState(0);

  useEffect(() => {
    // Fetch real-time data for current users
    const fetchCurrentUsers = async () => {
      try {
        const response = await fetch('/api/users');
        const data = await response.json();
        setCurrentUsers(data.currentUsers);
      } catch (error) {
        console.error('Error fetching current users:', error);
      }
    };

    // Fetch real-time data for user distribution
    const fetchUserDistribution = async () => {
      try {
        const response = await fetch('/api/user-distribution');
        const data = await response.json();
        setUserDistribution(data.userDistribution);
      } catch (error) {
        console.error('Error fetching user distribution:', error);
      }
    };

    // Fetch real-time data for most used features
    const fetchMostUsedFeatures = async () => {
      try {
        const response = await fetch('/api/most-used-features');
        const data = await response.json();
        setMostUsedFeatures(data.mostUsedFeatures);
      } catch (error) {
        console.error('Error fetching most used features:', error);
      }
    };

    // Fetch real-time data for user testimonials
    const fetchUserTestimonials = async () => {
      try {
        const response = await fetch('/api/user-testimonials');
        const data = await response.json();
        setUserTestimonials(data.userTestimonials);
      } catch (error) {
        console.error('Error fetching user testimonials:', error);
      }
    };

    // Fetch real-time data for encryption status
    const fetchEncryptionStatus = async () => {
      try {
        const response = await fetch('/api/encryption-status');
        const data = await response.json();
        setEncryptionStatus(data.encryptionStatus);
      } catch (error) {
        console.error('Error fetching encryption status:', error);
      }
    };

    // Fetch real-time data for active nodes
    const fetchActiveNodes = async () => {
      try {
        const response = await fetch('/api/active-nodes');
        const data = await response.json();
        setActiveNodes(data.activeNodes);
      } catch (error) {
        console.error('Error fetching active nodes:', error);
      }
    };

    // Fetch real-time data for revenue data
    const fetchRevenueData = async () => {
      try {
        const response = await fetch('/api/revenue-data');
        const data = await response.json();
        setRevenueData(data.revenueData);
      } catch (error) {
        console.error('Error fetching revenue data:', error);
      }
    };

    // Fetch real-time data for investment status
    const fetchInvestmentStatus = async () => {
      try {
        const response = await fetch('/api/investment-status');
        const data = await response.json();
        setInvestmentStatus(data.investmentStatus);
      } catch (error) {
        console.error('Error fetching investment status:', error);
      }
    };

    // Fetch real-time data on component mount
    fetchCurrentUsers();
    fetchUserDistribution();
    fetchMostUsedFeatures();
    fetchUserTestimonials();
    fetchEncryptionStatus();
    fetchActiveNodes();
    fetchRevenueData();
    fetchInvestmentStatus();

    // Set up D3.js graph for most used features
    const svg = d3.select('#most-used-features-graph')
      .append('svg')
      .attr('width', 400)
      .attr('height', 300);

    // Clean up D3.js graph on component unmount
    return () => {
      svg.remove();
    };
  }, []);

  return (
    <div>
      <h1>Elysium Innovations Interactive Dashboard</h1>
      <h2>Real-time Analytics</h2>
      <ul>
        <li>User Engagement Metrics: 80% Monthly Active Users</li>
        <li>AI Capabilities Utilization: 200+ Features</li>
      </ul>

      <h2>Real-Time User Statistics Panel</h2>
      <p>Current Number of Users: {currentUsers}</p>
      <div id="user-distribution-map">
        {/* Interactive world map highlighting user distribution */}
      </div>

      <h2>AI Capabilities Utilization</h2>
      <div id="most-used-features-graph">
        {/* Real-time graph showing most used AI features */}
      </div>
      <ul>
        {mostUsedFeatures.map((feature) => (
          <li key={feature.id} onMouseOver={() => handleTestimonialHover(feature.id)}>
            {feature.name}
          </li>
        ))}
      </ul>
      <div id="user-testimonials">
        {/* Clickable testimonials that pop up when hovering over a feature */}
        {userTestimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial">
            <h3>{testimonial.name}</h3>
            <p>{testimonial.content}</p>
          </div>
        ))}
      </div>

      <h2>Security Metrics</h2>
      <p>Encryption Status: {encryptionStatus}</p>
      <p>Number of Nodes: {activeNodes}</p>

      <h2>Financial Overview</h2>
      <div id="revenue-stream-chart">
        {/* Pie chart breaking down revenue by service */}
      </div>
      <div id="investment-tracker-chart">
        {/* Bar graph showing current investment status */}
      </div>

      {/* Additional components and interactive elements */}
    </div>
  );
};

export default Frontend;