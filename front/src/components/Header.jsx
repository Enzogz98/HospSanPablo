import React from 'react'
import logo from "../assets/logo1.png";
import insta from "../assets/insta.png";
import '../Css/header.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
const Header = () => {
  return (
    <div>
       <header className='container'>
        <Navbar bg='light' expand="lg">
          <Container>
          <Navbar.Brand href="#home">
        <img
          src={logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt="Logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#inicio">Inicio</Nav.Link>
          <Nav.Link href="#historia">Historia</Nav.Link>
          <Nav.Link href="#noticias">Noticias</Nav.Link>
          <Nav.Link href="#ubicacion">Ubicacion</Nav.Link>
          <Nav.Link href="#contacto">Contacto</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="#login">Login</Nav.Link>
          <Nav.Link href="https://www.instagram.com/hosp.sanpablo/?igsh=MXdiZjdneTRvMWdlag%3D%3D">
            <img
              src={insta}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="Instagram"
            />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
          </Container>
        </Navbar>
    </header>

    </div>
  )
}

export default Header
