create database HospSanPablo;
use HospSanPablo;

/* ROLES */

CREATE TABLE roles (
    rol_id INT AUTO_INCREMENT PRIMARY KEY,
    nombre_rol VARCHAR(50) NOT NULL
);


-- Insertar roles iniciales
INSERT INTO roles (nombre_rol) VALUES ('Admin'); /*1*/
INSERT INTO roles (nombre_rol) VALUES ('Profesional'); /*2*/
INSERT INTO roles (nombre_rol) VALUES ('Agente'); /*3*/

CREATE TABLE admin (
    adminid INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    apellido VARCHAR(50) NOT NULL,
    dni VARCHAR(50) NOT NULL,
    direccion VARCHAR(50) NOT NULL,
    telefono VARCHAR(50) NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    password_salt VARCHAR(50) NOT NULL,
    rol_id INT,
    FOREIGN KEY (rol_id) REFERENCES roles(rol_id)
);

CREATE TABLE profesionales (
    profesionalesid INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    apellido VARCHAR(50) NOT NULL,
    dni VARCHAR(50) NOT NULL,
    direccion VARCHAR(50) NOT NULL,
    telefono VARCHAR(50) NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    password_salt VARCHAR(50) NOT NULL,
    rol_id INT,
    FOREIGN KEY (rol_id) REFERENCES roles(rol_id)
);

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
    FOREIGN KEY (rol_id) REFERENCES roles(rol_id)
);

select * from rol;


create table informacionGeneral(
	informacionGeneralid int AUTO_INCREMENT primary key,
    titulo varchar(200) not null,
    contenido text not null,
    imagen_URL varchar (3000) not null
);

create table formularios(
	formulariosid int AUTO_INCREMENT primary key,
    titulo varchar(200) not null,
    contenido text not null,
    imagen_URL varchar(3000) not null,
    archivo_ruta varchar(255) not null,
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

create table informes(
	informesid int AUTO_INCREMENT primary key,
    titulo varchar(200) not null,
    contenido text not null,
    imagen_URL varchar(3000) not null,
    archivo_ruta varchar(255) not null,
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);



------- INFORMACION_GENERAL ------

DELIMITER //

CREATE PROCEDURE sp_CargarInformacionGeneral(
    IN p_titulo VARCHAR(100),
    IN p_contenido TEXT,
    IN p_imagen_url VARCHAR(3000),
    IN p_archivo_ruta VARCHAR (255)
)
BEGIN
    INSERT INTO informacionGeneral (titulo, contenido, imagen_URL, archivo_ruta)
    VALUES (p_titulo, p_contenido, p_imagen_url, p_archivo_ruta);
END //

DELIMITER ;

DELIMITER //

CREATE PROCEDURE sp_EditarInformacionGeneral(
    IN p_informacionGeneral_id INT,
    IN p_titulo VARCHAR(100),
    IN p_contenido TEXT,
    IN p_imagen_url VARCHAR(3000),
    IN p_archivo_ruta VARCHAR (255)
)
BEGIN
    UPDATE informacionGeneral
    SET titulo = p_titulo, contenido = p_contenido, imagen_URL = p_imagen_url, archivo_ruta = p_archivo_ruta
    WHERE informacionGeneralid = p_informacionGeneral_id;
END //

DELIMITER ;


DELIMITER //

CREATE PROCEDURE sp_EliminarInformacionGeneral(
    IN p_informacionGeneral_id INT
)
BEGIN
    DELETE FROM informacionGeneral
    WHERE informacionGeneralid = p_informacionGeneral_id;
END //

DELIMITER ;

--------/* FORMULARIOS */

DELIMITER //

CREATE PROCEDURE sp_CargarFormularios(
    IN p_titulo VARCHAR(100),
    IN p_contenido TEXT,
    IN p_imagen_url VARCHAR(3000),
    IN p_archivo_ruta VARCHAR(255)
)
BEGIN
    INSERT INTO formularios (titulo, contenido, imagen_url, archivo_ruta)
    VALUES (p_titulo, p_contenido, p_imagen_url, p_archivo_ruta);
END //

DELIMITER ;

DELIMITER //

CREATE PROCEDURE sp_EditarFormularios(
    IN p_formularios_id INT,
    IN p_titulo VARCHAR(100),
    IN p_contenido TEXT,
    IN p_imagen_url VARCHAR(3000),
    IN p_archivo_ruta VARCHAR(255)
)
BEGIN
    UPDATE formularios
    SET titulo = p_titulo, contenido = p_contenido, imagen_url = p_imagen_url, archivo_ruta = p_archivo_ruta
    WHERE formulariosid = p_formularios_id;
END //

DELIMITER ;

DELIMITER //

CREATE PROCEDURE sp_EliminarFormularios(
    IN p_formularios_id INT
)
BEGIN
    DELETE FROM formularios
    WHERE formulariosid = p_formularios_id;
END //

DELIMITER ;



DELIMITER //

CREATE PROCEDURE sp_CargarInformes(
    IN p_titulo VARCHAR(100),
    IN p_contenido TEXT,
    IN p_imagen_url VARCHAR(255),
    IN p_archivo_ruta VARCHAR(255)
)
BEGIN
    INSERT INTO informes (titulo, contenido, imagen_url, archivo_ruta)
    VALUES (p_titulo, p_contenido, p_imagen_url, p_archivo_ruta);
END //

DELIMITER ;

DELIMITER //

CREATE PROCEDURE sp_EditarInformes(
    IN p_informes_id INT,
    IN p_titulo VARCHAR(100),
    IN p_contenido TEXT,
    IN p_imagen_url VARCHAR(255),
    IN p_archivo_ruta VARCHAR(255)
)
BEGIN
    UPDATE informes
    SET titulo = p_titulo, contenido = p_contenido, imagen_url = p_imagen_url, archivo_ruta = p_archivo_ruta
    WHERE informesid = p_informes_id;
END //

DELIMITER ;

DELIMITER //

CREATE PROCEDURE sp_EliminarInformes(
    IN p_informes_id INT
)
BEGIN
    DELETE FROM informes
    WHERE informesid = p_informes_id;
END //

DELIMITER ;


-- Procedimientos almacenados para admin

DELIMITER //

CREATE PROCEDURE sp_CargarAdmin(
    IN p_nombre VARCHAR(50),
    IN p_apellido VARCHAR(50),
    IN p_dni VARCHAR(50),
    IN p_direccion VARCHAR(50),
    IN p_telefono VARCHAR(50),
    IN p_password_hash VARCHAR(255),
    IN p_password_salt VARCHAR(50),
    IN p_rol_id INT
)
BEGIN
    INSERT INTO admin (nombre, apellido, dni, direccion, telefono, password_hash, password_salt, rol_id)
    VALUES (p_nombre, p_apellido, p_dni, p_direccion, p_telefono, p_password_hash, p_password_salt, p_rol_id);
END //

DELIMITER ;

DELIMITER //

CREATE PROCEDURE sp_EditarAdmin(
    IN p_adminid INT,
    IN p_nombre VARCHAR(50),
    IN p_apellido VARCHAR(50),
    IN p_dni VARCHAR(50),
    IN p_direccion VARCHAR(50),
    IN p_telefono VARCHAR(50),
    IN p_password_hash VARCHAR(255),
    IN p_password_salt VARCHAR(50),
    IN p_rol_id INT
)
BEGIN
    UPDATE admin
    SET nombre = p_nombre,
        apellido = p_apellido,
        dni = p_dni,
        direccion = p_direccion,
        telefono = p_telefono,
        password_hash = p_password_hash,
        password_salt = p_password_salt,
        rol_id = p_rol_id
    WHERE adminid = p_adminid;
END //

DELIMITER ;

DELIMITER //

CREATE PROCEDURE sp_EliminarAdmin(
    IN p_adminid INT
)
BEGIN
    DELETE FROM admin
    WHERE adminid = p_adminid;
END //

DELIMITER ;


-- Procedimientos almacenados para profesionales

DELIMITER //

CREATE PROCEDURE sp_CargarProfesionales(
    IN p_nombre VARCHAR(50),
    IN p_apellido VARCHAR(50),
    IN p_dni VARCHAR(50),
    IN p_direccion VARCHAR(50),
    IN p_telefono VARCHAR(50),
    IN p_password_hash VARCHAR(255),
    IN p_password_salt VARCHAR(50),
    IN p_rol_id INT
)
BEGIN
    INSERT INTO profesionales (nombre, apellido, dni, direccion, telefono, password_hash, password_salt, rol_id)
    VALUES (p_nombre, p_apellido, p_dni, p_direccion, p_telefono, p_password_hash, p_password_salt, p_rol_id);
END //

DELIMITER ;

DELIMITER //

CREATE PROCEDURE sp_EditarProfesionales(
    IN p_profesionalesid INT,
    IN p_nombre VARCHAR(50),
    IN p_apellido VARCHAR(50),
    IN p_dni VARCHAR(50),
    IN p_direccion VARCHAR(50),
    IN p_telefono VARCHAR(50),
    IN p_password_hash VARCHAR(255),
    IN p_password_salt VARCHAR(50),
    IN p_rol_id INT
)
BEGIN
    UPDATE profesionales
    SET nombre = p_nombre,
        apellido = p_apellido,
        dni = p_dni,
        direccion = p_direccion,
        telefono = p_telefono,
        password_hash = p_password_hash,
        password_salt = p_password_salt,
        rol_id = p_rol_id
    WHERE profesionalesid = p_profesionalesid;
END //

DELIMITER ;

DELIMITER //

CREATE PROCEDURE sp_EliminarProfesionales(
    IN p_profesionalesid INT
)
BEGIN
    DELETE FROM profesionales
    WHERE profesionalesid = p_profesionalesid;
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
    IN p_rol_id INT
)
BEGIN
    INSERT INTO agentes (nombre, apellido, dni, direccion, telefono, password_hash, password_salt, rol_id)
    VALUES (p_nombre, p_apellido, p_dni, p_direccion, p_telefono, p_password_hash, p_password_salt, p_rol_id);
END //

DELIMITER ;

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
    IN p_rol_id INT
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
        rol_id = p_rol_id
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


 



 
 
 