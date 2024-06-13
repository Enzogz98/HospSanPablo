import React from 'react'
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import hospital1 from "../assets/hospsanp1.jpeg";
import capsnsdp from "../assets/capsNuestraSraDelPilar.jpg"
import capsvdr from "../assets/CapsVillaDelRosario.jpg"
import dengue1 from "../assets/dengue1.jpg";
import capacdengue from "../assets/capacdengue.jpg";
import diabetes3 from "../assets/diabetes3.jpg";

export const Carrousel = () => {
  return (
    <div>
        <Carousel id="carruselImg" className="col-lg-12 col-md-10 col-sm-12 m-auto">
                  <Carousel.Item >
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
              
                <div className="divAncla ">
                
                <div className="divCards row justify-content-center">

                  <Card style={{ width: "14em", margin:"1em" }} className="col-1">
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
               
                  <Card style={{ width: "14rem", margin:"1em" }} className="col-1">
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
                
                  <Card style={{ width: "14rem", margin:"1em" }} className="col-1">
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
    </div>
  )
}
