
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import hospital1 from "../assets/hospsanp1.jpeg";
import capsnsdp from "../assets/capsNuestraSraDelPilar.jpg"
import capsvdr from "../assets/CapsVillaDelRosario.jpeg"
import hospital from "../assets/hospital.png";
import profesionales from "../assets/profesionales.png";
import administrativos from "../assets/administrativos.png";
import dengue1 from "../assets/dengue1.jpg";
import capacdengue from "../assets/capacdengue.jpg";
import diabetes3 from "../assets/diabetes3.jpg";
import vacunacion from "../assets/vacunacion.png";
import testeos from "../assets/testeos.png";
import publico from "../assets/publico.png";
import embarazada from "../assets/embarazada.png";
import nodorosa from "../assets/nodorosa.png";
import carnet from "../assets/carnetvacunacion.jpg";
import fichamedica from "../assets/fichamedica.jpeg";
import cancermama from "../assets/cancermama.jpg";
import labdengue from "../assets/labdengue.jpg";
import librodiabetes from "../assets/librodiabetes.png";
import tucsalud from "../assets/tucsalud.jpeg";
import "../Css/mainHome.css";

const MainHome = () => {
  return (
    <div className="">
      <main className="container">
        <div className="row">
          <section id="carrusel" className="col-xl-7 m-auto">
            <Carousel>
              <Carousel.Item>
                <a href="">
                  <img src={hospital1} alt="" />
                </a>
                <Carousel.Caption>
                  <h3>Hospital de San Pablo</h3>
                  <p>Click para mas informacion</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <a href="">
                  <img src={capsnsdp} alt=""  />
                </a>
                <Carousel.Caption>
                  <h3>Caps Nuestra Sra. Del Pilar</h3>
                  <p>Click para mas informacion</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <a href="">
                  <img src={capsvdr} alt="" />
                </a>
                <Carousel.Caption>
                  <h3>Caps Villa del Rosario</h3>
                  <p>Click para mas informacion</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
            
          </section>
          <section id="horarios" className="col-xl-5  m-auto">
            <div className="divAncla">
              <a href="">
                <img src={hospital} alt="" />
                <p>Horarios de atencion</p>
              </a>
            </div>
            <div className="divAncla">
              <a href="">
                <img src={profesionales} alt="" />
                <p>Profesionales</p>
              </a>
            </div>
            <div className="divAncla">
              <a href="">
                <img src={administrativos} alt="" />
                <p>Horarios administrativos</p>
              </a>
            </div>
          </section>
        </div>

        
          <div className="row">
            <section id="cards" className="col-xl-7 m-auto">
              <div className="divAncla col">
              
              <div className="row justify-content-center">

                <Card style={{ width: "15em", margin:"1em" }} className="col-xl-2">
                  <Card.Img
                    variant="top"
                    src={dengue1}
                    style={{ maxWidth: "100%" }}
                  />
                  <Card.Body>
                    <Card.Title>Sintomas del dengue</Card.Title>
                    <Button variant="primary">Mas Informacion</Button>
                  </Card.Body>
                </Card>
              {/* </div>
              <div className="divAncla col-sm"> */}
                <Card style={{ width: "15rem", margin:"1em" }} className="col-xl-2">
                  <Card.Img
                    variant="top"
                    src={capacdengue}
                    style={{ maxWidth: "100%" }}
                  />
                  <Card.Body>
                    <Card.Title>Capacitacion dengue</Card.Title>
                    <Button variant="primary">Mas Informacion</Button>
                  </Card.Body>
                </Card>
              {/* </div>
              <div className="divAncla col-sm"> */}
                <Card style={{ width: "15rem", margin:"1em" }} className="col-xl-2">
                  <Card.Img
                    variant="top"
                    src={diabetes3}
                    style={{ maxWidth: "100%" }}
                  />
                  <Card.Body>
                    <Card.Title>Dia mundial de diabetes</Card.Title>
                    <Button variant="primary">Mas Informacion</Button>
                  </Card.Body>
                </Card>
              {/* </div> */}
              </div>
              </div>
            </section>

          <section id="nodos" className="col-xl-5">
            <div className="m-auto">
              <a href="">
                <img src={vacunacion} alt="" />
                <p>Nodos de vacunacion</p>
              </a>
            </div>
            <div>
              <a href="">
                <img src={testeos} alt=""/>
                <p>Nodos de testeos</p>
              </a>
            </div>
            <div>
              <a href="https://msptucuman.gov.ar/la-poblacion/">
                <img src={publico} alt=""/>
                <p>Info General</p>
              </a>
            </div>
          </section>
        </div>

      {/*<div className="row">
          <section id="infomsp" className="col-xl-7">
            <Card className="m-3">
              <a href="https://msptucuman.gov.ar/ficha-medica-escolar/">
                <Card.Img
                  variant="top"
                  src={fichamedica}
                  style={{ maxWidth: "100%"}}
                />
              </a>
            </Card>

            <Card  className="m-3">
              <a href="https://msptucuman.gov.ar/ubicaciones-de-mamografos/">
                <Card.Img
                  variant="top"
                  src={cancermama}
                  style={{ maxWidth: "100%" }}
                />
              </a>
            </Card>

            <Card className="m-3">
              <a href="https://srv08.siprosa.gob.ar/caps/carnetemitirplus.aspx">
                <Card.Img
                  variant="top"
                  src={carnet}
                  style={{ maxWidth: "100%" }}
                />
              </a>
            </Card>

            <Card className="m-3">
              <a href="https://play.google.com/store/apps/details?id=com.artech.serviciosalud.sdmenu&hl=es_AR&gl=US&pli=1">
                <Card.Img
                  variant="top"
                  src={tucsalud}
                  style={{ maxWidth: "100%" }}
                />
              </a>
            </Card>

            <Card className="m-3">
              <a href="https://msptucuman.gov.ar/aplicativo-para-visualizar-resultados-de-estudios-de-dengue-y-covid-19/">
                <Card.Img
                  variant="top"
                  src={labdengue}
                  style={{ maxWidth: "100%" }}
                />
              </a>
            </Card>
          </section>

          <section id="masinfo" className="col-xl-5 m-auto">
            <a href="https://msptucuman.gov.ar/manual-de-diabetes-para-padres/" className="divAncla">
              <img src={librodiabetes} alt="" style={{ width: "15em" }}/>
              <p>Libro de diabetes para padres</p>
            </a>
            <a href="https://msptucuman.gov.ar/nodo-rosa/" className="divAncla">
              <img src={nodorosa} alt="" style={{ width: "15em" }}/>
              <p>Nodo rosa</p>
            </a>
            <a href="https://msptucuman.gov.ar/ruta-de-la-embarazada-y-el-nino/" className="divAncla">
              <img src={embarazada} alt="" style={{ width: "15em" }}/>
              <p>Ruta de la embarazada y el niño</p>
            </a>
          </section>
        </div>*/}
      </main>
    </div>
  );
};

export default MainHome;
