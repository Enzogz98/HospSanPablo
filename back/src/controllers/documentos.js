const db = require('../config');
const path = require('path');
const fs = require('fs');

const getDocumentos = (req, res) => {
    const query = 'SELECT * FROM documentos';
    db.query(query, (err, results) => {
        if (err) {
            console.error('Error al obtener documentos:', err);
            res.status(500).send('Error al obtener documentos');
        } else {
            res.status(200).json(results);
        }
    });
};

const uploadDocumento = (req, res) => {
    const documento = req.files.documento;
    const uploadPath = path.join(__dirname, '../uploads', documento.name);

    documento.mv(uploadPath, (err) => {
        if (err) {
            console.error('Error al subir documento:', err);
            return res.status(500).send(err);
        }

        const query = 'INSERT INTO documentos (documento) VALUES (?)';
        db.query(query, [documento.name], (err, result) => {
            if (err) {
                console.error('Error al guardar documento en la base de datos:', err);
                return res.status(500).send(err);
            }
            res.status(200).send('Documento subido correctamente');
        });
    });
};

const deleteDocumento = (req, res) => {
    const { id } = req.params;

    
    const getQuery = 'SELECT documento FROM documentos WHERE documentosid = ?';
    db.query(getQuery, [id], (err, results) => {
        if (err) {
            console.error('Error al obtener documento:', err);
            return res.status(500).send(err);
        }

        if (results.length === 0) {
            return res.status(404).send('Documento no encontrado');
        }

        const documentoNombre = results[0].documento;
        const filePath = path.join(__dirname, '../uploads', documentoNombre);

        


        const deleteQuery = 'DELETE FROM documentos WHERE documentosid = ?';
        db.query(deleteQuery, [id], (err, result) => {
            if (err) {
                console.error('Error al eliminar documento:', err);
                return res.status(500).send(err);
            }

            

            
            fs.unlink(filePath, (err) => {
                if (err) {
                    console.error('Error al eliminar archivo:', err);
                    return res.status(500).send(err);
                }

                res.status(200).send('Documento eliminado correctamente');
            });
        });
    });
};

module.exports = {
    getDocumentos,
    uploadDocumento,
    deleteDocumento,
};