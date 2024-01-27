import React from "react";
import logo from "../assets/logo1.png";
import insta from "../assets/insta.png";
import "../Css/header.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Header = () => {
  return (
    <div className="header">
      <Navbar bg="danger" className="navBar" expand="lg">
        <Container>
          <div className="col-2">
            <Navbar.Brand href="#home">
              <img
                src={logo}
                height="30"
                className="d-inline-block align-top"
                alt="Logo"
              />
            </Navbar.Brand>
          </div>

          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
            <div className="col-6 ">
              <Nav>
                <Nav.Link href="#inicio">Inicio</Nav.Link>
                <Nav.Link href="#historia">Historia</Nav.Link>
                <Nav.Link href="#noticias">Noticias</Nav.Link>
                <Nav.Link href="#ubicacion">Ubicacion</Nav.Link>
                <Nav.Link href="#contacto">Contacto</Nav.Link>  
                <Nav.Link href="#login">Login</Nav.Link>
              </Nav>
            </div>

          </Navbar.Collapse>
            <Nav className="justify-content-between">

              <div className="col-2">
                <Nav.Link href="https://www.instagram.com/hosp.sanpablo/?igsh=MXdiZjdneTRvMWdlag%3D%3D">
                  <img
                    src={insta}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    alt="Instagram"
                  />
                </Nav.Link>
              </div>
            </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
