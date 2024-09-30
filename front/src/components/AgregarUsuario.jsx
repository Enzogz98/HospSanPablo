import { useState, useEffect } from 'react';
import "../Css/agregrarUsuario.css";
import axios from "axios";
import Swal from 'sweetalert2';

export const AgregarUsuario = ({ handleToggleUser }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usuarios, setUsuarios] = useState();

  const handleCancelar = () => {
    handleToggleUser();
  };

  const getUsuarios = ()=>{
    axios.get("http://localhost:8000/login")
      .then((resp) => {
        setUsuarios(resp.data)
      })
  }

  useEffect(() => {
    getUsuarios()
  }, [])

  console.log(usuarios)

  const handleOnSubmit = async (e) => {
    
    e.preventDefault();
    try {
      usuarios.find((usuario) => {
        if(usuario.nomUser === username){
    
          Swal.fire({
            icon: "error",
            title: "ERROR!",
            text: "Ya Existe este usuario",
          });
          return
        }
      })
        const response = await axios.post("http://localhost:8000/agentes/registrar", {
          user: username,
          pass: password
        });
        Swal.fire({
          icon: "success",
          title: "Usuario agregado correctamente"
        });
        handleToggleUser();
    } catch (error) {
      console.log("error al agregar user", error);
    }
  };
  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);


  return (
    <>
      <div className="body-agregar-usuario">
        <div className="agregar-usuario-contenedor">
          <h3 className="agregar-usuario-titulo">Agrega los datos del usuario</h3>
          <form className="agregar-usuario-formulario" onSubmit={handleOnSubmit}>
            <div>
              <label className="agregar-usuario-label">Usuario:</label>
              <input
                type="text"
                className="agregar-usuario-input"
                name="username"
                onChange={handleUsernameChange}
                value={username}
              />
            </div>
  
            <div>
              <label className="agregar-usuario-label">Contraseña:</label>
              <input
                type="password"
                className="agregar-usuario-input"
                name="password"
                onChange={handlePasswordChange}
                value={password}
              />
            </div>
  
            <br />
            <div className="body-botones-usuario">
              <button
                className="boton-cancelar-usuario"
                type="button"
                onClick={handleCancelar}
              >
                Cancelar
              </button>
              <button className="boton-agregar-usuario" type="submit">
                Agregar
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
  
};
