import React from 'react'
import '../CartWidget/CartWidget.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container >
        <Navbar.Brand as={Link} to="/tienda">🈹​ Tiendapp</Navbar.Brand>
        <Nav.Item class= "d-lg-none ms-auto">
        <CartWidget></CartWidget>
        </Nav.Item>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/tienda">Tienda</Nav.Link>
            <NavDropdown title="Líneas" id="collapsible-nav-dropdown">
              <NavDropdown.Item as={Link} to="/lines/classic">Classic</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/lines/blends">Blends</NavDropdown.Item>
              <NavDropdown.Item href="/lines/soul">Soul</NavDropdown.Item>
              <NavDropdown.Item href="/lines/secret">Secret</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/lines/most">Más vendidos
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav class= "d-none d-sm-block">
            <Nav.Item as= {Link} to='/cart'><CartWidget></CartWidget></Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
);
};



export default NavBar

