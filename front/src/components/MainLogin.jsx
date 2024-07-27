import { Link, useNavigate } from "react-router-dom";
import "../Css/MainLogin.css";
import  { useState } from 'react';
import axios from "axios"

const MainLogin = () => {
  
  let navigate = useNavigate()
  const [usuario, setUsuario] = useState("");
  const [contraseña, setContraseña] = useState("");

  const handleSubmit = async () =>{
    axios.post("http://localhost", {
      usuario: usuario,
      contraseña: contraseña
    }).then(()=>{
      navigate("/home", {replace: true})
      alert("Bienvenido.")
    }).catch(()=>{
      alert("Usuario o contraseña incorrectos.")
    })
  } 

  return (
    <div className="">

      <div className="bodyLogin">
        <div className="Login"  data-aos="flip-left">

          <form className="form1">

            <h1 className="titulo1">Area Operativa <br />San Pablo</h1>

            <div className="inp1">
              <input
                className="input1"
                type="text"
                placeholder="Ingresar usuario"
                onChange={(e)=> setUsuario(e.target.value)}
              />
            </div>

            <div className="inp1">
              <input
                className="input1"
                type="password"
                placeholder="Ingresar contraseña"
                onChange={(e)=> setContraseña(e.target.value)}
              />
            </div>

            <Link to={""}>
              <button type="submit" className="submit1"  onSubmit={handleSubmit}>Ingresar</button>
            </Link>
            <Link to={"/"} className="btnVolver">
            <button type="submit" className="submit1">
            Volver a inicio</button></Link>
          </form>
          <div className="banner1">
            <h1 className="Bienvenido1">Bienvenido</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainLogin;
