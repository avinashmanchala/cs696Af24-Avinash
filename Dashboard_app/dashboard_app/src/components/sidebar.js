import React, { useState } from 'react';
import { Nav } from 'react-bootstrap';
import { FaHome, FaUser, FaChartBar, FaShoppingCart, FaCog } from 'react-icons/fa';

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
      <Nav className="flex-column">
        <Nav.Item>
          <Nav.Link href="#"><FaHome /> Dashboard</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#"><FaUser /> Users</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#"><FaChartBar /> Analytics</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#"><FaShoppingCart /> Orders</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#"><FaCog /> Settings</Nav.Link>
        </Nav.Item>
      </Nav>
      <button onClick={() => setCollapsed(!collapsed)}>
        {collapsed ? 'Expand' : 'Collapse'}
      </button>
    </div>
  );
};

export default Sidebar;
