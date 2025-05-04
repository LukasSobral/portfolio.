import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Thanks() {
  return (
    <section style={{ backgroundColor: '#0e0e10', color: '#ededed', height: '100vh', display: 'flex', alignItems: 'center' }}>
      <Container>
        <Row className="justify-content-center text-center">
          <Col md={8}>
            <h1 className="fw-bold mb-4" style={{ color: '#8A2BE2' }}>Thank you!</h1>
            <p className="mb-4">Your message has been sent successfully. I’ll get back to you soon.</p>
            <Link to="/">
              <Button variant="outline-light">Back to Home</Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Thanks;
