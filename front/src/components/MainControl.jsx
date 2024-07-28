import React from 'react'
import { Button } from 'react-bootstrap';
import TablaUsuarios from './TablaUsuarios';

export const MainControl = () => {
  return (
    <div className=''>
        <div className='container row'>
            <div className='col-xl-4 pt-3'>
                <div>
                    <h3 style={{color:'white'}}>Panel de control</h3>
                </div>
                <div className='col'>
                    <Button>Usuarios</Button>
                </div>
                <div className='col'>
                    <Button>Documentos</Button>
                </div>
            </div>
            <div className='col'>

                <TablaUsuarios/>

            </div>

        </div>

    </div>
  )
}
