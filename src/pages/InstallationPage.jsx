import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Installation from '../components/services/Installation';

const InstallationPage = () => {
  return (
    <>
      <section className="bg-dark text-light py-5">
        <Container>
          <Row className="justify-content-center">
            <Col md={8} className="text-center">
              <h1 className="display-4 fw-bold mb-4">INSTALLATION</h1>
              <p className="lead">
                Von Wasser- und Gasinstallationen bis hin zu modernen Sanitärsystemen – wir sorgen für fachgerechte und nachhaltige Lösungen.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      
      <Installation />
      
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
                  <Link to="/badsanierung" className="text-decoration-none">
                    <div className="bg-white p-4 text-center rounded shadow h-100">
                      <i className="bi bi-droplet text-primary fs-1 mb-3"></i>
                      <h3>Badsanierung</h3>
                      <p className="text-muted">Stilvolle Wohlfühloasen mit hochwertigen Materialien und innovativen Lösungen.</p>
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

export default InstallationPage;