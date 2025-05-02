import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

function Hero() {
  return (
    <section
      style={{
        background: 'linear-gradient(90deg, #0e0e10 0%, #1a1035 100%)',
        color: '#ededed',
        padding: '100px 0 60px 0',
      }}
    >
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <h1 className="fw-bold display-3 text-white mb-3">Hi, I'm <span style={{ color: '#BF00FF' }}>Lucas Sobral</span></h1>
            <h4 className="fw-normal text-secondary mb-4">
              Software Engineer & AI Developer
            </h4>
            <p className="lead">
              Building scalable backends, intelligent systems and process automations.
            </p>
            <div className="d-flex gap-3 mt-4">
              <Button
                variant="light"
                style={{
                  backgroundColor: '#BF00FF',
                  color: 'white',
                  border: 'none',
                  padding: '10px 20px',
                  fontWeight: '600',
                }}
              >
                Download Resume
              </Button>
              <Button
                variant="outline-light"
                style={{
                  color: '#BF00FF',
                  fontWeight: '600',
                }}
              >
                Contact Me
              </Button>
            </div>
          </Col>
          <Col md={6} className="text-center mt-4 mt-md-0">
          <img
            src="./src/assets/profile4.png"
            alt="Lucas Sobral"
            className="img-fluid d-block mx-auto"
            style={{
              height: '750px',
              width: 'auto',
              objectFit: 'contain',
              marginBottom: '40px',
              maskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)',
            }}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Hero;
