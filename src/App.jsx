import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import './App.css'
import TopBar from './components/TopBar'
import ImageComponent from './components/ImageComponent'
import FormularioEvento from './features/events/FormularioEvento'
import Formulario from './components/formulario';
import reactLogo from './assets/react.svg'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TopBar />
      <main>
        <Routes>
          <Route path="/" element={<ImageComponent src={reactLogo} alt="React logo" />} />
          <Route path="/formulario" element={<Formulario/>} />
        </Routes>
      </main>
    </>
  )
}

export default App
