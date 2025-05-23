import React from 'react'
import './css/Menu.css'
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

export default Menu
