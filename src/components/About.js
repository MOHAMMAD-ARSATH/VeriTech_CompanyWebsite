import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const AboutUs = () => {
  return (
    <Container className='about'>
      <h2>About Us</h2>
      <Row>
        <Col>
          <h3>Who We Are?</h3>
          <p>
            <b>Veritech Software Services</b>, headquartered in <b>Pune, Maharashtra,</b> and founded in <b>2022</b>, is more than just a company; it's a community of passionate professionals dedicated to fostering the next generation of developers. Our virtual internship programs span various development fields, offering hands-on experience, expert guidance, and comprehensive learning paths for successful careers in software development.
            At Veritech, we're driven by innovation, collaboration, and a passion for excellence. Our dedicated team strives to exceed expectations and transform industries with cutting-edge technology and unparalleled customer service. We aim not just to meet but to exceed expectations, every single time.
          </p>
        </Col>

        <Col className="company-stats">
          <div>
            <h1>50+</h1>
            <p>Employees Working</p>
          </div>
          <div>
            <h1>500+</h1>
            <p>Interns Trained</p>
          </div>
          <div>
            <h1>30+</h1>
            <p>Projects Completed</p>
          </div>
          <div>
            <h1>100%</h1>
            <p>Client Satisfaction</p>
          </div>
          <div>
            <h1>2+</h1>
            <p>Years in Business</p>
          </div>
          <div>
            <h1>20+</h1>
            <p>Technologies Expertise</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUs;