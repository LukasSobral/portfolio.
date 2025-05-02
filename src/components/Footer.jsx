import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function Footer() {
  return (
    <footer style={{ backgroundColor: '#151515', color: '#ededed', padding: '40px 0' }}>
      <Container>
        <Row className="text-center mb-3">
          <Col>
            <h5 style={{ color: '#8A2BE2' }}>Lucas Sobral</h5>
            <p className="text-muted">Software Engineer · Backend · AI · Automation</p>
          </Col>
        </Row>
        <Row className="text-center mb-3">
          <Col>
            <a
              href="https://github.com/LukasSobral"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light mx-3"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://linkedin.com/in/lukasobral"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light mx-3"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="mailto:lucassobral@email.com"
              className="text-light mx-3"
            >
              <FaEnvelope size={24} />
            </a>
          </Col>
        </Row>
        <Row className="text-center">
          <Col>
            <small className="text-muted">
              © {new Date().getFullYear()} Lucas Sobral. All rights reserved.
            </small>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
