import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <Container>
        <Row className="py-4">
          <Col md={3} className="mb-4 mb-md-0">
            <h5>ADRESSE</h5>
            <p className="mb-1">Mitra Sanitär GmbH</p>
            <p className="mb-1">Borussistraße 62a</p>
            <p>12103 Berlin</p>
          </Col>
          
          <Col md={3} className="mb-4 mb-md-0">
            <h5>TELEFON</h5>
            <p>030 - 76008921</p>
          </Col>
          
          <Col md={3} className="mb-4 mb-md-0">
            <h5>E-MAIL</h5>
            <a href="mailto:hey@mitra-sanitaer.de" className="text-decoration-none text-light">
              hey@mitra-sanitaer.de
            </a>
          </Col>
          
          <Col md={3}>
            <h5>LINK</h5>
            <p className="mb-1">
              <Link to="/impressum" className="text-decoration-none text-light">
                Impressum
              </Link>
            </p>
            <p>
              <Link to="/datenschutz" className="text-decoration-none text-light">
                Datenschutz
              </Link>
            </p>
          </Col>
        </Row>
        
        <Row className="border-top pt-4">
          <Col className="text-center">
            <p className="mb-0">&copy; {new Date().getFullYear()} Mitra Sanitär GmbH. Alle Rechte vorbehalten.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;