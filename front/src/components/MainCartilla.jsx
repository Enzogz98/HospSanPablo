import { useState } from "react";
import "../Css/MainCartilla.css";

const profesionales = [
  {
    id: 1,
    especialidad: "ALERGIA",
    prestador: "STISMAN RODOLFO",
    clinica: "YERBA BUENA",
    horario: "Lun.Mar.Jue.Vie.16:30 a 20 Hs.",
  },
  {
    id: 2,
    especialidad: "SEGURIDAD",
    prestador: "GERMAN GARMENDIA",
    clinica: "SAN MIGUEL DE TUCUMAN",
    horario: "Lun.Mar.Jue.Vie.16:30 a 20 Hs.",
  },
  {
    id: 3,
    especialidad: "ENFERMERA",
    prestador: "ABDALA ALEJANDRA",
    clinica: "YERBA BUENA",
    horario: "Lun.Mar.Jue.Vie.16:30 a 20 Hs.",
  },
  {
    id: 4,
    especialidad: "ODONTÓLOGO",
    prestador: "ACKER KEGEL HENNI GRETTEL",
    clinica: "LULES",
    horario: "Jue.Vie.16:30 a 20 Hs.",
  },
];

export const MainCartilla = () => {
  const [prestadores, setPrestadores] = useState(profesionales);
  const [busqueda, setBusqueda] = useState("");
  const [ordenColumna, setOrdenColumna] = useState(null);
  const [ordenAscendente, setOrdenAscendente] = useState(true);

  const handleProfesionales = () => {
    const filteredPrestadores = profesionales.filter((profesional) =>
      profesional.especialidad.toLowerCase().includes(busqueda.toLowerCase())
    );

    if (filteredPrestadores.length > 0) {
      setPrestadores(filteredPrestadores);
    } else {
      alert("No hay prestador");
      setPrestadores(profesionales);
    }
  };

  const handleVolver = () => {
    setBusqueda("");
    setPrestadores(profesionales); // Restaurar la lista completa de profesionales
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
            <button className="btn btn-primary" onClick={handleProfesionales}>
              Buscar 🔎
            </button>
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
              </tr>
            </thead>

            <tbody role="alert" aria-live="polite" aria-relevant="all">
              {prestadores.map((prestador) => {
                return (
                  <tr className="odd" key={prestador.id}>
                    <td className="sorting_1">{prestador.especialidad}</td>
                    <td>{prestador.prestador}</td>
                    <td>{prestador.clinica}</td>
                    <td>{prestador.horario}</td>
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
