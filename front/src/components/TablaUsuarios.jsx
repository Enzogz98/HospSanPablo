import { useEffect, useState, useContext } from "react";
import axios from "axios";

import { UserContext } from "../context/UserContext";

export const TablaUsuarios = ({ handleToggleEditar }) => {
  const [usuarios, setUsuarios] = useState([]);

  
  const { userId, getUserIdEdit } = useContext(UserContext);

  // Función para obtener la lista de usuarios
  const getUsuarios = () => {
    axios.get("http://localhost:8000/login").then((resp) => {
      setUsuarios(resp.data);
    });
  };

  useEffect(() => {
    getUsuarios();
  }, []);

  const handleEditar = async ( usersId ) => {

    getUserIdEdit( usersId )
    handleToggleEditar()
    alert(usersId)

    
  //   handleToggleEditar(id)
  //   try {
  //     await axios.patch('http://localhost:8000/editar'{
  //       user: username,
  //       pass: password,
  //     )}
  //     });
      
  //   } catch (error) {
  //     alert("error al editar usuario")
  //   }
  };

  // Función para manejar la eliminación de un usuario
  const handleDelete = async (id) => {
    console.log(id)
    console.log(userId)
    try {
      if (id == userId) {
        alert("No puedes borrar tu usuario");
      } else {
        // comentado para no borrar a cada rato el usuario
       // await axios.delete(`http://localhost:8000/login/${id}`);
        alert("Usuario eliminado correctamente");
        getUsuarios();  // Actualiza la lista de usuarios después de eliminar
      }
    } catch (error) {
      console.error("Error al eliminar el usuario:", error);
    }
  };


  // Log para verificar el userId en el localStorage
  console.log("ID del usuario logueado desde Local Storage: ", localStorage.getItem('userId'));

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
            <th>Nombre</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((usuario) => (
            <tr key={usuario.usersid}>
              <td>{usuario.nomUser}</td>
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
