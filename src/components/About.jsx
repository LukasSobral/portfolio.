import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function About() {
  return (
    <section id="about" style={{ backgroundColor: '#151515', color: '#ededed', padding: '80px 0' }}>
      <Container>
        <Row className="mb-5 text-center">
          <Col>
            <h2 className="fw-bold" style={{ color: '#8A2BE2' }}>About Me</h2>
            <p className="text-muted">Let me introduce myself</p>
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col md={6}>
            <img
              src="./src/assets/fotoperfil.jpg"
              alt="Lucas About"
              className="img-fluid rounded"
              style={{
                height: '400px',
                width: 'auto',
                objectFit: 'cover',
                borderRadius: '20px',
                boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                marginBottom: '40px',
              }}
            />
          </Col>
          <Col md={6}>
            <Card bg="dark" text="light" className="border-0" style={{ backgroundColor: '#1e1e2e' }}>
              <Card.Body>
                <Card.Text style={{ fontSize: '1.1rem' }}>
                I’m a Software Engineer with 3+ years of experience designing and delivering backend and AI-powered solutions that optimize operations and drive real business impact. My technical strengths lie in Python, FastAPI, Django, and computer vision tools such as YOLOv8.

                  <br /><br />
                  I’ve led the development of intelligent systems including:
                  
                    - A computer vision platform that detects forestry residues via satellite imagery, automating environmental monitoring and saving hundreds of manual work hours;
                    - A geospatial API that calculates real-time distances between vehicles and rural assets using GPS and shapefile data, enabling optimized routing and logistics;
                    - An AI assistant that integrates language models to support internal operations and accelerate team workflows.

                    I specialize in transforming complex business processes into scalable, automated, and high-performance software solutions — combining data pipelines, RESTful APIs, and real-time analytics. I also bring experience in data engineering, dashboard creation (Power BI), and secure authentication systems.

                    Passionate about impactful engineering, I aim to join global teams building next-gen platforms where I can contribute through clean code, problem-solving, and continuous innovation.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;
