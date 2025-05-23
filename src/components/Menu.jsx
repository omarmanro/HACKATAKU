import React from 'react'
import './css/Menu.css'
import { Link } from 'react-router-dom'

const Menu = ({ textColor = '#333', isAdmin }) => (
  <nav className="menu" style={{ color: textColor }}>
    <ul>
      <li><Link to ="/">Inicio</Link></li>
      {!isAdmin && <li><Link to ="/formulario">Formulario</Link></li>}
      {isAdmin && <li><Link to ="/formularioEventos">Eventos</Link></li>}
      {isAdmin && <li><Link to ="/dashboard">Dashboard</Link></li>}
      {isAdmin && <li><Link to ="/inventory">Inventory</Link></li>}
    </ul>
  </nav>
)

export default Menu
