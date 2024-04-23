import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import hospital1 from "../assets/hospsanp1.jpeg";
import capsnsdp from "../assets/capsNuestraSraDelPilar.jpg"
import capsvdr from "../assets/CapsVillaDelRosario.jpg"
import hospital from "../assets/hospital.png";
import profesionales from "../assets/profesionales.png";
import administrativos from "../assets/administrativos.png";
import dengue1 from "../assets/dengue1.jpg";
import capacdengue from "../assets/capacdengue.jpg";
import diabetes3 from "../assets/diabetes3.jpg";
import informacion from "../assets/informacion.png";
import calendario from "../assets/calendario.png";
import test from "../assets/test.png";
import "../Css/mainHome.css";

const MainHome = () => {
  return (
    <div className="">
        <div id="vacio">

        </div>
      <div className="MainHome">



        <main className="container mainContainer">
          <div className="row">
            <section id="carrusel" className="col-xl-7 m-auto">
            <Carousel>
                  <Carousel.Item>
                      <a href="">
                          <img src={hospital1} alt="" id="img1"/>
                      </a>
                      <Carousel.Caption>
                          <h3>Hospital de San Pablo</h3>
                      </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                      <a href="">
                          <img src={capsnsdp} alt="" id="img1"/>
                      </a>
                      <Carousel.Caption>
                          <h3>Caps Nuestra Sra. Del Pilar</h3>
                      </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                      <a href="">
                          <img src={capsvdr} alt="" id="img1"/>
                      </a>
                      <Carousel.Caption>
                          <h3>Caps Villa del Rosario</h3>
                      </Carousel.Caption>
                  </Carousel.Item>
                  
              </Carousel>
              
            </section>
            <section id="horarios" className="col-xl-5  m-auto">
              <div className="divAncla">
                <a href="/HoraAtencion" id="hor1">
                  <img src={hospital} alt="" />
                  <p>Horarios de atencion</p>
                </a>
              </div>
              <div className="divAncla ">
                <a href="/CartillaMedica" id="hor1">
                  <img src={profesionales} alt="" />
                  <p>Profesionales</p>
                </a>
              </div>
              <div className="divAncla">
                <a href="/HorarioAdm" id="hor1">
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
                      style={{ maxWidth: "100%", maxHeight: "250px" }}
                    />
                    <Card.Body>
                      <Card.Title>Sintomas del dengue</Card.Title>
                      <a href="https://www.instagram.com/p/Cz_R8YIu5mU/?img_index=1" ><Button class="btn btn-light">Mas Informacion</Button></a>
                    </Card.Body>
                  </Card>
               
                  <Card style={{ width: "15rem", margin:"1em" }} className="col-xl-2">
                    <Card.Img
                      variant="top"
                      src={capacdengue}
                      style={{ maxWidth: "100%", maxHeight: "250px" }}
                    />
                    <Card.Body>
                      <Card.Title>Capacitacion dengue</Card.Title>
                      <a href="https://www.instagram.com/p/Cz_QUSJu5rn/" ><Button class="btn btn-light">Mas Informacion</Button></a>
                    </Card.Body>
                  </Card>
                
                  <Card style={{ width: "15rem", margin:"1em" }} className="col-xl-2">
                    <Card.Img
                      variant="top"
                      src={diabetes3}
                      style={{ maxWidth: "100%", maxHeight: "250px" }}
                    />
                    <Card.Body>
                      <Card.Title>Dia mundial de diabetes</Card.Title>
                      <a href="https://www.instagram.com/p/CzozN1TO849/" ><Button class="btn btn-light">Mas Informacion</Button></a>
                    </Card.Body>
                  </Card>
                
                </div>
                </div>
              </section>

            <section id="nodos" className="col-xl-5">
              <div className="m-auto">
                <a href="https://msptucuman.gov.ar/nodos-de-vacunacion/" id="nodos1">
                  <img src={calendario} alt=""  />
                  <p>Nodos de vacunacion</p>
                </a>
              </div>
              <div className="m-auto">
                <a href="https://msptucuman.gov.ar/nodos-de-testeo/" id="nodos1">
                  <img src={test} alt=""  />
                  <p>Nodos de testeos</p>
                </a>
              </div>
              <div className="m-auto">
                <a href="https://msptucuman.gov.ar/la-poblacion/" id="nodos1">
                  <img src={informacion} alt=""  />
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