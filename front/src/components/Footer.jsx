import React from 'react'
import ubicacion from ".../imagenes/ubicacion.png";
import telefono from ".../imagenes/telefono.png";
import '../App.css';
const Footer = () => {
  return (
    <div>
      <footer>
      <div>
        <section id="ubicaciones">
        <img src={ubicacion} alt="" /><p>Mapa Hospital San Pablo</p>
        <img src={ubicacion} alt="" /><p>Mapa CAPS Nuestra Sra. del Rosario</p>
        <img src={ubicacion} alt="" /><p>Mapa CAPS Punta del Monte</p>
        <img src={ubicacion} alt="" /><p>Mapa CAPS Ohuanta</p>
        </section>

        <section id="telefonos1">
        <a href="https://msptucuman.gov.ar/vigilancia-epidemiologica-0800-555-8478/"><img src={telefono} alt="" /><p>08005558478 VIGILANCIA EPIDEMIOLOGICA</p></a>
        <a href="https://msptucuman.gov.ar/salud-escucha-0800-4444-999/"><img src={telefono} alt="" /><p>08004444999 SALUD ESCUCHA</p></a>
        </section>
        <section id="telefonos2">
        <img src={telefono} alt="" /><p>100 BOMBEROS</p>
        <img src={telefono} alt="" /><p>107 EMERGENCIAS</p>
        <img src={telefono} alt="" /><p>911 POLICIA</p>
        <img src={telefono} alt="" /><p>144 VIOLENCIA A LA MUJER</p>
        </section>
      </div>
      <div>
        <p>Copyright HSP TUCUMAN</p>
      </div>
    </footer>
    </div>
  )
}

export default Footer
