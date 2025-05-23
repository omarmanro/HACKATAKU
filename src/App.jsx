import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TopBar from './components/TopBar'
import Menu from './components/Menu'
import ImageComponent from './components/ImageComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TopBar />
      <main>
        <ImageComponent src={reactLogo} alt="React logo" />
      </main>
    </>
  )
}

export default App
