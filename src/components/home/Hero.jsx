import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="bg-dark text-light py-5">
      <Container>
        <Row className="align-items-center py-5">
          <Col lg={8} className="position-relative">
            <div className="border-start border-success border-4 ps-4">
              <h2 className="text-uppercase mb-0">MITRA SANITÄR</h2>
              <h1 className="text-uppercase display-4 fw-bold text-warning mb-4">
                ALLES BEGINNT MIT EINER IDEE...
              </h1>
              <p className="lead mb-4">
                ...und führt über Präzision, Innovation und Menschlichkeit zu Lösungen für Sanitär und Heizung, die den Unterschied machen.
              </p>
            </div>
          </Col>
          <Col lg={4} className="text-end">
            <div className="position-relative">
              <div className="display-1 text-light opacity-25">
                <i className="bi bi-lightbulb-fill"></i>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="text-end mb-5">
            <Link to="/kontakt">
              <Button variant="success" size="lg" className="text-uppercase px-4 py-3">
                Starte jetzt dein Projekt mit uns! &rarr;
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;