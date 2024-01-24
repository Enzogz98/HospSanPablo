import logo from "../imagenes/logo1.png"
import insta from "../imagenes/insta.png"
import administrativos from "../imagenes/administrativos.png"
import profesionales from "../imagenes/profesionales.png"
import hospital from "../imagenes/hospital.png"
import hospital1 from "../imagenes/hospsanp1.jpeg"
import dengue1 from "../imagenes/dengue1.jpg"
import capacdengue from "../imagenes/capacdengue.jpg"
import diabetes3 from "../imagenes/diabetes3.jpg"
import vacunacion from "../imagenes/vacunacion.png"
import testeos from "../imagenes/testeos.png"
import publico from "../imagenes/publico.png"
import fichamedica from "../imagenes/fichamedica.jpeg"
import cancermama from "../imagenes/cancermama.jpg"
import carnet from "../imagenes/carnetvacunacion.jpg"
import tucsalud from "../imagenes/tucsalud.jpeg"
import labdengue from "../imagenes/labdengue.jpg"
import librodiabetes from "../imagenes/librodiabetes.png"
import nodorosa from "../imagenes/nodorosa.png"
import embarazada from "../imagenes/embarazada.png"
import ubicacion from "../imagenes/ubicacion.png"
import telefono from "../imagenes/telefono.png"
import './App.css'
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function App() {
  

  return (
    <>
    <header>
      <div id="encabezado">
        <img src= {logo} alt="" id="logo"/>

        <h1 id="titulo">HOSPITAL DE SAN PABLO</h1>

        <a href="">Login</a>

        <a href="https://www.instagram.com/hosp.sanpablo/?igsh=MXdiZjdneTRvMWdlag%3D%3D"><img src={insta} alt="" id="insta"/></a>

      </div>

    <div id="navegacion">
      <nav>
        <ul className='navegacion'>
          <li><a href="#inicio">Inicio</a></li>
          <li><a href="#inicio">Historia</a></li>
          <li><a href="#inicio">Noticias</a></li>
          <li><a href="#inicio">Ubicacion</a></li>
          <li><a href="#inicio">Contacto</a></li>
        </ul>
      </nav>
    </div>

    </header>

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

    <footer>
      <div>
        <section id="ubicaciones">
        <img src={ubicacion} alt="" /><p>Mapa Hospital San Pablo</p>
        <img src={ubicacion} alt="" /><p>Mapa CAPS Nuestra Sra. del Rosario</p>
        <img src={ubicacion} alt="" /><p>Mapa CAPS Punta del Monte</p>
        <img src={ubicacion} alt="" /><p>Mapa CAPS Ohuanta</p>
        </section>

        <section id="telefonos1">
        <a href="https://msptucuman.gov.ar/vigilancia-epidemiologica-0800-555-8478/"><img src={telefono} alt="" /><p>08005558478 VIGILANCIA EPIDEMIOLOGICA</p></a>
        <a href="https://msptucuman.gov.ar/salud-escucha-0800-4444-999/"><img src={telefono} alt="" /><p>08004444999 SALUD ESCUCHA</p></a>
        </section>
        <section id="telefonos2">
        <img src={telefono} alt="" /><p>100 BOMBEROS</p>
        <img src={telefono} alt="" /><p>107 EMERGENCIAS</p>
        <img src={telefono} alt="" /><p>911 POLICIA</p>
        <img src={telefono} alt="" /><p>144 VIOLENCIA A LA MUJER</p>
        </section>
      </div>
      <div>
        <p>Copyright HSP TUCUMAN</p>
      </div>
    </footer>

    </>
  )
}

export default App
