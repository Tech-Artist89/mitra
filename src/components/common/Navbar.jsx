import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Container, Navbar as BootstrapNavbar, Nav } from 'react-bootstrap';
import logo from '../../assets/images/Logo-Website2.png';

const Navbar = () => {
  return (
    <BootstrapNavbar bg="dark" variant="dark" expand="lg" className="py-3">
      <Container>
        <Link to="/" className="navbar-brand d-flex align-items-center">
          <img src={logo} alt="Mitra Sanitär Logo" height="40" />
        </Link>
        
        <BootstrapNavbar.Toggle aria-controls="navbar-nav" />
        <BootstrapNavbar.Collapse id="navbar-nav" className="justify-content-end">
          <Nav>
            <NavLink to="/" className={({isActive}) => 
              `nav-link px-3 ${isActive ? 'active' : ''}`
            }>
              STARTSEITE
            </NavLink>
            <NavLink to="/dienstleistungen" className={({isActive}) => 
              `nav-link px-3 ${isActive ? 'active' : ''}`
            }>
              DIENSTLEISTUNGEN
            </NavLink>
            <NavLink to="/kontakt" className={({isActive}) => 
              `nav-link px-3 ${isActive ? 'active' : ''}`
            }>
              KONTAKT
            </NavLink>
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
};

export default Navbar;