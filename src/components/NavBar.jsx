import React from 'react'
import Logo from '../assets/logo.png'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-warning">
  <div className="container">
    <a className="navbar-brand" to="/">
      <img src={Logo} alt="mamma-mia" />
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <NavLink className="nav-link" aria-current="page" to="/">Menu</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="carrito">Cart</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/:id">Details</NavLink>
        </li>
       
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default NavBar