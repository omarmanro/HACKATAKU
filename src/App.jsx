import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import './App.css'
import TopBar from './components/TopBar'
import FormularioEvento from './features/events/FormularioEvento'
import reactLogo from './assets/react.svg'
import Dashboard from './features/events/Dashboard'
import ResourceManager from './screens/ResourceManager'
import Home from './screens/Home'
import Formulario from './components/Formulario'
import Inventory from './screens/Inventory'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TopBar />      <main>
        <div className="content-container">          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/eventos" element={<FormularioEvento />} />
            <Route path="/formulario" element={<Formulario />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/resources" element={<ResourceManager />} />
            <Route path="/inventory" element={<Inventory />} />
          </Routes>
        </div>
      </main>
    </>
  )
}

export default App
