import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Profil from './Profil';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';


function NavWelcome({ searchTerm, handleSearchChange }) {
  return (
    <Navbar expand="lg" className="bg-dark navbar-dark">
      <Container fluid>
        <Navbar.Brand href="#home">Movie Magic</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto order-lg-1">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
          </Nav>
          <Form className="d-flex mx-auto order-lg-0">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </Form>
          <Nav className="ms-auto order-lg-2">
            <Profil />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavWelcome;
