import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Features = () => {
  const features = [
    {
      id: 1,
      title: 'Mitarbeiterfreundlich',
      icon: 'bi bi-people',
      description: 'Wir setzen auf ein modernes Arbeitsumfeld mit fairer Bezahlung, individuellen Entwicklungsmöglichkeiten und echtem Teamgeist. Unsere Mitarbeiter sind das Herz unseres Unternehmens, und wir fördern ein positives, wertschätzendes Miteinander.'
    },
    {
      id: 2,
      title: 'Qualität & Technik',
      icon: 'bi bi-award',
      description: 'Wir verwenden hochwertige Materialien und setzen auf moderne, langlebige Technik. So garantieren wir nachhaltige Zufriedenheit und zuverlässige Funktionalität.'
    },
    {
      id: 3,
      title: 'Digitale Prozesse',
      icon: 'bi bi-laptop',
      description: 'Mit modernen digitalen Tools optimieren wir Planung, Angebotserstellung und Kommunikation. Das sorgt für eine schnelle, effiziente und stressfreie Abwicklung aller Projekte.'
    },
    {
      id: 4,
      title: 'Zuverlässigkeit',
      icon: 'bi bi-check-circle',
      description: 'Ob kleine Reparatur oder große Sanierung: Wir halten unsere Termine ein und setzen jedes Projekt pünktlich und präzise um – ohne lange Wartezeiten.'
    },
    {
      id: 5,
      title: 'Faire Preise',
      icon: 'bi bi-currency-euro',
      description: 'Transparenz steht bei uns an erster Stelle. Unsere Kunden erhalten eine klare Kostenübersicht ohne versteckte Gebühren – von der ersten Beratung bis zur finalen Umsetzung.'
    },
    {
      id: 6,
      title: 'Kundennähe',
      icon: 'bi bi-heart',
      description: 'Jeder Kunde hat individuelle Wünsche und Anforderungen. Wir nehmen uns Zeit für eine persönliche Beratung und finden maßgeschneiderte Lösungen, die perfekt passen.'
    }
  ];

  return (
    <section className="py-5">
      <Container>
        <Row className="mb-5">
          <Col>
            <h2 className="text-uppercase text-center display-5 fw-bold" data-aos="fade-up">
              Was zeichnet uns aus?
            </h2>
          </Col>
        </Row>
        
        <Row>
          {features.map((feature, index) => (
            <Col key={feature.id} md={6} lg={4} className="mb-4">
              <div 
                className="d-flex align-items-start" 
                data-aos="fade-up" 
                data-aos-delay={index * 100}
                data-aos-duration="800"
              >
                <div className="text-warning me-3 fs-4">
                  <i className={feature.icon}></i>
                </div>
                <div>
                  <h4 className="mb-3">{feature.title}</h4>
                  <p>{feature.description}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Features;