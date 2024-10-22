import React from 'react';
import { Navbar, Form, FormControl, Dropdown } from 'react-bootstrap';
import { FaBell, FaUser } from 'react-icons/fa';

const Header = () => {
  return (
    <Navbar bg="light" expand="lg" className="header">
      <Form className="d-flex">
        <FormControl type="search" placeholder="Search" className="me-2" />
      </Form>
      <div className="icons">
        <FaBell className="notification-icon" />
        <Dropdown align="end">
          <Dropdown.Toggle variant="light" id="dropdown-basic">
            <FaUser />
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#/profile">Profile</Dropdown.Item>
            <Dropdown.Item href="#/logout">Logout</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </Navbar>
  );
};

export default Header;
