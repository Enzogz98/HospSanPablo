import "../Css/mainhistoria.css";
import hospital1 from "../assets/hospsanp1.jpeg";
import hospital2 from "../assets/hospitalSPB.jpg";

export const MainHistoria = () => {
  return (
    <div className="contenedor-historia">
      
      <h1 className="titulo-historia">HISTORIA DE EL HOSPITAL DE SAN PABLO</h1>

      <div className="historial-body">

        <p className="parrafo-historia" data-aos="fade-right">

          Alrededor de la primera organización política creada en el territorio
          argentino, comienza el proceso de integración territorial de la región
          que hoy ocupa San Pablo. Por ese entonces habitaban en esa tierras los
          Lules, pueblo originario proveniente del desprendimiento de otras
          tribus pertenecientes a los Guaraníes, los Tonocotés y los Juríes. En
          el año 1592, Juan Ramires de Velazco, adjudica a Melian de Leguizamo
          las tierras que se extendían desde el Río Ulipampa (hoy Río Lules),
          hasta la ciudad de San Miguel de Tucumán. En 1670, la nieta de
          Leguizamo, Jordana de Trejo Leguizamo, vende estas tierras a los
          Jesuitas, quienes para tener referencia denominan a este lugar “El
          bosque de San Pablo”. En 1767, cuando son expulsados los Jesuitas de
          los dominios de Carlos III, estos territorios son rematados y
          adquiridos por Domingo de Ayala. Con Ayala se asocia para explotar
          estas tierras del lugar llamado El Obraje, incluyendo la zona boscosa
          de la ladera del cerro. El Pueblo de San Pablo queda fundado al
          levantarse las primeras casas para el personal trabajador del Ingenio,
          aproximadamente en el año 1860, 30 años después de haberse puesto en
          funcionamiento el Ingenio Azucarero San Pablo, cuando todavía se
          utilizaban elementos rústicos como el trapiche de madera, utilizado
          por los Jesuitas 70 años atrás. En 1987 varios factores llevaron a la
          quiebra del ingenio. Durante dos años estuvo a cargo de CATSA, un
          grupo de cañeros, pero luego permaneció cerrado hasta 1992. Dicho año
          el ingenio abrió temporalmente, hasta que debió suspender las
          actividades con el corte del suministro de gas. En 1996 se anunció el
          desguace definitivo, el cual se finalizó aún con la tenaz resistencia
          de los vecinos de San Pablo. El ingenio San Pablo fue cerrado hace 28
          años, a pesar de ser uno de los más modernos y rentables de la
          provincia. Con ello muchas familias quedaron sin trabajo y se acentuó
          la crisis social y económica. Las causas de cierre todavía son poco
          claras. Actualmente el Ingenio se ha convertido en una Universidad
          privada, USPT creada el 4 de julio del año 2007 por la Fundación para
          el Desarrollo mediante el decreto presidencial Nº 859/07. Es la
          primera universidad privada laica del Noroeste argentino y la primera
          universidad argentina creada en el siglo XXI. ASPECTOS GEOGRÁFICOS La
          localidad de San Pablo pertenece al departamento de Lules, con una
          extensión aproximada de 296 km2, distribuida en tres zonas bien
          diferenciadas: montañosa, pedemonte y llanura. Se encuentra ubicada a
          13 km al SO del centro de San Miguel de Tucuman, a 8 km al Sur de
          Yerba Buena y a 7 km al Norte de la ciudad de Lules. Se ubica dentro
          de las coordenadas geográficas 26° 46’ 27’’ de Latitud Sur. La
          localidad (al Este) se encuentra a 350 m sobre el nivel del mar, a 650
          al Oeste (pedemonte) y a 3000 en la región de Alta Montaña. LÍMITE
          NORTE: ARROYO POLONIO LÍMITE SUR: CAMINO VECINAL MALVINAS LÍMITE ESTE:
          ARROYO MANANTIAL LÍMITE OESTE: VILLA NOUGUES Cabe remarcar que el AOSP
          incluye hasta Villa Nougues (1200 m sobre el nivel del mar) y el resto
          pertenece al Área Operativa de Alta Montaña. La extensión de
          responsabilidad es de 42 km.
        </p>

        <div className="columna-img-historia" data-aos="fade-left">

          <div className="imagen-hitoria1"><img src={hospital1} alt="" /><p>"El Hospital de San Pablo, situado en el histórico departamento de Lules, es un pilar de salud y bienestar para la comunidad local, brindando atención y esperanza a sus habitantes."</p></div>

          <div className="imagen-hitoria2"><img src={hospital2} alt="" /><p>"El Consultorio Materno Infantil de San Pablo es un espacio dedicado a la atención integral de madres y niños, brindando servicios especializados Comprometido con el bienestar de la comunidad, este centro se destaca por su calidez y profesionalismo en el acompañamiento de las familias de la región."</p></div>

        </div>

      </div>

    </div>
  );
};

export default MainHistoria;
