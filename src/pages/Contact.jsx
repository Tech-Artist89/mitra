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
                <div className="ratio ratio-21x9">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2430.5089384016184!2d13.375620315802657!3d52.47951287980643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84fd689fb5f13%3A0x8aa6e0586941c706!2sBorussiestra%C3%9Fe%2062A%2C%2012103%20Berlin!5e0!3m2!1sde!2sde!4v1650531181076!5m2!1sde!2sde" 
                    style={{ border: 0 }} 
                    allowFullScreen="" 
                    loading="lazy"
                    title="Standort von Mitra Sanitär GmbH"
                  ></iframe>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Contact;