import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function Contact() {
  return (
    <section id="contact" style={{ backgroundColor: '#0e0e10', color: '#ededed', padding: '80px 0' }}>
      <Container>
        <Row className="text-center mb-5">
          <Col>
            <h2 className="fw-bold" style={{ color: '#8A2BE2' }}>Get In Touch</h2>
            <p className="text-muted">Feel free to reach out — I'm open to opportunities and collaborations</p>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={8}>
            <Form>
              <Form.Group controlId="formName" className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Your name" />
              </Form.Group>

              <Form.Group controlId="formEmail" className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Your email" />
              </Form.Group>

              <Form.Group controlId="formMessage" className="mb-4">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={5} placeholder="Write your message..." />
              </Form.Group>

              <div className="text-center">
                <Button variant="primary" type="submit">
                  Send Message
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;
