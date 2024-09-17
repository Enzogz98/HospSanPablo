import { useState, useEffect, useContext } from "react";
import "../Css/MainCartilla.css";
import axios from "axios";
import { UserContext } from "../context/UserContext";

export const MainCartilla = ({ pageProfesionales }) => {
  const [busqueda, setBusqueda] = useState("");
  const [ordenColumna, setOrdenColumna] = useState(null);
  const [ordenAscendente, setOrdenAscendente] = useState(true);
  const [profesionales, setProfesionales] = useState();
  const { userNombre } = useContext(UserContext);

  const mostrarProfesionales = () => {
    axios.get("http://localhost:8000/profesionales/").then((resp) => {
      setProfesionales(resp.data);
    });
  };

  useEffect(() => {
    mostrarProfesionales();
  }, []);

  // const handleProfesionales = () => {
  //   const filteredPrestadores = profesionales.filter((profesional) =>
  //     profesional.especialidad.toLowerCase().includes(busqueda.toLowerCase())
  //   );

  //   if (filteredPrestadores.length > 0) {
  //     setPrestadores(filteredPrestadores);
  //   } else {
  //     alert("No hay prestador");
  //     setPrestadores(profesionales);
  //   }
  // };

  const borrarProfesional = async (id) => {
    if (userNombre === "admin")
      try {
        await axios.delete(`http://localhost:8000/profesionales/borrarProfesional/${id}`);
        alert("Profesional eliminado correctamente");
        mostrarProfesionales()
      } catch (error) {
        console.error("Error al eliminar el profesional:", error);
      }
  };

  const handleVolver = () => {
    setBusqueda("");
    setPrestadores(profesionales);
  };

  const ordenarTabla = (columna) => {
    const nuevosPrestadores = [...prestadores];
    nuevosPrestadores.sort((a, b) => {
      const valorA = a[columna].toString().toLowerCase();
      const valorB = b[columna].toString().toLowerCase();
      return ordenAscendente
        ? valorA.localeCompare(valorB)
        : valorB.localeCompare(valorA);
    });

    setPrestadores(nuevosPrestadores);
    setOrdenColumna(columna);
    setOrdenAscendente(!ordenAscendente);
  };

  return (
    <div>
      <div className="MainCartilla">
        <div className="col-xl-10 m-auto">
          <div className="divBusqueda">
            <input
              type="text"
              placeholder="Buscar Por Especialidad"
              className="input-buscar"
              value={busqueda} // Mantener el valor de búsqueda actual
              onChange={(e) => setBusqueda(e.target.value)}
            />
            <button className="btn btn-primary">Buscar 🔎</button>
            {busqueda && (
              <button className="btn btn-primary" onClick={handleVolver}>
                Volver
              </button>
            )}
          </div>
          <table
            className=" table table-hover table-condensed table-bordered bootstrap-datatable dataTable table-dark"
            id="tablausuarios"
            aria-describedby="tablausuarios_info"
          >
            <thead>
              <tr role="row">
                <th
                  className="sorting_asc"
                  role="columnheader"
                  tabIndex="0"
                  aria-controls="tablausuarios"
                  rowSpan="1"
                  colSpan="1"
                  aria-sort="ascending"
                  aria-label="Especialidad: Activar para ordenar la columna de manera descendente"
                  onClick={() => ordenarTabla("especialidad")}
                >
                  Especialidad{" "}
                  {ordenColumna === "especialidad" && ordenAscendente
                    ? "▲"
                    : "▼"}
                </th>
                <th
                  className="sorting"
                  role="columnheader"
                  tabIndex="0"
                  aria-controls="tablausuarios"
                  rowSpan="1"
                  colSpan="1"
                  aria-label="Prestador: Activar para ordenar la columna de manera ascendente"
                  onClick={() => ordenarTabla("prestador")}
                >
                  Prestador{" "}
                  {ordenColumna === "prestador" && ordenAscendente ? "▲" : "▼"}
                </th>
                <th
                  className="sorting"
                  role="columnheader"
                  tabIndex="0"
                  aria-controls="tablausuarios"
                  rowSpan="1"
                  colSpan="1"
                  aria-label="clinica: Activar para ordenar la columna de manera ascendente"
                  onClick={() => ordenarTabla("clinica")}
                >
                  Clinica{" "}
                  {ordenColumna === "clinica" && ordenAscendente ? "▲" : "▼"}
                </th>
                <th
                  className="sorting"
                  role="columnheader"
                  tabIndex="0"
                  aria-controls="tablausuarios"
                  rowSpan="1"
                  colSpan="1"
                  aria-label="Horarios: Activar para ordenar la columna de manera ascendente"
                  onClick={() => ordenarTabla("horario")}
                >
                  Horarios{" "}
                  {ordenColumna === "horario" && ordenAscendente ? "▲" : "▼"}
                </th>
                {userNombre === "admin" ? (
                  <th
                    className="sorting"
                    role="columnheader"
                    tabIndex="0"
                    aria-controls="tablausuarios"
                    rowSpan="1"
                    colSpan="1"
                    aria-label="Horarios: Activar para ordenar la columna de manera ascendente"
                  >
                    EDITAR
                  </th>
                  
                ) : null}
                {userNombre === "admin" ? (
                  <th
                    className="sorting"
                    role="columnheader"
                    tabIndex="0"
                    aria-controls="tablausuarios"
                    rowSpan="1"
                    colSpan="1"
                    aria-label="Horarios: Activar para ordenar la columna de manera ascendente"
                  >
                    Eliminar
                  </th>
                  
                ) : null}
              </tr>
            </thead>

            <tbody role="alert" aria-live="polite" aria-relevant="all">
              {profesionales &&
                profesionales.map((profesional) => {
                  return (
                    <tr className="odd" key={profesional.idProfesionales}>
                      <td className="sorting_1">{profesional.especialidad}</td>
                      <td>{profesional.prestador}</td>
                      <td>{profesional.clinica}</td>
                      <td>{profesional.horarios}</td>
                      {userNombre === "admin" ? (
                        <td>
                          <button className="btn btn-warning">Editar</button>
                        </td>
                      ) : null}
                      {userNombre === "admin" ? (
                        <td>
                           <button
                        className="btn btn-danger"
                        onClick={() =>
                          borrarProfesional(profesional.idProfesionales)
                        }
                      >
                        Eliminar
                      </button>
                        </td>
                      ) : null}
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MainCartilla;
