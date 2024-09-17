import { useContext } from "react";
import axios from "axios";

import { UserContext } from "../context/UserContext";

export const TablaUsuarios = ({ usuarios, handleToggleEditar }) => {
  const { userId, setUserIdEdit } = useContext(UserContext);

  const handleEditar = (id) => {
    handleToggleEditar(id);
    setUserIdEdit(id);
  };

  const handleDelete = async (id) => {
    console.log(id);
    console.log(userId);

    try {
      if (id === userId) {
        alert("No puedes borrar tu usuario");
      } else {
        await axios.delete(`http://localhost:8000/login/${id}`);
        alert("Usuario eliminado correctamente");
        // Si necesitas actualizar la lista de usuarios, propaga un cambio desde el componente principal
      }
    } catch (error) {
      console.error("Error al eliminar el usuario:", error);
    }
  };

  return (
    <div>
      <table
        className="table table-hover table-condensed table-bordered bootstrap-datatable dataTable table-dark"
        id="tablausuarios"
        aria-describedby="tablausuarios_info"
      >
        <thead>
          <tr role="row">
            <th>Usuario</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((usuario) => (
            <tr key={usuario.usersid}>
              <td>{usuario.nomUser}</td>
              <td>
                <button
                  className="btn btn-warning"
                  onClick={() => handleEditar(usuario.usersid)}
                >
                  Editar
                </button>
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(usuario.usersid)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
