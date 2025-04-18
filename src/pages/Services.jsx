import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Services = () => {
  const serviceCards = [
    {
      id: 1,
      title: 'Heizungsbau',
      icon: 'bi bi-thermometer-half',
      description: 'Ob klassische Heizung, Wärmepumpe oder Fußbodenheizung - wir bieten maßgeschneiderte Lösungen für effiziente Wärme und höchsten Komfort in Ihrem Zuhause.',
      features: [
        'Moderne und effiziente Gasheizungen',
        'Umweltfreundliche Wärmepumpen',
        'Komfortable Fußbodenheizung',
        'Smart Home Integration',
        'Wartung & Service'
      ],
      link: '/heizungsbau'
    },
    {
      id: 2,
      title: 'Badsanierung',
      icon: 'bi bi-droplet',
      description: 'Wir verwandeln Ihr Bad in eine stilvolle Wohlfühloase - mit hochwertigen Materialien, innovativen Lösungen und einer qualitativen Umsetzung sorgen wir für nachhaltige Ergebnisse.',
      features: [
        'Komplette Badsanierung aus einer Hand',
        'Hochwertige Sanitärobjekte und Armaturen',
        'Individuelle Fliesenarbeiten',
        'Optimale Raumnutzung'
      ],
      link: '/badsanierung'
    },
    {
      id: 3,
      title: 'Installation',
      icon: 'bi bi-tools',
      description: 'Von Wasser- und Gasinstallationen bis hin zu modernen Heiz- und Sanitärsystemen - wir sorgen für fachgerechte, effiziente und nachhaltige Lösungen in Ihrem Zuhause oder Gewerbe.',
      features: [
        'Wasserinstallation und -wartung',
        'Sichere Gasinstallation nach aktuellen Vorschriften',
        'Zuverlässige Abwasserinstallation',
        'Wartung und Reparatur aller Sanitäranlagen',
        'Notdienst bei dringenden Fällen'
      ],
      link: '/installation'
    }
  ];

  return (
    <>
      <section className="bg-dark text-light py-5">
        <Container>
          <Row className="justify-content-center">
            <Col md={8} className="text-center">
              <h1 className="display-4 fw-bold mb-4">UNSERE DIENSTLEISTUNGEN</h1>
              <p className="lead">
                Professionelle Sanitär- und Heizungslösungen aus einer Hand. Qualität, Zuverlässigkeit und faire Preise - das ist unser Versprechen an Sie.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      
      <section className="py-5">
        <Container>
          <Row className="g-4">
            {serviceCards.map((service) => (
              <Col key={service.id} lg={4} className="mb-4">
                <Card className="h-100 border-0 shadow-sm">
                  <Card.Body className="p-4">
                    <div className="text-center mb-4">
                      <i className={`${service.icon} text-primary fs-1`}></i>
                      <h3 className="mt-3">{service.title}</h3>
                    </div>
                    
                    <p className="mb-4">{service.description}</p>
                    
                    <h5 className="mb-3">Unsere Leistungen:</h5>
                    <ul className="mb-4">
                      {service.features.map((feature, index) => (
                        <li key={index} className="mb-2">
                          <i className="bi bi-check-circle-fill text-success me-2 small"></i>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <div className="text-center mt-auto">
                      <Link to={service.link}>
                        <Button variant="primary" size="lg" className="px-4">
                          MEHR ERFAHREN
                        </Button>
                      </Link>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      
      <section className="py-5 bg-light">
        <Container>
          <Row className="justify-content-center">
            <Col md={8} className="text-center">
              <h2 className="mb-4">BEREIT FÜR IHR NÄCHSTES PROJEKT?</h2>
              <p className="lead mb-4">
                Kontaktieren Sie uns für eine unverbindliche Beratung. Wir freuen uns darauf, Ihre Ideen umzusetzen!
              </p>
              <Link to="/kontakt">
                <Button variant="warning" size="lg" className="px-4 py-2">JETZT ANFRAGEN</Button>
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Services;