const db = require('../config.js');
const bcrypt = require('bcryptjs');

const mostrarProfesionales = (req, res) => {
    db.query("SELECT * FROM profesionales;", (err, result) => {
        if (err) {
            console.error('Error en la base de datos:', err);
            return res.status(500).json({ message: 'Error del servidor', error: err });
        } else {
            res.status(201).json(result);
        }
    });
}



const agregarProfesionales = (req, res) => {
    const prestador = req.body.prestador;
    const clinica = req.body.clinica;
    const especialidad = req.body.especialidad;
    const horarios = req.body.horarios;
    const dni = req.body.dni;


    const query = 'INSERT INTO profesionales (prestador, clinica, especialidad, horarios, dni) VALUES ( ?, ?, ?, ?, ? );';
    db.query(query, [prestador, clinica, especialidad, horarios, dni], (err, result) => {
        if (err) {
            console.error('Error al guardar profesional en la base de datos:', err);
            return res.status(500).json({ message: 'Error del servidor', error: err });
        }
        res.status(201).json({ message: 'Usuario registrado exitosamente' });
    });
}


const borrarProfesional = (req, res) => {

    const { id } = req.params

    db.query("DELETE FROM profesionales where idProfesionales = ?;", [ id ], (err, result) => {
            if (err) {
                console.error('No se pudo borrar el profesional:', err);
                return res.status(500).json({ message: 'Error del servidor', error: err });
            }else {
                res.status(201).json({ message: 'Profesional Eliminado exitosamente' });
            }
        });
}



module.exports = { agregarProfesionales, mostrarProfesionales, borrarProfesional };
