import Home from './pages/Home'
import { Routes, Route } from 'react-router'
import { BrowserRouter } from 'react-router-dom';
import Historia from './pages/Historia';
import CartillaMedica from './pages/CartillaMedica';
import Contacto from './pages/Contacto';
import Nosotros from './pages/Nosotros';
import HoraAtencion from './pages/HoraAtencion';
import HorarioAdm from './pages/HorarioAdm';

function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Historia" element={<Historia/>} />
          <Route path="/CartillaMedica" element={<CartillaMedica />} />
          <Route path="/contacto" element={<Contacto/>}/>
          <Route path="/quienes-somos" element={<Nosotros/>}/>
          <Route path="/HoraAtencion" element={<HoraAtencion/>}/>
          <Route path="/HorarioAdm" element={<HorarioAdm/>}/>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
