DROP DATABASE HospSanPablo;


CREATE DATABASE HospSanPablo;
USE HospSanPablo;

-- Crear la tabla users primero
CREATE TABLE users (
    usersid INT PRIMARY KEY AUTO_INCREMENT,
    nomUser VARCHAR(50),
    pass VARCHAR(200)
);

-- Crear la tabla roles con la clave foránea después
CREATE TABLE roles (
    rol_id INT AUTO_INCREMENT PRIMARY KEY,
    nombre_rol VARCHAR(50) NOT NULL,
    usersid INT,  -- Agregar la columna usersid
    FOREIGN KEY (usersid) REFERENCES users(usersid)  -- Establecer la clave foránea
);

-- Insertar roles iniciales
INSERT INTO roles (nombre_rol, usersid) VALUES ('Admin', NULL); /*1*/
INSERT INTO roles (nombre_rol, usersid) VALUES ('Agentes', NULL); /*2*/

-- Crear la tabla agentes
CREATE TABLE agentes (
    agentesid INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    apellido VARCHAR(50) NOT NULL,
    dni VARCHAR(50) NOT NULL,
    direccion VARCHAR(50) NOT NULL,
    telefono VARCHAR(50) NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    password_salt VARCHAR(50) NOT NULL,
    rol_id INT,
    usersid INT,
    funcion VARCHAR(50) NOT NULL,
    FOREIGN KEY (rol_id) REFERENCES roles(rol_id),
    FOREIGN KEY (usersid) REFERENCES users(usersid)
);


-- Crear la tabla documentos
CREATE TABLE documentos (
    documentosid INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(200) NOT NULL,
    documento VARCHAR (200) NOT NULL
);

-- Procedimientos almacenados para documentos

DELIMITER //

CREATE PROCEDURE sp_CargarDocumentos(
    IN p_documento VARCHAR(255)
)
BEGIN
    INSERT INTO documentos ( documento)
    VALUES ( p_documento);
END //

DELIMITER ;

DELIMITER //

CREATE PROCEDURE sp_EditarDocumentos(
    IN p_documentosid INT,
    IN p_documento VARCHAR(255)
)
BEGIN
    UPDATE documentos
    SET   documento = p_documento
    WHERE documentosid = p_documentosid;
END //

DELIMITER ;

DELIMITER //

CREATE PROCEDURE sp_EliminarDocumentos(
    IN p_documentosid INT
)
BEGIN
    DELETE FROM documentos
    WHERE documentosid = p_documentosid;
END //

DELIMITER ;

DELIMITER //

CREATE PROCEDURE sp_ListarDocumentos()
BEGIN
    SELECT * FROM documentos;
END //

DELIMITER ;

DELIMITER //

CREATE PROCEDURE sp_ObtenerDocumentoPorID(
    IN p_documentosid INT
)
BEGIN
    SELECT * FROM documentos
    WHERE documentosid = p_documentosid;
END //

DELIMITER ;


-- Procedimientos almacenados para agentes

DELIMITER //

CREATE PROCEDURE sp_CargarAgentes(
    IN p_nombre VARCHAR(50),
    IN p_apellido VARCHAR(50),
    IN p_dni VARCHAR(50),
    IN p_direccion VARCHAR(50),
    IN p_telefono VARCHAR(50),
    IN p_password_hash VARCHAR(255),
    IN p_password_salt VARCHAR(50),
    IN p_rol_id INT,
    IN p_funcion VARCHAR(50)
)
BEGIN
    INSERT INTO agentes (nombre, apellido, dni, direccion, telefono, password_hash, password_salt, rol_id, funcion)
    VALUES (p_nombre, p_apellido, p_dni, p_direccion, p_telefono, p_password_hash, p_password_salt, p_rol_id, p_funcion);
END //

DELIMITER ;

call sp_CargarAgentes("franco", "cornejo", "1231231232", "centro", "123123", "hcura", "asdasd", "1", "LaMaquina")

DELIMITER //

CREATE PROCEDURE sp_EditarAgentes(
    IN p_agentesid INT,
    IN p_nombre VARCHAR(50),
    IN p_apellido VARCHAR(50),
    IN p_dni VARCHAR(50),
    IN p_direccion VARCHAR(50),
    IN p_telefono VARCHAR(50),
    IN p_password_hash VARCHAR(255),
    IN p_password_salt VARCHAR(50),
    IN p_rol_id INT,
    IN p_funcion VARCHAR(50)
)
BEGIN
    UPDATE agentes
    SET nombre = p_nombre,
        apellido = p_apellido,
        dni = p_dni,
        direccion = p_direccion,
        telefono = p_telefono,
        password_hash = p_password_hash,
        password_salt = p_password_salt,
        rol_id = p_rol_id,
        funcion = p_funcion
    WHERE agentesid = p_agentesid;
END //

DELIMITER ;

DELIMITER //

CREATE PROCEDURE sp_EliminarAgentes(
    IN p_agentesid INT
)
BEGIN
    DELETE FROM agentes
    WHERE agentesid = p_agentesid;
END //

DELIMITER ;



DELIMITER //

CREATE PROCEDURE sp_validarAgente(
IN p_dni VARCHAR(50),
IN p_nomUser VARCHAR(50)
)
BEGIN

SELECT 'user' AS type, u.usersid AS id, u.nomUser AS value
FROM users u
WHERE u.nomUser = p_nomUser
UNION
SELECT 'agente' AS type, a.agentesid AS id, a.dni AS value
FROM agentes a
WHERE a.dni = p_dni;

END //

DROP PROCEDURE IF EXISTS sp_EditarUsers;

DELIMITER ;


DELIMITER //

CREATE PROCEDURE sp_EditarUsers(
    IN p_usersid INT,
    IN p_nomUser VARCHAR(50),
    IN p_pass VARCHAR(200)
)
BEGIN
    UPDATE users
    SET nomUser = p_nomUser, 
        pass = p_pass
    WHERE usersid = p_usersid;
END //

DELIMITER ;

CREATE TABLE profesionales (
    idProfesionales INT PRIMARY KEY AUTO_INCREMENT,
    prestador VARCHAR(50),
    clinica VARCHAR(50),
    especialidad VARCHAR(50),
    horarios VARCHAR(200),
    dni INT NOT NULL);

INSERT INTO profesionales (prestador, clinica, especialidad, horarios, dni) VALUES ("Franco", "Hospital San Pablo", "Recepcionista", "Una vez a la semana", 42008014 );
    
SELECT * FROM hospsanpablo.profesionales;