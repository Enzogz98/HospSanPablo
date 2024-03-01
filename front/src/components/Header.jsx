
import logo from "../assets/logo1.png";
import { FaInstagram } from "react-icons/fa6";
import "../Css/header.css";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Header = () => {
  return (
    <div className="header">
      
      <Navbar className="navBar" expand="lg">
        <Container>
          <div className="col-2">
            <Navbar.Brand href="#home">
              <img
                src={logo}
                height="50"
                className="d-inline-block align-top"
                alt="Logo"
              />
            </Navbar.Brand>
          </div>

          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
            <div className="col-6 ">
              <Nav>
                <Nav.Link href="/" id="button">Inicio</Nav.Link>
                <Nav.Link href="/Historia" id="button">Historia</Nav.Link>
                <Nav.Link href="/noticias" id="button">Noticias</Nav.Link>
                <Nav.Link href="/CartillaMedica" id="button">Profesionales</Nav.Link>
                <Nav.Link href="/Contacto" id="button">Contacto</Nav.Link>  
                <Nav.Link href="#login" id="button">Login</Nav.Link>
              </Nav>
            </div>

          </Navbar.Collapse>
            <Nav className="justify-content-between">

              <div className="col-2">
                <a href="https://www.instagram.com/hosp.sanpablo/?igsh=MXdiZjdneTRvMWdlag%3D%3D" className="instagram-icon"> <FaInstagram />
</a>

              </div>
            </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
