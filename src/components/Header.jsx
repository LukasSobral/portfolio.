import React, { useEffect, useState } from 'react';
import { Container, Navbar, Nav, Button } from 'react-bootstrap';

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Navbar
      expand="lg"
      fixed="top"
      variant="dark"
      className={`py-3 ${scrolled ? 'navbar-scrolled' : 'navbar-top'}`}
    >
      <Container>
        <Navbar.Brand href="#" style={{ color: '#fff', fontWeight: 'bold',fontSize: '2.0rem' }}>
          LUCAS SOBRAL
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="ms-auto">
            <Nav.Link href="#about" className="text-light">About</Nav.Link>
            <Nav.Link href="#projects" className="text-light">Projects</Nav.Link>
            <Nav.Link href="#contact" className="text-light">Contact</Nav.Link>
            <Button variant="outline-light" className="ms-3" href="#contact">Hire Me</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
