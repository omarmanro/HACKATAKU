import React from 'react'
import './css/Menu.css'

const Menu = ({ textColor = '#333' }) => (
  <nav className="menu" style={{ color: textColor }}>
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </nav>
)

export default Menu
