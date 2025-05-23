import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
<<<<<<< HEAD
=======
import { BrowserRouter } from 'react-router-dom';
>>>>>>> 3fc0a743df8bde74a968eba0e1a599ea3e50a833
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
<<<<<<< HEAD
    <App />
=======
    <BrowserRouter>
      <App />
    </BrowserRouter>
>>>>>>> 3fc0a743df8bde74a968eba0e1a599ea3e50a833
  </StrictMode>,
)
