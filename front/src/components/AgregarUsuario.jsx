import { useState, useEffect } from 'react';
import "../Css/agregrarUsuario.css";
import axios from "axios";

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
    
          alert("El usuario ya existe")
          return
        }
      })
        const response = await axios.post("http://localhost:8000/agentes/registrar", {
          user: username,
          pass: password
        });
        console.log("usuarioAgregado", response.data);
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
        <div>
          <h3>Datos del usuario</h3>
          <form onSubmit={handleOnSubmit}>
          <div>
            <label>Usuario:</label>
            <input
              type="text"
              name="username"
              onChange={handleUsernameChange}
              value={username}
            />
          </div>

          <div>
            <label>Contraseña:</label>
            <input
              type="password"
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
