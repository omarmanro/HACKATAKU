import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import './App.css'
import TopBar from './components/TopBar'
import Formulario from './components/formulario';
import Home from './screens/Home';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TopBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/formulario" element={<Formulario />} />
      </Routes>
    </>
  )
}

export default App
