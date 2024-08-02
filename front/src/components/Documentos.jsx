import axios from 'axios';
import { useEffect, useState } from 'react';
import '../Css/Documento.css'

export const Documentos = () => {
    const [titulo, setTitulo] = useState('');
    const [file, setFile] = useState(null);
    const [documentos, setDocumentos] = useState([]);
    const [fileName, setFileName] = useState('');  // Estado para el nombre del archivo

    const fetchDocumentos = async () => {
        try {
            const response = await axios.get('http://localhost:8000/documentos');
            setDocumentos(response.data);
        } catch (error) {
            console.error('Error al obtener documentos:', error);
        }
    };

    useEffect(() => {
        fetchDocumentos();
    }, []);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
        setFileName(e.target.files[0].name);  // Actualiza el nombre del archivo
    };

    const handleUpload = async () => {
        const formData = new FormData();
        formData.append('titulo', titulo);
        formData.append('documento', file);

        try {
            await axios.post('http://localhost:8000/documentos', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            fetchDocumentos();
            setTitulo('');  // Clear the title field after upload
            setFile(null);  // Clear the file field after upload
            setFileName('');  // Clear the file name after upload
        } catch (error) {
            console.error('Error al subir documento:', error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:8000/documentos/${id}`);
            fetchDocumentos();
        } catch (error) {
            console.error('Error al eliminar documento:', error);
        }
    };

    const handleView = (filename) => {
        window.open(`http://localhost:8000/uploads/${filename}`, '_blank');
    };

    return (
        <div className='pt-3'>
            <div className='pb-3'>
                <h3 style={{ color: 'white' }}>Documentos</h3>
                <input type='text' placeholder='Buscar Documento' />
                <button className='btn btn-primary' >Buscar</button>
                <br/>
                <div className='body-file-upload'>
                <input type='text' value={titulo} onChange={(e) => setTitulo(e.target.value)} placeholder='Título del Documento' />
                <div className="custom-file-upload">
                    <input type='file' id="fileInput" onChange={handleFileChange} style={{ display: 'none' }} />
                    <label htmlFor="fileInput" className="btn btn-info">Seleccionar Archivo</label>
                    <span>{fileName}</span>
                </div>
                <button className='btn btn-success' onClick={handleUpload}>Agregar</button>
                </div>
            </div>

            <table className="table table-hover table-condensed table-bordered bootstrap-datatable dataTable table-dark" 
            id="Documentos"
            aria-describedby='Documentos_info'>
                <thead>
                    <tr role="row">
                        <th>Documentos</th>
                        <th>Título</th>
                        <th>Eliminar</th>
                        <th>Ver</th>
                    </tr>
                </thead>
                <tbody>
                    {documentos && documentos.map((documento) => (
                        <tr className="odd" key={documento.documentosid}>
                            <td>{documento.documento}</td>
                            <td>{documento.titulo}</td>
                            <td>
                                <button className="btn btn-danger" onClick={() => handleDelete(documento.documentosid)}>Eliminar</button>
                            </td>
                            <td>
                                <button className="btn btn-primary" onClick={() => handleView(documento.documento)}>Ver</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Documentos;
