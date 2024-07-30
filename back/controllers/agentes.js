
const db = require('../config.js');
const bcrypt = require('bcryptjs');


const registro = async (req, res) => {
    const { usuario, contraseña, dni, } = req.body;
    try {
        db.query('call sp_validarAgente(?,?) ', [usuario, dni], async (err, results) => {
            if (err) {
                console.error('Error querying database:', err);
                return res.status(500).json({ message: 'Error del servidor', error: err });
            }
            if (results.length > 0) {
                return res.status(400).json({ message: 'El usuario ya existe' });
            }

            const hashedPassword = await bcrypt.hash(contraseña, 5);

            db.query('INSERT INTO users (nomUser, pass) VALUES (?, ?)', [usuario, hashedPassword], (err, results) => {
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


module.exports = { registro };
