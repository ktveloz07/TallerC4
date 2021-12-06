import React from "react";
import {Navbar,Container,Nav,NavDropdown } from 'react-bootstrap';

export default function Barra() {
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand={false}>
        <Container>
          <Navbar.Brand href="#home">Menu</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Inicio</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Registrar" id="basic-nav-dropdown">
                <NavDropdown.Item href="restudiante">Estudiante</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Proyectos
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
