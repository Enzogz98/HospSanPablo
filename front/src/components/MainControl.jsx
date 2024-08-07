import { Button } from 'react-bootstrap';
import AdminUsuarios from './AdminUsuarios';
import { useContext, useState } from 'react';
import { UserContext } from '../context/UserContext';
import Documentos from './Documentos';



export const MainControl = () => {
    
    const [mostrarTabla, setMostrarTabla] = useState(false)

    
  const { userNombre } = useContext(UserContext)

  console.log(userNombre)



  return (
    <div className=''>
        <h1 style={{color:'white'}}>Bienvenido {userNombre}</h1>
        <div className='container row'>
            <div className='col-xl-4 pt-3'>
                <div>
                    <h3 style={{color:'white'}}>Panel de control</h3>
                </div>
                <div className='col'>
                    <Button onClick={()=>setMostrarTabla(false)}>Usuarios</Button>
                </div>
                <div className='col'>
                    <Button onClick={()=>setMostrarTabla(true)}>Documentos</Button>
                </div>
            </div>

            <div className='col'>

                {
                    mostrarTabla
                    ? <Documentos/> 
                    : <AdminUsuarios/>
                }
                
            </div>

        </div>

    </div>
  )
}
