import { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css'
import TopBar from './components/TopBar'
import Formulario from './components/formulario'
import FormularioEventos from './features/events/FormularioEvento'
import Home from './screens/Home'
import Login from './components/Login'
import Dashboard from './features/events/Dashboard'
import Inventory from './features/events/Inventory'


function App() {
  const [isAdmin, setIsAdmin] = useState(() => {
    // Persistencia local simple
    return localStorage.getItem('isAdmin') === 'true';
  });

  const handleLogin = () => {
    setIsAdmin(true);
    localStorage.setItem('isAdmin', 'true');
  };
  const handleLogout = () => {
    setIsAdmin(false);
    localStorage.removeItem('isAdmin');
  };

  return (
    <>
      <TopBar isAdmin={isAdmin} onLogout={handleLogout} />
      <main>
        <div className="content-container">
          <Routes>
            <Route path="/" element={<Home />} />
            {!isAdmin && <Route path="/formulario" element={<Formulario />} />}
            {!isAdmin && <Route path="/admin" element={<Login onLogin={handleLogin} />} />}
            {isAdmin && <Route path="/dashboard" element={<Dashboard />} />}
            {isAdmin && <Route path="/inventory" element={<Inventory />} />}
            {isAdmin && <Route path="/formularioEventos" element={<FormularioEventos />} />}
            {/* Redirección para rutas no encontradas */}
            {/* Redirección para rutas protegidas */}
            {/* Si no es admin y va a dashboard/inventory, redirige a home */}
            {!isAdmin && <Route path="/dashboard" element={<Navigate to="/" replace />} />}
            {!isAdmin && <Route path="/inventory" element={<Navigate to="/" replace />} />}
          </Routes>
        </div>
      </main>
    </>
  );
}

export default App;
