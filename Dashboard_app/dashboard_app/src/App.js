import React from 'react';
import { Container } from 'react-bootstrap';
import Sidebar from './components/sidebar';
import Header from './components/Header';
import SummaryStats from './components/SummaryStatus';
import ChartWidget from './components/ChartWidget';
import PerformanceMetrics from './components/PerformanceMetrics';
import Footer from './components/Footer';
import './style.css';

const App = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="main-content">
        <Header />
        <Container>
          <SummaryStats />
          <ChartWidget />
          <PerformanceMetrics />
        </Container>
        <Footer />
      </div>
    </div>
  );
};

export default App;

