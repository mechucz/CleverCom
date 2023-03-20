import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {CartWidget} from '../CartWidget/CartWidget';

function NavBar() {
  return (
    <Navbar bg="light" expand="lg" fixed="top">
    <Container>
      <Navbar.Brand href="#home">CleverCom Home</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">Nosotros</Nav.Link>
          <Nav.Link href="#link">Pricing</Nav.Link>
          <NavDropdown title="Servicios" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Comunicación</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Fotografía
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Web</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
      <Nav.Link href="#link"><CartWidget></CartWidget></Nav.Link>
    </Container>
  </Navbar>
);
}

export default NavBar;