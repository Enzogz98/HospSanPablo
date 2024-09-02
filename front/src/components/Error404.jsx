import React from 'react'
import '../Css/error404.css'
import error from "../assets/404.png"
import {Header} from "../components/Header"
import {Footer} from "../components/Footer"

export const Error404 = () => {
  return (
    <>

    <div className='contenedor-error'>
      <img src={error} className='img-error' />
    </div>
    <Footer/>
    </>
  )
}
