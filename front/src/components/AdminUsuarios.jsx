
import { useState } from 'react'

import { AgregarUsuario } from './AgregarUsuario';
import { TablaUsuarios } from './TablaUsuarios';
import { EditarAgente } from './EditarAgente';


export const AdminUsuarios = () => {

  const [toggleUser, setToggleUser] = useState(false);
  const [toggleEditar, setToggleEditar] = useState(false);
  const [idUsuarioEditar, setIdUsuarioEditar] = useState(false);

  
  const handleToggleUser = () =>{
    setToggleUser(false)
  }


  const handleToggleEditar = () =>{
    setToggleUser(true)
    setToggleEditar(false)
  }

  return (
    <div className='pt-3'>
      <div className='pb-3'>
        <h3 style={{ color: "white" }}>Usuarios</h3>

        <input type="text" placeholder='buscar usuario' />
        <button className='btn btn-primary'>Buscar</button>
        <button className='btn btn-success' onClick={() =>{setToggleUser(true), setToggleEditar(true)} }>Agregar</button>
      </div>

      {
        toggleUser
          ?
          <div className='pb-3'>
            {
            toggleEditar ?
            <AgregarUsuario handleToggleUser={ handleToggleUser }/>
            :
            <EditarAgente handleToggleEditar={ handleToggleEditar } handleToggleUser={ handleToggleUser } />
            }
          </div>

            :     
            <TablaUsuarios handleToggleEditar={ handleToggleEditar }/>
      }
    </div>
  )
}

export default AdminUsuarios