import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import lucasSemFundo from '../assets/perfil_semfundo.png';
import { FaDownload, FaProjectDiagram } from 'react-icons/fa';

function About() {
  return (
    <section id="about" className="about-section py-5">
      <Container>
        <Row className="mb-4 text-center">
          <Col>
            <h2 className="fw-bold" style={{ color: '#8A2BE2' }}>About Me</h2>
            <p>Let me introduce myself</p>
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col md={6} className="text-center mb-4 mb-md-0" data-aos="fade-right">
            <img
              src={lucasSemFundo}
              alt="Lucas Sobral"
              className="img-fluid rounded-circle shadow about-img"
              style={{
                width: '250px',
                border: '3px solid #8A2BE2',
                boxShadow: '0 0 25px rgba(138, 43, 226, 0.3)',
              }}
            />
          </Col>
          <Col md={6} data-aos="fade-left">
            <div className="text-light" style={{ fontSize: '1.05rem', lineHeight: '1.7' }}>
              <p>
                I'm Lucas Sobral, a Software Engineer from Brazil with over 3 years of experience
                in backend development and AI-powered solutions. I build systems that make complex
                processes simpler, faster, and smarter.
              </p>
              <p>
                I’ve led projects involving computer vision (YOLOv8), geospatial APIs, and internal
                AI assistants. Whether it’s automating forestry analysis or optimizing vehicle
                logistics, I bring data, intelligence, and clean code together.
              </p>
              <p>
                My stack includes Python, FastAPI, Django, PostgreSQL, and machine learning. I'm
                currently seeking international opportunities to contribute to global, high-impact
                products.
              </p>

              {/* 🔹 Botões interativos */}
              <div className="mt-4 d-flex gap-3 flex-wrap">
                <Button
                  variant="primary"
                  href="/Lucas_Sobral_Resume.pdf"
                  target="_blank"
                  className="btn-roxo d-flex align-items-center gap-2"
                >
                  <FaDownload /> Download CV
                </Button>
                <Button
                  variant="outline-light"
                  href="#projects"
                  className="d-flex align-items-center gap-2"
                >
                  <FaProjectDiagram /> View Projects
                </Button>
            </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;
