import React from 'react'
import './css/Menu.css'
<<<<<<< HEAD
import { Link } from 'react-router-dom'

const Menu = ({ textColor = '#333' }) => (
  <nav className="menu" style={{ color: textColor }}>
    <ul>
      <li><Link to ="/">Inicio</Link></li>
      <li><Link to ="/events">Formulario</Link></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </nav>
)
=======
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <nav className="menu">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/formulario">Formulario</Link></li>
      </ul>
    </nav>
  );
};
>>>>>>> 3fc0a743df8bde74a968eba0e1a599ea3e50a833

export default Menu
