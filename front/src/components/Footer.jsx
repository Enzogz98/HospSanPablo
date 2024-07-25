import "../Css/footer.css";

const Footer = () => {
  return (
   <footer className="footer">
  	 <div className="container-footer">
		<div className="parrafo-footer"><p>El Área Operativa de San Pablo tiene con 17 mil habitantes, guardia de 24 horas y cuenta con tres CAPS, Nuestra Señora del Rosario, Punta del Monte y Ohuanta. Además, tiene con un área de influencia importante que es Rinconada, Yerba Buena y Manantial, por lo que hay una gran afluencia de gente.</p></div>
  	 		<div className="footer-col">
  	 			<h4>Pagina Creada por:</h4>
  	 			<ul>
  	 				<li><a href="https://github.com/FacundoJoaquinGil" Target="_blank">Joaquin Gil</a></li>
  	 				<li><a href="#">Franco Cornejo</a></li>
  	 				<li><a href="#">Matias Bordenave</a></li>
  	 				<li><a href="#">Enzo Gonzales</a></li>
  	 			</ul>
  	 		</div>
  	 	</div>
		<div className="derechos"><p>Todos los derechos reservados © 2024</p></div>
  </footer>
  );
};

export default Footer;
