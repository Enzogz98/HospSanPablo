import axios from 'axios';
import { useEffect, useState } from 'react';
import '../Css/Documento.css';

export const Documentos = () => {
    const [titulo, setTitulo] = useState('');
    const [file, setFile] = useState(null);
    const [documentos, setDocumentos] = useState([]);
    const [buscarDoc, setBuscarDoc] = useState('');
    const [fileName, setFileName] = useState('');

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
        setFileName(e.target.files[0].name);
    };

    const handleUpload = async () => {
        const formData = new FormData();
        formData.append('documento', file);
        formData.append('titulo', titulo);

        try {
            await axios.post('http://localhost:8000/documentos', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            fetchDocumentos();
            setTitulo('');
            setFile(null);
            setFileName('');
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

    // Filtrar los documentos según el término de búsqueda
    const filteredDocuments = documentos.filter(doc => 
        doc.titulo.toLowerCase().includes(buscarDoc.toLowerCase())
    );

    return (
        <div className='pt-3'>
            <div className='pb-3'>
                <h3 style={{ color: 'white' }}>Documentos</h3>
                <input 
                    type='text' 
                    placeholder='Buscar Documento' 
                    onChange={(e) => setBuscarDoc(e.target.value)}
                    value={buscarDoc}
                />
                <br/>
                <div className='body-file-upload'>
                    <input 
                        type='text' 
                        value={titulo} 
                        onChange={(e) => setTitulo(e.target.value)} 
                        placeholder='Título del Documento' 
                    />
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
                        <th>Eliminar</th>
                        <th>Ver</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredDocuments && filteredDocuments.map((documento) => (
                        <tr className="odd" key={documento.documentosid}>
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
