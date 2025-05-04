import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaCode, FaBrain, FaDatabase, FaRocket, FaCogs } from 'react-icons/fa';

function Services() {
  const services = [
    {
      icon: <FaCode size={32} color="#a259ff" />,
      title: 'Backend Development',
      desc: 'APIs, business logic, authentication and clean architecture with Python, FastAPI and Django.'
    },
    {
      icon: <FaBrain size={32} color="#a259ff" />,
      title: 'AI & Computer Vision',
      desc: 'Object detection and smart systems using YOLOv8, OpenCV and image processing techniques.'
    },
    {
      icon: <FaDatabase size={32} color="#a259ff" />,
      title: 'Data Engineering',
      desc: 'Database design, ETL pipelines and data automation with PostgreSQL and Pandas.'
    },
    {
      icon: <FaRocket size={32} color="#a259ff" />,
      title: 'API Integration',
      desc: 'Connect external APIs and automate processes securely and efficiently.'
    },
    {
      icon: <FaCogs size={32} color="#a259ff" />,
      title: 'Process Automation',
      desc: 'Automation scripts and system orchestration to save hours of manual work.'
    },
  ];

  return (
    <section className="services-section">
      <Container>
        <Row className="text-center mb-5">
          <Col>
            <h2 className="fw-bold section-title">What I Do</h2>
            <p>My areas of expertise</p>
          </Col>
        </Row>
        <Row>
          {services.map((service, index) => (
            <Col md={6} lg={4} className="mb-4" key={index} data-aos="zoom-in" data-aos-delay={index * 100}>
              <div className="service-card text-light p-4 rounded h-100">
                <div className="icon mb-3">{service.icon}</div>
                <h5 className="fw-semibold mb-2">{service.title}</h5>
                <p>{service.desc}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Services;
