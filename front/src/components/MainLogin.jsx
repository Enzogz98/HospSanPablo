import "../Css/MainLogin.css";
import React, { useState } from 'react';

const MainLogin = () => {
  const [usuario, setUsuario] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [error, setError] = useState(null);

  const handleUsuario = (event) => {
    setUsuario(event.target.value);
  };

  const handleContraseña = (event) => {
    setContraseña(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ usuario, contraseña })
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
      } else {
        throw new Error('Error en la solicitud');
      }
    } catch (error) {
      console.error('Error:', error);
      setError('Error al iniciar sesión');
    }
  };

  return (
    <div className="bodyLogin">
      <div className="Login">

        <form className="form1" onSubmit={handleSubmit}>

          <h1 className="titulo1">Area Operativa <br />San Pablo</h1>

          <div className="inp1">
            <input
              className="input1"
              type="text"
              placeholder="Ingresar usuario"
              value={usuario}
              onChange={handleUsuario}
            />
          </div>

          <div className="inp1">
            <input
              className="input1"
              type="password"
              placeholder="Ingresar contraseña"
              value={contraseña}
              onChange={handleContraseña}
            />
          </div>

          <button type="submit" className="submit1">Ingresar</button>
         {error && <p className="error">{error}</p>}
        </form>
        <div className="banner1">
          <h1 className="Bienvenido1">Bienvenido</h1>
        </div>
      </div>
    </div>
  );
};

export default MainLogin;
