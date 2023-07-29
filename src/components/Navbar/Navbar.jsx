import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import logo from "../../assets/logo.png"

function NavbarMusic() {
  return (
    <>
      {['lg'].map((expand) => (
        <Navbar key={expand} expand={expand} className=" " style={{ backgroundColor: '#252525' }}>
          <Container fluid>
            <Navbar.Brand href="#">
              <img src={logo} width={170} height={100} alt="Logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Music All
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link as={Link} to="/" style={{ color: 'white', fontWeight: 'bold' }}>
                    Home
                  </Nav.Link>
                  <Nav.Link as={Link} to="/login" style={{ color: 'white', fontWeight: 'bold' }}>
                    Login
                  </Nav.Link>
                  <Nav.Link as={Link} to="/signup" style={{ color: 'white', fontWeight: 'bold' }}>
                    Registration
                  </Nav.Link>
                  <Nav.Link as={Link} to="/CoursePage" style={{ color: 'white', fontWeight: 'bold' }}>
                    Courses
                  </Nav.Link>
                  <Nav.Link as={Link} to="/Contact" style={{ color: 'white', fontWeight: 'bold' }}>
                    Contact Us
                  </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default NavbarMusic;
