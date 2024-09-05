
const db = require('../config.js');
const bcrypt = require('bcryptjs');

const registrar = async (req, res) => {
    const { user, pass } = req.body;
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

const mostrarUsuarios = (req, res) => {
    db.query("SELECT * FROM users;", (err, result) => {
            if (err) {
                console.error('Error querying database:', err);
                return res.status(500).json({ message: 'Error del servidor', error: err });
            }else {
                res.status(201).json(result);
            }
        });
}

const mostrarUsuario = (req, res) => {

    const { id } = req.params

    db.query("SELECT * FROM users where usersid = ?;", [ id ], (err, result) => {
            if (err) {
                console.error('Error querying database:', err);
                return res.status(500).json({ message: 'Error del servidor', error: err });
            }else {
                res.status(201).json(result);
            }
        });
}

const deleteUsuario = (req, res) => {

    const { id } = req.params

    db.query("DELETE FROM users where usersid = ?;", [ id ], (err, result) => {
            if (err) {
                console.error('Error querying database:', err);
                return res.status(500).json({ message: 'Error del servidor', error: err });
            }else {
                res.status(201).json({ message: 'Usuario Eliminado exitosamente' });
            }
        });
}


const mostrarUsuarioNombre = (req, res) => {
  
    const { nombre } = req.params;
  
    db.query(`SELECT * FROM users WHERE nomUser = "${nombre}";`, (err, result) => {
     if (err) {
        
            return res.status(400).json({ message: 'El usuario no existe' });
        
     } else {
        res.status(201).json(result);
     }
   });
  }



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

            // Aquí se incluye el ID del usuario en la respuesta
            res.status(200).json({ 
                message: 'Inicio de sesión exitoso',
                userId: user.usersid,  // Asegúrate de que 'id' es el nombre del campo en tu base de datos
            });
        });
    } catch (error) {
        console.error('Error al iniciar sesión:', error);
        res.status(500).json({ message: 'Error del servidor' });
    }
};


module.exports = { registrar, login, mostrarUsuarios, mostrarUsuario, deleteUsuario, mostrarUsuarioNombre };
