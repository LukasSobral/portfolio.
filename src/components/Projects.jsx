import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaGithub } from 'react-icons/fa';

function Projects() {
  const projects = [
    {
      title: 'Forestry Residue Detection',
      desc: 'AI model using YOLOv8 and geospatial data to identify fallen trees from satellite images. Automates environmental monitoring with precision.',
      image: '/assets/project1.png',
      github: 'https://github.com/LukasSobral/forest-detection',
    },
    {
      title: 'Personal Finance API',
      desc: 'RESTful backend built with FastAPI, JWT and PostgreSQL. Handles income, expenses and real-time balance calculations securely.',
      image: '/assets/project2.png',
      github: 'https://github.com/LukasSobral/finance-api',
    },
    {
      title: 'Vehicle Tracking & Routing API',
      desc: 'Geospatial API calculating real-time distances between vehicles and rural assets using shapefiles and GPS data.',
      image: '/assets/project3.png',
      github: 'https://github.com/LukasSobral/geo-tracking-api',
    },
    {
      title: 'Data Sync & ETL Automation',
      desc: 'Python tool to extract, transform and load data from external APIs into relational databases and Excel dashboards.',
      image: '/assets/project4.png',
      github: 'https://github.com/LukasSobral/data-sync-tool',
    }
  ];

  return (
    <section id="projects" className="projects-section py-5">
      <Container>
        <Row className="text-center mb-5">
          <Col>
            <h2 className="fw-bold" style={{ color: '#8A2BE2' }}>Projects</h2>
            <p>Some of the work I've done recently</p>
          </Col>
        </Row>
        <Row>
          {projects.map((project, index) => (
            <Col md={6} className="mb-4" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
              <Card className="project-card border-0 h-100 shadow-sm">
                <Card.Img
                  variant="top"
                  src={project.image}
                  alt={project.title}
                  style={{ borderTopLeftRadius: '12px', borderTopRightRadius: '12px' }}
                />
                <Card.Body>
                  <Card.Title className="fw-semibold">{project.title}</Card.Title>
                  <Card.Text>{project.desc}</Card.Text>
                  <Button
                    variant="outline-light"
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2"
                  >
                    <FaGithub className="me-2" />
                    View on GitHub
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Projects;
