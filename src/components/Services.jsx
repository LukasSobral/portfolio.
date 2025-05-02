import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaCode, FaBrain, FaDatabase, FaRocket, FaCogs } from 'react-icons/fa';

function Services() {
  const services = [
    {
      icon: <FaCode size={32} color="#8A2BE2" />,
      title: 'Backend Development',
      desc: 'APIs, business logic, authentication and clean architecture with Python, FastAPI and Django.'
    },
    {
      icon: <FaBrain size={32} color="#8A2BE2" />,
      title: 'AI & Computer Vision',
      desc: 'Object detection and smart systems using YOLOv8, OpenCV and image processing techniques.'
    },
    {
      icon: <FaDatabase size={32} color="#8A2BE2" />,
      title: 'Data Engineering',
      desc: 'Database design, ETL pipelines and data automation with PostgreSQL and Pandas.'
    },
    {
      icon: <FaRocket size={32} color="#8A2BE2" />,
      title: 'API Integration',
      desc: 'Connect external APIs and automate processes securely and efficiently.'
    },
    {
      icon: <FaCogs size={32} color="#8A2BE2" />,
      title: 'Process Automation',
      desc: 'Automation scripts and system orchestration to save hours of manual work.'
    },
  ];

  return (
    <section style={{ backgroundColor: '#0e0e10', color: '#ededed', padding: '80px 0' }}>
      <Container>
        <Row className="text-center mb-5">
          <Col>
            <h2 className="fw-bold" style={{ color: '#8A2BE2' }}>What I Do</h2>
            <p className="text-muted">My areas of expertise</p>
          </Col>
        </Row>
        <Row>
          {services.map((service, index) => (
            <Col md={6} lg={4} className="mb-4" key={index}>
              <Card
                style={{ backgroundColor: '#1c1c2b', height: '100%' }}
                className="h-100 border-0 shadow-sm"
              >
                <Card.Body>
                  <div className="mb-3">{service.icon}</div>
                  <Card.Title className="fw-semibold">{service.title}</Card.Title>
                  <Card.Text className="text-muted">{service.desc}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Services;
