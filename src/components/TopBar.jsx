import React from 'react'
import './css/TopBar.css'
import Menu from './Menu'

const TopBar = () => (
  <header className="topbar">
    <div className="topbar-content">
      <div className="logo-container">
        <h2>EnchulaEvento</h2>
      </div>
      <Menu textColor='#fff' />
    </div>
  </header>
)

export default TopBar
