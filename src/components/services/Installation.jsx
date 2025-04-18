import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Installation = () => {
  const installationServices = [
    {
      id: 1,
      title: 'Wasserinstallation',
      description: 'Fachgerechte Installation und Reparatur von Wasserleitungen, Armaturen und Sanitärobjekten.',
      icon: 'bi bi-droplet-fill',
      features: [
        'Trinkwasserleitungen',
        'Armaturen und Sanitärobjekte',
        'Druckerhöhungsanlagen',
        'Wasserfilter und Enthärtungsanlagen'
      ]
    },
    {
      id: 2,
      title: 'Gasinstallation',
      description: 'Sichere Installation und Wartung von Gasleitungen und gasversorgten Geräten nach aktuellen Vorschriften.',
      icon: 'bi bi-fuel-pump',
      features: [
        'Gasleitungen',
        'Gasgeräte und Kessel',
        'Gasthermen',
        'Sicherheitseinrichtungen'
      ]
    },
    {
      id: 3,
      title: 'Abwasserinstallation',
      description: 'Zuverlässige Installation und Sanierung von Abwasserleitungen, inkl. Abflüssen und Rohrsystemen.',
      icon: 'bi bi-arrow-down-circle',
      features: [
        'Abwasserleitungen',
        'Abflüsse und Rohrsysteme',
        'Hebeanlagen',
        'Rückstausicherungen'
      ]
    }
  ];

  return (
    <section className="py-5">
      <Container>
        <Row className="mb-5">
          <Col lg={8} className="mx-auto text-center">
            <h2 className="display-5 fw-bold">Installation</h2>
            <p className="lead">
              Von Wasser- und Gasinstallationen bis hin zu modernen Heiz- und Sanitärsystemen - wir sorgen für fachgerechte, effiziente und nachhaltige Lösungen in Ihrem Zuhause oder Gewerbe.
            </p>
          </Col>
        </Row>
        
        <Row className="g-4 mb-5">
          {installationServices.map((service) => (
            <Col key={service.id} md={4}>
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="p-4">
                  <div className="text-primary fs-1 mb-3 text-center">
                    <i className={service.icon}></i>
                  </div>
                  <h3 className="text-center mb-3">{service.title}</h3>
                  <p className="mb-4">{service.description}</p>
                  <ul className="list-unstyled">
                    {service.features.map((feature, index) => (
                      <li key={index} className="mb-2">
                        <i className="bi bi-check text-success me-2"></i>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        
        <Row className="justify-content-center">
          <Col lg={10}>
            <div className="bg-light p-4 p-md-5 rounded shadow-sm">
              <h3 className="mb-4">Unser Installationsversprechen</h3>
              <Row className="g-4">
                <Col md={6}>
                  <div className="d-flex">
                    <div className="text-warning me-3 fs-1">
                      <i className="bi bi-shield-check"></i>
                    </div>
                    <div>
                      <h4>Geprüfte Sicherheit</h4>
                      <p>Alle unsere Installationen entsprechen den aktuellen Vorschriften und werden sorgfältig auf Sicherheit geprüft.</p>
                    </div>
                  </div>
                </Col>
                
                <Col md={6}>
                  <div className="d-flex">
                    <div className="text-warning me-3 fs-1">
                      <i className="bi bi-person-check"></i>
                    </div>
                    <div>
                      <h4>Qualifizierte Fachkräfte</h4>
                      <p>Unsere Installateure sind bestens ausgebildet und regelmäßig geschult, um höchste Qualität zu gewährleisten.</p>
                    </div>
                  </div>
                </Col>
                
                <Col md={6}>
                  <div className="d-flex">
                    <div className="text-warning me-3 fs-1">
                      <i className="bi bi-clock"></i>
                    </div>
                    <div>
                      <h4>Termingerechte Umsetzung</h4>
                      <p>Wir halten uns an vereinbarte Termine und sorgen für einen reibungslosen Ablauf ohne lange Wartezeiten.</p>
                    </div>
                  </div>
                </Col>
                
                <Col md={6}>
                  <div className="d-flex">
                    <div className="text-warning me-3 fs-1">
                      <i className="bi bi-award"></i>
                    </div>
                    <div>
                      <h4>Langfristige Garantie</h4>
                      <p>Auf alle unsere Installationsarbeiten gewähren wir eine umfassende Garantie für Ihre Sicherheit.</p>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Installation;