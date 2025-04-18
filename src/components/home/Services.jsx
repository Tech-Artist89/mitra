import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Services = () => {
  const serviceItems = [
    {
      id: 1,
      title: 'Heizungsbau',
      icon: 'bi bi-thermometer-half',
      description: 'Ob klassische Heizung, Wärmepumpe oder Fußbodenheizung - wir bieten maßgeschneiderte Lösungen für effiziente Wärme und höchsten Komfort in Ihrem Zuhause.',
      link: '/heizungsbau'
    },
    {
      id: 2,
      title: 'Badsanierung',
      icon: 'bi bi-droplet',
      description: 'Wir verwandeln Ihr Bad in eine stilvolle Wohlfühloase - mit hochwertigen Materialien, innovativen Lösungen und einer qualitativen Umsetzung sorgen wir für nachhaltige Ergebnisse.',
      link: '/badsanierung'
    },
    {
      id: 3,
      title: 'Installation',
      icon: 'bi bi-tools',
      description: 'Von Wasser- und Gasinstallationen bis hin zu modernen Heiz- und Sanitärsystemen - wir sorgen für fachgerechte, effiziente und nachhaltige Lösungen in Ihrem Zuhause oder Gewerbe.',
      link: '/installation'
    }
  ];

  return (
    <section className="bg-light py-5">
      <Container>
        <Row>
          {serviceItems.map((service) => (
            <Col key={service.id} md={4} className="mb-4">
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="p-4">
                  <div className="text-center mb-3">
                    <i className={`${service.icon} fs-1 text-primary`}></i>
                  </div>
                  <h3 className="text-center mb-3">{service.title}</h3>
                  <p className="mb-4">{service.description}</p>
                  <div className="text-center mt-auto">
                    <Link to={service.link}>
                      <Button variant="dark" className="px-4">MEHR ERFAHREN</Button>
                    </Link>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Services;