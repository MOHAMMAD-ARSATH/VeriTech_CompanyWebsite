import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import brand from '../images/logo.png'; // Importing directly without using a named import

const CustomNavbar = () => {
  const [activeLink, setActiveLink] = useState('home');

  const handleNavClick = (navItem) => {
    setActiveLink(navItem);
  };

  return (
    <Navbar bg="red" expand="lg" fixed="top" className="navbar">
      <Container id="nav">
        <Navbar.Brand href="#home">
          <img
            height="80"
            width="200"
            src={brand} 
            className="d-inline-block align-top"
            alt="Company Logo"
          />{' '}
        </Navbar.Brand>

        {/* Toggler for small screens */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link
              href="#home"
              className={`nav-link ${activeLink === 'home' ? 'active' : ''}`}
              onClick={() => handleNavClick('home')}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#about"
              className={`nav-link ${activeLink === 'about' ? 'active' : ''}`}
              onClick={() => handleNavClick('about')}
            >
              About
            </Nav.Link>
            <Nav.Link
              href="#team"
              className={`nav-link ${activeLink === 'team' ? 'active' : ''}`}
              onClick={() => handleNavClick('team')}
            >
              Team
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;