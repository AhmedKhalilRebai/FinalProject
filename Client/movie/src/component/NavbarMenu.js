import React from 'react';
import {Container, Nav, Navbar} from 'react-bootstrap';
import SignIn from './SignIn';
import SingUp from './SignUp';

function NavbarMenu() {
  return (
    <Navbar expand="lg" className="bg-dark">
    <Container>
      <Navbar.Brand href="#home">Movie Magic</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto order-lg-1">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">About</Nav.Link>
          <Nav.Link href="#link">Services</Nav.Link>
          <Nav.Link href="#link">Team</Nav.Link>
        </Nav>
        <Nav className="ms-auto order-lg-2">
          <SignIn />
          <SingUp />
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default NavbarMenu
