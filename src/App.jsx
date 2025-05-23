import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TopBar from './components/TopBar'
import Menu from './components/Menu'
import ImageComponent from './components/ImageComponent'
import FormularioEvento from './features/events/formularioEvento'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <TopBar />
      <Menu />
      <main>
        <Routes>
          <Route path="/" element={<ImageComponent src={reactLogo} alt="React logo" />} />
          <Route path="/events" element={<FormularioEvento />} />
        </Routes>
      </main>
    </Router>
  )
}

export default App