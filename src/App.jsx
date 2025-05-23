import { useState } from 'react'
<<<<<<< HEAD
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TopBar from './components/TopBar'
import Menu from './components/Menu'
import ImageComponent from './components/ImageComponent'
import FormularioEvento from './features/events/formularioEvento'
=======
import { Routes, Route } from 'react-router-dom';
import './App.css'
import TopBar from './components/TopBar'
import Formulario from './components/formulario';
import Home from './screens/Home';

>>>>>>> 3fc0a743df8bde74a968eba0e1a599ea3e50a833

function App() {
  const [count, setCount] = useState(0)

  return (
<<<<<<< HEAD
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
=======
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
>>>>>>> 3fc0a743df8bde74a968eba0e1a599ea3e50a833
