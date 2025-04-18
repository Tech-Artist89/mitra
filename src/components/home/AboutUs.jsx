import React, { useState } from 'react';
import { Container, Row, Col, Button, Collapse } from 'react-bootstrap';

const AboutUs = () => {
  const [open, setOpen] = useState(false);

  return (
    <section className="py-5">
      <Container>
        <Row className="align-items-center">
          <Col lg={6} className="mb-4 mb-lg-0">
            <div className="bg-light p-5 rounded shadow text-center">
              <i className="bi bi-people-fill text-primary" style={{ fontSize: '5rem' }}></i>
              <p className="mt-3 text-muted">Team-Bild wird hier angezeigt</p>
            </div>
          </Col>
          <Col lg={6}>
            <h2 className="display-5 fw-bold mb-4">ÜBER UNS</h2>
            <p className="lead mb-4">
              Wir sind Mitra Sanitär – drei Gründer mit einer gemeinsamen Vision: Die Sanitär- und Heizungsbranche mit innovativen, zuverlässigen und hochwertigen Lösungen neu zu definieren.
            </p>
            <p className="mb-4">
              Unsere Mission ist es, Immobilienbesitzenden und -verwaltenden individuelle Lösungen zu bieten, die Vertrauen schaffen und langfristige Partnerschaften ermöglichen.
            </p>
            <Button 
              variant="warning" 
              className="text-dark fw-bold px-4 py-2"
              onClick={() => setOpen(!open)}
              aria-controls="teamInfo"
              aria-expanded={open}
            >
              {open ? 'WENIGER ANZEIGEN' : 'MEHR ERFAHREN'}
            </Button>
          </Col>
        </Row>

        <Collapse in={open}>
          <div id="teamInfo" className="mt-5">
            <Row className="mb-5">
              <Col md={4} className="mb-4 mb-md-0 text-center">
                <div className="team-member">
                  <div className="bg-light rounded-circle mx-auto mb-3 d-flex align-items-center justify-content-center" style={{ width: '200px', height: '200px', overflow: 'hidden' }}>
                    <i className="bi bi-person-fill text-primary" style={{ fontSize: '5rem' }}></i>
                  </div>
                  <h3 className="mb-3">Robin</h3>
                  <p className="text-muted">
                    Die Verbindung von Büromanagement, kaufmännischen Tätigkeiten und meiner Affinität für moderne IT-Systeme hat mich zur Mitra Sanitär GmbH geführt. Mein Ziel ist es, effiziente Prozesse zu gestalten und durch digitale Lösungen Abläufe transparenter und kundenfreundlicher zu machen.
                  </p>
                </div>
              </Col>

              <Col md={4} className="mb-4 mb-md-0 text-center">
                <div className="team-member">
                  <div className="bg-light rounded-circle mx-auto mb-3 d-flex align-items-center justify-content-center" style={{ width: '200px', height: '200px', overflow: 'hidden' }}>
                    <i className="bi bi-person-fill text-primary" style={{ fontSize: '5rem' }}></i>
                  </div>
                  <h3 className="mb-3">Patrick</h3>
                  <p className="text-muted">
                    Meine Begeisterung für die Bau- und Immobilienbranche und der Wunsch, etwas Eigenes aufzubauen, haben mich zur Gründung von Mitra Sanitär GmbH geführt. Mit meiner Erfahrung in Unternehmensführung und Immobilienwirtschaft möchte ich ein Unternehmen schaffen, das nicht nur erfolgreich ist, sondern auch eine moderne und wertschätzende Arbeitskultur fördert.
                  </p>
                </div>
              </Col>

              <Col md={4} className="mb-4 mb-md-0 text-center">
                <div className="team-member">
                  <div className="bg-light rounded-circle mx-auto mb-3 d-flex align-items-center justify-content-center" style={{ width: '200px', height: '200px', overflow: 'hidden' }}>
                    <i className="bi bi-person-fill text-primary" style={{ fontSize: '5rem' }}></i>
                  </div>
                  <h3 className="mb-3">Niko</h3>
                  <p className="text-muted">
                    Meine Leidenschaft für Innovation und Unternehmertum hat mich schon früh dazu gebracht, Start-ups in verschiedensten Branchen zu gründen. Durch meine Erfahrung in der Immobilienbranche kenne ich die Herausforderungen von Kunden im Handwerksbereich und sehe großes Potenzial für moderne, effiziente Lösungen.
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        </Collapse>
      </Container>
    </section>
  );
};

export default AboutUs;