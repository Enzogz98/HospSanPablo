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

  const getUsuarios = () => {
    axios
      .get("http://localhost:8000/login")
      .then((resp) => {
        setUsuarios(resp.data);
        setUsuariosFiltrados(resp.data); 
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
    getUsuarios();
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
            border: "2px solid #28a745",
            padding: "5px",
            borderRadius: "8px",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
            backgroundColor: "#333333",
            textAlign: "center",
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
          getUsuarios={getUsuarios} // Pasar getUsuarios como prop
        />
      )}
    </div>
  );
};

export default AdminUsuarios;
