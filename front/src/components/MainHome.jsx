import hospital from "../assets/hospital.png";
import profesionales from "../assets/profesionales.png";
import administrativos from "../assets/administrativos.png";
import informacion from "../assets/informacion.png";
import calendario from "../assets/calendario.png";
import test from "../assets/test.png";
import "../Css/mainHome.css";
import { Carrousel } from "./Carrousel";

const MainHome = () => {
  return (
    <div className="">
      
      <div className="MainHome col-xl">



        <main className="container mainContainer">
          <div className="row">
            <section id="carrusel" className="col-lg-7 col-md-10 col-sm-12 m-auto">
              <Carrousel />
            </section>
            <section id="horarios" className="col-xl-5  m-auto justify-content-center">
              <div className="divAncla">
                <a href="/HoraAtencion" id="hor1">
                  <img src={hospital} alt="" className="img-fluid"/>
                  <p>Horarios de atencion</p>
                </a>
              </div>
              <div className="divAncla ">
                <a href="/CartillaMedica" id="hor1">
                  <img src={profesionales} alt=""  className="img-fluid"/>
                  <p>Profesionales</p>
                </a>
              </div>
              <div className="divAncla">
                <a href="/HorarioAdm" id="hor1">
                  <img src={administrativos} alt="" className="img-fluid"/>
                  <p>Horarios administrativos</p>
                </a>
              </div>
              <div className="m-auto divAncla">
                <a href="https://msptucuman.gov.ar/nodos-de-vacunacion/" id="hor1">
                  <img src={calendario} alt=""  className="img-fluid"/>
                  <p>Nodos de vacunacion</p>
                </a>
              </div>
              <div className="m-auto divAncla">
                <a href="https://msptucuman.gov.ar/nodos-de-testeo/" id="hor1">
                  <img src={test} alt=""  className="img-fluid"/>
                  <p>Nodos de testeos</p>
                </a>
              </div>
              <div className="m-auto divAncla">
                <a href="https://msptucuman.gov.ar/la-poblacion/" id="hor1">
                  <img src={informacion} alt=""  className="img-fluid"/>
                  <p>Info General</p>
                </a>
              </div>
            </section>
          </div>

        </main>
      </div>
    </div>
  );
};

export default MainHome;