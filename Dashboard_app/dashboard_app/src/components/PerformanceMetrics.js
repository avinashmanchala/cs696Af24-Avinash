import React from 'react';
import { ProgressBar } from 'react-bootstrap';

const PerformanceMetrics = () => {
  return (
    <div className="performance-metrics">
      <h5>Performance Metrics</h5>
      <div className="metric">
        <span>CPU Usage</span>
        <ProgressBar now={80} />
      </div>
      <div className="metric">
        <span>Memory Usage</span>
        <ProgressBar now={60} />
      </div>
      <div className="metric">
        <span>Disk Usage</span>
        <ProgressBar now={90} />
      </div>
    </div>
  );
};

export default PerformanceMetrics;
