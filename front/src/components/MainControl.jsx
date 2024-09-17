import { Button } from "react-bootstrap";
import AdminUsuarios from "./AdminUsuarios";
import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import Documentos from "./Documentos";
import Profecionales from "./Profecionales";
import '../Css/PanelControl.css';

export const MainControl = () => {
  const [activeComponent, setActiveComponent] = useState("usuarios"); // Estado para controlar el componente a mostrar
  const { userNombre } = useContext(UserContext);

  return (
    <div className="">
      <h1 className="Titulo-Profesional">Bienvenido <span>{userNombre}</span></h1>
      
      <h3 className="panel-control">Panel de control</h3>
      
      <div className="container row">
        <div className="col-xl-4 pt-3">
          <div className="col">
            <Button
              className={activeComponent === "usuarios" ? "btn-active" : ""}
              onClick={() => setActiveComponent("usuarios")}
            >
              Usuarios
            </Button>
          </div>
          <div className="col">
            <Button
              className={activeComponent === "documentos" ? "btn-active" : ""}
              onClick={() => setActiveComponent("documentos")}
            >
              Documentos
            </Button>
          </div>
          <div className="col">
            <Button
              className={activeComponent === "profesionales" ? "btn-active" : ""}
              onClick={() => setActiveComponent("profesionales")}
            >
              Agregar Profesional
            </Button>
          </div>
        </div>

        <div className="col">
          {/* Ternario para mostrar el componente dependiendo del estado */}
          {activeComponent === "usuarios" && <AdminUsuarios />}
          {activeComponent === "documentos" && <Documentos />}
          {activeComponent === "profesionales" && <Profecionales />}
        </div>
      </div>
    </div>
  );
};
