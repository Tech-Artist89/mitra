import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ContactForm from '../components/home/ContactForm';

const Contact = () => {
  return (
    <>
      <section className="bg-dark text-light py-5">
        <Container>
          <Row className="justify-content-center">
            <Col md={8} className="text-center">
              <h1 className="display-4 fw-bold mb-4">KONTAKT</h1>
              <p className="lead">
                Haben Sie Fragen oder möchten Sie ein Projekt mit uns starten? Wir sind für Sie da und freuen uns auf Ihre Nachricht!
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      
      <section className="py-5">
        <Container>
          <Row className="justify-content-center">
            <Col md={10}>
              <div className="card shadow border-0 mb-5">
                <div className="card-body p-4 p-md-5">
                  <h2 className="text-center mb-4">UNSERE KONTAKTDATEN</h2>
                  
                  <Row className="text-center g-4">
                    <Col md={4}>
                      <div className="bg-light p-4 rounded shadow-sm h-100">
                        <i className="bi bi-geo-alt fs-1 text-warning mb-3"></i>
                        <h4>Adresse</h4>
                        <p className="mb-0">Mitra Sanitär GmbH<br />Borussistraße 62a<br />12103 Berlin</p>
                      </div>
                    </Col>
                    
                    <Col md={4}>
                      <div className="bg-light p-4 rounded shadow-sm h-100">
                        <i className="bi bi-telephone fs-1 text-warning mb-3"></i>
                        <h4>Telefon</h4>
                        <p className="mb-0">030 - 76008921</p>
                      </div>
                    </Col>
                    
                    <Col md={4}>
                      <div className="bg-light p-4 rounded shadow-sm h-100">
                        <i className="bi bi-envelope fs-1 text-warning mb-3"></i>
                        <h4>E-Mail</h4>
                        <p className="mb-0">
                          <a href="mailto:hey@mitra-sanitaer.de" className="text-decoration-none">
                            hey@mitra-sanitaer.de
                          </a>
                        </p>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      
      <ContactForm />
      
      <section className="py-5">
        <Container>
          <Row className="justify-content-center">
            <Col md={10}>
              <div className="bg-light p-4 rounded shadow">
                <h2 className="text-center mb-4">SO FINDEN SIE UNS</h2>
                <div className="ratio ratio-16x9">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.675696034788!2d13.379485100000002!3d52.46732!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84ffd73794c8d%3A0x28d7c14432bce456!2sBorussiasta%C3%9Fe%2062A%2C%2012103%20Berlin!5e0!3m2!1sde!2sde!4v1713492358754!5m2!1sde!2sde" 
                    style={{ border: 0 }} 
                    allowFullScreen="" 
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Standort von Mitra Sanitär GmbH"
                  ></iframe>
                </div>
                
                <Row className="mt-4 text-center">
                  <Col>
                    <p className="mb-0">
                      <i className="bi bi-info-circle-fill text-warning me-2"></i>
                      Besuchen Sie uns an unserem Standort in Berlin-Tempelhof, nur wenige Gehminuten von der U-Bahn-Station Alt-Tempelhof entfernt.
                    </p>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Contact;