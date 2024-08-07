import React, {useState} from "react";
// import { useForm } from "../hooks";
import "../Css/agregrarUsuario.css";
import axios from "axios";

export const AgregarUsuario = ({ handleToggleUser }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleCancelar = () => {
    handleToggleUser();
    
  };

  const handleOnSubmit = async (e) => {
    
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/agentes/registrar", {
        user: username,
        pass: password,
        // nombre: valuesForm.nombre,
        // apellido: valuesForm.apellido,
        // dni: valuesForm.dni,
        // direccion: valuesForm.direccion,
        // telefono: valuesForm.telefono,
        // funcion: valuesForm.funcion,
        // rol: valuesForm.rol,
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


  {/*           <div>
              <label htmlFor="">Nombre:</label>
              <input
                type="text"
                name="nombre"
                onChange={onInputChange}
                value={valuesForm.nombre}
              />
            </div>

            <div>
              {" "}
              <label htmlFor="">Apellido:</label>
              <input
                type="text"
                name="apellido"
                onChange={onInputChange}
                value={valuesForm.apellido}
              />
            </div>

            <div>
              <label htmlFor="">Documento:</label>
              <input
                type="text"
                name="dni"
                onChange={onInputChange}
                value={valuesForm.dni}
              />
            </div>

            <div>
              <label htmlFor="">Direccion:</label>
              <input
                type="text"
                name="direccion"
                onChange={onInputChange}
                value={valuesForm.direccion}
              />
            </div>

            <div>
              <label htmlFor="">Telefono:</label>
              <input
                type="text"
                name="telefono"
                onChange={onInputChange}
                value={valuesForm.telefono}
              />
            </div>

            <div>
              <label htmlFor="">Funcion:</label>
              <input
                type="text"
                name="funcion"
                onChange={onInputChange}
                value={valuesForm.funcion}
              />
            </div>

            <label htmlFor="">Rol:</label>
            <select
              name="rol"
              id=""
              onChange={onInputChange}
              value={valuesForm.rol}
            >
              <option value="1">Admin</option>
              <option value="2">Agente</option>
            </select>  */}

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
