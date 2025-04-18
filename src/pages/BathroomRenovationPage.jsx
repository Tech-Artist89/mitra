import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import BathroomRenovation from '../components/services/BathroomRenovation';

const BathroomRenovationPage = () => {
  return (
    <>
      <section className="bg-dark text-light py-5">
        <Container>
          <Row className="justify-content-center">
            <Col md={8} className="text-center">
              <h1 className="display-4 fw-bold mb-4">BADSANIERUNG</h1>
              <p className="lead">
                Wir verwandeln Ihr Bad in eine stilvolle Wohlfühloase mit hochwertigen Materialien und innovativen Lösungen.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      
      <BathroomRenovation />
      
      <section className="py-5 bg-light">
        <Container>
          <Row className="justify-content-center">
            <Col md={8} className="text-center">
              <h2 className="mb-4">UNSERE ANDEREN DIENSTLEISTUNGEN</h2>
              <Row className="g-4 justify-content-center mb-4">
                <Col md={6} lg={5}>
                  <Link to="/heizungsbau" className="text-decoration-none">
                    <div className="bg-white p-4 text-center rounded shadow h-100">
                      <i className="bi bi-thermometer-half text-primary fs-1 mb-3"></i>
                      <h3>Heizungsbau</h3>
                      <p className="text-muted">Moderne Heizlösungen für effiziente Wärme und maximalen Komfort.</p>
                      <Button variant="outline-primary">Mehr erfahren</Button>
                    </div>
                  </Link>
                </Col>
                <Col md={6} lg={5}>
                  <Link to="/installation" className="text-decoration-none">
                    <div className="bg-white p-4 text-center rounded shadow h-100">
                      <i className="bi bi-tools text-primary fs-1 mb-3"></i>
                      <h3>Installation</h3>
                      <p className="text-muted">Fachgerechte Installations- und Wartungsarbeiten für Wasser, Gas und mehr.</p>
                      <Button variant="outline-primary">Mehr erfahren</Button>
                    </div>
                  </Link>
                </Col>
              </Row>
              <Link to="/kontakt">
                <Button variant="warning" size="lg" className="mt-3">Kontakt aufnehmen</Button>
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default BathroomRenovationPage;