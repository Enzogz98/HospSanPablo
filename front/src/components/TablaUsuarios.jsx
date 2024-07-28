import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Users = [
    {
      id: 1,
      usuario: "matias",
      nombre: "Matias",
      apellido: "Bordenave",
      documento: "38116188",
    },
    {
      id: 2,
      usuario: "fack",
      nombre: "Lajoaqi",
      apellido: "Gil",
      documento: "123123123",
    },
    {
      id: 3,
      usuario: "AgusYarotor",
      nombre: "Agustin",
      apellido: "Tapier",
      documento: "123456789",
    },
    {
      id: 4,
      usuario: "Calzonman",
      nombre: "gonzalo",
      apellido: "Galvan",
      documento: "123123123",
    },
  ];

const TablaUsuarios = () => {

    const [usuarios, setUsuarios] = useState();

    
    useEffect(() => {
        
            axios.get("http://localhost:8000/login")
            .then((resp) => {
                setUsuarios(resp.data)
                console.log(resp.data)
            })
        
      
    }, [])
    

  return (
    <div className='pt-3'>
        <div className='pb-3'>
        <h3 style={{color:"white"}}>Usuarios</h3>

        <input type="text" placeholder='buscar usuario'/> 
        <button>Buscar</button>
        <button>Agregar</button>
        </div>

        <table
              className=" table table-hover table-condensed table-bordered bootstrap-datatable dataTable"
              id="tablausuarios"
              aria-describedby="tablausuarios_info"
              >
              <thead>
                <tr role="row">
                  <th
                    className="sorting_asc"
                    role="columnheader"
                    tabIndex="0"
                    aria-controls="tablausuarios"
                    rowSpan="1"
                    colSpan="1"
                    aria-sort="ascending"
                    aria-label="Especialidad: Activar para ordenar la columna de manera descendente"
                    
                  >
                    Usuario{" "}
                   
                  </th>
                  <th
                    className="sorting"
                    role="columnheader"
                    tabIndex="0"
                    aria-controls="tablausuarios"
                    rowSpan="1"
                    colSpan="1"
                    aria-label="Prestador: Activar para ordenar la columna de manera ascendente"
                    
                    >
                    Nombre{" "}
                   
                  </th>
                  <th
                    className="sorting"
                    role="columnheader"
                    tabIndex="0"
                    aria-controls="tablausuarios"
                    rowSpan="1"
                    colSpan="1"
                    aria-label="clinica: Activar para ordenar la columna de manera ascendente"
                    
                    >
                    Apellido{" "}
                    
                  </th>
                  <th
                    className="sorting"
                    role="columnheader"
                    tabIndex="0"
                    aria-controls="tablausuarios"
                    rowSpan="1"
                    colSpan="1"
                    aria-label="Horarios: Activar para ordenar la columna de manera ascendente"
                   
                  >
                    Documento{" "}
                   
                  </th>
                  <th
                    className="sorting"
                    role="columnheader"
                    tabIndex="0"
                    aria-controls="tablausuarios"
                    rowSpan="1"
                    colSpan="1"
                    aria-label="Horarios: Activar para ordenar la columna de manera ascendente"
                    
                  >
                    Editar{" "}
                   
                  </th>
                  <th
                    className="sorting"
                    role="columnheader"
                    tabIndex="0"
                    aria-controls="tablausuarios"
                    rowSpan="1"
                    colSpan="1"
                    aria-label="Horarios: Activar para ordenar la columna de manera ascendente"
                    
                  >
                    Eliminar{" "}
                   
                  </th>
                </tr>
              </thead>

              <tbody role="alert" aria-live="polite" aria-relevant="all">
                { usuarios && usuarios.map((usuario) => {
                  return (
                    <tr className="odd" key={usuario.id}>
                      <td className="  sorting_1">{usuario.nomUser}</td>
                      <td className=" ">{usuario.nomUser}</td>
                      <td className=" ">{usuario.nomUser}</td>
                      <td className=" ">{usuario.nomUser}</td>
                      <td>
                        <button className=" btn btn-warning">Editar</button>
                        </td>
                      <td>
                        <button className="btn btn-danger">Eliminar</button>
                    </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
    </div>
  )
}

export default TablaUsuarios