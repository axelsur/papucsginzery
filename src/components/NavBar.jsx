import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import CartWidget from './CartWidget';


import { BsCart3 } from "react-icons/bs";
import Logo from '../img/logo.svg';

import 'bootstrap/dist/css/bootstrap.min.css';


function NavbarPapucs() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand className="logo" href="#home">
          <img width="50px" height="auto" className="img-responsive" src={Logo}  alt="logo" />
          {' '}
          <h2>Papucs</h2>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className='ms-auto'>
            <Nav.Link href="#features">Inicio</Nav.Link>
            
            <NavDropdown title="Productos" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Hombre</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Mujer</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Niños</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="#pricing">Contactos</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
            <CartWidget/>
        </Navbar.Collapse>       
      </Container>
    </Navbar>
  );
}

export default NavbarPapucs

