import React from 'react'
import './css/TopBar.css'
import Menu from './Menu'

const TopBar = ({ isAdmin, onLogout }) => (
  <header className="topbar">
    <div className="topbar-content">
      <div className="logo-container">
        <h2>EnchulaEvento</h2>
      </div>
      <Menu textColor='#fff' isAdmin={isAdmin} />
      {isAdmin && (
        <button className="logout-btn" onClick={onLogout} style={{marginLeft: 16}}>Cerrar sesión</button>
      )}
    </div>
  </header>
)

export default TopBar
