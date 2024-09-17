import { useEffect, useState } from "react";
import { AgregarUsuario } from "./AgregarUsuario";
import { TablaUsuarios } from "./TablaUsuarios";
import { EditarAgente } from "./EditarAgente";
import axios from "axios";

export const AdminUsuarios = () => {
  const [toggleUser, setToggleUser] = useState(false);
  const [toggleEditar, setToggleEditar] = useState(false);

  const [usuarios, setUsuarios] = useState([]);
  const [filtro, setFiltro] = useState("");
  const [usuariosFiltrados, setUsuariosFiltrados] = useState([]);

  // Obtener la lista de usuarios desde el backend
  const getUsuarios = () => {
    axios
      .get("http://localhost:8000/login")
      .then((resp) => {
        setUsuarios(resp.data);
        setUsuariosFiltrados(resp.data); // Inicialmente, todos los usuarios
      })
      .catch((error) => console.error("Error al obtener usuarios", error));
  };

  useEffect(() => {
    getUsuarios();
  }, []);

  useEffect(() => {
    const resultado = usuarios.filter((usuario) =>
      usuario.nomUser.toLowerCase().includes(filtro.toLowerCase())
    );
    setUsuariosFiltrados(resultado);
  }, [filtro, usuarios]);

  const handleToggleUser = () => {
    setToggleUser(false);
  };

  const handleToggleEditar = () => {
    setToggleUser(true);
    setToggleEditar(false);
  };

  return (
    <div className="pt-3">
      <div className="pb-3">
        <h3
          style={{
            color: "white",
            border: "2px solid #28a745", // Un borde verde oscuro
            padding: "5px", // Espaciado interno
            borderRadius: "8px", // Bordes redondeados
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)", // Sombra en el texto
            backgroundColor: "#333333",
            textAlign: "center", // Mantener el tamaño ajustado al contenido
          }}
        >
          USUARIOS
        </h3>
        <input
          type="text"
          placeholder="Buscar Usuarios 🔎"
          value={filtro}
          onChange={(e) => setFiltro(e.target.value)}
        />
      </div>

      <button
        className="btn btn-success"
        onClick={() => {
          setToggleUser(true);
          setToggleEditar(true);
        }}
      >
        Agregar Usuario
      </button>

      {toggleUser ? (
        <div className="pb-3">
          {toggleEditar ? (
            <AgregarUsuario handleToggleUser={handleToggleUser} />
          ) : (
            <EditarAgente
              handleToggleEditar={handleToggleEditar}
              handleToggleUser={handleToggleUser}
            />
          )}
        </div>
      ) : (
        <TablaUsuarios
          usuarios={usuariosFiltrados}
          handleToggleEditar={handleToggleEditar}
        />
      )}
    </div>
  );
};

export default AdminUsuarios;
