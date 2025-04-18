import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const BathroomRenovation = () => {
  const renovationSteps = [
    {
      id: 1,
      title: 'Beratung & Planung',
      description: 'Wir besprechen Ihre Wünsche und Vorstellungen, vermessen Ihr Bad und erstellen einen detaillierten Plan.',
      icon: 'bi bi-chat-text'
    },
    {
      id: 2,
      title: 'Angebot & Zeitplanung',
      description: 'Sie erhalten ein transparentes Angebot und einen zeitlichen Ablaufplan für Ihr Projekt.',
      icon: 'bi bi-calendar-check'
    },
    {
      id: 3,
      title: 'Demontage & Entsorgung',
      description: 'Wir entfernen die alten Sanitärobjekte, Fliesen und Installationen und sorgen für eine fachgerechte Entsorgung.',
      icon: 'bi bi-trash'
    },
    {
      id: 4,
      title: 'Rohrinstallation',
      description: 'Neue Wasser- und Abwasserleitungen werden verlegt, elektrische Installationen erneuert.',
      icon: 'bi bi-pipe'
    },
    {
      id: 5,
      title: 'Fliesenarbeiten',
      description: 'Wände und Böden werden nach Ihren Wünschen neu gefliest.',
      icon: 'bi bi-grid-3x3'
    },
    {
      id: 6,
      title: 'Sanitärmontage',
      description: 'Die neuen Sanitärobjekte wie Waschbecken, WC, Dusche oder Badewanne werden installiert.',
      icon: 'bi bi-droplet'
    },
    {
      id: 7,
      title: 'Feinarbeiten & Abnahme',
      description: 'Abschließende Arbeiten wie Silikonfugen, Armaturen und Accessoires werden montiert, gefolgt von einer gemeinsamen Abnahme.',
      icon: 'bi bi-check-circle'
    }
  ];

  return (
    <section className="py-5 bg-light">
      <Container>
        <Row className="mb-5">
          <Col lg={8} className="mx-auto text-center">
            <h2 
              className="display-5 fw-bold" 
              data-aos="fade-down"
              data-aos-duration="800"
            >
              Badsanierung
            </h2>
            <p 
              className="lead"
              data-aos="fade-up" 
              data-aos-delay="200"
            >
              Wir verwandeln Ihr Bad in eine stilvolle Wohlfühloase - mit hochwertigen Materialien, innovativen Lösungen und einer qualitativen Umsetzung sorgen wir für nachhaltige Ergebnisse.
            </p>
          </Col>
        </Row>
        
        <Row className="justify-content-center mb-5">
          <Col lg={10}>
            <div className="position-relative">
              <div className="timeline">
                {renovationSteps.map((step, index) => (
                  <div 
                    key={step.id} 
                    className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
                    data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                    data-aos-delay={index * 100}
                    data-aos-duration="800"
                  >
                    <div className="bg-white p-4 rounded shadow-sm">
                      <div className="d-flex align-items-center mb-3">
                        <div className="bg-warning rounded-circle p-2 me-3 text-center" style={{ width: '50px', height: '50px' }}>
                          <i className={`${step.icon} fs-4 text-dark`}></i>
                        </div>
                        <h4 className="mb-0">{step.title}</h4>
                      </div>
                      <p className="mb-0">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Col>
        </Row>
        
        <Row>
          <Col 
            md={6} 
            className="mb-4 mb-md-0"
            data-aos="flip-left"
            data-aos-duration="1000"
          >
            <div className="bg-white p-4 rounded shadow-sm h-100">
              <h3 className="mb-4">Unsere Badlösungen</h3>
              <ul className="list-unstyled">
                <li className="mb-3 d-flex">
                  <i className="bi bi-check-circle-fill text-success me-3 mt-1"></i>
                  <div>
                    <strong>Gästebäder</strong>
                    <p>Optimale Raumnutzung auf kleinstem Raum</p>
                  </div>
                </li>
                <li className="mb-3 d-flex">
                  <i className="bi bi-check-circle-fill text-success me-3 mt-1"></i>
                  <div>
                    <strong>Familienbäder</strong>
                    <p>Praktische Lösungen für den Alltag mit Kindern</p>
                  </div>
                </li>
                <li className="d-flex">
                  <i className="bi bi-check-circle-fill text-success me-3 mt-1"></i>
                  <div>
                    <strong>Luxusbäder</strong>
                    <p>Hochwertige Materialien für besondere Ansprüche</p>
                  </div>
                </li>
              </ul>
            </div>
          </Col>
          
          <Col 
            md={6}
            data-aos="flip-right"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <div className="bg-white p-4 rounded shadow-sm h-100">
              <h3 className="mb-4">Das spricht für eine Badsanierung</h3>
              <ul className="list-unstyled">
                <li className="mb-3 d-flex">
                  <i className="bi bi-check-circle-fill text-success me-3 mt-1"></i>
                  <div>
                    <strong>Wertsteigerung Ihrer Immobilie</strong>
                    <p>Ein modernes Bad erhöht den Wert Ihrer Immobilie erheblich</p>
                  </div>
                </li>
                <li className="mb-3 d-flex">
                  <i className="bi bi-check-circle-fill text-success me-3 mt-1"></i>
                  <div>
                    <strong>Mehr Wohnkomfort</strong>
                    <p>Genießen Sie ein Bad nach Ihren individuellen Wünschen</p>
                  </div>
                </li>
                <li className="d-flex">
                  <i className="bi bi-check-circle-fill text-success me-3 mt-1"></i>
                  <div>
                    <strong>Energieeinsparung</strong>
                    <p>Moderne Armaturen und effiziente Technik sparen Wasser und Energie</p>
                  </div>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BathroomRenovation;