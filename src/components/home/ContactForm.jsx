import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const [validated, setValidated] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    
    if (form.checkValidity() === false) {
      e.stopPropagation();
    } else {
      // Hier würde normalerweise der API-Call stattfinden
      console.log('Form data submitted:', formData);
      setShowSuccess(true);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
      });
      
      // Nach 5 Sekunden die Erfolgsmeldung ausblenden
      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
    }
    
    setValidated(true);
  };
  
  return (
    <section className="py-5 bg-warning">
      <Container>
        <Row className="justify-content-center">
          <Col lg={10}>
            <div className="bg-light p-4 p-md-5 rounded shadow">
              <h2 className="text-center mb-4">NEHMEN SIE JETZT KONTAKT MIT UNS AUF.</h2>
              
              {showSuccess && (
                <Alert variant="success" onClose={() => setShowSuccess(false)} dismissible>
                  Vielen Dank für Ihre Anfrage! Wir werden uns in Kürze bei Ihnen melden.
                </Alert>
              )}
              
              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group controlId="firstName">
                      <Form.Control
                        type="text"
                        placeholder="Vorname"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        Bitte geben Sie Ihren Vornamen ein.
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                  
                  <Col md={6} className="mb-3">
                    <Form.Group controlId="lastName">
                      <Form.Control
                        type="text"
                        placeholder="Name"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        Bitte geben Sie Ihren Nachnamen ein.
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>
                
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group controlId="email">
                      <Form.Control
                        type="email"
                        placeholder="E-Mail-Adresse"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        Bitte geben Sie eine gültige E-Mail-Adresse ein.
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                  
                  <Col md={6} className="mb-3">
                    <Form.Group controlId="phone">
                      <Form.Control
                        type="tel"
                        placeholder="Rückrufnummer"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                
                <Form.Group className="mb-4" controlId="message">
                  <Form.Control
                    as="textarea"
                    rows={6}
                    placeholder="Nachricht"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Bitte geben Sie Ihre Nachricht ein.
                  </Form.Control.Feedback>
                </Form.Group>
                
                <div className="d-grid">
                  <Button type="submit" variant="dark" size="lg">
                    JETZT ANFRAGE VERSENDEN
                  </Button>
                </div>
              </Form>
            </div>
          </Col>
        </Row>
        
        <Row className="text-center mt-4">
          <Col>
            <h3 className="text-uppercase mb-0">UNSER TEAM IST FÜR DICH DA – SCHNELL, UNKOMPLIZIERT UND GARANTIERT INNERHALB VON 24 STUNDEN!</h3>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactForm;