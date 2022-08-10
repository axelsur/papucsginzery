import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './CartWidget';
import Logo from '../img/logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom'


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
              <Link className="navlink" to='/'>Inicio</Link>
            
            <NavDropdown title="Productos" id="collasible-nav-dropdown"> 
              <Link className="linkdropdown" to='/categoria/hombre'>Hombre</Link>
              <Link className="linkdropdown" to='/categoria/niño'>Niño</Link>
              <Link className="linkdropdown" to='/categoria/mujer'>Mujer</Link>
              <Link className="linkdropdown" to='/categoria/unisex'>Unisex</Link>
            </NavDropdown>

            <Nav.Link href="#contacto">Contacto</Nav.Link>
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

