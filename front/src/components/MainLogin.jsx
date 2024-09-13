import { Link, useNavigate } from "react-router-dom";
import "../Css/MainLogin.css";
import  { useContext, useState } from 'react';
import axios from "axios"
import { UserContext } from "../context/UserContext";
import { useForm } from "../hooks/useForm"
import Footer from "./Footer"

export const MainLogin = () => {
  
  let navigate = useNavigate()


  const { handleLogear, getUser, getUserId, userId } = useContext(UserContext)
  const { valuesForm, onInputChange } = useForm({
      usuario: '',
      contraseña: ''
  })

  const handleSubmit = async () =>{
    axios.post("http://localhost:8000/login/login",valuesForm)
    .then((resp)=>{
      handleLogear(true)
      getUserId(resp.data.userId)
      getUser(valuesForm.usuario)
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
                name='usuario' 
                onChange={ onInputChange }
              />
            </div>

            <div className="inp1">
              <input
                className="input1"
                type="password"
                placeholder="Ingresar contraseña"
                name='contraseña' 
                onChange={ onInputChange }
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
      <Footer/>
    </div>
    
  );
};

export default MainLogin;
