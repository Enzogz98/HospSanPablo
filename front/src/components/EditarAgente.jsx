import { useContext, useState, useEffect } from "react";
import { UserContext } from "../context/UserContext";
import axios from "axios";
import "../Css/agregrarUsuario.css";

export const EditarAgente = ({ handleToggleUser }) => {
  const [username, setUsername] = useState( "");
  const [password, setPassword] = useState( "");

  const [usuario, setUsuario] = useState({});

  const { userIdEdit } = useContext(UserContext);

  const handleCancelar = () => {
    handleToggleUser();
  };

  const getUsuario = async () => {
    const url = "http://localhost:8000/login/usuario/";
    try {
      const resp = await axios.get(url + userIdEdit);
      const userData = resp.data || {};
      setUsuario(userData);
      setUsername(userData.nomUser || ""); // Usa un valor por defecto si nomUser es undefined
      setPassword(userData.pass || ""); // Usa un valor por defecto si pass es undefined
    } catch (err) {
      console.error("Error al obtener usuario:", err);
    }
  };

  console.log(usuario)
  
  useEffect(() => {
    
      getUsuario();
   
  }, []);

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `http://localhost:8000/agentes/editarUsuario/`,
        {
          userId: userIdEdit,
          nomUser: username,
          pass: password,
        }
      );
      console.log("usuarioEditado", response.data);
      getUserIdEdit("");
      handleToggleUser();
    } catch (error) {
      console.error("Error al editar usuario", error);
    }
  };

  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  return (
    <div className="body-editar-usuario bg-light">
      <div>
        <h3>Datos del usuario</h3>
        <form onSubmit={handleOnSubmit}>
          <div>
            <label>Usuario:</label>
            <input
              type="text"
              name="username"
              onChange={handleUsernameChange}
              value={username || ""} // Asegúrate de que siempre haya un valor
            />
          </div>
          <div>
            <label>Contraseña:</label>
            <input
              type="password"
              name="password"
              onChange={handlePasswordChange}
              value={password || ""} // Asegúrate de que siempre haya un valor
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
};

export default EditarAgente;
