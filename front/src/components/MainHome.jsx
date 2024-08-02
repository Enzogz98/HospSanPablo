import hospital from "../assets/hospital.png";
import profesionales from "../assets/profesionales.png";
import administrativos from "../assets/administrativos.png";
import informacion from "../assets/informacion.png";
import calendario from "../assets/calendario.png";
import test from "../assets/test.png";
import "../Css/mainHome.css";
import { Carrousel } from "./Carrousel";

export const MainHome = () => {
  return (
    <main className="contenedor-home-body">
      <div className="row">
        <section
          id="carrusel"
          className="col-lg-6 col-md-10 col-sm-12 d-flex justify-content-center m-auto"
        >
          <Carrousel />
        </section>
        <section
          id="horarios"
          className="col-xl-5  m-auto justify-content-center"
        >
          <div className="columna-contenedor">
            <div className="divAncla" data-aos="zoom-in">
              <a href="/HoraAtencion" id="hor1">
                <img src={hospital} alt="" className="img-fluid" />
                <p>Horarios de atencion</p>
              </a>
            </div>

            <div className="divAncla"  data-aos="zoom-in">
              <a href="/CartillaMedica" id="hor1">
                <img src={profesionales} alt="" className="img-fluid" />
                <p>Profesionales</p>
              </a>
            </div>

            <div className="divAncla" data-aos="zoom-in">
              <a href="/HorarioAdm" id="hor1">
                <img src={administrativos} alt="" className="img-fluid" />
                <p>Horarios administrativos</p>
              </a>
            </div>

            <div className="m-auto divAncla" data-aos="zoom-in">
              <a
                href="https://msptucuman.gov.ar/nodos-de-vacunacion/" 
                id="hor1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={calendario} alt="" className="img-fluid" />
                <p>Nodos de vacunacion</p>
              </a>
            </div>

            <div className="m-auto divAncla" data-aos="zoom-in">
              <a 
                href="https://msptucuman.gov.ar/nodos-de-testeo/" 
                id="hor1"
                target="_blank"
                rel="noopener noreferrer"
                >
                <img src={test} alt="" className="img-fluid" />
                <p>Nodos de testeos</p>
              </a>
            </div>

            <div className="m-auto divAncla" data-aos="zoom-in">
              <a 
                href="https://msptucuman.gov.ar/la-poblacion/" 
                id="hor1"
                target="_blank"
                rel="noopener noreferrer">
                <img src={informacion} alt="" className="img-fluid" />
                <p>Info General</p>
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default MainHome;
