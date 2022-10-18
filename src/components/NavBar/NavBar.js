import React from 'react'
import './NavBar.css'
import '../CartWidget/CartWidget.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import logo from '../../assets/logo_appg.png';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';




const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="black" variant="dark">
      <Container >
      <Navbar.Brand as={Link} to="/tienda">
            <img
              alt=""
              src={logo}
              width="168"
              height="auto"
              className="d-inline-block align-top"
            />{' '}
          </Navbar.Brand>
        <Nav.Item className= "d-lg-none ms-auto mt-5">
        <CartWidget></CartWidget>
        </Nav.Item>
        <Navbar.Toggle aria-controls="responsive-navbar-nav mt-5" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto mt-5">
            <Nav.Link as={Link} to="/tienda">Tienda</Nav.Link>
            <NavDropdown title="Líneas" id="collapsible-nav-dropdown">
              <NavDropdown.Item as={Link} to="/lines/classic">Classic</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/lines/blends">Blends</NavDropdown.Item>
              <NavDropdown.Item href="/lines/soul">Soul</NavDropdown.Item>
              <NavDropdown.Item href="/lines/secret">Secret</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav className= "d-none d-sm-block">
            <Nav.Item as= {Link} to='/cart'><CartWidget></CartWidget></Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
);
};



export default NavBar

