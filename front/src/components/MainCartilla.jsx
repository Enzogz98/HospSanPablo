import { useState, useEffect, useContext } from "react";
import "../Css/MainCartilla.css";
import axios from "axios";
import { UserContext } from "../context/UserContext";

export const MainCartilla = ({ pageProfesionales }) => {
  const [busqueda, setBusqueda] = useState("");
  const [ordenColumna, setOrdenColumna] = useState(null);
  const [ordenAscendente, setOrdenAscendente] = useState(true);
  const [profesionales, setProfesionales] = useState([]);
  const [profesionalesFiltrados, setProfesionalesFiltrados] = useState([]);
  const { userNombre } = useContext(UserContext);



  const mostrarProfesionales = () => {
    
    axios.get("http://localhost:8000/profesionales/").then((resp) => {
      setProfesionales(resp.data);
      setProfesionalesFiltrados(resp.data); 
    });
  };

  useEffect(() => {
    mostrarProfesionales();
  }, []);

  const borrarProfesional = async (id) => {
    if (userNombre === "admin")
      try {
        await axios.delete(`http://localhost:8000/profesionales/borrarProfesional/${id}`);
        alert("Profesional eliminado correctamente");
        mostrarProfesionales();
      } catch (error) {
        console.error("Error al eliminar el profesional:", error);
      }
  };

  const handleBusqueda = (e) => {
    const textoBusqueda = e.target.value.toLowerCase();
    setBusqueda(textoBusqueda);

    const resultadosFiltrados = profesionales.filter((profesional) =>
      profesional.especialidad.toLowerCase().includes(textoBusqueda)
    );

    setProfesionalesFiltrados(resultadosFiltrados);
  };

  const ordenarTabla = (columna) => {
    const nuevosPrestadores = [...profesionalesFiltrados];
    nuevosPrestadores.sort((a, b) => {
      const valorA = a[columna].toString().toLowerCase();
      const valorB = b[columna].toString().toLowerCase();
      return ordenAscendente
        ? valorA.localeCompare(valorB)
        : valorB.localeCompare(valorA);
    });

    setProfesionalesFiltrados(nuevosPrestadores);
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
              placeholder="Buscar Especialidad 🔎"
              className="input-buscar"
              value={busqueda}
              onChange={handleBusqueda} 
            />
            
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
                    aria-label="Editar"
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
                    aria-label="Eliminar"
                  >
                    Eliminar
                  </th>
                ) : null}
              </tr>
            </thead>

            <tbody role="alert" aria-live="polite" aria-relevant="all">
              {profesionalesFiltrados.length > 0 ? (
                profesionalesFiltrados.map((profesional) => {
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
                })
              ) : (
                <tr>
                  <td colSpan="6">No se encontraron profesionales</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MainCartilla;
