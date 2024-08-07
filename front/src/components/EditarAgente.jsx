import { useContext, useState, useEffect } from 'react';
import { UserContext } from '../context/UserContext';
import axios from "axios";
import "../Css/agregrarUsuario.css";

export const EditarAgente = ({ handleToggleUser }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usuario, setUsuario] = useState({});

  const { userId } = useContext(UserContext);

  const handleCancelar = () => {
    handleToggleUser();
  };

  const getUsuario = async () => {
    const url = "http://localhost:8000/login/usuario/"
    console.log(userId)
    await axios.get(url + userId)
      .then((resp) => {
        setUsuario(resp.data);
        setUsername(resp.data.nomUser);  // Asegúrate de que el campo coincide con el backend
        setPassword(resp.data.pass); // Ajustar el nombre del campo según tu API
      })
      .catch((err) => console.error("Error al obtener usuario:", err));
  };

  useEffect(() => {
    if (userId) {
      getUsuario();
    }
  }, [userId]);

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`http://localhost:8000/agentes/editarUsuario/`, {
        userId: userId,
        nomUser: username,
        pass: password,
      });
      console.log("usuarioEditado", response.data);
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