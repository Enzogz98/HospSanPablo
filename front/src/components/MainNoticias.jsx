import "../Css/MainNoticias.css";
import fichamedica from "../assets/fichamedica.jpeg";
import cancermama from "../assets/cancermama.jpg";
import carnet from "../assets/carnetvacunacion.jpg";
import labdengue from "../assets/labdengue.jpg";
import ruta from "../assets/ruta-embarazada.jpg";
import libro from "../assets/manual-diabetes.jpg";

import { Card } from "react-bootstrap";

export const MainNoticias = () => {
  return (
    <div className="m-3 bg">
      <div className="row">
        <section id="infomsp" className="col-xl-7">
          <Card className="m-3">
            <a
              href="https://msptucuman.gov.ar/ficha-medica-escolar/"
              target="_blank"
              rel="noopener noreferrer"
              data-aos="fade-right"
            >
              <Card.Img
                variant="top"
                src={fichamedica}
                style={{ maxWidth: "100%" }}
              />
            </a>
          </Card>

          <Card className="m-3">
            <a
              href="https://msptucuman.gov.ar/ubicaciones-de-mamografos/"
              target="_blank"
              rel="noopener noreferrer"
              data-aos="fade-right"
            >
              <Card.Img
                variant="top"
                src={cancermama}
                style={{ maxWidth: "100%" }}
              />
            </a>
          </Card>

          <Card className="m-3">
            <a
              href="https://srv08.siprosa.gob.ar/caps/carnetemitirplus.aspx"
              target="_blank"
              rel="noopener noreferrer"
              data-aos="fade-right"
            >
              <Card.Img
                variant="top"
                src={carnet}
                style={{ maxWidth: "100%" }}
              />
            </a>
          </Card>

          <Card className="m-3">
            <a
              href="https://msptucuman.gov.ar/aplicativo-para-visualizar-resultados-de-estudios-de-dengue-y-covid-19/"
              target="_blank"
              rel="noopener noreferrer"
              data-aos="fade-right"
            >
              <Card.Img
                variant="top"
                src={labdengue}
                style={{ maxWidth: "100%" }}
              />
            </a>
          </Card>

          <Card className="m-3">
            <a
              href="https://msptucuman.gov.ar/manual-de-diabetes-para-padres/"
              target="_blank"
              rel="noopener noreferrer"
              data-aos="fade-right"
            >
              <Card.Img
                variant="top"
                src={libro}
                style={{ maxWidth: "100%" }}
              />
            </a>
          </Card>

          <Card className="m-3">
            <a
              href="https://msptucuman.gov.ar/ruta-de-la-embarazada-y-el-nino/"
              target="_blank"
              rel="noopener noreferrer"
              data-aos="fade-right"
            >
              <Card.Img variant="top" src={ruta} style={{ maxWidth: "100%" }} />
            </a>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default MainNoticias;
