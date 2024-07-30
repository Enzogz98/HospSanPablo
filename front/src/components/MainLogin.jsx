import { Link, useNavigate } from "react-router-dom";
import "../Css/MainLogin.css";
import  { useContext, useState } from 'react';
import axios from "axios"
import { UserContext } from "../context/UserContext";

const MainLogin = () => {
  
  let navigate = useNavigate()
  const [usuario, setUsuario] = useState("");
  const [contraseña, setContraseña] = useState("");

  const { handleLogear, getUser  } = useContext(UserContext)

  const handleSubmit = async () =>{
    axios.post("http://localhost:8000/login/login", {
      usuario: usuario,
      contraseña: contraseña
    }).then((resp)=>{
      getUser(resp.data.nomUser)
      handleLogear(true)
      navigate("/", {replace: true})
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
              <button type="submit" className="submit1"  onClick={handleSubmit}>Ingresar</button>
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
