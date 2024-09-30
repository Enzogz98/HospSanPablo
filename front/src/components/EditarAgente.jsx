import { useContext, useState, useEffect } from "react";
import { UserContext } from "../context/UserContext";
import axios from "axios";
import "../Css/editarAgente.css";
import Swal from 'sweetalert2';

export const EditarAgente = ({ handleToggleUser}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [usuario, setUsuario] = useState({});

  const {userIdEdit} = useContext(UserContext);

  const handleCancelar = () => {
    handleToggleUser();
  };

  const getUsuario = async () => {
    const url = "http://localhost:8000/login/usuario/";
    try {
      const resp = await axios.get(url + userIdEdit);
      const userData = resp.data || {};
      setUsuario(userData);
      setUsername(userData.nomUser || "");
      setUsername(userData.nomUser || "");
    } catch (err) {
      console.error("Error al obtener usuario:", err);
    }
  };

  useEffect(() => {
    getUsuario();
}, [userIdEdit]);


  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:8000/agentes/editarUsuario";

      const updatedUser = {
        usersid: userIdEdit,
        nomUser: username,
        pass: password,
      };
      await axios.put(url, updatedUser);
      Swal.fire({
        icon: "warning",
        title: "Atencion!",
        text: "Se acaba de editar un usuario"
      });
      handleToggleUser();
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Opss..",
        text: "Ocurrió un error al intentar actualizar el usuario!",
      });
    }
  };

  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  return (
    <div className="body-editar-usuario">
      <div className="editar-usuario-contenedor">
        <h3 className="editar-usuario-titulo">Edita los datos del usuario</h3>
        <form className="editar-usuario-formulario" onSubmit={handleOnSubmit}>
          <div>
            <label className="editar-usuario-label">Editar usuario:</label>
            <input
              type="text"
              className="editar-usuario-input"
              name="username"
              onChange={handleUsernameChange}
              value={username || ""}
            />
          </div>
          <div>
            <label className="editar-usuario-label">Editar contraseña:</label>
            <input
              type="password"
              className="editar-usuario-input"
              name="password"
              onChange={handlePasswordChange}
              value={password || ""}
            />
          </div>
          <div className="body-botones-usuario">
            <button
              className="boton-cancelar-usuario"
              type="button"
              onClick={handleCancelar}
            >
              Cancelar
            </button>
            <button className="boton-editar-usuario" type="submit">
              Editar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}  

export default EditarAgente;
