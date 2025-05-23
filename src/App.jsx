import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import './App.css'
import TopBar from './components/TopBar'
import ImageComponent from './components/ImageComponent'
import FormularioEvento from './features/events/FormularioEvento'
import Dashboard from './features/events/Dashboard'
import ResourceManager from './screens/ResourceManager'
import reactLogo from './assets/react.svg'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TopBar />
      <main>
        <Routes>
          <Route path="/" element={<ImageComponent src={reactLogo} alt="React logo" />} />
          <Route path="/eventos" element={<FormularioEvento />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/resources" element={<ResourceManager />} />
        </Routes>
      </main>
    </>
  )
}

export default App
