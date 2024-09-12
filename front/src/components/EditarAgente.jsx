import { useContext, useState, useEffect } from "react";
import { UserContext } from "../context/UserContext";
import axios from "axios";
import "../Css/agregrarUsuario.css";

export const EditarAgente = ({ handleToggleUser }) => {
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

  // const getUsuario = () => {
  //   axios.get("http://localhost:8000/login/usuario/").then((resp) => {
  //     setUserIdEdit(resp.data.usersid);
  //     setUsername(resp.data.nomUser || "");
  //     setPassword(resp.data.pass || "");
  //   });
  // };

  useEffect(() => {
    console.log("ID del usuario a editar:", userIdEdit);
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
      console.log(userIdEdit);
      alert("Usuario actualizado correctamente.");
      handleToggleUser();
    } catch (err) {
      console.error("Error al actualizar el usuario:", err);
      alert("Ocurrió un error al intentar actualizar el usuario.");
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
              value={username || ""}
            />
          </div>
          <div>
            <label>Contraseña:</label>
            <input
              type="password"
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
};

export default EditarAgente;
