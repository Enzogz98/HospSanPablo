import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import hospital1 from ".../imagenes/hospsanp1.jpeg";
import hospital from ".../imagenes/hospital.png";
import profesionales from ".../imagenes/profesionales.png";
import administrativos from ".../imagenes/administrativos.png";
import dengue1 from ".../imagenes/dengue1.jpg";
import capacdengue from ".../imagenes/capacdengue.jpg";
import diabetes3 from ".../imagenes/diabetes3.jpg";
import vacunacion from ".../imagenes/vacunacion.png";
import testeos from ".../imagenes/testeos.png";
import publico from ".../imagenes/publico.png";
import embarazada from ".../imagenes/embarazada.png"
import nodorosa from ".../imagenes/nodorosa.png"
import carnet from ".../imagenes/carnetvacunacion.jpg"
import fichamedica from ".../imagenes/fichamedica.jpeg"
import cancermama from ".../imagenes/cancermama.jpg"
import labdengue from ".../imagenes/labdengue.jpg"
import librodiabetes from ".../imagenes/librodiabetes.png"
import tucsalud from ".../imagenes/tucsalud.jpeg"
import '../App.css'
const MainHome = () => {
  return (
    <div>
      <main>
      <div>
        <section id="carrusel"> 

          <Carousel>
          <Carousel.Item>
            <a href=""><img src={hospital1} alt="" /></a>
            <Carousel.Caption>
              <h3>Hospital de San Pablo</h3>
              <p>Click para mas informacion</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <a href=""><img src={hospital1} alt="" /></a>
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Click para mas informacion</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <a href=""><img src={hospital1} alt="" /></a>
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Click para mas informacion</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
    
        </section>
        <section id="horarios">

          <a href=""><img src={hospital} alt="" /><p>Horarios de atencion</p></a>
          <a href=""><img src={profesionales} alt="" /><p>Profesionales</p></a>
          <a href=""><img src={administrativos} alt="" /><p>Horarios administrativos</p></a>

        </section>

      </div>
      
      <div>
        <section id="cards">
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={dengue1} />
          <Card.Body>
            <Card.Title>Sintomas del dengue</Card.Title>
            <Button variant="primary">Mas Informacion</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={capacdengue} />
          <Card.Body>
            <Card.Title>Capacitacion dengue</Card.Title>
            <Button variant="primary">Mas Informacion</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={diabetes3} />
          <Card.Body>
            <Card.Title>Dia mundial de diabetes</Card.Title>
            <Button variant="primary">Mas Informacion</Button>
          </Card.Body>
        </Card>
        </section>

        <section id="nodos">
        <a href=""><img src={vacunacion} alt="" /><p>Nodos de vacunacion</p></a>
        <a href=""><img src={testeos} alt="" /><p>Nodos de testeos</p></a>
        <a href="https://msptucuman.gov.ar/la-poblacion/"><img src={publico} alt="" /><p>Info General</p></a>
        </section>
      </div>

      <div>
        <section id="infomsp">
          <Card>
            <a href="https://msptucuman.gov.ar/ficha-medica-escolar/"><Card.Img variant="top" src={fichamedica} /></a>
          </Card>

          <Card>
            <a href="https://msptucuman.gov.ar/ubicaciones-de-mamografos/"><Card.Img variant="top" src={cancermama} /></a> 
          </Card>

          <Card>
            <a href="https://srv08.siprosa.gob.ar/caps/carnetemitirplus.aspx"><Card.Img variant="top" src={carnet} /></a>
          </Card>

          <Card>
            <a href="https://play.google.com/store/apps/details?id=com.artech.serviciosalud.sdmenu&hl=es_AR&gl=US&pli=1"><Card.Img variant="top" src={tucsalud} /></a>
          </Card>

          <Card>
            <a href="https://msptucuman.gov.ar/aplicativo-para-visualizar-resultados-de-estudios-de-dengue-y-covid-19/"><Card.Img variant="top" src={labdengue} /></a>
          </Card>
        </section>

        <section id="masinfo">
        <a href="https://msptucuman.gov.ar/manual-de-diabetes-para-padres/"><img src={librodiabetes} alt="" /><p>Libro de diabetes para padres</p></a>
        <a href="https://msptucuman.gov.ar/nodo-rosa/"><img src={nodorosa} alt="" /><p>Nodo rosa</p></a>
        <a href="https://msptucuman.gov.ar/ruta-de-la-embarazada-y-el-nino/"><img src={embarazada} alt="" /><p>Ruta de la embarazada y el niño</p></a>
        </section>
      </div>


    </main>
    </div>
  )
}

export default MainHome
