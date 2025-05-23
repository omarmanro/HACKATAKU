import React from 'react'
import './css/TopBar.css'
import Menu from './Menu'

const TopBar = () => (
  <header className="topbar">
    <h2>My App</h2>
    <Menu textColor='#fff' />
  </header>
)

export default TopBar
