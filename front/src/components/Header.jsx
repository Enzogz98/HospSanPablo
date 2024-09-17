
import { useContext, useState } from "react";
import logo from "../assets/logo1.png";
import "../Css/header.css";
import Nav  from "react-bootstrap/Nav";
import { Link, NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import { UserContext } from "../context/UserContext";

export const Header = () => {

  const { logeado, handleLogear } = useContext(UserContext)



  return (
    <div className="header">
      
      <Navbar className="navBar" expand="xl">


          <div className="col-lg-2 ms-5">
            <Link to='/'>
              <img
                src={logo}
                height="50"
                className="d-inline-block align-top"
                alt="Logo"
              />
            </Link>
          </div>

        <div>
          
        </div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className=""/>
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end mx-3">
            <div className="col-lg-6 divHeaderLink">
              <Nav className="justify-content-end">
                <div>

                <NavLink to='/' id="button">Inicio</NavLink>
                </div>
                <div>

                <NavLink to="/Historia" id="button">Historia</NavLink>
                </div>
                <div>

                <NavLink to="/noticias" id="button">Noticias</NavLink>
                </div>
                <div>

                <NavLink to="/CartillaMedica" id="button">Profesionales</NavLink>
                </div>

                {
                  logeado ? (

                    <>

                      <div >
                        <NavLink to="/panelControl" id="button">Panel de Control</NavLink>

                      </div>
                      <div>

                        <NavLink to="/" id="button" onClick={()=> handleLogear(false)}>Salir</NavLink>
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
