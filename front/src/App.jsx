import Home from './pages/Home'
import { Routes, Route } from 'react-router'
import { BrowserRouter } from 'react-router-dom';
import CartillaMedica from './pages/CartillaMedica';

function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/CartillaMedica" element={<CartillaMedica />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
