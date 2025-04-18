import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const HeatingServices = () => {
  const heatingOptions = [
    {
      id: 1,
      title: 'Klassische Heizsysteme',
      description: 'Moderne und effiziente Gasheizungen mit optimaler Ausnutzung der Energieträger.',
      icon: 'bi bi-fire'
    },
    {
      id: 2,
      title: 'Wärmepumpen',
      description: 'Umweltfreundliche Luft-Wasser- oder Erd-Wärmepumpen für nachhaltige Wärmegewinnung.',
      icon: 'bi bi-recycle'
    },
    {
      id: 3,
      title: 'Fußbodenheizung',
      description: 'Komfortable Wärmeverteilung für ein angenehmes Raumklima und effiziente Energienutzung.',
      icon: 'bi bi-grid-3x3'
    },
    {
      id: 4,
      title: 'Heizkörper Modernisierung',
      description: 'Austausch alter Heizkörper gegen moderne, effizientere Modelle für bessere Wärmeabgabe.',
      icon: 'bi bi-arrow-repeat'
    },
    {
      id: 5,
      title: 'Smart Home Integration',
      description: 'Intelligente Steuerungssysteme für Ihre Heizung - bequem per App oder Sprachsteuerung.',
      icon: 'bi bi-phone'
    },
    {
      id: 6,
      title: 'Wartung & Service',
      description: 'Regelmäßige Wartung und schneller Service für eine lange Lebensdauer Ihrer Heizungsanlage.',
      icon: 'bi bi-tools'
    }
  ];

  return (
    <section className="py-5">
      <Container>
        <Row className="mb-5">
          <Col lg={8} className="mx-auto text-center">
            <h2 className="display-5 fw-bold">Heizungsbau</h2>
            <p className="lead">
              Ob klassische Heizung, Wärmepumpe oder Fußbodenheizung - wir bieten maßgeschneiderte Lösungen für effiziente Wärme und höchsten Komfort in Ihrem Zuhause.
            </p>
          </Col>
        </Row>
        
        <Row className="g-4">
          {heatingOptions.map((option) => (
            <Col key={option.id} md={6} lg={4}>
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="p-4">
                  <div className="text-warning fs-1 mb-3">
                    <i className={option.icon}></i>
                  </div>
                  <h4 className="mb-3">{option.title}</h4>
                  <p className="mb-0">{option.description}</p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        
        <Row className="mt-5">
          <Col lg={8} className="mx-auto">
            <div className="bg-light p-4 rounded shadow-sm">
              <h3>Warum eine moderne Heizung?</h3>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                  Bis zu 30% Energieeinsparung gegenüber älteren Anlagen
                </li>
                <li className="mb-2">
                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                  Wertsteigerung Ihrer Immobilie
                </li>
                <li className="mb-2">
                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                  Förderungsmöglichkeiten durch BAFA und KfW
                </li>
                <li className="mb-2">
                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                  Höherer Wohnkomfort durch moderne Regelungstechnik
                </li>
                <li>
                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                  Umweltschutz durch geringeren CO₂-Ausstoß
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeatingServices;