import Home from './pages/Home'
import { Routes, Route } from 'react-router'
import { BrowserRouter } from 'react-router-dom';
import CartillaMedica from './pages/CartillaMedica';
import Contacto from './pages/Contacto';
import Nosotros from './pages/Nosotros';

function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/CartillaMedica" element={<CartillaMedica />} />
          <Route path="/contacto" element={<Contacto/>}/>
          <Route path="/quienes-somos" element={<Nosotros/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
