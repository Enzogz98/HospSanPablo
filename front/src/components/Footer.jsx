import React from "react";
import ubicacion from "../assets/ubicacion.png";
import telefono from "../assets/telefono.png";
import "../Css/footer.css";

const Footer = () => {
  return (
    <div className="">
      <footer className="container">
        <div className="row">
          <section id="ubicaciones" className="col-xl-7 ">
            <div className="m-auto">
              <a href="https://msptucuman.gov.ar/vigilancia-epidemiologica-0800-555-8478/">
                <img src={telefono} alt="" className="imgTelefono" />
                <p>08005558478 VIGILANCIA EPIDEMIOLOGICA</p>
              </a>
            </div>
            <div className="m-auto">
              <a href="https://msptucuman.gov.ar/salud-escucha-0800-4444-999/">
                <img src={telefono} alt="" className="imgTelefono" />
                <p>08004444999 SALUD ESCUCHA</p>
              </a>
            </div>
            <div className="m-auto">
              <img src={telefono} alt="" className="imgTelefono" />
              <p>100 BOMBEROS</p>
            </div>
            <div className="m-auto">
              <img src={telefono} alt="" className="imgTelefono" />
              <p>107 EMERGENCIAS</p>
            </div>
            <div className="m-auto">
              <img src={telefono} alt="" className="imgTelefono " />
              <p>911 POLICIA</p>
            </div>
            <div className="m-auto">
              <img src={telefono} alt="" className="imgTelefono" />
              <p>144 VIOLENCIA A LA MUJER</p>
            </div>
          </section>

          <section id="telefonos1" className="col-xl-5">
            <div className="m-auto">
              <img src={ubicacion} alt="" className="imgUbicacion" />
              <p>Mapa Hospital San Pablo</p>
            </div>
            <div className="m-auto">
              <img src={ubicacion} alt="" className="imgUbicacion" />
              <p>Mapa CAPS Nuestra Sra. del Rosario</p>
            </div>
            <div className="m-auto">
              <img src={ubicacion} alt="" className="imgUbicacion" />
              <p>Mapa CAPS Punta del Monte</p>
            </div>
            <div className="m-auto">
              <img src={ubicacion} alt="" className="imgUbicacion" />
              <p>Mapa CAPS Ohuanta</p>
            </div>
          </section>
        </div>
        <div>
          <p>Copyright HSP TUCUMAN</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
