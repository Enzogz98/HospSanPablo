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
    <div className="container">
      <div className="contact-section">
        <div className="contact-info">
          <h2>Contacto</h2>
          <p>Dirección: Calle Falsa 123</p>
          <p>Teléfono: +54 9 381 123-4567</p>
          <p>Email: info@ejemplo.com</p>
          <p>Horario: Lunes a Viernes de 9:00 a 18:00</p>
        </div>
        <div className="contact-form">
          <h2>Envíanos un mensaje</h2>
          <Form>
            <input type="text" placeholder="Nombre" required />
            <input type="email" placeholder="Email" required />
            <textarea placeholder="Mensaje" required></textarea>
            <Button type="submit">Enviar</Button>
          </Form>
        </div>
        <div className="sucursal col-xl-5" >
            
          <label htmlFor="mapSelector">Hospitales y CAPS:</label>
          <select
            id="mapSelector"
            value={selectedMap}
            onChange={handleMapChange}
          >
            <option value="HospitalSanPablo">Hospital San Pablo</option>
            <option value="CAPSNuestraSraDelRosario">
              CAPS Nuestra Sra. del Rosario
            </option>
            <option value="CAPSPuntaDelMonte">CAPS Punta del Monte</option>
            <option value="CAPSOhuanta">CAPS Ohuanta</option>
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
              <p>Mapa Hospital San Pablo</p>
            </div>
          )}

          {selectedMap === "CAPSNuestraSraDelRosario" && (
            <div className="m-auto">
              {
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.290828519503!2d-65.1521808245633!3d-26.830700676696143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225ed378a56b47%3A0x5083694456a0b3ec!2sCAPS%20Nuestra%20Se%C3%B1ora%20del%20Rosario!5e0!3m2!1ses-419!2sar!4v1706579755915!5m2!1ses-419!2sar"
                  width="600"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              }
              <p>Mapa CAPS Nuestra Sra. del Rosario</p>
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
              <p>Mapa CAPS Punta del Monte</p>
            </div>
          )}

          {selectedMap === "CAPSOhuanta" && (
            <div className="m-auto">
              {
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3564.0883928759717!2d-65.26897192456744!3d-26.709622976768912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94226639a29ee871%3A0xcfe448b375702580!2sCAPS%20NUEVA%20ESPERANZA!5e0!3m2!1ses-419!2sar!4v1706580177289!5m2!1ses-419!2sar"
                  width="600"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              }
              <p>Mapa CAPS Ohuanta</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MainContact;
