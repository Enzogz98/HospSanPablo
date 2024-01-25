import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import hospital1 from "../assets/hospsanp1.jpeg";
import hospital from "../assets/hospital.png";
import profesionales from "../assets/profesionales.png";
import administrativos from "../assets/administrativos.png";
import dengue1 from "../assets/dengue1.jpg";
import capacdengue from "../assets/capacdengue.jpg";
import diabetes3 from "../assets/diabetes3.jpg";
import vacunacion from "../assets/vacunacion.png";
import testeos from "../assets/testeos.png";
import publico from "../assets/publico.png";
import embarazada from "../assets/embarazada.png"
import nodorosa from "../assets/nodorosa.png"
import carnet from "../assets/carnetvacunacion.jpg"
import fichamedica from "../assets/fichamedica.jpeg"
import cancermama from "../assets/cancermama.jpg"
import labdengue from "../assets/labdengue.jpg"
import librodiabetes from "../assets/librodiabetes.png"
import tucsalud from "../assets/tucsalud.jpeg"

const MainHome = () => {
  return (
    <div>
      <main className='container' >
      <div>
        <section id="carrusel"> 

          <Carousel>
          <Carousel.Item>
            <a href=""><img src={hospital1} alt="" style={{ maxWidth: '100%' }}/></a>
            <Carousel.Caption>
              <h3>Hospital de San Pablo</h3>
              <p>Click para mas informacion</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <a href=""><img src={hospital1} alt="" style={{ maxWidth: '100%' }}/></a>
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Click para mas informacion</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <a href=""><img src={hospital1} alt="" style={{ maxWidth: '100%' }}/></a>
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
          <Card.Img variant="top" src={dengue1} style={{ maxWidth: '100%' }} />
          <Card.Body>
            <Card.Title>Sintomas del dengue</Card.Title>
            <Button variant="primary">Mas Informacion</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={capacdengue} style={{ maxWidth: '100%' }}/>
          <Card.Body>
            <Card.Title>Capacitacion dengue</Card.Title>
            <Button variant="primary">Mas Informacion</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={diabetes3} style={{ maxWidth: '100%' }} />
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
            <a href="https://msptucuman.gov.ar/ficha-medica-escolar/"><Card.Img variant="top" src={fichamedica} style={{ maxWidth: '100%' }} /></a>
          </Card>

          <Card>
            <a href="https://msptucuman.gov.ar/ubicaciones-de-mamografos/"><Card.Img variant="top" src={cancermama}  style={{ maxWidth: '100%' }}/></a> 
          </Card>

          <Card>
            <a href="https://srv08.siprosa.gob.ar/caps/carnetemitirplus.aspx"><Card.Img variant="top" src={carnet} style={{ maxWidth: '100%' }} /></a>
          </Card>

          <Card>
            <a href="https://play.google.com/store/apps/details?id=com.artech.serviciosalud.sdmenu&hl=es_AR&gl=US&pli=1"><Card.Img variant="top" src={tucsalud} style={{ maxWidth: '100%' }}/></a>
          </Card>

          <Card>
            <a href="https://msptucuman.gov.ar/aplicativo-para-visualizar-resultados-de-estudios-de-dengue-y-covid-19/"><Card.Img variant="top" src={labdengue} style={{ maxWidth: '100%' }}/></a>
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
