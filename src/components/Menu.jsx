import React from 'react'
import './css/Menu.css'
import { Link } from 'react-router-dom'

const Menu = ({ textColor = '#333' }) => (
  <nav className="menu" style={{ color: textColor }}>
    <ul>
      <li><Link to ="/">Inicio</Link></li>      <li><Link to ="/formulario">Formulario</Link></li>
      <li><Link to ="/eventos">Eventos</Link></li>
      <li><Link to ="/dashboard">Dashboard</Link></li>
      <li><Link to ="/inventory">Inventory</Link></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </nav>
)

export default Menu
