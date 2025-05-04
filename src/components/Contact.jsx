import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function Contact() {
  return (
    <section id="contact" style={{ backgroundColor: '#0e0e10', color: '#ededed', padding: '80px 0' }}>
      <Container>
        <Row className="text-center mb-5">
          <Col>
            <h2 className="fw-bold" style={{ color: '#8A2BE2' }}>Get In Touch</h2>
            <p>Feel free to reach out — I'm open to opportunities and collaborations</p>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={8} data-aos="fade-up">
            {/* Form HTML puro com classes do Bootstrap */}
            <form
              action="https://formsubmit.co/lucassobral301@gmail.com"
              method="POST"
              className="contact-form"
            >
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value="https://lukassobral.github.io/portfolio/#thanks" />

              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" name="name" id="name" className="form-control bg-dark text-light" placeholder="Your name" required />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" name="email" id="email" className="form-control bg-dark text-light" placeholder="Your email" required />
              </div>

              <div className="mb-4">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea name="message" id="message" rows="5" className="form-control bg-dark text-light" placeholder="Write your message..." required></textarea>
              </div>

              <div className="text-center">
                <Button variant="outline-light" type="submit">
                  Send Message
                </Button>
              </div>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;
