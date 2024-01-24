import React from 'react'
import logo from "../imagenes/logo1.png";
import insta from "../imagenes/insta.png";
import '../App.css';
const Header = () => {
  return (
    <div>
       <header>
      <div id="encabezado">
        <img src= {logo} alt="" id="logo"/>

        <h1 id="titulo">HOSPITAL DE SAN PABLO</h1>

        <a href="">Login</a>

        <a href="https://www.instagram.com/hosp.sanpablo/?igsh=MXdiZjdneTRvMWdlag%3D%3D"><img src={insta} alt="" id="insta"/></a>

      </div>

    <div id="navegacion">
      <nav>
        <ul className='navegacion'>
          <li><a href="#inicio">Inicio</a></li>
          <li><a href="#inicio">Historia</a></li>
          <li><a href="#inicio">Noticias</a></li>
          <li><a href="#inicio">Ubicacion</a></li>
          <li><a href="#inicio">Contacto</a></li>
        </ul>
      </nav>
    </div>

    </header>

    </div>
  )
}

export default Header
