import axios from 'axios';
import { useEffect, useState } from 'react'


const TablaUsuarios = () => {

    const [usuarios, setUsuarios] = useState();
    const [toggleUser, setToggleUser] = useState(false);

    
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
        <button onClick={() => setToggleUser(true)}>Agregar</button>
        </div>

        {
              toggleUser 
                          ?
                          <div className='bg-light'>
                              <h3>Datos del usuario</h3>
                              <form action="">
                                <label htmlFor="">Usuario</label>
                                <input type="text" placeholder='username'/>

                                <label htmlFor="">Contraseña</label>
                                <input type="text" placeholder='contraseña'/>

                                <label htmlFor="">Nombre</label>
                                <input type="text" placeholder='nombre'/>
                                
                                <label htmlFor="">Apellido</label>
                                <input type="text" placeholder='apellido'/>

                                <label htmlFor="">Documento</label>
                                <input type="text" placeholder='dni'/>
                                
                                <label htmlFor="">Direccion</label>
                                <input type="text" placeholder='direccion'/>
                                
                                <label htmlFor="">Telefono</label>
                                <input type="text" placeholder='telefono'/>
                                
                                <label htmlFor="">Funcion</label>
                                <input type="text" placeholder='funcion'/>

                                <label htmlFor="">Rol</label>
                                <select name="" id="" placeholder="rol">
                                <option value="1">Admin</option>
                                <option value="2">Agente</option>
                                </select>

                                <br />
                              <button onClick={() => setToggleUser(false)}>Cancelar</button>
                              <button onClick={() => setAgregarUser(false)}>Agregar</button>
                              </form>
                          </div>
                      :

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
                { 
                  usuarios && usuarios.map((usuario) => {
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
          }
    </div>
  )
}

export default TablaUsuarios