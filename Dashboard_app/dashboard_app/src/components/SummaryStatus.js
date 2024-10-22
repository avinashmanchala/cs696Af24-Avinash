import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';

const SummaryStats = () => {
  const stats = [
    { title: 'Total Users', value: '10,245' },
    { title: 'Revenue', value: '$45,678' },
    { title: 'Orders', value: '1,234' },
    { title: 'Conversion Rate', value: '2.3%' },
  ];

  return (
    <Row>
      {stats.map((stat, index) => (
        <Col key={index} sm={6} md={3}>
          <Card>
            <Card.Body>
              <Card.Title>{stat.title}</Card.Title>
              <Card.Text>{stat.value}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default SummaryStats;
