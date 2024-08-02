import React from 'react'
import { useForm } from '../hooks'

export const AgregarUsuario = ({ handleToggleUser }) => {

    const { valuesForm, onInputChange, onResetForm } = useForm({
        username: '',
        contraseña: '',
        nombre: '',
        apellido: '',
        dni: '',
        direccion: '',
        telefono: '',
        funcion: '',
        rol: '1'
    })
    
      
      const handleCancelar =() => {
        handleToggleUser()
        onResetForm()
      }

      const handleOnSubmit =(e) => {

      //Funcion para agregar
      // 

        e.preventDefault()   
        onResetForm()    
        handleToggleUser()
      }


  return (
    <div>
        <div className='bg-light'>
            <h3>Datos del usuario</h3>
            <form action="" onSubmit={ handleOnSubmit }>
              <label htmlFor="">Usuario</label>
              <input 
              type="text" 
              placeholder='username' 
              name='username' 
              onChange={ onInputChange }
              value={valuesForm.username}
              />

              <label htmlFor="">Contraseña</label>
              <input 
              type="text" 
              placeholder='contraseña' 
              name='contraseña' 
              onChange={ onInputChange }
              value={valuesForm.contraseña}
              />

              <label htmlFor="">Nombre</label>
              <input 
              type="text" 
              placeholder='nombre' 
              name='nombre' 
              onChange={ onInputChange }
              value={valuesForm.nombre}
              />

              <label htmlFor="">Apellido</label>
              <input 
              type="text" 
              placeholder='apellido' 
              name='apellido' 
              onChange={ onInputChange }
              value={valuesForm.apellido}
              />

              <label htmlFor="">Documento</label>
              <input 
              type="text" 
              placeholder='dni' 
              name='dni' 
              onChange={ onInputChange }
              value={valuesForm.dni}
              />

              <label htmlFor="">Direccion</label>
              <input 
              type="text" 
              placeholder='direccion' 
              name='direccion' 
              onChange={ onInputChange }
              value={valuesForm.direccion}
              />

              <label htmlFor="">Telefono</label>
              <input 
              type="text" 
              placeholder='telefono' 
              name='telefono' 
              onChange={ onInputChange }
              value={valuesForm.telefono}
              />

              <label htmlFor="">Funcion</label>
              <input 
              type="text" 
              placeholder='funcion' 
              name='funcion' 
              onChange={ onInputChange }
              value={valuesForm.funcion}
              />

              <label htmlFor="">Rol</label>
              <select name="rol" id="" placeholder="rol"  onChange={ onInputChange } value={valuesForm.rol}>
                <option value="1" >Admin</option>
                <option value="2" >Agente</option>
              </select>

              <br />
              <button type="button" onClick={ handleCancelar }>Cancelar</button>
              <button type="submit">Agregar</button>
            </form>
          </div>
    </div>
  )
}
