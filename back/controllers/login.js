
const db = require('../database/config.js');
const bcrypt = require('bcryptjs');

const registro = async (req, res) => {
    const { usuario, contraseña } = req.body;
    try {
        db.query('SELECT * FROM users WHERE nomUser = ?', [usuario], async (err, results) => {
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

const login = async (req, res) => {
    const { usuario, contraseña } = req.body;

    if (!usuario || !contraseña) {
        return res.status(400).send("Usuario y contraseña son requeridos");
    }

    try {
        db.query('SELECT * FROM users WHERE nomUser = ?', [usuario], async (err, results) => {
            if (err) {
                console.error('Error querying database:', err);
                return res.status(500).json({ message: 'Error del servidor', error: err });
            }
            if (results.length === 0) {
                return res.status(400).json({ message: 'Usuario no encontrado' });
            }

            const user = results[0];
            const isMatch = await bcrypt.compare(contraseña, user.pass);

            if (!isMatch) {
                return res.status(400).json({ message: 'Contraseña incorrecta' });
            }

            res.status(200).json({ message: 'Inicio de sesión exitoso' });
        });
    } catch (error) {
        console.error('Error al iniciar sesión:', error);
        res.status(500).json({ message: 'Error del servidor' });
    }
};

module.exports = { registro, login };
