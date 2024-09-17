import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useForm } from "../hooks";
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';

const Profecionales = () => {

  const navigate = useNavigate();

  const initialForm = { prestador: "", clinica: "", especialidad: "", horarios: "", dni: "" };

  const { valuesForm, onInputChange } = useForm(initialForm);
  const { prestador, clinica, especialidad, horarios, dni } = valuesForm;


  const [ profesionales, setProfesionales ] = useState();
  const [ toggleMostrarTabla, setToggleMostrarTabla ] = useState(true);

  const mostrarProfesionales = () => {
    axios.get("http://localhost:8000/profesionales/").then((resp) => {
       setProfesionales(resp.data)
    });
  };

  useEffect(() => {
    mostrarProfesionales();
  }, []);

  const agregarProfesionales = async () => {
    try {
      const existeProfesional = profesionales.some((profesional) => parseInt(profesional.dni) === parseInt(dni));
      
      if (existeProfesional) {
        alert("El profesional con este dni ya existe");
        return; 
      }
  
      const response = await axios.post(
        "http://localhost:8000/profesionales/agregarProfesionales",
        {
          prestador: prestador,
          clinica: clinica,
          especialidad: especialidad,
          horarios: horarios,
          dni: dni,
        }
      );

      Swal.fire({
        title: "Felicidades!",
        text: "Profesional agregado correctamente",
        icon: "success"
      });

      navigate('/CartillaMedica');
      
    } catch (error) {
      console.log("Error al agregar profesional", error);
    }
  };
  

  const onSubmit = (event) => {
    event.preventDefault()
    console.log(valuesForm)
  };

  return (
    <><div><h3
    style={{
      color: "white",
      border: "2px solid #28a745", 
      padding: "5px", 
      borderRadius: "8px", 
      textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)", 
      backgroundColor: "#333333",
      textAlign: "center", 
    }}
  >
    AGREGAR PROFESIONAL
  </h3></div>
    
    <div className="body-agregar-usuario">
      <div>
        <h3>Datos del profesional</h3>

 
            
            <div>

            <form onSubmit={ onSubmit }>
              <div>
                <label>Prestador:</label>
                <input type="text" name="prestador" onChange={onInputChange} value={prestador} />
              </div>
    
              <div>
                <label>Clinica:</label>
                <input type="text" name="clinica" onChange={onInputChange} value={clinica} />
              </div>
    
              <div>
                <label>Especialidad:</label>
                <input type="text" name="especialidad" onChange={onInputChange} value={especialidad} />
              </div>
    
              <div>
                <label>Horarios:</label>
                <input type="text" name="horarios" onChange={onInputChange} value={horarios} />
              </div>
    
              <div>
                <label>DNI:</label>
                <input type="number" name="dni" onChange={onInputChange} value={dni} placeholder="solo numeros" />
              </div>
    
              <br />
              <div className="body-botones-usuario">
          
                <button  style={{ display: 'block', margin: '0 auto' }} className="btn btn-success" type="submit" onClick={ agregarProfesionales }>
                  Agregar
                </button>
    
              </div>
    
            </form>
          </div>


      </div>
    </div></>
  );
};

export default Profecionales;
