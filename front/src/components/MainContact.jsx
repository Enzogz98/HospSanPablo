import { useState } from "react";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";

import "../Css/contact.css";

const MainContact = () => {
  const [selectedMap, setSelectedMap] = useState("HospitalSanPablo");

  const handleMapChange = (event) => {
    setSelectedMap(event.target.value);
  };
  return (
  <div>
   

    <div className="MainContacto">

      <div className="container-Contacto container ">
        <div className="contact-section row  justify-content-center">
          <div className="contact-info col-xl-5">
            <h2><span className="negritas">Contacto</span></h2>
            <p><span className="negritas">Dirección:</span> Av. San Martin s/n</p>
            <p><span className="negritas">Teléfono:</span> +54 9 381 123-4567</p>
            <p><span className="negritas">Email:</span> HospitaldeSanPablo@Gmail.com</p>
            <p><span className="negritas">Horario:</span> Lunes a Domingos</p>
          </div>
          
          <div className="contact-form col-xl-5">
            <h2>Envíanos un mensaje</h2>
            <Form>
              <input type="text" placeholder="Nombre" required />
              <input type="email" placeholder="Email" required />
              <textarea placeholder="Mensaje" required></textarea>
              <Button type="submit">Enviar</Button>
            </Form>
          </div>

          <div className="sucursal col-xl-6" >
              
            <label htmlFor="mapSelector" className="">Hospitales y CAPS: </label>
            <select
              id="mapSelector"
              value={selectedMap}
              onChange={handleMapChange}
              >
              <option value="HospitalSanPablo">Hospital San Pablo</option>
              <option value="CAPSNuestraSraDelRosario">
                CAPS Villa del Rosario
              </option>
              <option value="CAPSPuntaDelMonte">CAPS Nuestra Señora del Pilar</option>
              <option value="CAPSOhuanta">CAPS La Nueva Esperanza</option>
            </select>

            {selectedMap === "HospitalSanPablo" && (
              <div className="m-auto">
                {
                  <iframe
                  src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d113889.13708152084!2d-65.39292837343407!3d-26.87061211015277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x942244989af38eb1%3A0x56c277f4970b4f8c!2sCalle%20San%20Mart%C3%ADn%20150%2C%20Ingenio%20San%20Pablo%2C%20Tucum%C3%A1n!3m2!1d-26.870635999999998!2d-65.3105269!5e0!3m2!1ses-419!2sar!4v1706578750457!5m2!1ses-419!2sar"
                  width="600"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  ></iframe>
                }
                <p className="negritas">Mapa Hospital San Pablo</p>
              </div>
            )}

            {selectedMap === "CAPSNuestraSraDelRosario" && (
              <div className="m-auto">
                {
                  <iframe
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d889.762914463272!2d-65.32349073045262!3d-26.870099802231348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjbCsDUyJzEyLjQiUyA2NcKwMTknMjIuMyJX!5e0!3m2!1ses-419!2sar!4v1709432213552!5m2!1ses-419!2sar"
                  width="600"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  ></iframe>
                }
                <p className="negritas">Mapa CAPS Villa del Rosario</p>
              </div>
            )}

            {selectedMap === "CAPSPuntaDelMonte" && (
              <div className="m-auto">
                {
                  <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.6789751845454!2d-65.3147683!3d-26.8819387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94224592aadcddef%3A0x5ea4d22dd7552b2c!2sCAPS%20Nuestra%20Se%C3%B1ora%20Del%20Pilar!5e0!3m2!1ses-419!2sar!4v1706580105252!5m2!1ses-419!2sar"
                  width="600"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  ></iframe>
                }
                <p className="negritas">Mapa CAPS Punta del Monte</p>
              </div>
            )}

            {selectedMap === "CAPSOhuanta" && (
              <div className="m-auto">
                {
                  <iframe
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1779.684491844567!2d-65.29793146152116!3d-26.860015601333778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjbCsDUxJzM2LjEiUyA2NcKwMTcnNDcuOSJX!5e0!3m2!1ses-419!2sar!4v1709431975473!5m2!1ses-419!2sar"
                  width="600"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  ></iframe>
                }
                <p className="negritas">Mapa CAPS Ouanta</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default MainContact;