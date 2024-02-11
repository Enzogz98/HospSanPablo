import "../Css/mainhistoria.css";
import hospital1 from "../assets/hospsanp1.jpeg";
import hospital2 from "../assets/hospitalSPB.jpg";

const Historia = () => {
  return (

    <div>
        <div id="vacioH">

        </div>
      <div className="MainHisotia">


        <div className="flex-container">

          <img src={hospital1} alt="" id="imgH" />
          <img src={hospital2} alt="" id="imgH" />

          <div className="text-box">
            <h1 id="titulo">Hospital de San Pablo</h1>
            <p id="texto">El Hospital de San Pablo, ubicado en San Miguel de Tucumán, Tucumán, Argentina, posee una rica historia 
              que se remonta a 
              sus orígenes en el siglo XIX. 
              Es uno de los centros hospitalarios más antiguos y emblemáticos de la región, reflejando cambios sociales, 
              médicos y tecnológicos a lo largo de su existencia.

              La institución fue fundada con la intención de brindar asistencia médica a la población de la provincia de Tucumán, 
              en un momento en que la atención de la salud comenzaba a organizarse de manera más formal en Argentina.

              En su origen, el hospital atendía a pacientes de todas las clases sociales, incluidos aquellos que no podían pagar por 
              su cuidado, lo cual era una política bastante progresista para la época. A lo largo de los años, el hospital de San Pablo 
              no solo ha servido a la comunidad local, sino que también ha sido un lugar de formación para numerosos profesionales de la 
              salud. Muchos médicos, enfermeros y técnicos han recibido su formación allí, convirtiéndose en parte importante del sistema 
              de salud de Tucumán y de Argentina.

              Con el paso del tiempo, el hospital ha sido objeto de diversas obras de ampliación y modernización para adaptarse a las 
              necesidades cambiantes de la población y a los avances en las ciencias de la salud. Esto incluye la incorporación de nueva 
              tecnología médica, expansión de sus instalaciones, y la creación de nuevos departamentos especializados en diferentes áreas 
              de la medicina.

              El Hospital de San Pablo ha sido testigo y parte de importantes eventos de la historia de Tucumán, brindando asistencia 
              en momentos de crisis sanitarias, epidemias, y apoyando el desarrollo de políticas de salud pública. Su contribución a la 
              comunidad ha sido fundamental no solo en términos de atención médica, sino también en la capacitación de profesionales de 
              la salud y en la investigación médica.</p>
          </div>
        </div>

      </div>
    </div>










    
  )
}

export default Historia