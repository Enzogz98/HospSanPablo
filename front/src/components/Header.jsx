
import logo from "../assets/logo1.png";
import { FaInstagram } from "react-icons/fa6";
import "../Css/header.css";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Header = () => {
  return (
    <div className="header">
      
      <Navbar className="navBar" expand="xl">


          <div className="col-lg-2 ms-3">
            <Navbar.Brand href="#home">
              <img
                src={logo}
                height="50"
                className="d-inline-block align-top"
                alt="Logo"
              />
            </Navbar.Brand>
          </div>

        <div>
          
        </div>
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end mx-3">
            <div className="col-lg-6 divHeaderLink">
              <Nav className="justify-content-end">
                <Nav.Link href="/" id="button">Inicio</Nav.Link>
                <Nav.Link href="/Historia" id="button">Historia</Nav.Link>
                <Nav.Link href="/noticias" id="button">Noticias</Nav.Link>
                <Nav.Link href="/CartillaMedica" id="button">Profesionales</Nav.Link>
                <Nav.Link href="/Contacto" id="button">Contacto</Nav.Link>  
                <Nav.Link href="/Login" id="button">Login</Nav.Link>
              </Nav>
            </div>

          </Navbar.Collapse>
        
      </Navbar>
    </div>
  );
};

export default Header;
