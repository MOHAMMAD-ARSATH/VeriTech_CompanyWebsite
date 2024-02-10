import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const OurTeam = () => {
  const teamMembers = [
    {
      name: "John Doe",
      role: "Software Developer",
      desc: "Crafting clean, efficient code to power next-generation software solutions and drive digital transformation.",
      profileIcon: require('../images/person1.png')
    },
    {
      name: "Jane Smith",
      role: "UX/UI Designer",
      desc: "Designing immersive digital experiences that blend aesthetics and functionality, shaping the future of user interaction.",
      profileIcon: require('../images/person2.png')
    },
    {
      name: "Michael Johnson",
      role: "Project Manager",
      desc: "Leading cross-functional teams with precision and agility, delivering projects on time and within scope.",
      profileIcon: require('../images/person3.png')
    },
    {
      name: "Emily Davis",
      role: "Quality Assurance Engineer",
      desc: "Ensuring the highest standards of software quality and reliability through meticulous testing and analysis.",
      profileIcon: require('../images/person4.png')
    },
    {
      name: "Alexandra Lee",
      role: "Data Scientist",
      desc: "Extracting valuable insights from complex data sets to drive strategic decision-making and innovation.",
      profileIcon: require('../images/person5.png')
    },
    {
      name: "Christopher Brown",
      role: "Cybersecurity Analyst",
      desc: "Protecting digital assets from cyber threats by implementing robust security measures and proactive risk management.",
      profileIcon: require('../images/person6.png')
    },
    {
      name: "Jessica Wilson",
      role: "Marketing Specialist",
      desc: "Crafting compelling marketing strategies and campaigns to elevate brand visibility and drive business growth.",
      profileIcon: require('../images/person7.png')
    },
    {
      name: "William Taylor",
      role: "Systems Administrator",
      desc: "Maintaining and optimizing IT infrastructure to ensure seamless operation and maximum efficiency.",
      profileIcon: require('../images/person8.png')
    },
    {
      name: "Emma Garcia",
      role: "Database Administrator",
      desc: "Designing and managing databases to support organizational needs and ensure data integrity and security.",
      profileIcon: require('../images/person9.png')
    },
    {
      name: "Daniel Martinez",
      role: "Network Engineer",
      desc: "Designing, implementing, and managing network infrastructure to ensure connectivity, reliability, and security.",
      profileIcon: require('../images/person10.png')
    },
    {
      name: "Sophia Brown",
      role: "Software Tester",
      desc: "Ensuring software products meet quality standards through comprehensive testing and analysis.",
      profileIcon: require('../images/person11.png')
    },
  ];
  
  return (
    <Container className='team' id='team'>
      <h2 className="text-center mb-4">Meet Our Team</h2>
      <Row className="justify-content-center">
        {teamMembers.map((member, index) => (
          <Col lg={4} md={6} sm={12} key={index} className="mb-4">
            <Card className='card'>
              <div className="profile-icon-container">
                <img src={member.profileIcon} alt="Profile Icon" className="profile-icon" /> 
              </div>
              <div className="card-content">
                <Card.Body>
                  <Card.Title className='text-center'>{member.name}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted text-center">{member.role}</Card.Subtitle>
                  <Card.Text className='desc'>
                    "{member.desc}"
                  </Card.Text>
                </Card.Body>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default OurTeam;