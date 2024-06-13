import "../Css/MainNoticias.css"
import fichamedica from "../assets/fichamedica.jpeg"
import cancermama from "../assets/cancermama.jpg"
import carnet from "../assets/carnetvacunacion.jpg"
import tucsalud from "../assets/tucsalud.jpeg"
import labdengue from "../assets/labdengue.jpg"
import librodiabetes from "../assets/librodiabetes.png"
import nodorosa from "../assets/nodorosa.png"
import embarazada from "../assets/embarazada.png"
import { Card } from 'react-bootstrap';





const MainNoticias = () => {
  return (
    <div className="bgNoticia">
        <div className="inicioNoticia">

        </div>
        <div className="row">
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

              <a href="https://msptucuman.gov.ar/manual-de-diabetes-para-padres/" className="divAncla1">
                <img src={librodiabetes} alt="" />
                <p>Libro de diabetes</p>
              </a>

              <a href="https://msptucuman.gov.ar/nodo-rosa/" className="divAncla1">
                <img src={nodorosa} alt="" />
                <p>Nodo rosa</p>
              </a>

              <a href="https://msptucuman.gov.ar/ruta-de-la-embarazada-y-el-nino/" className="divAncla1">
                <img src={embarazada} alt=""/>
                <p>Ruta de la embarazada y el niño</p>
              </a>

              </section>
        </div>
    </div>
  )
}

export default MainNoticias