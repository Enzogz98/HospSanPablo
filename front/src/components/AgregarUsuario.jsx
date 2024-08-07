import React from "react";
import { useForm } from "../hooks";
import "../Css/agregrarUsuario.css";

export const AgregarUsuario = ({ handleToggleUser }) => {
  const { valuesForm, onInputChange, onResetForm } = useForm({
    username: "",
    contraseña: "",
    nombre: "",
    apellido: "",
    dni: "",
    direccion: "",
    telefono: "",
    funcion: "",
    rol: "1",
  });

  const handleCancelar = () => {
    handleToggleUser();
    onResetForm();
  };

  const handleOnSubmit = (e) => {
    //Funcion para agregar
    //

    e.preventDefault();
    onResetForm();
    handleToggleUser();
  };

  

  return (
    <>
      <div className="body-agregar-usuario">
        <div>
          <h3>Datos del usuario</h3>
          <form action="" onSubmit={handleOnSubmit}>
            <div>
              <label htmlFor="">Usuario:</label>
              <input
                type="text"
                name="username"
                onChange={onInputChange}
                value={valuesForm.username}
              />
            </div>

            <div>
              {" "}
              <label htmlFor="">Contraseña:</label>
              <input
                type="text"
                name="contraseña"
                onChange={onInputChange}
                value={valuesForm.contraseña}
              />
            </div>

            <div>
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
            </select>

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
