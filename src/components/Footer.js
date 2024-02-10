import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col xs={12} md={4}>
            <h3>Contact Us</h3>
            <div className='footer-items'>
            <p><FaMapMarkerAlt /><a href="https://www.bing.com/maps?osid=e52a1fc3-9ea0-4499-a5d6-e14863f79244&cp=18.489981~73.799639&lvl=13.9&pi=0&v=2&sV=2&form=S00027" target="_blank" rel="noopener noreferrer">Pune, Maharashtra 411052, IN</a></p>
              <p><FaEnvelope /> <a href="mailto:veritech@gmail.com">veritech@gmail.com</a></p>
              <p><FaPhone /> <a href="tel:9371838418">9371838418</a></p>
            </div>
          </Col>
          <Col xs={12} md={4}>
            <h3>Explore</h3>
            <div className='footer-items'>
              <p><a href='#home'>Home</a></p>
              <p><a href='#about'>About Us</a></p>
              <p><a href='#team'>Our Team</a></p>
            </div>
          </Col>
          <Col xs={12} md={4}>
            <h3>Connect Us</h3>
            <div className="social-icons">
              <a href='https://www.facebook.com/login/' target='_blank'><FaFacebook style={{ color: 'white' }} /></a>
              <a href='https://twitter.com/i/flow/login' target='_blank'><FaTwitter style={{ color: 'white' }} /></a>
              <a href='https://www.linkedin.com/company/veritech-software-it-services-pvt-ltd/' target='_blank'><FaLinkedin style={{ color: 'white' }} /></a>
              <a href='https://www.instagram.com/' target='_blank'><FaInstagram style={{ color: 'white' }} /></a>
            </div>
          </Col>
        </Row>
        <hr/>
        <Row>
          <div className='footer-end'>
            <p>&copy; VeriTech Software Services || All Rights Reserved. Designed By Arsath</p>
          </div>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;