import { Button } from 'react-bootstrap';
import TablaUsuarios from './TablaUsuarios';
import { useState } from 'react';
import Documentos from './Documentos';


export const MainControl = () => {
    
    const [mostrarTabla, setMostrarTabla] = useState(false)

    
    


  return (
    <div className=''>
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

                {mostrarTabla ? <Documentos/> : <TablaUsuarios/> }
                
            </div>

        </div>

    </div>
  )
}
