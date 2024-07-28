import { Link, useNavigate } from "react-router-dom";
import "../Css/MainLogin.css";
import { useState } from 'react';
import axios from "axios";

const MainRegistro = () => {
    let navigate = useNavigate();
    const [usuario, setUsuario] = useState("");
    const [contraseña, setContraseña] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevenir el comportamiento predeterminado del formulario
        try {
            await axios.post("http://localhost:8000/login/registrar", {
                usuario: usuario,
                contraseña: contraseña
            });
            alert("Registrado.");
            navigate("/", { replace: true });
        } catch (error) {
            console.error("Error al registrar usuario:", error);
            alert("Error al registrar usuario.");
        }
    };

    return (
        <div className="bodyLogin">
            <div className="Login" data-aos="flip-left">
                <form className="form1" onSubmit={handleSubmit}>
                    <h1 className="titulo1">Area Operativa <br />San Pablo</h1>
                    <div className="inp1">
                        <input
                            className="input1"
                            type="text"
                            placeholder="Ingresar usuario"
                            onChange={(e) => setUsuario(e.target.value)}
                        />
                    </div>
                    <div className="inp1">
                        <input
                            className="input1"
                            type="password"
                            placeholder="Ingresar contraseña"
                            onChange={(e) => setContraseña(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="submit1">Registro</button>
                    <Link to="/" className="btnVolver">
                        <button type="button" className="submit1">Volver a inicio</button>
                    </Link>
                </form>
                <div className="banner1">
                    <h1 className="Bienvenido1">Bienvenido</h1>
                </div>
            </div>
        </div>
    );
};

export default MainRegistro;
