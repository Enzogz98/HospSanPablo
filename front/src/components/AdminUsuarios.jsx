
import { useState } from 'react'

import { AgregarUsuario } from './AgregarUsuario';
import { TablaUsuarios } from './TablaUsuarios';


export const AdminUsuarios = () => {

  const [toggleUser, setToggleUser] = useState(false);
  
  const handleToggleUser = () =>{
    setToggleUser(false)
  }

  return (
    <div className='pt-3'>
      <div className='pb-3'>
        <h3 style={{ color: "white" }}>Usuarios</h3>

        <input type="text" placeholder='buscar usuario' />
        <button className='btn btn-primary'>Buscar</button>
        <button className='btn btn-success' onClick={() => setToggleUser(true)}>Agregar</button>
      </div>

      {
        toggleUser
          ?
            <AgregarUsuario handleToggleUser={ handleToggleUser }/>
            :     
            <TablaUsuarios />
      }
    </div>
  )
}

export default AdminUsuarios