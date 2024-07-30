
import { useContext, useState } from "react";
import logo from "../assets/logo1.png";
import "../Css/header.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { UserContext } from "../context/UserContext";

const Header = () => {

  const { logeado, handleLogear } = useContext(UserContext)



  return (
    <div className="header">
      
      <Navbar className="navBar" expand="xl">


          <div className="col-lg-2 ms-5">
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
          <Navbar.Toggle aria-controls="basic-navbar-nav" className=""/>
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end mx-3">
            <div className="col-lg-6 divHeaderLink">
              <Nav className="justify-content-end">
                <div>

                <Nav.Link href="/" id="button">Inicio</Nav.Link>
                </div>
                <div>

                <Nav.Link href="/Historia" id="button">Historia</Nav.Link>
                </div>
                <div>

                <Nav.Link href="/noticias" id="button">Noticias</Nav.Link>
                </div>
                <div>

                <Nav.Link href="/CartillaMedica" id="button">Profesionales</Nav.Link>
                </div>
                <div>

                  <Nav.Link href="/Contacto" id="button">Contacto</Nav.Link>  
                </div>

                {
                  logeado ? (

                    <>

                      <div >
                        <Nav.Link href="/panelControl" id="button">Panel de Control</Nav.Link>

                      </div>
                      <div>

                        <Nav.Link id="button" onClick={()=> handleLogear(false)}>Salir</Nav.Link>
                      </div>
                    </>
                  )
                  :
                  <div>
                    <Nav.Link href="/Login" id="button">Login</Nav.Link>

                  </div>

                }
              </Nav>
            </div>

          </Navbar.Collapse>
        
      </Navbar>
    </div>
  );
};

export default Header;

