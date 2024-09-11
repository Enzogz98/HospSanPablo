
const db = require('../config.js');
const bcrypt = require('bcryptjs');


const registro = async (req, res) => {
    const { user, pass } = req.body;

    if (!user || !pass) {
        return res.status(400).json({ message: 'Usuario y contraseña son requeridos' });
    }

    try {
        db.query('SELECT * FROM users WHERE nomUser = ?', [user], async (err, results) => {
            if (err) {
                console.error('Error querying database:', err);
                return res.status(500).json({ message: 'Error del servidor', error: err });
            }
            if (results.length > 0) {
                return res.status(400).json({ message: 'El usuario ya existe' });
            }

            const hashedPassword = await bcrypt.hash(pass, 5);

            db.query('INSERT INTO users (nomUser, pass) VALUES (?, ?)', [user, hashedPassword], (err, results) => {
                if (err) {
                    console.error('Error inserting into database:', err);
                    return res.status(500).json({ message: 'Error del servidor', error: err });
                }

                res.status(201).json({ message: 'Usuario registrado exitosamente' });
            });
        });
    } catch (error) {
        console.error('Error al registrar usuario:', error);
        res.status(500).json({ message: 'Error del servidor' });
    }
    };



const mostrarAgentes = (req, res) => {
    db.query("SELECT * FROM agentes;", (err, result) => {
            if (err) {
                console.error('Error querying database:', err);
                return res.status(500).json({ message: 'Error del servidor', error: err });
            }else {
                res.status(201).json(result);
            }
        });
}


const editarUsuario = async (req, res) => {
    const { usersid, nomUser, pass } = req.body;
    const hashedPassword = await bcrypt.hash(pass, 5);

    db.query("CALL sp_EditarUsers(?, ?, ?)", [usersid, nomUser, hashedPassword], (err, result) => {
        if (err) {
            console.error('Error querying database:', err);
            return res.status(500).json({ message: 'Error del servidor', error: err });
        } else {
            res.status(201).json({ message: 'Usuario editado exitosamente' });
        }
    });
};




const deleteAgente = (req, res) => {

    const { id } = req.params

    db.query("DELETE FROM users where userid = ?;", [ id ], (err, result) => {
            if (err) {
                console.error('Error querying database:', err);
                return res.status(500).json({ message: 'Error del servidor', error: err });
            }else {
                res.status(201).json({ message: 'Agente Eliminado exitosamente' });
            }
        });
}


module.exports = { registro,editarUsuario, deleteAgente, mostrarAgentes };
