import axios from "axios";
import { useEffect, useState } from "react";
import "../Css/Documento.css";
import Swal from "sweetalert2";

export const Documentos = () => {
  const [titulo, setTitulo] = useState("");
  const [file, setFile] = useState(null);
  const [documentos, setDocumentos] = useState([]);
  const [buscarDoc, setBuscarDoc] = useState("");
  const [fileName, setFileName] = useState("");
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  const fetchDocumentos = async () => {
    try {
      const response = await axios.get("http://localhost:8000/documentos");
      setDocumentos(response.data);
    } catch (error) {
      console.error("Error al obtener documentos:", error);
    }
  };

  useEffect(() => {
    fetchDocumentos();
  }, []);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setFileName(e.target.files[0].name);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("documento", file);
    formData.append("titulo", titulo);

    try {
      await axios.post("http://localhost:8000/documentos", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      Swal.fire({
        icon: "success",
        title: "Documento agregado correctamente",
      });
      fetchDocumentos();
      setTitulo("");
      setFile(null);
      setFileName("");
      setMostrarFormulario(false);
    } catch (error) {}
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/documentos/${id}`);
      Swal.fire({
        icon: "warning",
        title: "Atencion!",
        text: "Se acaba de eliminar un documento",
      });
      fetchDocumentos();
    } catch (error) {
      console.error("Error al eliminar documento:", error);
    }
  };

  const handleView = (filename) => {
    window.open(`http://localhost:8000/uploads/${filename}`, "_blank");
  };

  const filteredDocuments = documentos.filter((doc) =>
    doc.titulo.toLowerCase().includes(buscarDoc.toLowerCase())
  );

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
          DOCUMENTOS
        </h3>
        <input
          type="text"
          placeholder="Buscar Documento 🔎"
          onChange={(e) => setBuscarDoc(e.target.value)}
          value={buscarDoc}
        />
        <br />

        <button
          className="btn btn-info"
          onClick={() => setMostrarFormulario(!mostrarFormulario)}
        >
          {mostrarFormulario ? "Cancelar" : "Agregar un nuevo documento"}
        </button>

        {mostrarFormulario && (
          <div className="body-file-upload">
            <input
              type="text"
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
              placeholder="Título del Documento"
            />
            <div className="custom-file-upload">
              <input
                type="file"
                id="fileInput"
                onChange={handleFileChange}
                style={{ display: "none" }}
              />
              <label htmlFor="fileInput" className="btn btn-info">
                Seleccionar Archivo
              </label>
              <span>{fileName}</span>
            </div>

            <div className="botones-documentos">
              <button className="btn btn-success" onClick={handleUpload}>
                Agregar
              </button>
            </div>
          </div>
        )}
      </div>

      <table
        className="table table-hover table-condensed table-bordered bootstrap-datatable dataTable table-dark"
        id="Documentos"
        aria-describedby="Documentos_info"
      >
        <thead>
          <tr role="row">
            <td colSpan="6" style={{ textAlign: "center", fontWeight: "bold" }}>
              Todos Los Documentos
            </td>
          </tr>
        </thead>
        <tbody>
          {filteredDocuments.length > 0 ? (
            filteredDocuments.map((documento) => (
              <tr className="odd" key={documento.documentosid}>
                <td>{documento.titulo}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(documento.documentosid)}
                  >
                    Eliminar
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={() => handleView(documento.documento)}
                  >
                    Ver
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6">No se encontraron documentos</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Documentos;
